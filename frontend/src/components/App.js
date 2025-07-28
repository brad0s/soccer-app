import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import SideNav from './Sidenav'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container container--dash-grid">
        {/* <Sidebar /> */}
        <SideNav />
        <Dashboard />
      </div>
      <div className="Footer"></div>
    </div>
  )
}

export default App
