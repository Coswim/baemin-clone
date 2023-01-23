import styled from 'styled-components'
// import { mainTheme } from '../assets/theme/theme'
import { Grid } from '@mantine/core'

const TableOne = () => {
  return (
    <Grid justify="space-around">
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/one.png'}
          alt="one"
        />
        1인분
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/jokbal.png'}
          alt="jokbal"
        />
        족발보쌈
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/soup.png'}
          alt="soup"
        />
        찜탕찌개
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/sushi.png'}
          alt="sushi"
        />
        돈까스회일식
      </Grid.Col>
      <Grid.Col span={2}>
        <img
          src={process.env.PUBLIC_URL + './assets/baemin-icons/pizza.png'}
          alt="pizza"
        />
        피자
      </Grid.Col>
    </Grid>
  )
}
export default TableOne

// const MainWrap = styled.div`
//   background-color: ${mainTheme.bgColor};
// `
