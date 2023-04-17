import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from 'axios'
import { Button, CssBaseline, TextField, Box, Typography, Container } from '@mui/material';
import { baseUrl } from "../../services/ApiServices";

const Signup = () => {
  const location = useNavigate()
  const [data, setData] = useState({});
  const [error, setError] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${baseUrl}/auth/signup`, data).then(res => {
        location('/login')
      }).catch(e => {
        console.log(e.response.data);
        setError(e.response.data);
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh'
          }}
        >

          <Typography variant="h3">
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              name="username"
              type='text'
              autoComplete="username"
              autoFocus
              onChange={handleChange}
              value={data.username || ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              type='email'
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={data.email || ''}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handleChange}
              value={data.password || ''}
            />
            <Typography variant="h7" color='red'>{error}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, padding: '10px 0' }}
              onClick={handleSubmit}
            >
              Sign Up
            </Button>

            <a href="/login" style={{ textDecoration: 'none' }}>Click here to Sign in
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Signup