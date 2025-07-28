import React from 'react'
import { PiSoccerBallLight } from 'react-icons/pi'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <nav className="nav">
          <a
            href="/"
            className="logo"
          >
            <PiSoccerBallLight className="soccer-icon" /> EPL App
          </a>
          <button id="hamburger-btn">Menu</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
