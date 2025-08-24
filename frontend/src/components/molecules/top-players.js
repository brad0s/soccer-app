import React, { useState, useEffect, useRef, useContext } from 'react'
import { register } from 'swiper/element/bundle'
import { LEAGUE_OVERALL_TOP_PLAYERS } from '../../context/data'
import { STATS_MAP, splitArray } from '../../utils/helper'
import { SoccerContext } from '../../context/context';

const TopPlayers = () => {
  const { topPlayers } = useContext(SoccerContext);
  const swiperRef = useRef(null)

  useEffect(() => {
    register()
  }, [])

  if (!topPlayers) {
    return <div className="Top-players">Loading...</div>
  }

  useEffect(() => {
    register()
    const params = {
      slidesPerView: 2.3,
      spaceBetween: 16,
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

  // const keys = Object.keys(topPlayers).map((key) => key)
  return (
    <div
      id="top-players"
      className="Top-players"
    >
      <h2 className="h5 headline">Top Players</h2>
      <swiper-container
        ref={swiperRef}
        slides-per-view="auto"
        space-between={16}
        mousewheel={true}
        scrollbar="true"
      >
        {Object.keys(topPlayers).map((key) => (
          <swiper-slide key={key}>
            <StatBox
              keyName={key}
              players={topPlayers[key]}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default TopPlayers

function StatBox({ keyName, players }) {
  const topTenPlayers = players.slice(0, 10)
  const topPlayer = topTenPlayers.shift()
  return (
    <div className="Stat-box">
      <div data-key={keyName} className="h6">{STATS_MAP[keyName]}</div>
      <div className="card">
        <TopPlayer
          player={topPlayer}
          keyName={keyName}
        />
        {topTenPlayers && topTenPlayers.length > 0 && (
          <div className="player-list">
            {topTenPlayers.map((player) => (
              <Player
                key={player.player.id}
                player={player}
                keyName={keyName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const TopPlayer = ({ player, keyName }) => {
  const decimalStats = ['expectedAssists', 'expectedGoals', 'goalsPrevented', 'rating', 'scoringFrequency', 'kilometersCovered', 'topSpeed']
  const shouldRound = decimalStats.includes(keyName)
  const name = player.player.name
  const [firstName, lastName] = name.split(' ')
  const stat = player.statistics[keyName]
  const team = player.team.name
  const primaryTeamColor = player.team.teamColors.primary
  const backgroundColor = primaryTeamColor
  const backgroundGradient = `linear-gradient(45deg, color-mix(in srgb, ${primaryTeamColor}, black), ${primaryTeamColor} 50%, color-mix(in srgb, ${primaryTeamColor}, white)`
  return (
    <div
      className="Top-player"
      style={{ backgroundImage: backgroundGradient, backgroundColor }}
    >
      <div className="row">
        <div className="name">
          <p className="firstname">{firstName}</p>
          {lastName && <p className="lastname">{lastName}</p>}
        </div>
        <p className="team">{team}</p>
      </div>
      {shouldRound ? (
        <p className="stat stat-round">{stat && Number(stat).toFixed(2)}</p>
      ) : (
        <p className="stat">{stat}</p>
      )}
    </div>
  )
}

const Player = ({ player, keyName }) => {
  const decimalStats = ['expectedAssists', 'expectedGoals', 'goalsPrevented', 'rating', 'scoringFrequency', 'kilometersCovered', 'topSpeed']
  const shouldRound = decimalStats.includes(keyName)
  const name = player.player.name
  const team = player.team.name
  const stat = player.statistics[keyName]
  return (
    <div className="Player-item">
      <div className="row">
        <p className="name">{name}</p>
        <p className="team">{team}</p>
      </div>
      {shouldRound ? (
        <p className="stat">{stat && Number(stat).toFixed(2)}</p>
      ) : (
        <p className="stat">{stat}</p>
      )}
    </div>
  )
}
