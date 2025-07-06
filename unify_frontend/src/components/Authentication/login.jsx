import * as React from 'react';
import { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Alert} from '@mui/material';
import { Link } from 'react-router';


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        try {
        // Here you would typically make an API call to your Django backend
        console.log('Signing in with:', formData);
        
        // For now, just show an alert like the original code
        alert(
            `Signing in with credentials: ${formData.email}, ${formData.password}`
        );
        } catch {
        setError('Login failed. Please try again.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5" align="center" gutterBottom>
                Sign In
            </Typography>
            
            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                {error}
                </Alert>
            )}
            
            <Box component="form" onSubmit={handleSubmit} noValidate>
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
                <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
            </Box>
        </Box>

        Don't have an account? <Link to="/register">Sign Up</Link>
        </Container>
    );
}
