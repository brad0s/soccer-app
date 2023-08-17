import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Error from './error'
import { getRssFeed } from '../../context/api'
import headerImage from '../../assets/images/soccer-match.webp'
import Loading from '../atoms/loading'

function News() {
  const [news, setNews] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      const response = await getRssFeed()
      setNews(response)
      setIsLoading(false)
    }
    init()
  }, [])

  return (
    <div className="News">
      <div className="header-image-wrapper">
        <img
          className="header-image"
          src={headerImage}
        />
        <h2 className="h6 headline">News</h2>
      </div>

      {news ? (
        <div className="news-list">
          {news.map((item, idx) => {
            const children = Array.from(item.children)
            const link = children[4].textContent
            const title = children[0].textContent
            const description = children[1].textContent
            const pubDate = children[5].textContent

            return (
              <div
                key={idx}
                className="news-item"
              >
                <h3 className=" h6 headline">
                  <a
                    href={link}
                    target="_blank"
                  >
                    {title}
                  </a>
                </h3>
                <p
                  className="date"
                  data-date={pubDate}
                >
                  {moment(pubDate).fromNow()}
                </p>
              </div>
            )
          })}
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        <Error />
      )}
    </div>
  )
}

export default News
