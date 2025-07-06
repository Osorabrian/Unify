import React, {  useState } from 'react';
import { Box, TextField, Button, Container, Typography  } from '@mui/material';
import { useNavigate } from 'react-router';

export default function CreateAccount() {
    const [formData, setFormData] = useState({name: '', email:'', password: '', confirmPassword: ''})
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        navigate('/login');
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <Container component="main" maxwidth="xs">
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5" align='center' gutterBottom>
                    Create Account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={formData.name}
                onChange={handleChange}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={formData.email}
                onChange={handleChange}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
                />
                <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                className="password"
                autoComplete="current-password"
                value={formData.currentPassword}
                onChange={handleChange}
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Create Account</Button>
                </Box>
            </Box>
        </Container>
    )
}

