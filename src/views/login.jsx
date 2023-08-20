import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../supabaseClient'

const Login = () => {
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
