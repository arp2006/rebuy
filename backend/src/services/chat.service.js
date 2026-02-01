import db from "../config/db.js";

export async function getChats(userId, type) {
  let whereClause = "";
  let userJoin = "";

  if (type === "buying") {
    whereClause = "c.buyer_id = $1";
    userJoin = "JOIN user_data u ON u.id = c.seller_id";
  } else {
    whereClause = "c.seller_id = $1";
    userJoin = "JOIN user_data u ON u.id = c.buyer_id";
  }
  const query = `
    SELECT
      c.id,
      u.name,
      c.updated_at
    FROM conversations c
    ${userJoin}
    WHERE ${whereClause}
    ORDER BY c.updated_at DESC;
  `;
  const { rows } = await db.query(query, [userId]);
  return rows;
}

export async function getMessages(convId, userId) {
  convId = Number(convId);
  userId = Number(userId);

  const convCheck = `
    SELECT 1
    FROM conversations
    WHERE id = $1
      AND (buyer_id = $2 OR seller_id = $2)
  `;

  const convRes = await db.query(convCheck, [convId, userId]);

  if (convRes.rowCount === 0) {
    throw new Error("FORBIDDEN");
  }

  const query = `
    SELECT id, sender_id, msg, created_at, read_at
    FROM messages
    WHERE conv_id = $1
    ORDER BY created_at ASC
  `;

  const { rows } = await db.query(query, [convId]);
  return rows;
}
