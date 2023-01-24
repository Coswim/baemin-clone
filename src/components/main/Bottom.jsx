import styled from 'styled-components'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { useRef, useState } from 'react'
import { Carousel } from '@mantine/carousel'

import Autoplay from 'embla-carousel-autoplay'

const Bottom = () => {
  const [openInfo, setOpenInfo] = useState(false)
  const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <ButtonWrap>
      <Carousel
        sx={{ flex: 1 }}
        mx="auto"
        height={80}
        withControls={false}
        align="start"
        loop
        slideGap="xs"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slidesToScroll={1}>
        <Carousel.Slide>
          <img
            src={process.env.PUBLIC_URL + './assets/img/bottom1.jpg'}
            alt="bottom1"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src={process.env.PUBLIC_URL + './assets/img/bottom2.jpg'}
            alt="bottom2"
          />
        </Carousel.Slide>
      </Carousel>
      <TermsText>
        <span>사업자정보확인</span>
        <span>| 이용약관</span>
        <span>| 전자금융거래이용약관</span>
        <span>| 개인정보처리방침</span>
      </TermsText>
      <CompanyInfo>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            gap: '5px',
          }}>
          <span onClick={() => setOpenInfo(!openInfo)}>(주)우아한형제들</span>
          {openInfo ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openInfo && (
          <div className="infomation">
            <p>대표이사 이국환 | 사업자등록번호 120-87-65763</p>
            <p>
              통신판매업 서울 송파-0515 | 호스팅서비스제공자 (주)우아한형제들
            </p>
            <p>CS@woowahan.com | 서울특별시 송파구 위례성대로 2 장은빌딩</p>
            <p>전자금융분쟁처리 Tel 1600-0987(유료), 080-549-0987</p>
            <p>Fax 050-6050-0400</p>
            <div className="customerBox">
              <div>
                <p>고객센터(대표)</p>
                <p>1600-0987</p>
                <p>24시간 운영, 연중무휴</p>
              </div>
              <div>
                <p>고객센터(B마트/배민스토어)</p>
                <p>1600-0025</p>
                <p>오전 09:00~익일 새벽 01:00</p>
              </div>
            </div>
          </div>
        )}
        <div>
          <p>
            (주)우아한형제들은 통신판매중개자이며, 통신판매의 당사자가 아닙니다.
            따라서 (주)우아한형제들은 상품, 거래정보 및 거래에 대하여 책임을
            지지 않습니다.
          </p>
        </div>
      </CompanyInfo>
    </ButtonWrap>
  )
}
export default Bottom

const ButtonWrap = styled.div`
  border-top: 1px solid lightgray;
  padding: 12px 0 0 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const TermsText = styled.div`
  display: flex;
  padding: 20px 12px 0;
  font-size: 12px;
  span {
    color: gray;
    margin-right: 5px;
  }
`
const CompanyInfo = styled.div`
  padding: 12px;

  span {
    font-size: 15px;
  }
  p {
    color: gray;
    font-size: 12px;
  }
  .infomation {
    line-height: 15px;
    .customerBox {
      display: flex;
      margin: 10px 0 10px 0;
      height: 70px;
      div {
        width: 50%;
        height: 100%;
        padding: 10px;
        border: 1px solid lightgray;
      }
    }
  }
`
