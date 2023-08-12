import React, { useState, useEffect } from 'react'
import { leagueTopPlayers } from '../../context/data'

function FeaturedPlayers() {
  const [featuredPlayers, setFeaturedPlayers] = useState([])

  useEffect(() => {
    const results = leagueTopPlayers.results.slice(0, 3)
    setFeaturedPlayers(results)
  }, [])

  return (
    <div className="Featured-players">
      <div className="headline-card">
        <h2 className="h5">
          Top <br />
          Players
        </h2>
      </div>
      {featuredPlayers &&
        featuredPlayers.map((player, idx) => {
          return (
            <div
              key={idx}
              className="player-card"
            >
              <h2 className="h6 name">{player.player.name}</h2>
              <p className="rating">
                Rating: <span>{player.rating.toFixed(1)}</span>
              </p>
              <p className="club">{player.team.name}</p>
            </div>
          )
        })}
    </div>
  )
}

export default FeaturedPlayers
