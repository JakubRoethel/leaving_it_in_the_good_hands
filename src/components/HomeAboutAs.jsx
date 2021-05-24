import React from 'react';
import DecorationTitle from './DecorationTitle';
import signature from '../assets/Signature.svg';

function HomeAboutAs() {
    let descriptionTxt = "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.";
    return (
        <section
            className="about-as"
            id="about-as"
        >
            <div
                className="about-as-description"
            >
                <DecorationTitle
                    title={"O nas"}
                />
                <p
                    className="description-text"
                >
                    {descriptionTxt}
                </p>
                <div
                    className="signature-container"
                >
                    <img
                        className="signature"
                        src={signature}
                        alt="signature"
                    />
                </div>
            </div>
            <div
                className="about-as-img-container">
            </div>
        </section>
    )
};

export default HomeAboutAs;
