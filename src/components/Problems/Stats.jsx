import { Button, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../services/ApiServices';
const Stats = () => {
    const navigate = useNavigate()
    const [score, setScore] = useState('');

    // console.log(username);
    useEffect(() => {
        const username = localStorage.getItem('username')
        async function getScore() {
            await axios.post(`${baseUrl}/user/getscore`, { username }).then(res => {
                console.log(res.data);
                setScore(res.data)
            })
        }
        getScore()
    }, [])

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Typography variant='h2' color=''>Your score is {score}</Typography>
            <Button variant='outlined' size='large' onClick={() => {
                navigate('/')
            }}>Go to Homepage
            </Button>
        </div >
    )
}

export default Stats