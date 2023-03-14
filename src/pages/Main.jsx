import styled from 'styled-components'
import { Head, MainBody, RecentOrder } from '../components'

const Main = () => {
  return (
    <MainWrap>
      {/*head */}
      <Head />
      {/* body */}
      <MainBody />
      <RecentOrder />

      {/* bottom */}
    </MainWrap>
  )
}
export default Main

const MainWrap = styled.div`
  background-color: #f6f6f6;
  /* height: 100vh; */
`
