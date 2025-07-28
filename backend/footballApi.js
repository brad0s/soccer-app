import axios from 'axios';
import "dotenv/config.js";

/**
 * Requests: 50 / Day
 * Rate Limit: 4 requests per second 
 */
const instance = axios.create({
  baseURL: 'https://footapi7.p.rapidapi.com',
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Host': 'footapi7.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.FOOTBALL_DATA_API_KEY,
  },
})

/**
 * get categories
 */
export const getCategories = async () => {
  const res = await instance.get('/api/tournaments/categories');
  return res.data;
}

/**
 * id: 1 - England
 * @param {*} id 
 * @returns 
 */
export const getTournamentCategories = async (categoryId = 1) => {
  if (!categoryId) {
    throw new Error('No category ID provided');
  }
  const res = await instance.get(`/api/tournaments/categories/${categoryId}`);
  return res.data;
}

/**
 * get tournament seasons
 * Premier league id: 17
 */
export const getTournamentSeasons = async (tournamentId) => {
  if (!tournamentId) {
    throw new Error('No tournament ID provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/seasons`);
  return res.data;
}

/**
 * get tournament standings
 * seasonId: 76986
 */
export const getTournamentStandings = async (tournamentId, seasonId) => {
  if (!tournamentId || !seasonId) {
    throw new Error('No tournament or season ID provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/season/${seasonId}/standings/total`);
  return res.data;
}

/**
 * get top players
 */
export const getTopPlayers = async (tournamentId, seasonId) => {
  if (!tournamentId || !seasonId) {
    throw new Error('No tournament or season ID provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/season/${seasonId}/best-players`);
  return res.data;
}

/**
 * get rounds
 */
export const getRounds = async (tournamentId, seasonId) => {
  if (!tournamentId || !seasonId) {
    throw new Error('No tournament or season ID provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/season/${seasonId}/rounds`);
  return res.data;
}

/**
 * get current round matches
 */
export const getMatchesByRound = async (tournamentId, seasonId, round) => {
  if (!tournamentId || !seasonId || !round) {
    throw new Error('No tournament or season or round provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/season/${seasonId}/matches/round/${round}`);
  return res.data;
}

/**
 * get top players per game
 */
export const getTopPlayersPerGame = async (tournamentId, seasonId) => {
  if (!tournamentId || !seasonId) {
    throw new Error('No tournament or season ID provided');
  }
  const res = await instance.get(`/api/tournament/${tournamentId}/season/${seasonId}/best-players/per-game`);
  return res.data;
}
