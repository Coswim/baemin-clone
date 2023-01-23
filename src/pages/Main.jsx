import styled from 'styled-components'
import { mainTheme } from '../assets/theme/theme'

const Main = () => {
  return <MainWrap>메인이지</MainWrap>
}
export default Main

const MainWrap = styled.div`
  background-color: ${mainTheme.bgColor};
`
