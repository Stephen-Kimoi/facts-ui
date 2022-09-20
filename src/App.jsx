import './App.css'
import { useState } from 'react'
import Main from './components/Main /Main'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [darkMode, setDarkMode] = useState(false) 

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
  } 

  return (
    <div className="container">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/> 
        <Main darkMode={darkMode}/> 
    </div>
  )
}

export default App
