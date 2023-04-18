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
const Problem5 = () => {
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
    id: 5,
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
          <Typography variant='h5' fontWeight='600'>Problem - 5</Typography>
          <Typography variant='h5' fontWeight='600'>Score - 1</Typography>
        </Box>

        <Box >
          <Typography variant='h5' sx={{
            color: '#ffc107'
          }}>A renowned chemist is found dead in his lab. There is no clear evidence except a piece of paper lying by the body. The paper is blank other than the name of five elements scrawled across it hastily:
          </Typography>
          <Typography variant='h6'>
            Nickel</Typography><Typography variant='h6'>
            Carbon</Typography><Typography variant='h6'>
            Oxygen</Typography><Typography variant='h6'>
            Lanthanum</Typography><Typography variant='h6'>
            Sulfur</Typography>
          <Typography variant='h6'>
            The guard reported that three people visited the chemist that day – his sister, Laura; his colleague, Nicolas; and his wife, Tessa. The criminal was arrested immediately. Who was it?</Typography>
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
              padding: { xs: '5px', sm: '15px 10px' }
            }} onClick={e => { navigate('/stats') }}>See Score</Button>
        </Box>
        <Box>
          <Typography variant='h6' color='primary' sx={{ cursor: 'pointer' }} onClick={hints}>Show hint</Typography>
          <Typography variant='h6' color='red'>{localStorage.getItem('hints')} Hints left</Typography>
          {showHint && <Box>
            <Typography variant='h6'
              color='red'>(A) Tessa</Typography>
            <Typography variant='h6'
              color='red'>(B) Nicolas</Typography>
          </Box>
          }
        </Box>
      </Box>
    </div>
  )
}

export default Problem5