import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar'
import { baseUrl } from '../../services/ApiServices';
import styled from '@emotion/styled';

const Box = styled('div')({
    margin: '20px 0'
})
const Problem3 = () => {
    const navigate = useNavigate()
    const [data, setData] = useState('')
    const [response, setResponse] = useState('');
    const [error, setError] = useState('')
    const [showHint, setShowHint] = useState(false)

    const handleChange = (e) => {
        const { value } = e.target;
        setData(value)
    }
    const userAnswer = {
        username: localStorage.getItem('username'),
        id: 3,
        answer: data
    }

    const handleSubmit = async () => {
        setError('')
        setResponse('')
        await axios.post(`${baseUrl}/quiz/check`, userAnswer).then(res => {
            console.log(res);
            setResponse(res.data)
        }).catch(err => {
            console.log(err.response.data);
            setError(err.response.data)
        })
    }
    const hints = () => {
        setShowHint(true)
        const presentHints = localStorage.getItem('hints');
        if (presentHints <= 0) {
            localStorage.setItem('hints', 3)
            navigate('/stats')
        }
        else
            localStorage.setItem('hints', presentHints - 1)
    }
    return (
        <div>
            <Navbar />
            <Box style={{
                margin: '30px 5%'
            }}>
                <Box style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#343a40'
                }}>
                    <Typography variant='h5' fontWeight='600'>Problem - 3</Typography>
                    <Typography variant='h5' fontWeight='600'>Score - 1</Typography>
                </Box>

                <Box >
                    <Typography variant='h4' sx={{
                        color: '#ffc107'
                    }}>You are in a room with three doors. One door leads to freedom, one door leads to a lion that will eat you, and one door leads to a fire that will burn you. There are also three signs on the wall, each with a statement about the doors. However, only one of the signs is true, and the other two are false. The signs are:
</Typography>
<Typography variant='h6'>The door with the lion is next to the door with the fire.</Typography>
<Typography variant='h6'>The door with the fire is not in the middle.</Typography>
<Typography variant='h6'>The door with freedom is not on the right.</Typography>
<Typography variant='h6'>
Which door should you choose to escape?</Typography>

                </Box>
                <Box style={{
                    color: 'red'
                }}>
                    <Typography variant='h5' color='green'>{response}</Typography>
                    <Typography variant='h5' color='red'>{error}</Typography>
                </Box>

                <Box style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div>
                        <TextField type='text' placeholder='Enter the answer' onChange={handleChange} />
                        <Button variant='outlined'
                            sx={{
                                padding: '15px 10px', margin: '0 10px'
                            }} onClick={handleSubmit}>Submit</Button>
                    </div>
                    <Button variant='outlined'
                        sx={{
                            padding: '15px 10px'
                        }} onClick={e => { navigate('/problem4') }}>Next Question</Button>
                </Box>
                <Box>
                    <Typography variant='h6' color='primary' sx={{ cursor: 'pointer' }} onClick={hints}>Show hint</Typography>
                    <Typography variant='h6' color='red'>{localStorage.getItem('hints')} Hints left</Typography>
                    {showHint && <Box>
                        <Typography variant='h6'
                            color='red'>(A) Third</Typography>
                        <Typography variant='h6'
                            color='red'>(B) Middle</Typography>
                    </Box>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Problem3