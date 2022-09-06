import "./aboutcontent.css";

import React from 'react'
import { Link } from "react-router-dom";
import yo from "../assets/yo.png"

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    Hello, I'm Agustín from Santa Fe, Argentina. I'm 25 years old. I started to programming almost a year ago,
                    and I feel like I found something really exciting! 
                    Before starting my career as a programmer, I spent my time studying and working in 
                    economics and accounting, respectively.
                    I'm looking for my first experience in the IT world 🤞
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <img src={yo} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
