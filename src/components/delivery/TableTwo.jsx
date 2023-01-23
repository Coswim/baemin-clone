import React from 'react'
import styled from 'styled-components'
// import { mainTheme } from '../assets/theme/theme'
import { Grid } from '@mantine/core'

const TableTwo = () => {
  return (
    <Grid justify="space-around">
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/gogi.png'}
          alt="gogi"
        />
        고기구이
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/night.png'}
          alt="night"
        />
        야식
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/fork.png'}
          alt="fork"
        />
        양식
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/chicken.png'}
          alt="chicken"
        />
        치킨
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/jajangmyeon.png'}
          alt="jajangmyeon"
        />
        중식
      </Grid.Col>
    </Grid>
  )
}

export default TableTwo
