import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { getBlob } from './db.js';
import { syncData } from './syncCore.js';

const app = express();
const PORT = process.env.PORT || 3001;

// app.use(cors());
const allowedOrigins = [
  'http://localhost:3001',
  process.env.APP_DOMAIN_URL_DEV,
  process.env.APP_DOMAIN_URL_1,
  process.env.APP_DOMAIN_URL_2
];

app.use(cors({
  origin: (origin, cb) => {
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      console.warn('❌ Blocked by CORS:', origin);
      cb(new Error('Not allowed by CORS'));
    }
  },
}));
// app.options('*', cors());

app.use(express.json());

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

app.post('/v1/sync', async (req, res) => {
  try {
    await syncData();
    res.status(200).json({ status: 'success', message: 'Sync complete.' });
  } catch (err) {
    console.error('Sync failed:', err);
    res.status(500).json({ status: 'error', message: 'Sync failed.', error: err.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
})

app.listen(PORT, () => {
  console.log(`🖥️. Server listening on port ${PORT}...`);
});