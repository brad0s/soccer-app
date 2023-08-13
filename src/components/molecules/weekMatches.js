import React, { useEffect, useState } from 'react'
// import moment from 'moment'
import { LEAGUE_EVENTS_BY_ROUND } from '../../context/data'
import Match from '../atoms/match'
// import Error from './error'

function WeekMatches() {
  const [matches, setMatches] = useState({ events: [] })
  const [allMatches, setAllMatches] = useState({ events: [] })
  const [round, setRound] = useState(1)
  const status = [
    {
      type: '',
      description: 'All',
    },
    {
      type: 'inprogress',
      description: 'Live',
    },
    {
      type: 'finished',
      description: 'Final',
    },
    {
      type: 'postponed',
      description: 'Postponed',
    },
    {
      type: 'canceled',
      description: 'Canceled',
    },
    {
      type: 'notstarted',
      description: 'Not Started',
    },
  ]

  useEffect(() => {
    setMatches(LEAGUE_EVENTS_BY_ROUND)
    setAllMatches(LEAGUE_EVENTS_BY_ROUND)
  }, [])

  const handleSelectChange = (e) => {
    const filteredMatches = allMatches.events.filter((m) =>
      m.status.type.includes(e.target.value)
    )
    setMatches({ events: filteredMatches })
  }

  return (
    <div className="Week-matches">
      <div className="header">
        <div className="headline-container">
          <h2 className="h5 headline">Matches</h2>
          <p className="match-round">Round {round}</p>
        </div>
        <div className="match-filters">
          <MatchFilterSelect
            filters={status}
            handleChange={handleSelectChange}
          />
        </div>
      </div>
      <div className="matches-list">
        {matches &&
          matches.events.map((match, idx) => {
            return (
              <Match
                key={idx}
                match={match}
              />
            )
          })}
      </div>
    </div>
  )
}

export default WeekMatches

const MatchFilterSelect = ({ filters, handleChange }) => {
  return (
    <div className="select">
      <select
        name="status"
        onChange={(e) => handleChange(e)}
        aria-label="Filter by status"
      >
        {filters.map((f) => (
          <option
            key={f.type}
            value={f.type}
          >
            {f.description}
          </option>
        ))}
      </select>
    </div>
  )
}
