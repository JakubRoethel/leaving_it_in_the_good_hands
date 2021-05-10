import React, {useState} from 'react';
import DecorationTitle from './DecorationTitle';
import ReactPaginate from 'react-paginate';
import organizationsArr from './whoWeHelpDataBase.json';

function HomeWhoWeHelp() {
    const [organizations, setOrganizations] = useState(organizationsArr);
    console.log(organizations)
    return (
        <div className="who-we-help-container">
            <DecorationTitle title={"Komu pomagamy?"}/>
            <div className="btn-div-container">
                <div className="btn">Fundacjom</div>
                <div className="btn">Organizacją pozarządowym</div>
                <div className="btn">Lokalnym zbiórką</div>
            </div>
        </div>
    )
}

export default HomeWhoWeHelp
