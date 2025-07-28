import axios from 'axios'

const footApiInstance = axios.create({
  baseURL: 'https://www.espn.com/espn/rss/soccer/news',
  headers: {
    // 'X-RapidAPI-Key': process.env.FOOT_API_KEY,
    // 'X-RapidAPI-Host': process.env.FOOT_API_HOST,
    'X-RapidAPI-Key': 'b2418cda72mshb516a0451830809p1665a2jsn8c9ec65c347e',
    'X-RapidAPI-Host': 'footapi7.p.rapidapi.com',
  },
})

export const getTournamentId = () => {
  try {
    const response = {
      category: {
        alpha2: 'EN',
        flag: 'england',
        id: 1,
        name: 'England',
        priority: 10,
        slug: 'england',
        sport: {
          id: 1,
          name: 'Football',
          slug: 'football',
        },
      },
      displayInverseHomeAwayTeams: false,
      id: 17,
      name: 'Premier League',
      primaryColorHex: '#3c1c5a',
      secondaryColorHex: '#f80158',
      slug: 'premier-league',
      userCount: 1206136,
    }
    return response.id
  } catch (e) {
    console.error(e)
    return null
  }
}

export const getCurrentSeason = () => {
  const response = {
    tournamentId: 17,
    editor: false,
    id: 52186,
    name: 'Premier League 23/24',
    year: '23/24',
  }
  return response.id
}

export const getLeagueCurrentRound = () => {}
