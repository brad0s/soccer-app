import React from 'react'
import { leagueStandings } from '../../context/data'

function Standings() {
  return (
    <div className="Standings">
      <h2 className="h5">Standings</h2>
      <div className="grid-table">
        <TeamStandingRowHeader />
        {leagueStandings.standings[0].rows.map((row, idx) => {
          return (
            <TeamStandingRow
              key={idx}
              row={row}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Standings

function TeamStandingRow({ row }) {
  const {
    draws,
    losses,
    matches,
    points,
    position,
    team,
    scoresAgainst,
    scoresFor,
    wins,
  } = row
  const { name } = team
  const teamRow = [
    {
      label: 'Position',
      shortLabel: 'Rank',
      value: position,
    },
    {
      label: 'Club',
      shortLabel: 'Club',
      value: name,
    },
    {
      label: 'Matches Played',
      shortLabel: 'MP',
      value: matches,
    },
    {
      label: 'Wins',
      shortLabel: 'W',
      value: wins,
    },
    {
      label: 'Draws',
      shortLabel: 'D',
      value: draws,
    },
    {
      label: 'Losses',
      shortLabel: 'L',
      value: losses,
    },
    {
      label: 'Goals For',
      shortLabel: 'GF',
      value: scoresFor,
    },
    {
      label: 'Goals Against',
      shortLabel: 'GA',
      value: scoresAgainst,
    },
    {
      label: 'Goals Difference',
      shortLabel: 'GD',
      value: scoresFor - scoresAgainst,
    },
    {
      label: 'Points',
      shortLabel: 'Pts',
      value: points,
    },
  ]

  return (
    <div
      className="team-standings-row"
      data-rank={position}
    >
      {teamRow.map((item, idx) => {
        return (
          <div
            key={idx}
            className="cell-item"
            data-name={item.shortLabel}
          >
            {item.value}
          </div>
        )
      })}
    </div>
  )
}

function TeamStandingRowHeader() {
  const teamRow = [
    {
      label: 'Position',
      shortLabel: 'Rank',
    },
    {
      label: 'Club',
      shortLabel: 'Club',
    },
    {
      label: 'Matches Played',
      shortLabel: 'MP',
    },
    {
      label: 'Wins',
      shortLabel: 'W',
    },
    {
      label: 'Draws',
      shortLabel: 'D',
    },
    {
      label: 'Losses',
      shortLabel: 'L',
    },
    {
      label: 'Goals For',
      shortLabel: 'GF',
    },
    {
      label: 'Goals Against',
      shortLabel: 'GA',
    },
    {
      label: 'Goals Difference',
      shortLabel: 'GD',
    },
    {
      label: 'Points',
      shortLabel: 'Pts',
    },
  ]
  return (
    <div className="table-row-header">
      {teamRow.map((item, idx) => (
        <p
          key={idx}
          className="header-label cell-item"
          data-label={item.label}
          data-short={item.shortLabel}
          data-name={item.shortLabel}
        >
          {item.shortLabel}
        </p>
      ))}
    </div>
  )
}
