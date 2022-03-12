import type { VercelRequest, VercelResponse } from "@vercel/node";
import { config } from "dotenv";
import { createConnection, RowDataPacket } from "mysql2/promise";

interface IBlog extends RowDataPacket {
  count: number;
}

export default async (request: VercelRequest, response: VercelResponse) => {
  config();
  const { page } = request.query;

  const connection = await createConnection(process.env.DATABASE_URL);

  const [rows] = await connection.query<IBlog[]>(
    "SELECT count from blog WHERE page = ?",
    [page]
  );

  const uppedCount = rows.length > 0 ? rows[0].count + 1 : 0;

  if (uppedCount > 0) {
    await connection.execute("UPDATE blog SET count = ? WHERE page = ?", [
      uppedCount,
      page,
    ]);
  } else {
    await connection.execute("INSERT INTO blog(page, count) VALUES (?, ?)", [
      page,
      uppedCount,
    ]);
  }

  connection.end();
  response.status(200).send(`Upped count: ${uppedCount}`);
};
