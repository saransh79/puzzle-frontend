import React from 'react'
import Login from './components/Auth/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Auth/Signup'
import Admin from './components/Admin/Admin'
import './style.css'
import Problem1 from './components/Problems/Problem1'
import Problem2 from './components/Problems/Problem2'
import Problem3 from './components/Problems/Problem3'
import Problem4 from './components/Problems/Problem4'
import Stats from './components/Problems/Stats'
import Rules from './components/Rules'
import Leaderboard from './components/Leaderboard'
import Problem5 from './components/Problems/Problem5'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/problem1' element={<Problem1 />} />
        <Route path='/problem2' element={<Problem2 />} />
        <Route path='/problem3' element={<Problem3 />} />
        <Route path='/problem4' element={<Problem4 />} />
        <Route path='/problem5' element={<Problem5 />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App