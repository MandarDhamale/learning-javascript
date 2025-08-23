import React from 'react';
import { useState } from 'react';
import { Button, TextField, Container } from '@mui/material';
import { fetchPostData } from '../../client/client';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function AuthRegister({ isDemo = false }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();


  useEffect(() => { 
    const isLoggedIn = localStorage.getItem('token');
    if(isLoggedIn){
      navigate('/');
    }
  })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const validatePassword = () => {
  //   return password.length >= 6 && password.length <= 15;
  // };

  const handleLogin = async () => {
    setErrors({ email: '', password: '' });

    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
    }

    // if (!validatePassword()) {
    //   setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be atleast 6 characters' }));
    // }

    fetchPostData('/api/v1/auth/users/add', { email, password })
      .then((response) => {
        setLoginError('');
        navigate('/login')
      })
      .catch((error) => {
        console.log('Login error: ', error);
        setLoginError('An error occured during login');
      });

    console.log('Logging in with: ', email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={!!errors.password}
        helperText={errors.password}
      />

      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Register
      </Button>
      {loginError && <p style={{color: 'red'}}>{loginError}</p>}
    </Container>
  );
}
