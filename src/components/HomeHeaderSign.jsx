import React from 'react';
import {Link} from 'react-router-dom';

export default function HomeHeaderSign() {
    return (
        <>
                <Link
                className="link sign-in"
                to="/">
                    Zaloguj
                </Link>
                <Link
                className="link sign-up" to="/">
                    Załóź konto
                </Link>
            </>
    )
}
