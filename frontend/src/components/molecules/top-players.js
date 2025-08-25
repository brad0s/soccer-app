import React, { useState, useEffect, useRef, useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { STATS_HEADLINE_MAP, STATS_DECIMAL_CATEGORIES, STATS_STAT_KEY_MAP } from '../../utils/helper'
import { SoccerContext } from '../../context/context';

const TopPlayers = () => {
  const { topPlayers } = useContext(SoccerContext);

  if (!topPlayers) {
    return <div className="Top-players">Loading...</div>
  }

  return (
    <div
      id="top-players"
      className="Top-players"
    >
      <h2 className="h5 headline">Top Players</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        spaceBetween={16}
      >
        {Object.keys(topPlayers).map((key) => (
          <SwiperSlide key={key}>
            <StatBox
              keyName={key}
              players={topPlayers[key]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TopPlayers

function StatBox({ keyName, players }) {
  const topTenPlayers = players.slice(0, 10)
  const topPlayer = topTenPlayers.shift()
  return (
    <div className="Stat-box">
      <div data-key={keyName} className="h6">{STATS_HEADLINE_MAP[keyName]}</div>
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
  const shouldRound = STATS_DECIMAL_CATEGORIES.includes(keyName)
  const name = player.player.name
  const [firstName, lastName] = name.split(' ')
  // const stat = player.statistics[keyName]
  let stat = player.statistics[STATS_STAT_KEY_MAP[keyName]];
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
  const shouldRound = STATS_DECIMAL_CATEGORIES.includes(keyName)
  const name = player.player.name
  const team = player.team.name
  // const stat = player.statistics[keyName]
  let stat = player.statistics[STATS_STAT_KEY_MAP[keyName]];
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
