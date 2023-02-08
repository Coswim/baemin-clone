/* global kakao */

const success = res => {
  // const geocoder = new kakao.maps.services.Geocoder()

  console.log(res)

  // var callback = function (result, status) {
  //   if (status === kakao.maps.services.Status.OK) {
  //     console.log('그런 너를 마주칠까 ' + result + '을 못가')
  //   }
  // }

  // geocoder.coord2Address(coords.latitude, coords.longitude, callback)
}
const error = e => {
  return console.log(e)
}

export const getGEO = () => {
  if (window.navigator.geolocation) {
    window.navigator.geolocation.getCurrentPosition(success, error)
  }
}

// 데이터
export const recentOrdersData = [
  {
    storename: '크로플각 포천점',
    star: '5.0',
    deliverytip: '2,500원~ 5,000원',
    img: process.env.PUBLIC_URL + './assets/img/blueberry_croffle.jpg',
  },
  {
    storename: '순살만공격 선단점',
    star: '4.9',
    deliverytip: '2,500원~ 5,000원',
    img: process.env.PUBLIC_URL + './assets/img/chicken_kebabs.jpg',
  },
  {
    storename: '크로플각 포천점',
    star: '5.0',
    deliverytip: '2,500원~ 5,000원',
    img: process.env.PUBLIC_URL + './assets/img/mango_croffle.jpg',
  },
  {
    storename: '메가커피 포천송우주공점',
    star: '4.7',
    deliverytip: '2,500원~ 5,000원',
    img: process.env.PUBLIC_URL + './assets/img/bubble_tea.jpg',
  },
]
