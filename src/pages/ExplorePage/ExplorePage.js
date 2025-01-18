import { React, useState } from 'react'
import './ExplorePage.css'
import image from './images/company.svg'

const ExplorePage = () => {

    const [YCombinator, setYCombinator] = useState([
        {
            name: 'Y Combinator 1',
            description: 'Y Combinator is a startup accelerator that invests in a wide range of startups. Our portfolio includes companies like Airbnb, Dropbox, and Stripe. Join us in supporting the next generation of founders.',
            image: image,
        },
        {
            name: 'Y Combinator 2',
            description: 'Y Combinator is known for its successful track record of investing in early-stage startups. Our network of founders and investors provides valuable resources and support. Invest in the YC community.',
            image: image,
        },
        {
            name: 'Y Combinator 3',
            description: 'Y Combinator is a global community of entrepreneurs and innovators. Our programs and events connect founders with mentors and investors. Join us in building the future.',
            image: image,
        },
        {
            name: 'Y Combinator 4',
            description: 'Y Combinator is committed to helping startups grow and succeed. Our team of experts provides guidance and mentorship to founders. Invest in the YC ecosystem.',
            image: image,
        },
        {
            name: 'Y Combinator 5',
            description: 'Y Combinator is a launchpad for early-stage startups. Our accelerator program equips founders with the tools and resources needed to scale their businesses. Join us in accelerating innovation.',
            image: image,
        },
    ]);

    const [technology, setTechnology] = useState([
        {
            name: 'Technology 1',
            description: 'Technology 1 is a software company that specializes in building innovative products. Our team of engineers and designers create cutting-edge solutions for businesses. Join us in shaping the future of technology.',
            image: image,
        },
        {
            name: 'Technology 2',
            description: 'Technology 2 is a tech startup that focuses on developing AI-powered applications. Our mission is to make artificial intelligence accessible and affordable for all. Invest in the future of AI.',
            image: image,
        },
        {
            name: 'Technology 3',
            description: 'Technology 3 is a cybersecurity firm that provides advanced solutions to protect data and privacy. Our team of experts ensures that your information is secure. Trust us to safeguard your digital assets.',
            image: image,
        },
        {
            name: 'Technology 4',
            description: 'Technology 4 is a cloud computing company that offers scalable and reliable services. Our platform enables businesses to store and access data securely. Invest in cloud technology.',
            image: image,
        },
        {
            name: 'Technology 5',
            description: 'Technology 5 is a blockchain startup that is revolutionizing the finance industry. Our decentralized platform provides secure and transparent transactions. Join us in the blockchain revolution.',
            image: image,
        },
    ]);

    const [B2B, setB2B] = useState([
        {
            name: 'B2B 1',
            description: 'B2B 1 is a SaaS company that offers business solutions for enterprises. Our software streamlines operations and enhances productivity. Join us in transforming the B2B sector.',
            image: image,
        },
        {
            name: 'B2B 2',
            description: 'B2B 2 is a marketing platform that helps businesses reach their target audience. Our tools enable companies to create and manage marketing campaigns effectively. Invest in B2B marketing.',
            image: image,
        },
        {
            name: 'B2B 3',
            description: 'B2B 3 is a data analytics firm that provides insights and intelligence to businesses. Our analytics platform helps companies make informed decisions. Trust us to deliver data-driven solutions.',
            image: image,
        },
        {
            name: 'B2B 4',
            description: 'B2B 4 is a fintech company that offers financial services to businesses. Our platform simplifies payment processing and financial management. Invest in B2B finance.',
            image: image,
        },
        {
            name: 'B2B 5',
            description: 'B2B 5 is a logistics company that specializes in supply chain management. Our solutions optimize operations and reduce costs for businesses. Join us in transforming the logistics industry.',
            image: image,
        },
    ])

    const [B2C, setB2C] = useState([
        {
            name: 'B2C 1',
            description: 'B2C 1 is an e-commerce platform that connects buyers and sellers globally. Our marketplace offers a wide range of products and services. Join us in the world of online shopping.',
            image: image,
        },
        {
            name: 'B2C 2',
            description: 'B2C 2 is a direct-to-consumer brand that creates innovative products for consumers. Our mission is to provide high-quality and affordable goods. Invest in B2C brands.',
            image: image,
        },
        {
            name: 'B2C 3',
            description: 'B2C 3 is a lifestyle brand that focuses on health and wellness. Our products promote self-care and mindfulness. Join us in living a healthy lifestyle.',
            image: image,
        },
        {
            name: 'B2C 4',
            description: 'B2C 4 is a food delivery service that offers convenient and affordable meals. Our platform connects customers with local restaurants. Invest in the future of food delivery.',
            image: image,
        },
        {
            name: 'B2C 5',
            description: 'B2C 5 is a travel company that provides unique and memorable experiences. Our tours and activities cater to travelers of all ages. Join us in exploring the world.',
            image: image,
        },
    ]);

    const categories = [
        {
            name: 'Y Combinator',
            startups: YCombinator,
        },
        {
            name: 'Technology',
            startups: technology,
        },
        {
            name: 'B2B',
            startups: B2B,
        },
        {
            name: 'B2C',
            startups: B2C,
        },
    ]
    return (
        <div className='explore-page'>
            <div className='heading'>Invest in founders building the future</div>
            <div className='categories'>
                {categories.map((category, index) => {
                    return (
                        <div className='category' key={index}>
                            <div className='category-name'>{category.name}</div>
                            <div className='startup-cards'>
                                {category.startups.map((startup, index) => {
                                    return (
                                        <div className='startup-card' key={index}>
                                            <img src={startup.image} alt='' />
                                            <div className='startup-details'>
                                                <div className='startup-name'>{startup.name}</div>
                                                <div className='startup-description'>{startup.description}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className='startup-cards'>
                {startups.map((startup, index) => {
                    return (
                        <div className='startup-card' key={index}>
                            <img src={startup.image} alt='' />
                            <div className='startup-details'>
                                <div className='startup-name'>{startup.name}</div>
                                <div className='startup-description'>{startup.description}</div>
                            </div>
                        </div>
                    )
                })}
            </div> */}
        </div>
    )
}

export default ExplorePage