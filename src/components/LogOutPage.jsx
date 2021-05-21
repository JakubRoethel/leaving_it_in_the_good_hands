import React from 'react';
import HomeHeaderSign from './HomeHeaderSign';
import HomeHeaderNav from './HomeHeaderNav'
import DecorationTitle from './DecorationTitle';
import {Link} from 'react-router-dom';

function LogOutPage() {
    return (
        <>
            <div className="login-header-box">
                <div className="sign-links">
                    <HomeHeaderSign/>
                </div>
                <div className="nav-list">
                    <HomeHeaderNav/>
                </div>
            </div>
            <div className="logOut-wrapper">
                <DecorationTitle title={"Wylogowaie nastąpiło pomyślnie !"}/>
                <Link className="link-home-page" to="/">Strona główna</Link>
            </div>
        </>
    )
}

export default LogOutPage
