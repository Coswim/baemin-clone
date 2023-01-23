import React from 'react'
import styled from 'styled-components'
import { CiFaceSmile, CiBellOn, CiGrid41, CiSearch } from 'react-icons/ci'
import { mainTheme } from '../../assets/theme/theme'
import { Input } from '@mantine/core'

const Head = () => {
  return (
    <Wrap>
      <UserInfo>
        <span>경기 포천시 가산면 가산로 194번길 42</span>
        <div className="headerIcons">
          <CiGrid41 size={25} color="white" />
          <CiBellOn size={25} color="white" />
          <CiFaceSmile size={25} color="white" />
        </div>
      </UserInfo>
      <InputWrap>
        <Input
          icon={<CiSearch color={mainTheme.bgColor} />}
          placeholder="찾는 맛집이름이 뭐예요?"
          styles={theme => ({
            input: {
              '&:focus-within': {
                borderColor: 'white',
              },
              'box-shadow': '0px 5px 5px rgba(0, 0, 0, 0.1);',
              borderColor: 'white',
              borderRadius: '3px',
            },
          })}
        />
      </InputWrap>
    </Wrap>
  )
}

export default Head
const Wrap = styled.div`
  height: 90px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  background-color: ${mainTheme.bgColor};
`
const UserInfo = styled.div`
  padding: 0 15px 5px 15px;
  display: flex;
  align-items: flex-end;
  height: 40px;
  span {
    width: 70%;
    color: white;
    font-size: ${mainTheme.smallFont};
    /* font-weight: ${mainTheme.pointWeight}; */
  }
  .headerIcons {
    display: flex;
    width: 30%;
    justify-content: space-between;
  }
`
const InputWrap = styled.div`
  padding: 0 15px 0 15px;
`
