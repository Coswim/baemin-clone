import React from 'react'
import styled from 'styled-components'
// import { mainTheme } from '../assets/theme/theme'
import { Grid } from '@mantine/core'

const TableThree = () => {
  return (
    <Grid justify="space-around">
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/noodle.png'}
          alt="noodle"
        />
        아시안
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/rice.png'}
          alt="rice"
        />
        백반죽국수
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/lunch-box.png'}
          alt="lunch-box"
        />
        도시락
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/tteokbokki.png'}
          alt="sushi"
        />
        분식
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/scone.png'}
          alt="scone"
        />
        카페디저트
      </Grid.Col>
    </Grid>
  )
}

export default TableThree
