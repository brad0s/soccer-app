import React, { useEffect } from 'react'
import { register } from 'swiper/element/bundle'
import '../../assets/images/haaland-header-crop.png'
import { playerSlider } from '../../context/cms'

// dynamic image import
function importAll(r) {
  let images = {}
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const images = importAll(
  require.context('../../assets/images', false, /\.(png)$/)
)

function Slider() {
  useEffect(() => {
    register()
  }, [])

  return (
    <div className="Slider">
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        autoPlay="true"
        autoPlay-delay={7000}
        loop="true"
        mousewheel={true}
      >
        {playerSlider.map((slide, idx) => (
          <swiper-slide
            key={idx}
            class={slide.background}
          >
            <div className="wrapper">
              <div className="content">
                <h3
                  className="headline"
                  dangerouslySetInnerHTML={{ __html: slide.headline }}
                ></h3>
              </div>
              <div className="image-container">
                <img
                  className="player-img"
                  src={images[slide.image]}
                  alt=""
                />
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default Slider
