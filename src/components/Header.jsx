import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const Header = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    if (localStorage.getItem('token')) navigate('/problem1')
    else alert('Please login first!')
  }
  return (
    <div style={{
      background: 'url(/images/header1.jpg) no-repeat center fixed',
      width: '100vw',
      height: '94vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        margin: '30px',

      }}>
        <Button variant='outlined' color='error' size='large'
          onClick={handleClick} sx={{
            border: 'none',
            margin: '10px 0',
            fontSize: '30px',
            color: '#fff'
          }}>Start solving</Button>

        <Button variant='outlined' color='error' size='large'
          onClick={()=>{navigate('/leaderboard')}} sx={{
            border: 'none',
            marginBottom: '10px',
            fontSize: '30px',
            color: '#fff'
          }} >Leaderboard</Button>
          
        <Button variant='outlined' color='error' size='large'
          onClick={()=>{navigate('/rules')}} sx={{
            border: 'none',
            fontSize: '30px',
            color: '#fff'
          }} >Rules</Button>
        { localStorage.getItem('username') === 'saransh' ?
          <Button variant='outlined' color='error' size='large'
          onClick={()=>{navigate('/admin')}} sx={{
            border: 'none',
            fontSize: '30px',
            color: '#fff'
          }} >Dashboard</Button> : <></>
        }
      </div>

    </div>
  )
}

export default Header