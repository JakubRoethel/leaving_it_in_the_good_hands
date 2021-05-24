import React from 'react';
import {Link} from 'react-router-dom';

function BigButtons({btnText,btnDirection}) {
    return (
        <Link
            className="big-btn"
            to={btnDirection}
        >
            {btnText}
        </Link>
    )
};

export default BigButtons;
