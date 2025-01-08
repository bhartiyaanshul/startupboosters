import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import './LoginPage.css'

// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

export const LoginPage = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => setEmail(e.target.value)

    const handlePassword = (e) => setPassword(e.target.value)

    async function handleLogin() {
        // const { data, error } = await supabase.auth.signInWithPassword({
        //     email: email,
        //     password: password,
        // })
        // console.log(error)

        // if (!data.user) {
        //     alert('Invalid login credentials')
        // }
        // else {
        //     navigate("/")
        // }
    }
  return (
    <div className='login-page'>
        <div className='content-container'>
            <div className='signin-container'>
                <div className='sign-in-text'>Sign In</div>
                <input type='text' onChange={handleEmail} value={email} placeholder='Email' required></input>
                <input type='password' onChange={handlePassword} value={password} placeholder='Password'></input>
                <button type='submit' onClick={handleLogin} >LOGIN</button>
                <div>Don't have Account? <Link to='/signup'>SignUp</Link></div>
            </div>
        </div>
    </div>
  )
}
