import React, { useState, useEffect, useRef, useContext } from 'react'
import { SoccerContext } from '../../context/context'

function FeaturedPlayers() {
  const { featuredPlayers } = useContext(SoccerContext);

  if (!featuredPlayers) {
    return <div className="Featured-players">Loading...</div>
  }

  return (
    <div
      id="featured-players"
      className="Featured-players"
    >
      <div className="headline-card">
        <h2 className="h5">
          Featured <br />
          Players
        </h2>
      </div>
      <div className="players-list">
        {featuredPlayers &&
          featuredPlayers.map((player, idx) => {
            return (
              <div
                key={idx}
                className="player-card"
              >
                <h2 className="h6 name">{player.player.name}</h2>
                <p className="rating">
                  Rating: <span>{player.statistic}</span>
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default FeaturedPlayers
