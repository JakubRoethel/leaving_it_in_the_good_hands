import React from 'react';
import HomeHeaderSign from './HomeHeaderSign';
import HomeHeaderNav from './HomeHeaderNav';
import DecorationTitle from './DecorationTitle';
import BigButtons from './BigButtons';

function HomeHeader() {
    return (
        <section
            className="start-section"
        >
            <div
                className="img-container"
            >
            </div>
                <header
                    className="header"
                >
                    <div
                        className="header-box"
                    >
                        <div
                            className="sign-links"
                        >
                            <HomeHeaderSign/>
                        </div>
                        <div
                            className="nav-list"
                        >
                            <HomeHeaderNav/>
                        </div>
                    </div>
                    <div
                        className="decoration-container"
                    >
                        <DecorationTitle
                            title={'Zacznij pomagać ! Oddaj niechciane rzeczy w zaufane ręce'}
                        />
                    </div>
                    <div
                        className="btn-container"
                    >
                        <BigButtons
                        btnText={"Oddaj Rzeczy"}
                        btnDirection = {"/logowanie"}
                        />
                        <BigButtons
                        btnText={"Zorganizuj Zbiórkę"}
                        btnDirection = {"/logowanie"}
                        />
                    </div>
                </header>
        </section>
    )
};
export default HomeHeader;
