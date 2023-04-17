import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { baseUrl } from '../../services/ApiServices'
import Navbar from '../Navbar'

const Admin = () => {

    const location = useLocation()
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async (e) => {

            await axios.get(`${baseUrl}/admin/users`).then(res => {
                setUsers(res.data)
            })
        }
        getUsers()
    }, [])

    return (
        <div>
            <Navbar />
            <h1>hello{location.state && location.state.id}</h1>
            <center><Typography variant='h4' color='#343a40'> Users</Typography></center>

            {users.map(item => {
                return (
                    <div>
                        <div style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            margin: '0 5px',
                            background: '#fff',
                            fontSize: 18,
                            fontWeight: 600,
                            color: '#343a40'
                        }}>{item.username[0]}
                        </div>
                        <p>{item.username}</p>
                    </div>

                )
            })}
        </div>
    )
}

export default Admin