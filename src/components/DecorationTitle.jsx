import React from 'react';

function DecorationTitle({title}) {
    return (
        <div
            className="decoration-wrapper"
        >
            <p>
                {title}
            </p>
            <div
                className="img-decoration"
            >
            </div>
        </div>
    )
};
export default DecorationTitle;
