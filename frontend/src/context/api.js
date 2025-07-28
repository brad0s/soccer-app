import axios from 'axios'

const rssFeedInstance = axios.create({
  baseURL: 'https://www.espn.com/espn/rss/soccer/news',
})

export const getRssFeed = async () => {
  try {
    const res = await rssFeedInstance.get()
    const data = await res.data
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(data, 'application/xml')
    let items = Array.from(xmlDoc.getElementsByTagName('item'))
    items = items.slice(1, 5)
    return items
  } catch (e) {
    console.error(e)
  }
}
