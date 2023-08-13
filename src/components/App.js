import React, { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle'
// register Swiper custom elements
register()

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
