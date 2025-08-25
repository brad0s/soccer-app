import axios from 'axios';

const footballInstance = axios.create({
  baseURL: process.env.SOCCER_APP_URL,
  headers: {
    // 'Content-Type': 'application/json',
  }
});

export const getSeasons = async () => {
  const res = await footballInstance.get('/v1/seasons');
  return res.data;
}

export const getStandings = async () => {
  const res = await footballInstance.get('/v1/standings');
  return res.data;
}

export const getTopPlayers = async () => {
  const res = await footballInstance.get('/v1/top-players');
  return res.data;
}

export const getRounds = async () => {
  const res = await footballInstance.get('/v1/rounds');
  return res.data;
}

export const getFixtures = async () => {
  const res = await footballInstance.get('/v1/fixtures');
  return res.data;
}

export const getFeaturedPlayers = async () => {
  const res = await footballInstance.get('/v1/featured-players');
  return res.data;
}