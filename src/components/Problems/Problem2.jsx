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
const Problem2 = () => {
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
        id: 2,
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
                    <Typography variant='h5' fontWeight='600'>Problem - 2</Typography>
                    <Typography variant='h5' fontWeight='600'>Score - 1</Typography>
                </Box>

                <Box >
                    <Typography variant='h4' sx={{
                        color: '#ffc107'
                    }}>There are five houses in five different colors in a row. In each house lives a person with a different nationality. The five owners drink a certain type of beverage, smoke a certain brand of cigar and keep a certain pet. No owners have the same pet, smoke the same brand of cigar or drink the same beverage.

The question is: Who owns the fish?</Typography>
<ul>
                      <li>
                        <Typography variant='h6'>The Brit lives in the red house.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The Swede keeps dogs as pets.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The Dane drinks tea.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The green house is on the left of the white house.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The green house’s owner drinks coffee.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The person who smokes Pall Mall rears birds.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The owner of the yellow house smokes Dunhill.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The man living in the center house drinks milk.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The Norwegian lives in the first house.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The man who smokes blends lives next to the one who keeps cats.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The man who keeps horses lives next to the man who smokes Dunhill.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The owner who smokes BlueMaster drinks beer.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The German smokes Prince.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The Norwegian lives next to the blue house.</Typography>
                      </li>
                      <li>
                        <Typography variant='h6'>The man who smokes blend has a neighbor who drinks water.</Typography>
                      </li>
                    </ul>
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
                        }} onClick={e => { navigate('/problem3') }}>Next Question</Button>
                </Box>
                <Box>
                    <Typography variant='h6' color='primary' sx={{ cursor: 'pointer' }} onClick={hints}>Show hint</Typography>
                    <Typography variant='h6' color='red'>{localStorage.getItem('hints')} Hints left</Typography>
                    {showHint && <Box>
                    
                        <Typography variant='h6'
                            color='red'>(A) The Green</Typography>
                        <Typography variant='h6'
                            color='red'>(B) The German</Typography>
                    </Box>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Problem2