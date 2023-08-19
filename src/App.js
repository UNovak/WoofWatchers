import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// custom components imports
import Navbar from './components/navBar'

// pages imports
import Login from './pages/login'
import Registration from './pages/register'
import Owner from './pages/owner'
import Guardian from './pages/guardian'
import OwnerProfile from './pages/ownerProfile'
import GuardianProfile from './pages/guardianProfile'

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/register' element={<Registration/>} />
            <Route path='/owner' element={<Owner/>} />
            <Route path='/guardian' element={<Guardian/>} />
            <Route path='/guardianProfile' element={<GuardianProfile/>} />
            <Route path='/ownerProfile' element={<OwnerProfile/>} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
