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
const Problem4 = () => {
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
    id: 4,
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
          <Typography variant='h5' fontWeight='600'>Problem - 4</Typography>
          <Typography variant='h5' fontWeight='600'>Score - 1</Typography>
        </Box>

        <Box >
          <Typography variant='h4' sx={{
            color: '#ffc107'
          }}>You are a detective and you have to solve a murder case. The victim is a man who was stabbed in his apartment. There are four suspects: his wife, his maid, his cook, and his gardener. Each of them gave you an alibi:
          </Typography>
          <Typography variant='h6'>The wife said she was shopping at the mall.</Typography>
          <Typography variant='h6'>The maid said she was cleaning the bathroom.</Typography>
          <Typography variant='h6'>The cook said he was preparing dinner.
          </Typography>
          <Typography variant='h6'>
            The gardener said he was watering the plants.</Typography>
          <Typography variant='h6'>
            You found a note on the victim’s body that said “2 4 9 1 7”. You also found a calendar on the wall with some dates circled:</Typography>
          <Typography variant='h6'>
            January 15</Typography><Typography variant='h6'>
            February 19</Typography><Typography variant='h6'>
            March 18</Typography><Typography variant='h6'>
            April 12</Typography><Typography variant='h6'>
            May 16</Typography>
          <Typography variant='h6'>
            Who is the killer and how did you figure it out?</Typography>
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
            }} onClick={e => { navigate('/stats') }}>Next Question</Button>
        </Box>
        <Box>
          <Typography variant='h6' color='primary' sx={{ cursor: 'pointer' }} onClick={hints}>Show hint</Typography>
          <Typography variant='h6' color='red'>{localStorage.getItem('hints')} Hints left</Typography>
          {showHint && <Box>
            <Typography variant='h6'
              color='red'>(A) Gardener</Typography>
            <Typography variant='h6'
              color='red'>(B) Cook</Typography>
          </Box>
          }
        </Box>
      </Box>
    </div>
  )
}

export default Problem4