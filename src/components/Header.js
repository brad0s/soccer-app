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
            <PiSoccerBallLight className="soccer-icon" /> Soccer App
          </a>
          <ul className="nav-list nav-list--links">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
          <ul className="nav-list nav-list--buttons">
            <li>
              <button className="btn-primary">Button</button>
            </li>
            <li>
              <button className="btn-secondary">Button</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
