import React from 'react'
import { TOURNAMENTS } from '../context/data'

function Sidebar() {
  return (
    <aside className="Sidebar">
      <details className="sticky">
        <summary className="h5 list-label">Leagues</summary>
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
      </details>
    </aside>
  )
}

export default Sidebar
