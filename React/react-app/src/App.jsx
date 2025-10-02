import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const fruitlist = ['apple', 'banana', 'cherry'];


  return (
  
    <ul>
      {fruitlist.map(fruit => <li key={fruit}>{fruit}</li>)}
    </ul>
  
  );

}

export default App
