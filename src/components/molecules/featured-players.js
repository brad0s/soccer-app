import React, { useState, useEffect, useRef } from 'react'
import { LEAGUE_TOP_PLAYERS } from '../../context/data'
import { register } from 'swiper/element/bundle'

function FeaturedPlayers() {
  const [featuredPlayers, setFeaturedPlayers] = useState([])
  const swiperRef = useRef(null)

  useEffect(() => {
    const results = LEAGUE_TOP_PLAYERS.results.slice(0, 12)
    setFeaturedPlayers(results)
  }, [])

  useEffect(() => {
    register()
    const params = {
      slidesPerView: 2.3,
      spaceBetween: 16,
      mousewheel: true,
      breakpoints: {
        576: {
          slidesPerView: 2.3,
        },
        768: {
          slidesPerView: 3.3,
        },
      },
    }
    Object.assign(swiperRef.current, params)
    swiperRef.current.initialize()
  }, [])

  return (
    <div className="Featured-players">
      <div className="headline-card">
        <h2 className="h5">
          Featured <br />
          Players
        </h2>
      </div>
      <swiper-container
        init="false"
        ref={swiperRef}
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
