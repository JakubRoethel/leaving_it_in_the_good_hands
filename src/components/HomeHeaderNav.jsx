import React from 'react';
import {Link} from 'react-scroll';

export default function HomeHeaderNav() {
    return (
        <nav className="nav">
            <Link
            className= "nav-link start"
            to="/">
                Start
            </Link>
            <Link
            className= "nav-link whats-up-link"
            to="whats-up"
            smooth={true}
            duration={1000}>
                O co chodzi ?
            </Link>
            <Link className= "nav-link about-as-link"
            to="about-as"
            smooth={true}
            duration={1500}>
                O nas
            </Link>
            <Link
            className= "nav-link who-we-help-link"
            to="who-we-help"
            smooth={true}
            duration={2000}>
                Fundacja i organizacje
            </Link>
            <Link
            className= "nav-link contact-link"
            to="contact"
            smooth={true}
            duration={2000}>
                Kontakt
            </Link>
        </nav>
    )
}
