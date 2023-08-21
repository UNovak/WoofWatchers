import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import logo from '../images/logo.png'
import Avatar from './avatar'
import './components.css'

const Navbar = ({ src }) => {
  const navigate = useNavigate()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log('signed out')
    navigate('/')
  }

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <a className='navbar-brand' href='/'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='Logo'
          />
          <span className='navbar-brand-text'>WoofWatchers</span>
        </a>
      </div>
      <div className='navbar-right'>
        <Link to={'/search'} className='btn btn-primary mr-2'>
          Search
        </Link>
        <Link to={'/profile'} className='btn btn-primary mr-2'>
          Profile
        </Link>
        <button className='btn btn-secondary mr-2' onClick={() => signOut()}>
          Sign Out
        </button>
        <Link to={'/profile'} className='profile-avatar'>
          <Avatar src={src} type={'navbar'} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
