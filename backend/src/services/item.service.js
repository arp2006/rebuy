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

export async function getItem(id) {
  const res = await db.query(
    `
    SELECT i.*, ud.name AS seller_name
    FROM items i
    JOIN user_data ud ON i.seller_id = ud.id
    WHERE i.id = $1;
    `,
    [id]
  );
  if (!res.rows.length) throw { status: 404, message: "Item not found" };
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
