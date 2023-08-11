import React from 'react'
import { TOURNAMENTS } from '../context/data'

function Sidebar() {
  return (
    <aside className="Sidebar card">
      <h2 className="h5 list-label">Leagues</h2>
      <ul className="tournament-list">
        {TOURNAMENTS.map((tournament, idx) => {
          return (
            <li
              key={idx}
              className="tournament-item"
            >
              <button
                className="btn"
                data-id={tournament.id}
              >
                {tournament.name}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
