import React from 'react'
import { SIDENAVLINKS } from '../context/data'

function SideNav() {
  return (
    <aside className="Sidebar">
      <details
        className="sticky"
        open
      >
        <summary className="h5 list-label">Nav</summary>
        <ul className="tournament-list">
          {SIDENAVLINKS.map((sidenavLink, idx) => {
            return (
              <li
                key={idx}
                className="tournament-item"
              >
                <a
                  href={`#${sidenavLink.id}`}
                  className="btn"
                >
                  {sidenavLink.label}
                </a>
                {/* <button
                  className="btn"
                  data-id={tournament.id}
                  data-color={tournament.primaryColorHex}
                >
                  <span
                    className="bar"
                    style={{
                      background: tournament.primaryColorHex,
                      borderColor: tournament.secondaryColorHex,
                    }}
                  ></span>
                  {tournament.label}
                </button> */}
              </li>
            )
          })}
        </ul>
      </details>
    </aside>
  )
}

export default SideNav
