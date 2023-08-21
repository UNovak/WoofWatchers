import ModeToggle from './modeToggle'
import { SupabaseClient } from '@supabase/supabase-js'
import logo from '../images/logo.png'
import Avatar from './avatar'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../supabaseClient'

const Navbar = ({ loginStatus }) => {
  const navigate = useNavigate()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    console.log('signed out')
    navigate('/')
  }

  if (loginStatus)
    return (
      <div>
        {/* <Link to={'/'}>Home</Link>
        <Link to={'/ownerProfile'}>Owner Profile</Link>
        <Link to={'/guardianProfile'}>Guardian Profile</Link>
        <ModeToggle /> */}
        <nav className='navbar navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              style={{ marginLeft: '10px' }}
            />
            <span style={{ paddingLeft: '10px' }}>WoofWatchers logged in</span>
          </a>
          <Avatar type={'navbar'} />
          <button className='btn btn-secondary' onClick={() => signOut()}>
            Sign Out
          </button>
        </nav>
      </div>
    )
  else
    return (
      <div>
        <nav className='navbar navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt=''
              style={{ marginLeft: '10px' }}
            />
            <span style={{ paddingLeft: '10px' }}>WoofWatchers</span>
          </a>
        </nav>
      </div>
    )
}

export default Navbar
