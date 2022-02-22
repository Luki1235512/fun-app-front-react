import React from 'react'
import "./Hero.css"

const Hero = ({imageSrc}) => {
    return <div className="hero">
        <img src={imageSrc} alt="Code" className="hero-image" />
        <h1 className="hero-title">Lorem Ipsum</h1>
    </div>
}

export default Hero
