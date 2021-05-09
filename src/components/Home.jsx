import React from 'react';
import FourSteps from './FourSteps';
import HomeHeader from './HomeHeader';
import HomeWhatsUp from './HomeWhatsUp';

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
                <FourSteps/>
            </section>
        </div>

    )
}

export default Home

