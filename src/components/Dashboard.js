import React from 'react'
import Slider from './molecules/slider'
import Standings from './molecules/standings'
import News from './molecules/news'
import FeaturedPlayers from './molecules/featured-players'
import GlobeComponent from './molecules/globe'

function Dashboard() {
  return (
    <main className="Dashboard">
      <Slider />
      <Standings />
      <News />
      <GlobeComponent />
      <FeaturedPlayers />
    </main>
  )
}

export default Dashboard
