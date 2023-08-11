import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
// import '../main.scss'
// https://feeds.bbci.co.uk/sport/football/rss.xml

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container--dash-grid">
        <Sidebar />
        <Dashboard />
      </div>
      <div className="Footer"></div>
    </div>
  )
}

export default App
