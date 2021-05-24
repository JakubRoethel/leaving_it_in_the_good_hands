import React from 'react';
import { Link } from 'react-router-dom';

function HomeHeaderNavStart() {
    return (
        <Link
            className="nav-link start"
            to="/"
        >
            Start
        </Link>
    )
}

export default HomeHeaderNavStart;
