import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import React from "react";
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

export default function App() {
    return (
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>
                    Personal Digital Assistance
                    </p>
                </div>
            </section>

        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard 
                    title = "Alexa" 
                    handle = "@alexa99" 
                    image={AlexaImage}
                    description = "Alexa was created by Amazon"
                    />
                    </div>
                    <div className='column is-4'>
                    <ProfileCard 
                    title = "Cortana" 
                    handle = "@Cortana32" 
                    image={CortanaImage}
                    description = "Alexa was created by Microsoft"
                    />
                    </div>
                    <div className='column is-4'>
                    <ProfileCard 
                    title = "Siri" 
                    handle = "@siri01" 
                    image={SiriImage}
                    description = "Alexa was created by Apple and is being fazed out"
                    />
                    </div>
                </div>
            </section>
        </div>
        </div>
    )
}
