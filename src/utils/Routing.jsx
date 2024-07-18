import {Route, Routes } from 'react-router-dom'
import Home from '../components-routing/Home'
import User from '../components-routing/User'
import About from '../components-routing/About'

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
     </Routes>
  )
}

export default Routing
