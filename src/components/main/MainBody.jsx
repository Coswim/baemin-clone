import styled from 'styled-components'
import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { mainTheme } from '../../shared/theme'
import { Carousel } from '@mantine/carousel'

import {
  BiCameraMovie,
  BiGift,
  BiBusSchool,
  BiCopyright,
  BiBarcode,
  BiHeart,
} from 'react-icons/bi'

const MainBody = () => {
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <Wrap>
      <MainButtonWrap>
        <div>
          <img
            src={process.env.PUBLIC_URL + './assets/img/delivery.jpg'}
            alt="delivery"
          />
          <div className="imgText">배달</div>
        </div>
        <div>
          <img
            src={process.env.PUBLIC_URL + './assets/img/packaging.jpg'}
            alt="delivery"
          />
          <div className="imgText">포장</div>
        </div>
      </MainButtonWrap>
      <SubButtonWrap>
        <div>
          <BiCameraMovie size={30} color="red" />
          쇼핑라이브
        </div>
        <div>
          <BiGift size={30} color="orange" />
          선물하기
        </div>
        <div>
          <BiBusSchool size={30} color={mainTheme.bgColor} />
          전국별미 자리
        </div>
      </SubButtonWrap>

      <CarouselStyles>
        <Carousel
          sx={{ flex: 1 }}
          mx="auto"
          height={115}
          withControls={false}
          align="start"
          loop
          slideGap="xs"
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}>
          <Carousel.Slide>
            <img
              src={process.env.PUBLIC_URL + './assets/img/carousel1.jpeg'}
              alt="carousel1"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={process.env.PUBLIC_URL + './assets/img/carousel2.jpg'}
              alt="carousel2"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={process.env.PUBLIC_URL + './assets/img/carousel3.jpg'}
              alt="carousel3"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <img
              src={process.env.PUBLIC_URL + './assets/img/carousel4.jpg'}
              alt="carousel4"
            />
          </Carousel.Slide>
        </Carousel>
      </CarouselStyles>

      <SideButtonWrap>
        <div>
          <BiCopyright size={25} />
          포인트
        </div>
        <div>
          <BiBarcode size={25} />
          쿠폰함
        </div>
        <div>
          <BiGift size={25} color="orange" />
          선물함
        </div>
        <div>
          <BiHeart size={25} />찜 자리
        </div>
      </SideButtonWrap>
    </Wrap>
  )
}
export default MainBody

const Wrap = styled.div`
  padding: 12px;
  align-items: center;
  /* border: 1px solid blue; */
`
const MainButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  div {
    position: relative;
    width: 45%;
    height: 150px;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      object-fit: cover;
    }
    .imgText {
      position: absolute;
      top: 0;
      width: 100%;
      padding: 10px;
      font-size: ${mainTheme.normalFont};
      font-family: 'BMHANNAPro';
    }
  }
`
const SubButtonWrap = styled.div`
  height: 60px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-around;
  div {
    width: 30%;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: 'BMHANNAPro';
    gap: 2px;
  }
`
const CarouselStyles = styled.div`
  height: 120px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: fill;
  }
`
const SideButtonWrap = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-right: 1px solid #f4f4f4;
  }
`
