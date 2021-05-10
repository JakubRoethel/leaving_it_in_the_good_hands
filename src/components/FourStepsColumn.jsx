import React from 'react';

function FourStepsColumn({icon,title,content}) {
    return (
        <div className="step-column">  
            <img src={icon} alt="icon"/>
            <h2>{title}</h2>
            <div className="dash"></div>
            <p>{content}</p>
        </div>
    )
};

export default FourStepsColumn;
