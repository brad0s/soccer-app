import { syncData } from './syncCore.js';

syncData().catch(err => {
  console.error('Sync failed:', err);
  process.exit(1);
});