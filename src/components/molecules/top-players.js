import React, { useState, useEffect } from 'react'
import { LEAGUE_OVERALL_TOP_PLAYERS } from '../../context/data'
import { STATS_MAP } from '../../utils/helper'

const TopPlayers = () => {
  const [topPlayers, setTopPlayers] = useState([])
  useEffect(() => {
    setTopPlayers(LEAGUE_OVERALL_TOP_PLAYERS.topPlayers)
  }, [])

  const keys = Object.keys(topPlayers).map((key) => {
    return key
  })

  return (
    <div className="Top-players">
      <h2 className="h5 headline">Top Players</h2>
      {Object.keys(topPlayers).map((key) => (
        <StatBox
          key={key}
          keyName={key}
          players={topPlayers[key]}
        />
      ))}
    </div>
  )
}

export default TopPlayers

function StatBox({ keyName, players }) {
  const topTenPlayers = players.slice(0, 10)
  const topPlayer = topTenPlayers.shift()
  console.log(topPlayer)
  return (
    <details className="Stat-box">
      <summary className="h6">{STATS_MAP[keyName]}</summary>
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
    </details>
  )
}

const TopPlayer = ({ player, keyName }) => {
  console.log(player.team.teamColors.primary)
  const decimalStats = ['expectedAssists', 'expectedGoals', 'goalsPrevented']
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
        <p className="stat">{stat && Number(stat).toFixed(2)}</p>
      ) : (
        <p className="stat">{stat}</p>
      )}
    </div>
  )
}

const Player = ({ player, keyName }) => {
  const decimalStats = ['expectedAssists', 'expectedGoals', 'goalsPrevented']
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
