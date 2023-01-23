import styled from 'styled-components'
import TableOne from '../components/delivery/TableOne'
import TableTwo from '../components/delivery/TableTwo'
import TableThree from '../components/delivery/TableThree'
import TableFour from '../components/delivery/TableFour'
import Carousel from '../components/delivery/Carousel'
import { TbArrowsDownUp } from 'react-icons/tb'
import { RiCoupon2Fill } from 'react-icons/ri'
import { BiChevronDown } from 'react-icons/bi'
import { AiFillStar, AiOutlineHome, AiOutlineCaretDown } from 'react-icons/ai'
import { BsCart, BsHandIndexThumb, BsArrowLeft } from 'react-icons/bs'
import { MdOutlineRiceBowl } from 'react-icons/md'

const Delivery = () => {
  return (
    <Wrap>
      <div className="delivery-word">
        <DeliveryWord>
          <BsArrowLeft />
          배달
          <MdOutlineRiceBowl />
        </DeliveryWord>
      </div>
      <div className="icons">
        <AiOutlineHome />
        <BsCart />
      </div>
      <Address>
        경기 포천시 가산면 가산로194번길 42
        <AiOutlineCaretDown />
      </Address>
      <div className="">
        <Carousel />
      </div>
      <div className="">
        <TableOne />
        <TableTwo />
        <TableThree />
        <TableFour />
      </div>
      <Category>
        <button className="basic">
          <TbArrowsDownUp />
          기본순
        </button>
        <button className="coupon">
          <RiCoupon2Fill />
          쿠폰
        </button>
        <button className="one-serving">
          <BsHandIndexThumb />
          1인분
        </button>
        <button className="delivery-tip">
          배달팁
          <BiChevronDown />
        </button>
        <button className="start-rank">
          <AiFillStar />
          별점순
        </button>
      </Category>
      <div>배달 광고 ?</div>
      <div>그림</div>
      <div className="UnderBar">
        <button>검색</button>
        <button>찜</button>
        <button>배민</button>
        <button>주문내역</button>
        <button>my배민</button>
      </div>
    </Wrap>
  )
}

export default Delivery

// const MainWrap = styled.div`
//   background-color: ${mainTheme.bgColor};
// `

const Wrap = styled.div`
  .delivery-word {
    text-align: left;
  }
  .icons {
    text-align: right;
  }
`

const DeliveryWord = styled.div``

const Address = styled.div``

const Category = styled.button`
  .basic {
    border-radius: 20px;
    background: ${props => props.bg};
  }
  .coupon {
    border-radius: 20px;
  }
  .one-serving {
    border-radius: 20px;
  }
  .delivery-tip {
    border-radius: 20px;
  }
  .start-rank {
    border-radius: 20px;
  }
`
