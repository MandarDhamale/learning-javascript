import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[error, setError] = useState('');

  const handleSubmit = async(event) => {
    event.preventDefault();
    setError('');

    try{
        const response = await fetch('http://localhost:8080/api/v1/auth/token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
        });

        if(!response.ok){
          throw new Error('Login failed');
        }

        const data = await response.json();
        console.log('Login successful:', data); 
    }catch(err){
      setError(err.message);
    }

    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
     <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default App
