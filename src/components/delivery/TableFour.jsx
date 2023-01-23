import React from 'react'
import styled from 'styled-components'
// import { mainTheme } from '../assets/theme/theme'
import { Grid } from '@mantine/core'

const TableFour = () => {
  return (
    <Grid justify="space-around">
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/hamburger.png'}
          alt="one"
        />
        패스트푸드
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/brand-icon.png'}
          alt="brand-icon"
        />
        브랜드관
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/spoonxfork.png'}
          alt="spoonxfork"
        />
        맛집랭킹
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/spoonxfork.png'}
          alt="none-icons"
        />
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/spoonxfork.png'}
          alt="none-icons"
        />
      </Grid.Col>
    </Grid>
  )
}

export default TableFour
