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

import './App.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [loginStatus, setLoginStatus] = useState(false)
  const [mode, setMode] = useState('register')

  useEffect(() => {
    const handleSession = session => {
      setUser(session?.user ?? null)
      setLoginStatus(!!session)
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        handleSession(session)
      }
    )

    handleSession(supabase.auth.getSession())

    return () => {
      supabase.removeAllChannels(authListener)
    }
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar loginStatus={loginStatus} />
        <Routes>
          <Route
            path='/'
            element={<Login mode={mode} loginStatus={loginStatus} />}
          />
          <Route path='/register' element={<Registration />} />
          <Route
            path='/owner'
            element={<Owner userData={user} email='urban' />}
          />
          <Route path='/guardian' element={<Guardian userData={user} />} />
          <Route path='/profile' element={<Profile userData={user} />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
