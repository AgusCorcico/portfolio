import "./workcard.css";
import React from 'react';

const Workcard = (props) => {
    return (
        <div className="project-card">
        <img src={props.imgsrc} alt="" />
        <h2 className="project-title">{props.title}</h2>
        <div className="project-details">
            <p>{props.text}</p>
            <div className="project-btns">
                <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer">View</a>
                <a href={props.source} className="btn" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
        </div>
    </div>
    )
}

export default Workcard