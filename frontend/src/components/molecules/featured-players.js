import React, { useState, useEffect, useRef, useContext } from 'react'
import { register } from 'swiper/element/bundle'
import { SoccerContext } from '../../context/context'

function FeaturedPlayers() {
  const { featuredPlayers } = useContext(SoccerContext);
  const swiperRef = useRef(null)

  useEffect(() => {
    register()
  }, [])

  useEffect(() => {
    const params = {
      slidesPerView: 'auto',
      spaceBetween: 16,
      mousewheel: true,
    }
    // Object.assign(swiperRef.current, params)
    // swiperRef.current.initialize()
  }, [])

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
      <swiper-container ref={swiperRef}>
        {featuredPlayers &&
          featuredPlayers.map((player, idx) => {
            return (
              <swiper-slide
                key={idx}
                class="player-card"
              >
                <h2 className="h6 name">{player.player.name}</h2>
                <p className="rating">
                  Rating: <span>{player.statistic}</span>
                </p>
                {/* <p className="club">{player.team.name}</p> */}
              </swiper-slide>
            )
          })}
      </swiper-container>
    </div>
  )
}

export default FeaturedPlayers
