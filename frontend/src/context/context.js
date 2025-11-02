import React, { createContext, useState, useEffect } from 'react'
import { getCurrentSeason, getTournamentId } from './foot-api'
import { getTopPlayers, getStandings, getFixtures, getFeaturedPlayers } from '../apis/footballApi';

export const SoccerContext = createContext()

export const SoccerContextProvider = ({ children }) => {
  const [tournamentId, setTournamentId] = useState(null)
  const [currentSeasonId, setCurrentSeasonId] = useState(null)
  const [topPlayers, setTopPlayers] = useState({});
  const [standings, setStandings] = useState({});
  const [fixtures, setFixtures] = useState(null);
  const [featuredPlayers, setFeaturedPlayers] = useState(null);

  const contextValue = {
    tournamentId,
    currentSeasonId,
    topPlayers,
    standings,
    fixtures,
    featuredPlayers,
  }

  useEffect(() => {
    const init = async () => {
      const _tournamentId = getTournamentId()
      setTournamentId(_tournamentId)
      const _currentSeasonId = getCurrentSeason()
      setCurrentSeasonId(_currentSeasonId)
      const _topPlayers = await getTopPlayers();
      setTopPlayers(_topPlayers?.topPlayers ?? {});
      const _standings = await getStandings();
      // setStandings(_standings?.standings[0]?.rows);
      const standingsRows =
        Array.isArray(_standings?.standings) && _standings.standings.length > 0
          ? _standings.standings[0].rows
          : [];
      setStandings(standingsRows);
      const _fixtures = await getFixtures();
      setFixtures(_fixtures?.events ?? []);
      const _featuredPlayers = await getFeaturedPlayers();
      setFeaturedPlayers(_featuredPlayers ?? []);
    }
    init()
  }, [])

  return (
    <SoccerContext.Provider value={contextValue}>
      {children}
    </SoccerContext.Provider>
  )
}

export default SoccerContext
