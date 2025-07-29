import "dotenv/config.js";
import express from 'express';
import cors from 'cors';
import { getBlob } from './db.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());

const handleBlobRequest = async (req, res, key) => {
  try {
    const data = await getBlob(key);
    res.json(data);
  } catch (error) {
    console.error(`Error retrieving blob for key ${key}:`, error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the EPL API' });
})

app.get("/v1/seasons", (req, res) => handleBlobRequest(req, res, "seasons"));
app.get("/v1/standings", (req, res) => handleBlobRequest(req, res, "standings"));
app.get("/v1/top-players", (req, res) => handleBlobRequest(req, res, "topPlayers"));
app.get("/v1/rounds", (req, res) => handleBlobRequest(req, res, "rounds"));
app.get("/v1/fixtures", (req, res) => handleBlobRequest(req, res, "fixtures"));
app.get("/v1/featured-players", (req, res) => handleBlobRequest(req, res, "featuredPlayers"));

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
})

app.listen(PORT, () => {
  console.log(`🖥️. Server listening on port ${PORT}...`);
});