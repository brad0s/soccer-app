import React from 'react'
import { leagueTopPlayers } from '../../context/data'

function FeaturedPlayers() {
  const featuredPlayers = leagueTopPlayers.results.slice(0, 3)
  return (
    <div className="Featured-players">
      <div className="headline-card">
        <h2 className="h5">
          Top <br />
          Players
        </h2>
      </div>
      {featuredPlayers.map((player, idx) => {
        return (
          <div
            key={idx}
            className="player-card"
          >
            <h2 className="h6 name">{player.player.name}</h2>
            <p className="club">{player.team.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FeaturedPlayers
