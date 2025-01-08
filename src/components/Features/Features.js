import React, { useState } from 'react'
import './Features.css'
import featureimg from './dasboard design.png'
import arrowwhite from './Path 627.png'
import arrowblack from './Path 627 (1).png'

export const Features = () => {
    const [feature] = useState([
        {
            title: "Direct Connections",
            desc: "No logins or anything is needed. Directly connect with everyone with only one permission. Let us control your business world for you. Easy, customizable and quick way of connecting with others"
        },
        {
            title: "Don`t let the team stagenate",
            desc: "Don`t let the team get board by unnecessary messages. Let your team stay connected in the way they should- only important things. Rest could stay in other apps, we take the important part."
        },
        {
            title: "Complete Automated",
            desc: "Your members need to stay active? You can craete polls, feedback papers and a lot more stuff our widgets to keep them connected and everything with one click"
        }
    ])

    return (
        <div className='features-section'>
            <div className='features-content'>
                <div className='features-content-title'>Let Your Newsletter Do the talk</div>
                <div className='features-content-subtext'>
                    Let`s clam it , today we don`t the time to talk or time to scroll over groups or other <br />
                    plateforms . So it is better for your automated newsletter to do the tlk. What cloud be <br />
                    done better? Stay connected to your community.
                </div>
            </div>
            <img className="feature-img" src={featureimg} alt='' />
            <div className='features'>
                {
                    feature.map((value, index) => {
                        return (
                            <div key={index} className='feature ' style={{
                                'background-color': index === 1 ? '#1668E8' : '#F7F7F7',
                                'color': index === 1 ? '#FFFFFF' : '#000000'
                            }}>
                                <div className='arror-circle' style={{
                                    'background-color': index === 1 ? '#1668E8' : '#F7F7F7'
                                }}>
                                    {
                                        index === 1 ?
                                            <img src={arrowwhite} alt=''></img> :
                                            <img src={arrowblack} alt=''></img>
                                    }

                                </div>
                                <div className='feature-title'>{value.title}</div>
                                <div className='feature-desc'>{value.desc}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
