import React from 'react'
import Slider from './molecules/slider'
import Standings from './molecules/standings'
import News from './molecules/news'
import FeaturedPlayers from './molecules/featured-players'
import GlobeComponent from './molecules/globe'
import WeekMatches from './molecules/weekMatches'

function Dashboard() {
  return (
    <main className="Dashboard">
      <Slider />
      <WeekMatches />
      <News />
      <GlobeComponent />
      <FeaturedPlayers />
      <Standings />
    </main>
  )
}

export default Dashboard
