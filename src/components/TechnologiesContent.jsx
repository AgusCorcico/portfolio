import React from 'react'
import "./technologiescontent.css";
import html from "../assets/html.png"
import css3 from "../assets/css3.png"
import javascript from "../assets/javascript.png"
import reactImg from "../assets/react.png"
import reduxImg from "../assets/redux.png"
import nodejs from "../assets/nodejs.png"
import postgresql from "../assets/postgresql.png"
import sql from "../assets/sql.png"


const TechnologiesContent = () => {
    return (
        <div className="tech-img-container">
            <div className="logo-info">
                <p>HTML</p>
                <img src={html} alt=""/>
            </div>
            <div className="logo-info">
                <p>CSS3</p>
                <img src={css3} alt=""/>
            </div>
            <div className="logo-info">
                <p>JAVASCRIPT</p>
                <img src={javascript} alt=""/>
            </div>
            <div className="logo-info">
                <p>REACT</p>
                <img src={reactImg} alt=""/>
            </div>
            <div className="logo-info">
                <p>REDUX</p>
                <img src={reduxImg} alt=""/>
            </div>
            <div className="logo-info">
                <p>NODE JS</p>
                <img src={nodejs} alt=""/>
            </div>
            <div className="logo-info">
                <p>POSTGRESQL</p>
                <img src={postgresql} alt=""/>
            </div>
            <div className="logo-info">
                <p>SQL</p>
                <img src={sql} alt=""/>
            </div>
        </div>
    )
}

export default TechnologiesContent