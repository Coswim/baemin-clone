import styled from 'styled-components'
import { FiChevronRight } from 'react-icons/fi'

const IsWork = () => {
  return (
    <IsWorkWrap>
      <div>
        <span>이런 일도 한답니다 ❤️</span>
        <span>
          전체보기 <FiChevronRight />
        </span>
      </div>
    </IsWorkWrap>
  )
}
export default IsWork
const IsWorkWrap = styled.div`
  padding: 12px;
`
