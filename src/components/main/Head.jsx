import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TfiLayoutGrid2, TfiThemifyFavicon, TfiBell } from 'react-icons/tfi'
import { mainTheme } from '../../shared/theme'
import { Input } from '@mantine/core'
import { FaStar } from 'react-icons/fa'
import { getGEO } from '../../helper'

const Head = () => {
  useEffect(() => {
    console.log('1111')
    getGEO()
  })
  return (
    <Wrap>
      <UserInfo>
        <span>경기 포천시 가산면 가산로 194번길 42</span>
        <div className="headerIcons">
          <TfiLayoutGrid2 size={22} color="white" />
          <TfiBell size={22} color="white" />
          <TfiThemifyFavicon size={22} color="white" />
          <FaStar size={22} color="white"></FaStar>
        </div>
      </UserInfo>
      <InputWrap>
        <Input
          // icon={<CiSearch color={mainTheme.bgColor} />}
          placeholder="찾는 맛집이름이 뭐예요?"
          styles={theme => ({
            input: {
              '&:focus-within': {
                borderColor: 'white',
              },
              boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.1);',
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
  justify-content: space-between;
  align-items: flex-end;
  height: 40px;
  span {
    width: 70%;
    color: white;
    font-size: ${mainTheme.smallFont};
    font-weight: ${mainTheme.pointWeight};
  }
  .headerIcons {
    display: flex;
    width: 25%;
    justify-content: space-between;
  }
`
const InputWrap = styled.div`
  padding: 0 15px 0 15px;
`
