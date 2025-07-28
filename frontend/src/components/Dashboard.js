import React from 'react'
import Slider from './molecules/slider'
import Standings from './molecules/standings'
import News from './molecules/news'
import FeaturedPlayers from './molecules/featured-players'
import GlobeComponent from './molecules/globe'
import WeekMatches from './molecules/weekMatches'
import TopPlayers from './molecules/top-players'
import TabSlider from './molecules/tab-slider'
import { SoccerContextProvider } from '../context/context'

function Dashboard() {
  return (
    <SoccerContextProvider>
      <main className="Dashboard">
        <Slider />
        <WeekMatches />
        <News />
        <GlobeComponent />
        <FeaturedPlayers />
        <Standings />
        <TabSlider />
        <TopPlayers />
      </main>
    </SoccerContextProvider>
  )
}

export default Dashboard
