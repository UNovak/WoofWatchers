/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'

// custom components imports
import Navbar from './components/navbar'

// pages imports
import Login from './views/login'
import Registration from './views/register'
import Owner from './views/owner'
import Guardian from './views/guardian'
import Profile from './views/profile'
import Search from './views/search'

import './App.css'

const App = () => {
  const [user, setUser] = useState({
    user_id: 1,
    email: 'email@email.com',
    firstName: 'klara',
    lastName: 'novak',
    address: 'mali lipoglav 1a, 1293 smarje sap, slovenia',
    mode: 'guardian',
  })

  const [mode, setMode] = useState(true)
  const [src, setSrc] = useState('')

  const handleToggle = currentMode => {
    setMode(!currentMode)
  }

  // console.log(mode)

  const [loginStatus, setLogin] = useState(true)

  const handleStatus = loginStatus => {
    setLogin(!loginStatus)
  }

  const handleUser = newUser => {
    setUser({ ...user, ...newUser })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar loginStatus={loginStatus} onLoginChange={handleStatus} />
        <Routes>
          <Route path='/' element={<Login loginStatus={loginStatus} />} />
          <Route
            path='/register'
            element={
              <Registration
                onToggle={handleToggle}
                userData={user}
                onSave={handleUser}
                mode={mode}
              />
            }
          />
          <Route path='/search' element={<Search />} />
          <Route path='/owner' element={<Owner userData={user} />} />
          <Route path='/guardian' element={<Guardian userData={user} />} />
          <Route
            path='/profile'
            element={
              <Profile
                onToggle={handleToggle}
                userData={user}
                onSave={handleUser}
                mode={mode}
              />
            }
          />
        </Routes>
      </header>
    </div>
  )
}

export default App
