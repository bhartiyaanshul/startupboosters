import React, { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'
import './AdminPanel.css'

const AdminPanel = () => {
    const [activeUsers, setActiveUsers] = useState(10)
    const [listedCompanies, setListedCompanies] = useState(34)
    const [fundraised, setFundraised] = useState(32000)
    const [raiseMoneyQuestions, setRaiseMoneyQuestions] = useState('')
    const [landingPageImage, setLandingPageImage] = useState('')
    const [loading, setLoading] = useState(true)


    const handleRaiseMoneyQuestionsChange = (e) => {
        setRaiseMoneyQuestions(e.target.value)
    }

    const handleLandingPageImageChange = (e) => {
        setLandingPageImage(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Raise Money Questions:', raiseMoneyQuestions)
        console.log('Landing Page Image:', landingPageImage)
    }

    return (
        <div className="admin-dashboard">
            <h2>Admin Panel</h2>
            <div className="admin-section">
                <h3>Active Users</h3>
                <p>Number of active users: {activeUsers}</p>
            </div>
            <div className="admin-section">
                <h3>Listed Companies</h3>
                <p>Number of listed companies: {listedCompanies}</p>
            </div>
            <div className="admin-section">
                <h3>Funds Raised</h3>
                <p>Amount of fund raised: ${fundraised}</p>
            </div>
            <div className="admin-section">
                <h3>Update Raise Money Form Questions</h3>
                <form onSubmit={handleFormSubmit}>
                    <textarea
                        value={raiseMoneyQuestions}
                        onChange={handleRaiseMoneyQuestionsChange}
                        placeholder="Enter new questions for the raise money form"
                    />
                    <button type="submit">Update Questions</button>
                </form>
            </div>
            <div className="admin-section">
                <h3>Update Landing Page Image</h3>
                <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        value={landingPageImage}
                        onChange={handleLandingPageImageChange}
                        placeholder="Enter new image URL for the landing page"
                    />
                    <button type="submit">Update Image</button>
                </form>
            </div>
        </div>
    )
}

export default AdminPanel
