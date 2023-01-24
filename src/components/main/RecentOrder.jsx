import styled from 'styled-components'
import { FiAlertCircle, FiChevronRight } from 'react-icons/fi'
import { mainTheme } from '../../shared/theme'
import { Carousel } from '@mantine/carousel'
import { recentOrdersData } from '../../helper'

const RecentOrder = () => {
  return (
    <Wrap>
      <TitleWrap>
        <MainText>
          <span>최근에 주문했어요 👍</span> <FiAlertCircle />
        </MainText>
        <SubText>
          <span>주문내역 보기</span>
          <FiChevronRight />
        </SubText>
      </TitleWrap>
      <CarouselWrap>
        <Carousel
          height={200}
          slideSize="33.333333%"
          slideGap="md"
          mx="auto"
          withIndicators
          align="start"
          slidesToScroll={2}
          withControls={false}>
          {recentOrdersData.map((item, idx) => (
            <>
              <Carousel.Slide>
                <div key={item.storeName + item.star + idx}>
                  <img src={item.img} alt="menuImg" />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginTop: '10px',
                    }}>
                    <span style={{ fontWeight: '700' }}>{item.storeName}</span>
                    <span style={{ fontWeight: '700' }}>⭐️{item.star}</span>
                  </div>
                  <span>
                    <span style={{ color: 'gray' }}>배달팁 </span>
                    {item.deliveryTip}
                  </span>
                </div>
              </Carousel.Slide>
            </>
          ))}
        </Carousel>
      </CarouselWrap>
    </Wrap>
  )
}
export default RecentOrder

const Wrap = styled.div`
  background-color: white;
  height: 100%;
  padding: 12px;
`
const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MainText = styled.div`
  font-size: 18px;
  font-weight: ${mainTheme.pointWeight};
  display: flex;
  align-items: center;
  span {
    margin-right: 10px;
  }
`
const SubText = styled.div`
  font-size: 14px;
  margin-right: 10px;
  align-items: center;
  span {
    margin-right: 5px;
  }
`
const CarouselWrap = styled.div`
  margin-top: 10px;
  img {
    width: 150px;
    border-radius: 10px;
  }
  span {
    font-size: 12px;
  }
`
