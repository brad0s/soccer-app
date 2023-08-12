import axios from 'axios'
import XMLParser from 'react-xml-parser'

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

export const fetchQuote = async (q = '') => {
  try {
    const response = await instance.get()
    return response.data[0]
  } catch (e) {
    console.error(e)
  }
}

export const fetchQuoteCategory = async (q = '') => {
  try {
    const response = await instance.get('', { params: { category: q } })
    return response.data[0]
  } catch (e) {
    console.error(e)
  }
}
