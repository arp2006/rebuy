import db from "../config/db.js";

export async function categories() {
  const res = await db.query("SELECT name FROM categories;");
  return res.rows;
}

export async function listings(filters, userId) {
  const { location, minP, maxP, categories } = filters;

  let conditions = [];
  let params = [];

  if (userId) {
    params.push(userId);
    conditions.push(`seller_id != $${params.length}`);
  }
  if (location) {
    params.push(location);
    conditions.push(`location = $${params.length}`);
  }
  if (minP) {
    params.push(minP);
    conditions.push(`price >= $${params.length}`);
  }
  if (maxP) {
    params.push(maxP);
    conditions.push(`price <= $${params.length}`);
  }
  if (categories?.length) {
    params.push(categories);
    conditions.push(`category_id = ANY($${params.length})`);
  }

  const where = conditions.length ? `WHERE ${conditions.join(" AND ")}` : "";
  const res = await db.query(`SELECT * FROM items ${where};`, params);
  return res.rows;
}

export async function getItem(id, summary = false) {
  let query;

  if (summary) {
    query = `
      SELECT
        i.id,
        i.title,
        i.price
      FROM items i
      WHERE i.id = $1;
    `;
  } else {
    query = `
      SELECT
        i.*,
        ud.name AS seller_name
      FROM items i
      JOIN user_data ud ON i.seller_id = ud.id
      WHERE i.id = $1;
    `;
  }

  const res = await db.query(query, [id]);

  if (!res.rows.length) {
    throw { status: 404, message: "Item not found" };
  }

  return res.rows[0];
}

export async function deleteItem(id, userId) {
  const client = await db.connect();
  try {
    await client.query("BEGIN");

    const res = await client.query(
      "SELECT * FROM items WHERE id=$1 AND seller_id=$2 FOR UPDATE;",
      [id, userId]
    );

    if (!res.rows.length) {
      throw { status: 404, message: "Not authorized" };
    }

    const item = res.rows[0];

    await client.query(
      `
      INSERT INTO archive
      (id,title,description,price,location,category_id,seller_id,created_at,images,removed_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,NOW());
      `,
      [
        item.id,
        item.title,
        item.description,
        item.price,
        item.location,
        item.category_id,
        item.seller_id,
        item.created_at,
        item.images,
      ]
    );

    await client.query("DELETE FROM items WHERE id=$1;", [id]);
    await client.query("COMMIT");
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

export async function search(filters, uid) {
  const { searchQuery, location, minP, maxP, categories } = filters;

  let qText = `SELECT * FROM items WHERE `;
  let qParams = [];

  if (uid) {
    qParams.push(uid);
    qText += `seller_id != $${qParams.length} AND `;
  }

  qParams.push(searchQuery);
  qText += `(title ILIKE '%' || $${qParams.length} || '%' 
             OR description ILIKE '%' || $${qParams.length} || '%') `;

  if (location) {
    qParams.push(location);
    qText += `AND location = $${qParams.length} `;
  }

  if (minP) {
    qParams.push(minP);
    qText += `AND price >= $${qParams.length} `;
  }

  if (maxP) {
    qParams.push(maxP);
    qText += `AND price <= $${qParams.length} `;
  }

  if (categories?.length) {
    qParams.push(categories);
    qText += `AND category_id = ANY($${qParams.length}) `;
  }

  qText += ";";

  const posts = await db.query(qText, qParams);
  return posts.rows;
}

export async function accountListings(uid) {
  const posts = await db.query('SELECT * FROM items WHERE seller_id = $1;', [uid]);
  return posts.rows;
}

export async function archive(uid) {
  const posts = await db.query('SELECT * FROM archive WHERE seller_id = $1;', [uid]);
  return posts.rows;
}

export async function showArchive(uid, id) {
  const posts = await db.query('SELECT * FROM archive WHERE id = $1 AND seller_id = $2;', [uid, id]);
  if (!posts.rows.length) throw { status: 404, message: "Item not found" };
  return posts.rows[0];
}

export async function editItem(id, uid) {
  const result = await db.query(
    `
    SELECT *
    FROM items
    WHERE id = $1 AND seller_id = $2;
    `,
    [id, uid]
  );
  if (result.rows.length === 0) {
    throw { status: 403, message: "Not authorized" };
  }
  return result.rows[0];
}

export async function updateItem(id, uid, newInfo) {
  const { title, description, price, location, category_id, images } = newInfo;
  const result = await db.query(
    `
    UPDATE items
    SET
      title       = COALESCE($1, title),
      description = COALESCE($2, description),
      price       = COALESCE($3, price),
      location    = COALESCE($4, location),
      category_id = COALESCE($5, category_id),
      images      = COALESCE($6, images)
    WHERE id = $7 AND seller_id = $8
    RETURNING id;
    `,
    [
      title,
      description,
      price,
      location,
      category_id,
      images,
      id,
      uid,
    ]
  );
  if (result.rowCount === 0) {
    throw { status: 403, message: "Not authorized or item not found" };
  }
  return result.rows[0];
}

export async function createItem(uid, data) {
  const { title, desc, price, location, category, imageUrls } = data;
  if (
    !title ||
    !desc ||
    !price ||
    !location ||
    !category ||
    !Array.isArray(imageUrls) ||
    imageUrls.length === 0
  ) {
    throw { status: 400, message: "Missing required fields or no images uploaded" };
  }
  const catRes = await db.query(
    "SELECT id FROM categories WHERE name ILIKE $1;",
    [category]
  );
  if (catRes.rows.length === 0) {
    throw { status: 400, message: "Category not found" };
  }
  const category_id = catRes.rows[0].id;
  await db.query(
    `
    INSERT INTO items
      (title, description, price, location, category_id, seller_id, images)
    VALUES
      ($1, $2, $3, $4, $5, $6, $7);
    `,
    [
      title,
      desc,
      price,
      location,
      category_id,
      uid,
      imageUrls,
    ]
  );
}