import React, { useState, useEffect, useContext, use } from 'react'
import { BsCaretUpFill, BsCaretDownFill } from 'react-icons/bs'
import { LEAGUE_STANDINGS } from '../../context/data'
import Error from './error'
import SoccerContext from '../../context/context'

function Standings() {
  const { standings: standingsContext } = useContext(SoccerContext);
  const [standings, setStandings] = useState([])

  useEffect(() => {
    setStandings(standingsContext);
  }, [standingsContext])

  const handleRowHeaderClick = (e, sortBy) => {
    const attr = e.currentTarget.dataset.key
    const standingsTemp = [...standings]
    let sortedStandings = []
    switch (attr) {
      case 'name':
        if (sortBy === 'ASC') {
          sortedStandings = standingsTemp.sort((a, b) => {
            const aAttr = a.team.name.toUpperCase()
            const bAttr = b.team.name.toUpperCase()
            if (aAttr < bAttr) {
              return -1
            }
            if (aAttr > bAttr) {
              return 1
            }
            return 0
          })
        } else {
          sortedStandings = standingsTemp.sort((a, b) => {
            const aAttr = a.team.name.toUpperCase()
            const bAttr = b.team.name.toUpperCase()
            if (bAttr < aAttr) {
              return -1
            }
            if (bAttr > aAttr) {
              return 1
            }
            return 0
          })
        }
        break

      default:
        if (sortBy === 'ASC') {
          sortedStandings = standingsTemp.sort((a, b) => a[attr] - b[attr])
        } else {
          sortedStandings = standingsTemp.sort((a, b) => b[attr] - a[attr])
        }
        break
    }
    setStandings([...sortedStandings])
  }

  return (
    <div
      id="standings"
      className="Standings"
    >
      <h2 className="h5">Standings</h2>
      <div className="grid-table">
        <TeamStandingRowHeader handleRowHeaderClick={handleRowHeaderClick} />
        {standings?.length > 0 ? (
          standings.map((row, idx) => {
            return (
              <TeamStandingRow
                key={idx}
                row={row}
              />
            )
          })
        ) : (
          <Error />
        )}
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
      label: '',
      shortLabel: '',
      value: position,
      key: 'position',
    },
    {
      label: 'Club',
      shortLabel: 'Club',
      value: name,
      key: 'name',
    },
    {
      label: 'Matches Played',
      shortLabel: 'MP',
      value: matches,
      key: 'matches',
    },
    {
      label: 'Wins',
      shortLabel: 'W',
      value: wins,
      key: 'wins',
    },
    {
      label: 'Draws',
      shortLabel: 'D',
      value: draws,
      key: 'draws',
    },
    {
      label: 'Losses',
      shortLabel: 'L',
      value: losses,
      key: 'losses',
    },
    {
      label: 'Goals For',
      shortLabel: 'GF',
      value: scoresFor,
      key: 'scoresFor',
    },
    {
      label: 'Goals Against',
      shortLabel: 'GA',
      value: scoresAgainst,
      key: 'scoresAgainst',
    },
    {
      label: 'Goals Difference',
      shortLabel: 'GD',
      value: scoresFor - scoresAgainst,
      key: 'goalsDiff',
    },
    {
      label: 'Points',
      shortLabel: 'Pts',
      value: points,
      key: 'points',
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

function TeamStandingRowHeader({ handleRowHeaderClick }) {
  const teamRow = [
    {
      label: '',
      shortLabel: '',
      key: 'position',
    },
    {
      label: 'Club',
      shortLabel: 'Club',
      key: 'name',
    },
    {
      label: 'Matches Played',
      shortLabel: 'MP',
      key: 'matches',
    },
    {
      label: 'Wins',
      shortLabel: 'W',
      key: 'wins',
    },
    {
      label: 'Draws',
      shortLabel: 'D',
      key: 'draws',
    },
    {
      label: 'Losses',
      shortLabel: 'L',
      key: 'losses',
    },
    {
      label: 'Goals For',
      shortLabel: 'GF',
      key: 'scoresFor',
    },
    {
      label: 'Goals Against',
      shortLabel: 'GA',
      key: 'scoresAgainst',
    },
    {
      label: 'Goals Difference',
      shortLabel: 'GD',
      key: 'goalsDiff',
    },
    {
      label: 'Points',
      shortLabel: 'Pts',
      key: 'points',
    },
  ]
  return (
    <div className="table-row-header">
      {teamRow.map((item, idx) => (
        <TeamStandingHeaderCell
          key={idx}
          item={item}
          handleRowHeaderClick={handleRowHeaderClick}
        />
      ))}
    </div>
  )
}

const TeamStandingHeaderCell = ({ item, handleRowHeaderClick }) => {
  const [sortBy, setSortBy] = useState('')

  return (
    <button
      className="header-label cell-item"
      data-label={item.label}
      data-short={item.shortLabel}
      data-name={item.shortLabel}
      data-key={item.key}
      data-sortby={sortBy}
      onClick={(e) => {
        const sorting = sortBy === '' ? 'DESC' : sortBy
        setSortBy(sortBy === 'ASC' ? 'DESC' : 'ASC')
        return handleRowHeaderClick(e, sorting)
      }}
    >
      {item.shortLabel}
      {sortBy === 'ASC' && <BsCaretUpFill />}
      {sortBy === 'DESC' && <BsCaretDownFill />}
    </button>
  )
}
