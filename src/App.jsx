import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  const number = 6;
  return (
    <div>
      <div>Number {number} is {number % 2 === 0 ? "Even" : "Odd"}</div>
    </div>
  );
}

export default App    