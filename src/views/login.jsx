import React, { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'
import { useNavigate } from 'react-router-dom'

function Login({ mode, loginStatus }) {
  const navigate = useNavigate()
  supabase.auth.onAuthStateChange(async event => {
    if (event !== 'SIGNED_OUT') {
      console.log('logged in')
    } else {
      console.log('signed out')
    }
  })

  useEffect(() => {
    if (loginStatus) {
      if (mode === 'owner') navigate('/owner')
      else if (mode === 'guardian') navigate('/guardian')
      else navigate('/register')
    } else {
      navigate('/')
    }
  }, [navigate, mode, loginStatus])

  return (
    <div className='auth-container'>
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  )
}

export default Login
