import { Routes, Route } from 'react-router-dom'
import { Main } from '../pages'
import Delivery from '../pages/Delivery'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/delivery" element={<Delivery />} />
    </Routes>
  )
}
export default Router
