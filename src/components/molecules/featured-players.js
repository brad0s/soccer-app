import React, { useState, useEffect } from 'react'
import { LEAGUE_TOP_PLAYERS } from '../../context/data'

function FeaturedPlayers() {
  const [featuredPlayers, setFeaturedPlayers] = useState([])

  useEffect(() => {
    const results = LEAGUE_TOP_PLAYERS.results.slice(0, 12)
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
      <swiper-container
        slides-per-view={3.3}
        space-between={16}
        mousewheel={true}
        // mousewheel-force-to-axis={false}
      >
        {featuredPlayers &&
          featuredPlayers.map((player, idx) => {
            return (
              <swiper-slide
                key={idx}
                class="player-card"
              >
                <h2 className="h6 name">{player.player.name}</h2>
                <p className="rating">
                  Rating: <span>{player.rating.toFixed(1)}</span>
                </p>
                <p className="club">{player.team.name}</p>
              </swiper-slide>
            )
          })}
      </swiper-container>
    </div>
  )
}

export default FeaturedPlayers
