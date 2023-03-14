import { Routes, Route } from 'react-router-dom'
import { Main, Pakage } from '../pages'
import Delivery from '../pages/Delivery'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/pakage" element={<Pakage />} />
    </Routes>
  )
}
export default Router
