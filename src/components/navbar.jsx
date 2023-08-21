import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import logo from '../images/logo.png'
import Avatar from './avatar'
import './components.css'

const Navbar = ({ src, loginStatus, onLoginChange }) => {
  const navigate = useNavigate()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log('signed out')
    onLoginChange(loginStatus)

    navigate('/')
  }

  const getnavbar = () => {
    if (loginStatus) {
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
            <Link to={'/search'} className='btn btn-outline-info m-2'>
              Available Services
            </Link>
            <Link to={'/owner'} className='btn btn-outline-info m-2'>
              MyAnimals
            </Link>
            <Link to={'/guardian'} className='btn btn-outline-info m-2'>
              MyServices
            </Link>
            <button
              className='btn btn-outline-info m-2'
              onClick={() => signOut()}>
              Sign Out
            </button>
            <Link to={'/profile'} className='profile-avatar'>
              <Avatar src={src} type={'navbar'} />
            </Link>
          </div>
        </nav>
      )
    } else
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
        </nav>
      )
  }

  return <>{getnavbar()}</>
}

export default Navbar
