import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// custom components imports
import Navbar from './components/navbar'

// pages imports
import Login from './views/login'
import Registration from './views/register'
import Owner from './views/owner'
import Guardian from './views/guardian'
import Profile from './views/profile'

import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/owner' element={<Owner />} />
            <Route path='/guardian' element={<Guardian />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </header>
      </div>
    </Router>
  )
}

export default App
