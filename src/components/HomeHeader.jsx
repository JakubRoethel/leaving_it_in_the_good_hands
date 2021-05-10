import React from 'react';
import HomeHeaderSign from './HomeHeaderSign';
import HomeHeaderNav from './HomeHeaderNav';
import DecorationTitle from './DecorationTitle';
import BigButtons from './BigButtons';


export default function HomeHeader() {
    return (
        <>
        <div className="header-box">
            <div className="sign-links">
                <HomeHeaderSign/>
            </div>
            <div className="nav-list">
                <HomeHeaderNav/>
            </div>
        </div>
        <div className="decoration-container">
            <DecorationTitle title={'Zacznij pomagać ! Oddaj niechciane rzeczy w zaufane ręce'}/>
        </div>
        <div className="btn-container">
            <BigButtons btnText={"Oddaj Rzeczy"} btnDirection = {"/logowanie"}/>
            <BigButtons btnText={"Zorganizuj Zbiórkę"} btnDirection = {"/logowanie"}/>
        </div>
    </>
    )
}
