import React from 'react';
import DecorationTitle from './DecorationTitle';
import signature from '../assets/Signature.svg';

function HomeAboutAs() {
    return (
        <>
            <div className="about-as-description">
                <DecorationTitle title={"O nas"}/>
                <p className="description-text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="signature-container">
                    <img className="signature" src={signature} alt="signature"></img>
                </div>
            </div>
            <div className="about-as-img-container"></div>
        </>
    )
};

export default HomeAboutAs;
