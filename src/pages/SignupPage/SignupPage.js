import React from 'react'
import { Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'
import { useState } from 'react'
import './SignupPage.css'

// const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY)

export const SignupPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function handleConfirmPassword(e) {
        setConfirmPassword(e.target.value)
    }
    async function handleSignUp() {

        // if(password === confirmPassword){
        //     const { data, error } = await supabase.auth.signUp({
        //         email: email,
        //         password: password,
        //     })
        //     console.log(data,error)
        //     alert("Verification mail has been send and then login")
        // }
        // else{
        //     alert("Password & Confirm Password didn't match")
        // }
    }
  return (
    <div>
        <div className='content-container'>
            <div className='signin-container'>
                <div className='sign-in-text'>Sign Up</div>
                <input type='text' onChange={handleEmail} value={email} placeholder='Email'></input>
                <input type='password' onChange={handlePassword} value={password} placeholder='Password'></input>
                <input type='password' onChange={handleConfirmPassword} value={confirmPassword} placeholder='Confirm Password'></input>
                <button type='submit' onClick={handleSignUp} >Sign Up</button>
                <div>Already SignUp? <Link to='/login'>Login</Link></div>
            </div>
        </div>
    </div>
  )
}
