import React from 'react';
import facebook from '../assets/Facebook.svg';
import instagram from '../assets/Instagram.svg';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-description-container">
            <p className="footer-description">Copyright by Jakub Roethel. Made for CodersLab</p>
            </div>
            <div className="social-media-container">
                <img className="facebook-ico" src={facebook} alt="facebook-ico"></img>
                <img className="instagram-ico" src={instagram} alt="instagram-ico"></img>
            </div>
        </footer>
    )
}

export default Footer
