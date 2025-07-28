import React from 'react'
import moment from 'moment'

const Match = ({ match }) => {
  const time = moment.unix(match.startTimestamp).format('h:mmA')
  const date = moment.unix(match.startTimestamp).format('ddd MMM D')
  const status =
    match.status.type === 'finished' ? 'Final' : match.status.description

  return (
    <div
      className={`Match-item winner-${match.winnerCode}`}
      data-status={match.status.type}
    >
      <div className="header">
        <div className="datetime">
          <p className="time">{time}</p>
          <p className="date">{date}</p>
        </div>
        <p className="status">{status}</p>
      </div>
      <div className="grid">
        <div className="away">
          <p className="team">{match.awayTeam.name}</p>
        </div>
        <div className="mid">
          <div className="mid-container">
            <span className="score score--away">
              {match.awayScore.current ?? 0}
            </span>
            <span className="divider">:</span>
            <span className="score score--home">
              {match.homeScore.current ?? 0}
            </span>
          </div>
        </div>
        <div className="home">
          <p className="team">{match.homeTeam.name}</p>
        </div>
      </div>
    </div>
  )
}

export default Match

/* schema
{
  awayScore: {
    current: 3,
    display: 3,
    normaltime: 3,
    period1: 2,
    period2: 1,
  },
  awayTeam: {
    disabled: false,
    gender: 'M',
    id: 17,
    name: 'Manchester City',
    nameCode: 'MCI',
    national: false,
    shortName: 'Man City',
    slug: 'manchester-city',
    sport: {
      id: 1,
      name: 'Football',
      slug: 'football',
    },
    subTeams: [],
    teamColors: {
      primary: '#66ccff',
      secondary: '#ffffff',
      text: '#ffffff',
    },
    type: 0,
    userCount: 1188439,
  },
  changes: {
    changeTimestamp: 1691787691,
    changes: [
      'time.currentPeriodStart',
      'status.code',
      'status.description',
      'status.type',
      'homeScore.period2',
      'homeScore.normaltime',
      'awayScore.period2',
      'awayScore.normaltime',
    ],
  },
  crowdsourcingDataDisplayEnabled: false,
  customId: 'gsr',
  detailId: 1,
  finalResultOnly: false,
  hasEventPlayerHeatMap: true,
  hasEventPlayerStatistics: true,
  hasGlobalHighlights: true,
  hasXg: true,
  homeRedCards: 1,
  homeScore: {
    current: 0,
    display: 0,
    normaltime: 0,
    period1: 0,
    period2: 0,
  },
  homeTeam: {
    disabled: false,
    gender: 'M',
    id: 6,
    name: 'Burnley',
    nameCode: 'BUR',
    national: false,
    shortName: 'Burnley',
    slug: 'burnley',
    sport: {
      id: 1,
      name: 'Football',
      slug: 'football',
    },
    subTeams: [],
    teamColors: {
      primary: '#81204c',
      secondary: '#8fd2f4',
      text: '#8fd2f4',
    },
    type: 0,
    userCount: 77419,
  },
  id: 11352303,
  roundInfo: {
    round: 1,
  },
  slug: 'burnley-manchester-city',
  startTimestamp: 1691780400,
  status: {
    code: 100,
    description: 'Ended',
    type: 'finished',
  },
  time: {
    currentPeriodStartTimestamp: 1691787688,
    injuryTime1: 5,
    injuryTime2: 6,
  },
  tournament: {
    category: {
      alpha2: 'EN',
      flag: 'england',
      id: 1,
      name: 'England',
      slug: 'england',
      sport: {
        id: 1,
        name: 'Football',
        slug: 'football',
      },
    },
    id: 1,
    name: 'Premier League',
    priority: 547,
    slug: 'premier-league',
    uniqueTournament: {
      category: {
        alpha2: 'EN',
        flag: 'england',
        id: 1,
        name: 'England',
        slug: 'england',
        sport: {
          id: 1,
          name: 'Football',
          slug: 'football',
        },
      },
      crowdsourcingEnabled: false,
      displayInverseHomeAwayTeams: false,
      hasEventPlayerStatistics: true,
      hasPerformanceGraphFeature: true,
      id: 17,
      name: 'Premier League',
      primaryColorHex: '#3c1c5a',
      secondaryColorHex: '#f80158',
      slug: 'premier-league',
      userCount: 1218257,
    },
  },
  winnerCode: 2,
},
*/
