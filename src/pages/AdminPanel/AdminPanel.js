import React, { useState } from 'react'
import { Line, Bar, Pie } from 'react-chartjs-2'
import 'chart.js/auto'
import './AdminPanel.css'

const AdminPanel = () => {
    const [activeUsers, setActiveUsers] = useState(10)
    const [listedCompanies, setListedCompanies] = useState(34)
    const [fundraised, setFundraised] = useState(32000)
    const [amountInvested, setAmountInvested] = useState(15000)
    const [raiseMoneyQuestions, setRaiseMoneyQuestions] = useState('')
    const [landingPageImage, setLandingPageImage] = useState('')
    const [activeSection, setActiveSection] = useState('activeUsers')
    const [newFunds, setNewFunds] = useState('')

    const handleRaiseMoneyQuestionsChange = (e) => {
        setRaiseMoneyQuestions(e.target.value)
    }

    const handleLandingPageImageChange = (e) => {
        setLandingPageImage(e.target.value)
    }

    const handleNewFundsChange = (e) => {
        setNewFunds(e.target.value)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('Raise Money Questions:', raiseMoneyQuestions)
        console.log('Landing Page Image:', landingPageImage)
    }

    const handleAddFundsSubmit = (e) => {
        e.preventDefault()
        setFundraised(fundraised + parseInt(newFunds))
        setNewFunds('')
    }

    const userGrowthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Active Users',
                data: [20, 40, 20, 12, 55, 10],
                fill: false,
                backgroundColor: 'rgb(75, 192, 192)',
                borderColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    }

    const companyGrowthData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Listed Companies',
                data: [15, 7, 21, 54, 27, 38],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    }

    const fundsRaisedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Funds Raised',
                data: [5000, 10000, 15000, 20000, 25000, 32000],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
            },
        ],
    }

    const amountInvestedData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Amount Invested',
                data: [2000, 4000, 6000, 8000, 10000, 15000],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }

    return (
        <div className="admin-dashboard">
            <div className="sidebar">
                <ul>
                    <li className={activeSection === 'activeUsers' ? 'active' : ''} onClick={() => setActiveSection('activeUsers')}>Active Users</li>
                    <li className={activeSection === 'listedCompanies' ? 'active' : ''} onClick={() => setActiveSection('listedCompanies')}>Listed Companies</li>
                    <li className={activeSection === 'fundraised' ? 'active' : ''} onClick={() => setActiveSection('fundraised')}>Funds Raised</li>
                    <li className={activeSection === 'amountinvested' ? 'active' : ''} onClick={() => setActiveSection('amountinvested')}>Amount Invested</li>
                    <li className={activeSection === 'raiseMoneyQuestions' ? 'active' : ''} onClick={() => setActiveSection('raiseMoneyQuestions')}>Update Raise Money Questions</li>
                    <li className={activeSection === 'landingPageImage' ? 'active' : ''} onClick={() => setActiveSection('landingPageImage')}>Update Landing Page Image</li>
                </ul>
            </div>
            <div className="main-content">
                {activeSection === 'activeUsers' && (
                    <div className="section">
                        <h3>Active Users</h3>
                        <p>Number of active users: {activeUsers}</p>
                        <div className="user-details">
                            <p>New Users This Month: 15</p>
                            <p>Total Users: 150</p>
                        </div>
                        <div className="chart-container">
                            <Line data={userGrowthData} />
                        </div>
                    </div>
                )}
                {activeSection === 'listedCompanies' && (
                    <div className="section">
                        <h3>Listed Companies</h3>
                        <p>Number of listed companies: {listedCompanies}</p>
                        <div className="company-details">
                            <p>New Companies This Month: 5</p>
                        </div>
                        <div className="chart-container">
                            <Bar data={companyGrowthData} />
                        </div>
                    </div>
                )}
                {activeSection === 'fundraised' && (
                    <div className="section">
                        <h3>Funds Raised</h3>
                        <p>Amount of fund raised: ${fundraised}</p>
                        <div className="chart-container">
                            <Bar data={fundsRaisedData} />
                        </div>
                    </div>
                )}
                {activeSection === 'amountinvested' && (
                    <div className="section">
                        <h3>Amount Invested</h3>
                        <p>Amount of fund invested: ${amountInvested}</p>
                        <div className="chart-container">
                            <Pie data={amountInvestedData} />
                        </div>
                    </div>
                )}
                {activeSection === 'raiseMoneyQuestions' && (
                    <div className="section">
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
                )}
                {activeSection === 'landingPageImage' && (
                    <div className="section">
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
                )}
            </div>
        </div>
    )
}

export default AdminPanel
