import React from 'react';

function WhatsUpColumn({number,title,content}) {
    return (
        <div
            className="one-column"
        >
            <div
                className="description-wrapper"
            >
                <h1>{number}</h1>
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    )
}
export default WhatsUpColumn;
