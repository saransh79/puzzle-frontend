import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Button, Menu, Toolbar, Typography, MenuItem } from '@mui/material'

const Navbar = () => {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);

        !localStorage.getItem('token') && navigate('/login')
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const logout=()=>{
        setAnchorEl(null);

        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('hints')
        navigate('/')
    }
    const username = localStorage.getItem('username');
    return (
        <AppBar position='static'>
            <Toolbar sx={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                background: '#343a40'
            }}>
                <Typography variant='h5' onClick={() => { navigate('/') }}
                sx={{cursor: 'pointer'}}>Puzzle Website</Typography>

                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    {localStorage.getItem('token') ? <><div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        margin: '0 5px',
                        background: '#fff',
                        fontSize: 18,
                        fontWeight: 600,
                        color: '#343a40'
                    }}>{username[0]}</div>
                        {username}</> : 'Login'}
                </Button>

                {localStorage.getItem('token') &&
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                }
            </Toolbar>

        </AppBar>
    )
}

export default Navbar