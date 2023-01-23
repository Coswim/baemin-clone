import styled from 'styled-components'
import { Head, MainBody } from '../components'

const Main = () => {
  return (
    <MainWrap>
      {/*head */}
      <Head />
      {/* body */}
      <MainBody />

      {/* bottom */}
    </MainWrap>
  )
}
export default Main

const MainWrap = styled.div`
  background-color: #f6f6f6;
  height: 800px;
`
