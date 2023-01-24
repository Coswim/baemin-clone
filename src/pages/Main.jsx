import styled from 'styled-components'
import {
  Head,
  MainBody,
  RecentOrder,
  ShoppingLive,
  IsWork,
  Bottom,
} from '../components'

const Main = () => {
  return (
    <MainWrap>
      {/*head */}
      <Head />
      {/* body */}
      <MainBody />
      <RecentOrder />
      <ShoppingLive />
      <IsWork />
      {/* bottom */}
      <Bottom />
    </MainWrap>
  )
}
export default Main

const MainWrap = styled.div`
  background-color: #f6f6f6;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  /* height: 100vh; */
`
