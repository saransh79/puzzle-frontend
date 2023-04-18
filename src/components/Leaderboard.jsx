import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../services/ApiServices'
import Navbar from './Navbar'

const Leaderboard = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getUsers = async (e) => {
      await axios.get(`${baseUrl}/admin/users`).then(res => {
        setUsers(res.data)
      })
    }
    getUsers()
  }, [])
  var rank=0;
  return (
    <div style={{
      height: '100vh'
    }}>
      <Navbar />
      <center>
        <Typography variant='h4' color='#343a40' fontWeight='600' marginTop='30px'> Leaderboard</Typography>
        <div>
          <table className='styled-table tablemobile'>
            <thead >
              <th><Typography variant='h5' sx={{ fontWeight: 600 }}>User</Typography></th>
              <th><Typography variant='h5' sx={{ fontWeight: 600 }}>Email</Typography></th>
              <th><Typography variant='h5' sx={{ fontWeight: 600 }}>Score</Typography></th>
              <th><Typography variant='h5' sx={{ fontWeight: 600 }}>Rank</Typography></th>
            </thead>
            <tbody>
              {
                users.map(item => {
                  rank++;
                  return (
                    <tr >
                      <td><div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        <Typography style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          margin: '0 5px',
                          background: 'black',
                          fontSize: 20,
                          fontWeight: 600,
                          color: '#fff',
                          textAlign: 'center',
                        }}>{item.username[0].toUpperCase()}
                        </Typography>
                        <Typography variant='h6'>{item.username}</Typography>
                      </div></td>
                      <td><Typography variant='h6'>{item.email}</Typography></td>
                      <td><Typography variant='h6'>{item.totalScore}</Typography></td>
                      <td><Typography variant='h5'>{rank}</Typography></td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>

      </center>

    </div>
  )
}

export default Leaderboard