import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AuthenticationPage.css'

const AuthenticationPage = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let validationErrors = {}

        if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format.'
        }
        if (password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters long.'
        }
        if (!isLogin && password !== confirmPassword) {
            validationErrors.confirmPassword = 'Passwords do not match.'
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        if (isLogin) {
            // Simulate successful login
            setMessage('Logged in successfully!')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        } else {
            // Simulate successful signup
            setMessage('Account created successfully!')
            setTimeout(() => {
                navigate('/')
            }, 1000)
        }

        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setErrors({})
    }

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>
                        Log in
                    </button>
                    <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>
                        Sign up
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="form">
                    <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className="error">{errors.password}</span>}

                    {!isLogin && (
                        <>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                        </>
                    )}

                    <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

                    {errors.auth && <span className="error">{errors.auth}</span>}
                    {message && <span className="message">{message}</span>}

                    <p>
                        {isLogin ? "Don't have an account?" : 'Already have an account?'}
                        <span onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', color: 'blue' }}>
                            {isLogin ? ' Signup' : ' Login'}
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default AuthenticationPage