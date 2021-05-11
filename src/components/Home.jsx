import React from 'react';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeWhatsUp from './HomeWhatsUp';
import HomeAboutAs from './HomeAboutAs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';

function Home() {

    return (
        <div className="content-wrapper">
            <section className="start-section" >
                    <div className="img-container"></div>
                    <header className="header">
                        <HomeHeader/>
                    </header>
            </section>
            <section className="whats-up" id="whats-up">
                <HomeWhatsUp/>
            </section>
            <section className="four-steps">
                <HomeFourSteps/>
            </section>
            <section className="about-as" id="about-as">
                <HomeAboutAs/>
            </section>
            <section className="who-we-help" id="who-we-help">
                <HomeWhoWeHelp/>
            </section>
            <section className="contact" id ="contact">
                <HomeContact/>
            </section>
        </div>
    )
};

export default Home;

