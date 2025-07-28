import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const blobTable = 'api_blobs';

export const getDB = async () => {
  return open({
    filename: './epl.db',
    driver: sqlite3.Database
  });
}

export const createBlobTable = async () => {
  const db = await getDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS ${blobTable} (
      key TEXT PRIMARY KEY,
      json TEXT NOT NULL,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export const saveBlob = async (key, data) => {
  if (!key || !data) {
    throw new Error('Key and data must be provided to save a blob');
  }
  const db = await getDB();
  await db.run(`INSERT OR REPLACE INTO ${blobTable} (key, json) VALUES (?, ?)`, [key, JSON.stringify(data)]);
}