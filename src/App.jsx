import { useState } from "react";

import Index from './Components/Index.jsx'
import Navbar from './Components/Navbar.jsx'

const App = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    // setMode(mode === 'light' ? 'dark' : 'light');
    if (mode ==='light') {
      setMode('dark')
      document.body.style.background = '#024f6d'
      document.body.style.color = '#fff'
    } else {
      setMode('light')
      document.body.style.background = '#fff'
      document.body.style.color = '#000'
    }
};
  
  return (
    <>
      <Navbar toggleMode ={toggleMode} mode={mode} />
      <Index />
    </>
  )
}

export default App
