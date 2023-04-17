import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './Header'
const Home = () => {
  const location = useLocation()
  return (
    <div>
      <Navbar />
      <Header/>
    </div>
  )
}

export default Home