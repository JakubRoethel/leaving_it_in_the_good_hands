import React from 'react';
import HomeFourSteps from './HomeFourSteps';
import HomeHeader from './HomeHeader';
import HomeWhatsUp from './HomeWhatsUp';
import HomeAboutAs from './HomeAboutAs';
import HomeWhoWeHelp from './HomeWhoWeHelp';
import HomeContact from './HomeContact';

function Home() {
    return (
        <div
            className="content-wrapper"
        >
            <HomeHeader/>
            <HomeWhatsUp/>
            <HomeFourSteps/>
            <HomeAboutAs/>
            <HomeWhoWeHelp/>
            <HomeContact/>
        </div>
    )
};

export default Home;

