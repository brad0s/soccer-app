import React from 'react'
import Slider from './molecules/slider'
import Standings from './molecules/standings'
import News from './molecules/news'
import FeaturedPlayers from './molecules/featured-players'
import GlobeComponent from './molecules/globe'
import WeekMatches from './molecules/weekMatches'
import TopPlayers from './molecules/top-players'

function Dashboard() {
  return (
    <main className="Dashboard">
      <Slider />
      <WeekMatches />
      <News />
      <GlobeComponent />
      <FeaturedPlayers />
      <Standings />
      <TopPlayers />
    </main>
  )
}

export default Dashboard
