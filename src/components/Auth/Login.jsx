import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Button, CssBaseline, TextField, Box, Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { baseUrl } from "../../services/ApiServices";

const theme = createTheme();

const Login = () => {
  const location = useNavigate()

  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(`${baseUrl}/auth/login`, data).then(res => {
        // localStorage.setItem('token', res.data._doc.token);

        localStorage.setItem('username', res.data.user.username)
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('hints' , 3)
        if (res.data.type === 'Admin') location('/admin')

        else
          location('/')


        console.log(res.data);

      }).catch(e => {
        setError(e.response.data)
      })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs">
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
          <Typography component="h1" variant="h3">
            Sign In
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
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
              Sign In
            </Button>

            <a href="/signup" style={{ textDecoration: 'none' }}>Don't have an account? Sign Up
            </a>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Login