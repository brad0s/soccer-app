import express from 'express';
import cors from 'cors';
import { getDB } from './db.js';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/v1/seasons', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['seasons']);
  res.json(JSON.parse(row.json));
});

app.get('/v1/standings', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['standings']);
  res.json(JSON.parse(row.json));
});

app.get('/v1/top-players', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['topPlayers']);
  res.json(JSON.parse(row.json));
});

app.get('/v1/rounds', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['rounds']);
  res.json(JSON.parse(row.json));
});

app.get('/v1/fixtures', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['fixtures']);
  res.json(JSON.parse(row.json));
});

app.get('/v1/featured-players', async (req, res) => {
  const db = await getDB();
  const row = await db.get(`SELECT json FROM api_blobs WHERE key = ?`, ['featuredPlayers']);
  res.json(JSON.parse(row.json));
});

app.listen(PORT, () => {
  console.log(`🖥️. Server listening on port ${PORT}...`);
});