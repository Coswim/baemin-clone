import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // speed: 5000,
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>
            <img
              src={
                process.env.PUBLIC_URL + './assets/baemin-carousel/img1.jpeg'
              }
              alt="1"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                padding: '100px',
              }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={
                process.env.PUBLIC_URL + './assets/baemin-carousel/img2.jpeg'
              }
              alt="2"
              style={{ width: '100%', height: '500px' }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={
                process.env.PUBLIC_URL + './assets/baemin-carousel/img3.jpeg'
              }
              alt="3"
              style={{ width: '100%', height: '500px' }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={
                process.env.PUBLIC_URL + './assets/baemin-carousel/img4.jpeg'
              }
              alt="4"
              style={{ width: '100%', height: '500px' }}
            />
          </h3>
        </div>
        <div>
          <h3>
            <img
              src={
                process.env.PUBLIC_URL + './assets/baemin-carousel/img5.jpeg'
              }
              alt="5"
              style={{ width: '100%', height: '500px' }}
            />
          </h3>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel

// const Slider = styled.div`
//   .imgae {
//     background-size: cover;
//   }
// `
