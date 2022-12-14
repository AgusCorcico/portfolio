import "./workcard.css";
import React from 'react';
import Workcard from "./Workcard";
import WorkCardData from "./WorkCardData";

const Work = () => {
    return (
        <div className="work-container" id="/project">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((value,index)=>{
                    return(
                        <Workcard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            view={value.view}
                            source={value.source}
                        />
                )})
                }
            </div>
        </div>
    )
}

export default Work