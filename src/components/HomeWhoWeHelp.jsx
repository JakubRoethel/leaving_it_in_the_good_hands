import React, {useState} from 'react';
import DecorationTitle from './DecorationTitle';
import organizationsArr from './whoWeHelpDataBase.json';

function HomeWhoWeHelp() {
    const [organizations, setOrganizations] = useState(organizationsArr.slice(0,3));
    const [description, setDescription] = useState([]);
    let mainDescription = "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.";
    const changeContent = (start,end) => {
        setOrganizations(organizationsArr.slice(start,end))
    };
    return (
        <section
            className="who-we-help"
            id="who-we-help"
        >
            <div
                className="who-we-help-container"
            >
                <DecorationTitle
                    title={"Komu pomagamy?"}
                />
                <div
                    className="btn-div-container"
                >
                    <div
                        onClick={()=>changeContent(0,3)}   className="btn"
                    >
                        Fundacjom
                    </div>
                    <div
                        onClick={()=>changeContent(3,6)}   className="btn"
                    >
                        Organizacją pozarządowym
                    </div>
                    <div
                        onClick={()=>changeContent(6,9)}   className="btn"
                    >
                        Lokalnym zbiórką
                    </div>
                </div>
                <div
                    className="organizations-container"
                >
                    <p
                        className="main-description"
                    >
                        {mainDescription}
                    </p>
                    <div
                        className="table-container"
                    >
                        {organizations.map((el,i) => {
                            return <>
                            <table>
                                <thead>
                                    <tr>
                                        <th key={i}>{el.name}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td >{el.mission}</td>
                                        <td >{el.description}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};
export default HomeWhoWeHelp;
