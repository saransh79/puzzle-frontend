import { Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../services/ApiServices'
import Navbar from '../Navbar'
const Admin = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const getUsers = async (e) => {

            await axios.get(`${baseUrl}/admin/users`).then(res => {
                setUsers(res.data)
            })
        }
        getUsers()
    }, [])

    const deleteUser = async (e) => {
        e.preventDefault();
        console.log(e.target.getAttribute('email'));
        await axios.post(`${baseUrl}/admin/delete-user`, { email: e.target.getAttribute('email') })
        window.location.reload
            (false)
    }
    return (
        <div>
            <Navbar />
            <center><Typography variant='h4' color='#343a40' fontWeight='600'> Users</Typography>
                <div>
                    <table className='styled-table tablemobile'>
                        <thead >
                            <th><Typography variant='h4' sx={{ fontWeight: 600 }}>User</Typography></th>
                            <th><Typography variant='h4' sx={{ fontWeight: 600 }}>Email</Typography></th>
                            <th><Typography variant='h4' sx={{ fontWeight: 600 }}>Score</Typography></th>
                            <th><Typography variant='h4' sx={{ fontWeight: 600 }}>Delete</Typography></th>
                        </thead>
                        <tbody>
                            {users.map(item => {
                                var score = 0;
                                for (var i = 0; i < item.score.length; i++) {
                                    score += item.score[i].sc;
                                }
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
                                        <td><Typography variant='h6'>{score}</Typography></td>
                                        <td><Button variant='text' color='error' email={item.email} onClick={deleteUser}>Delete</Button></td>
                                    </tr>

                                )
                            })}
                        </tbody>
                    </table>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>



                    </div>

                </div>
            </center>
        </div>
    )
}

export default Admin