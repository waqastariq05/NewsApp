import './App.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  const [mode, setMode] = useState('light')
  const [btnText, setBtnText] = useState('Enable Dark Mode')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtnText('Enable Light Mode')
      document.body.style.backgroundColor = 'Black'
    }
    else {
      setMode('light')
      setBtnText('Enable Dark Mode')
      document.body.style.backgroundColor = 'White'
    }
  }
  return (
    <Router>
      <Navbar title="NewsApp" mode={mode} toggleMode={toggleMode} btnText={btnText} />
      <Routes>
        <Route exact path="/" element={<News key='general' pageSize={5} categories='general' mode={mode} />} />
        <Route exact path="/entertainment" element={<News key='entertainment' pageSize={5} categories='entertainment' mode={mode} />} />
        <Route exact path="/technology" element={<News key='general' pageSize={5} categories='technology' mode={mode} />} />
        <Route exact path="/sports" element={<News key='sports' pageSize={5} categories='sports' mode={mode} />} />
      </Routes>
    </Router>
  )
}

export default App