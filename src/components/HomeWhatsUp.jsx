import React from 'react';
import WhatsUpColumn from './WhatsUpColumn';

function HomeWhatsUp() {
    // const [columnDescription,setColumnDescription]= useState({
    //     numbers:0,
    //     title: "",
    //     description: ""
    // })
    const content = "Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat."


    return (
        <div className="three-columns">
            <WhatsUpColumn number={10} title={"ODDANYCH WORKÓW"} content={content}/>
            <WhatsUpColumn number={5} title={"WSPARTYCH ORGANIZACJI"} content={content}/>
            <WhatsUpColumn number={7} title={"ZORGANIZOWANY ZBIÓREK"} content={content}/>
        </div>
    )
}

export default HomeWhatsUp