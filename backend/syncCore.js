
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { getDB, createBlobTable, saveBlob } from './db.js';
import {
  getCategories,
  getTournamentCategories,
  getTournamentSeasons,
  getRounds,
  getMatchesByRound,
  getTournamentStandings,
  getTopPlayers,
  getTopPlayersPerGame
} from './footballApi.js';

const tournamentId = 17;
// CURRENT SEASON ID: 76986
let currentSeasonId = null;
let currentRound = null;

// seasons
const syncSeasons = async () => {
  console.log('Syncing seasons...');
  try {
    const data = await getTournamentSeasons(tournamentId);
    if (!data || !data.seasons || !data.seasons.length || !data.seasons[0].id) {
      throw new Error('Could not get current season ID.');
    }
    currentSeasonId = data.seasons[0].id;
    await saveBlob('seasons', data);
    console.log('Seasons synced successfully.');
  } catch (error) {
    console.error('Error syncing seasons:', error);
  }
}

// standings
const syncStandings = async () => {
  console.log('Syncing standings...');
  try {
    const data = await getTournamentStandings(tournamentId, currentSeasonId);
    if (!data) {
      throw new Error('Failed to fetch standings.');
    }
    await saveBlob('standings', data);
    console.log('Standings synced successfully.');
  } catch (error) {
    console.error('Error syncing standings:', error);
  }
}

// top players
const syncTopPlayers = async () => {
  console.log('Syncing top players...');
  try {
    const data = await getTopPlayers(tournamentId, currentSeasonId);

    if (!data || !data.topPlayers) {
      throw new Error('No top players found.');
    }
    await saveBlob('topPlayers', data);
    console.log('Top players synced successfully.');
  } catch (error) {
    console.error('Error syncing top players:', error);
  }
}

// rounds
const syncRounds = async () => {
  console.log('Syncing rounds...');
  try {
    const data = await getRounds(tournamentId, currentSeasonId);
    if (!data || !data.currentRound || !data.currentRound.round) {
      console.error('Error: Could not get current round.');
    }
    currentRound = data.currentRound.round || null;
    await saveBlob('rounds', data);
    console.log('Rounds synced successfully.');
  } catch (error) {
    console.error('Error syncing rounds:', error);
  }
}

// fixtures
const syncFixtures = async () => {
  console.log('Syncing fixtures...');
  try {
    const data = await getMatchesByRound(tournamentId, currentSeasonId, currentRound);
    if (!data) {
      throw new Error('Failed to fetch fixtures.');
    }
    await saveBlob('fixtures', data);
    console.log('Fixtures synced successfully.');
  } catch (error) {
    console.error('Error syncing fixtures:', error);
  }
}

// featured players of the week
const syncFeaturedPlayers = async () => {
  console.log('Syncing featured players...');
  try {
    const data = await getTopPlayersPerGame(tournamentId, currentSeasonId);
    if (!data || !data.topPlayers || !data.topPlayers.rating) {
      throw new Error('No featured players found.');
    }
    const featuredPlayers = data.topPlayers.rating;
    await saveBlob('featuredPlayers', featuredPlayers);
    console.log('Featured players synced successfully.');
  } catch (error) {
    console.error('Error syncing featured players:', error);
  }
}

/**************************
 * sync data to db
 */
// async function syncData() {
//   console.log('🔄 Syncing Started...');
//   await createBlobTable(); // ensure table exists
//   await syncSeasons();
//   await syncStandings();
//   await new Promise(resolve => setTimeout(resolve, 1000)) // sleep to avoid rate limiting

//   await syncTopPlayers();
//   await syncRounds();
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   await syncFixtures();
//   await syncFeaturedPlayers();
//   console.log('✅ Sync complete!');
// }

// syncData().catch(err => {
//   console.error('Sync failed:', err);
//   process.exit(1);
// });

// export const syncSoccerData = async () => {
//   console.log('🔄 Syncing Started...');
//   await createBlobTable(); // ensure table exists
//   await syncSeasons();
//   await syncStandings();
//   await new Promise(resolve => setTimeout(resolve, 1000)) // sleep to avoid rate limiting

//   await syncTopPlayers();
//   await syncRounds();
//   await new Promise(resolve => setTimeout(resolve, 1000))

//   await syncFixtures();
//   await syncFeaturedPlayers();
//   console.log('✅ Sync complete!');
// }

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

export async function syncData() {
  console.log('🔄 Syncing Started...');
  await createBlobTable();

  await syncSeasons();
  await syncStandings();
  await sleep(1000);

  await syncTopPlayers();
  await syncRounds();
  await sleep(1000);

  await syncFixtures();
  await syncFeaturedPlayers();

  console.log('✅ Sync complete!');
}