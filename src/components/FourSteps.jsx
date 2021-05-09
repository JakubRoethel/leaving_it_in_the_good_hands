import React from 'react';
import DecorationTitle from './DecorationTitle';
import FourStepsColumn from './FourStepsColumn';
import BigButtons from './BigButtons';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

function FourSteps() {
    return (
        <>
            <DecorationTitle className="a" title={"Wystarczą 4 proste kroki"}/>
            <div className="four-columns">
                <FourStepsColumn icon={icon1} title={"Wybierz rzeczy"} content={"ubrania, zabawki, sprzęt i inne"}/>
                <FourStepsColumn icon={icon2} title={"Spakuj je"} content={"skorzystaj z worków na śmieci"}/>
                <FourStepsColumn icon={icon3} title={"Zdecyduj komu chcesz pomóc"} content={"wybierz zaufane miejsce"}/>
                <FourStepsColumn icon={icon4} title={"Zamów kuriera"} content={"kurier przyjedzie w dogodnym terminie"}/>
            </div>
            <div className="btn-container">
                <BigButtons btnText= {"Oddaj rzeczy"}/>
            </div>
        </>
    )
}

export default FourSteps
