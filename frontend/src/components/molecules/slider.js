import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
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
  return (
    <div className="Slider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoPlay={{ delay: 7000 }}
        loop={true}
        slides-per-view={1}
        space-between={0}
      >
        {playerSlider.map((slide, idx) => (
          <SwiperSlide
            key={idx}
          >
            <div className={'swiper-slide ' + slide.background}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
