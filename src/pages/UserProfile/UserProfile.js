import React, { useEffect, useState } from 'react'
import supabase from '../../supabaseClient'
import './UserProfile.css'

const UserProfile = () => {
    const [user, setUser] = useState(null)
    const [investedCompanies, setInvestedCompanies] = useState([])
    const [createdCompanies, setCreatedCompanies] = useState([])
    const [selectedCompany, setSelectedCompany] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchUserData = async () => {
            // const { data: userData, error: userError } = await supabase.auth.getUser()
            // if (userError) {
            //     console.error('Error fetching user data:', userError)
            //     // Use dummy data if there's an error
            setUser({
                profile_picture: '',
                name: 'Alok Sharma',
                email: 'alok.sharma@example.com',
            })
            // } else {
            //     setUser(userData.user)
            // }
        }

        const fetchInvestedCompanies = async (userId) => {
            // const { data, error } = await supabase
            //     .from('investments')
            //     .select('company_id, amount, companies(name, description, longDesc, image, founders, overview, mission, vision, services, features)')
            //     .eq('user_id', userId)
            // if (error) {
            // console.error('Error fetching invested companies:', error)
            // Use dummy data if there's an error
            setInvestedCompanies([
                { company_id: 1, amount: 500, companies: { name: 'Tech Innovators', description: 'A leading tech company specializing in AI and machine learning solutions.', longDesc: 'Tech Innovators is at the forefront of AI and machine learning, providing cutting-edge solutions to businesses worldwide.', image: 'https://fakeimg.pl/720x720/?text=TechInnovators&font=lobster', founders: ['John Doe', 'Jane Smith'], overview: 'Founded in 2015, Tech Innovators is based in Silicon Valley, California.', mission: 'To revolutionize technology through AI.', vision: 'A world where AI enhances every aspect of life.', services: ['AI Solutions', 'Machine Learning Consulting'], features: ['Advanced Algorithms', 'Real-time Data Processing'] } },
                { company_id: 2, amount: 300, companies: { name: 'Green Energy Corp', description: 'A renewable energy company focused on solar and wind power.', longDesc: 'Green Energy Corp is dedicated to providing sustainable energy solutions through solar and wind power.', image: 'https://fakeimg.pl/720x720/?text=GreenEnergy&font=lobster', founders: ['Alice Johnson', 'Bob Brown'], overview: 'Founded in 2018, Green Energy Corp is headquartered in Austin, Texas.', mission: 'To create a sustainable future through renewable energy.', vision: 'A world powered by clean energy.', services: ['Solar Power Solutions', 'Wind Energy Consulting'], features: ['Eco-friendly', 'Cost-effective'] } },
                { company_id: 3, amount: 700, companies: { name: 'HealthTech Solutions', description: 'A healthcare startup developing telemedicine platforms.', longDesc: 'HealthTech Solutions is transforming healthcare with innovative telemedicine platforms.', image: 'https://fakeimg.pl/720x720/?text=HealthTech&font=lobster', founders: ['Carol White', 'David Black'], overview: 'Founded in 2020, HealthTech Solutions is based in New York City.', mission: 'To improve healthcare accessibility through technology.', vision: 'A world where healthcare is accessible to all.', services: ['Telemedicine Platforms', 'Remote Patient Monitoring'], features: ['User-friendly', 'Secure'] } }
            ])
            // } else {
            //     setInvestedCompanies(data)
            // }
        }

        const fetchCreatedCompanies = async (userId) => {
            // const { data, error } = await supabase
            //     .from('companies')
            //     .select('*')
            //     .eq('creator_id', userId)
            // if (error) {
            // console.error('Error fetching created companies:', error)
            // Use dummy data if there's an error
            setCreatedCompanies([
                { id: 1, name: 'EduTech Innovations', description: 'An edtech company providing online learning solutions.', longDesc: 'EduTech Innovations offers a comprehensive suite of online learning tools and resources for students and educators.', image: 'https://fakeimg.pl/720x720/?text=EduTech&font=lobster', founders: ['Emily Green', 'Michael Brown'], overview: 'Founded in 2017, EduTech Innovations is based in San Francisco, California.', mission: 'To enhance education through technology.', vision: 'A world where education is accessible to all.', services: ['Online Courses', 'Virtual Classrooms'], features: ['Interactive Content', 'Personalized Learning Paths'] },
                { id: 2, name: 'FinTech Pioneers', description: 'A fintech startup offering innovative financial services.', longDesc: 'FinTech Pioneers provides cutting-edge financial solutions, including digital banking, investment platforms, and payment processing.', image: 'https://fakeimg.pl/720x720/?text=FinTech&font=lobster', founders: ['Sarah White', 'James Black'], overview: 'Founded in 2019, FinTech Pioneers is headquartered in New York City.', mission: 'To revolutionize finance through technology.', vision: 'A world where financial services are seamless and accessible.', services: ['Digital Banking', 'Investment Platforms'], features: ['Secure Transactions', 'User-friendly Interface'] }
            ])
            // } else {
            //     setCreatedCompanies(data)
            // }
        }

        const fetchData = async () => {
            await fetchUserData()
            await fetchInvestedCompanies()
            await fetchCreatedCompanies()
            setLoading(false)
        }

        fetchData()
    }, [])

    const handleCompanyClick = (company) => {
        setSelectedCompany(company)
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="user-profile">
            <div className="sidebar">
                {user && (
                    <>
                        <div
                            className="profile-picture"
                            style={{
                                backgroundImage: user.profile_picture ? `url(${user.profile_picture})` : 'none',
                                backgroundColor: user.profile_picture ? 'transparent' : '#16263D',
                            }}
                        ></div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </>
                )}
            </div>
            <div className="main-content">
                <div className="section">
                    <h3>Invested Companies</h3>
                    <ul>
                        {investedCompanies.map((company) => (
                            <li key={company.company_id} onClick={() => handleCompanyClick(company)}>
                                <h4>{company.companies.name}</h4>
                                <p>{company.companies.description}</p>
                                <p><strong>Amount Invested:</strong> ${company.amount}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                {selectedCompany && selectedCompany.companies && (
                    <div className="section">
                        <h1>Selected Company Details</h1>
                        <h3>{selectedCompany.companies.name}</h3>
                        <p>{selectedCompany.companies.description}</p>
                        <p>{selectedCompany.companies.longDesc}</p>
                        <p><strong>Founders:</strong> {selectedCompany.companies.founders.join(', ')}</p>
                        <p><strong>Overview:</strong> {selectedCompany.companies.overview}</p>
                        <p><strong>Mission:</strong> {selectedCompany.companies.mission}</p>
                        <p><strong>Vision:</strong> {selectedCompany.companies.vision}</p>
                        <p><strong>Services:</strong> {selectedCompany.companies.services.join(', ')}</p>
                        <p><strong>Features:</strong> {selectedCompany.companies.features.join(', ')}</p>
                        <p><strong>Amount Invested:</strong> ${selectedCompany.amount}</p>
                    </div>
                )}
                <div className="section">
                    <h3>Created Companies</h3>
                    <ul>
                        {createdCompanies.map((company) => (
                            <li key={company.id} onClick={() => handleCompanyClick(company)}>
                                <h4>{company.name}</h4>
                                <p>{company.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default UserProfile
