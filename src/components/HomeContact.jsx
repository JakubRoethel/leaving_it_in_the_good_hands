import React, { useState } from 'react'
import DecorationTitle from './DecorationTitle'

function HomeContact() {
    const [contactDetails, setContactDetails] = useState({
        name:"",
        email: "",
        massage:""
    });

    const [error,setError] = useState({
        nameErr: "",
        emailErr: "",
        messageErr: ""
    });

    const handleContactName = (e) => {
        setError({
            ...error,
            nameErr : {
                nameErrMessage: "",
                isError: false
            }
        });
        if(e.target.value != "") {
            setContactDetails({
                ...contactDetails,
                name: e.target.value
            });
        } else {
            setContactDetails({
                ...contactDetails,
                name: ""
            });
            setError({
                ...error,
                nameErr: {
                    nameErrMessage: "Podane imię jest nieprawidłowe!"
                }
            })
        };
        // console.log(error.nameErr)
        // console.log(error.nameErr.isError)
    };

    const handleContactEmail = (e) => {
        setError({
            ...error,
            emailErr : {
                emailErrMessage: "",
                isError: false
            }
        });
        if(e.target.value != "") {
            setContactDetails({
                ...contactDetails,
                email: e.target.value
            });
        } else {
            setContactDetails({
                ...contactDetails,
                email: ""
            });
            setError({
                ...error,
                emailErr: {
                    emailErrMessage: "Podane email jest nieprawidłowy!"
                }
            })
        };
    };

    const handleContactMessage = (e) => {
        console.log(e.target.value.length)
        setError({
            ...error,
            messageErr : {
                messageErrMessage: "",
                isError: false
            }
        });
        if(e.target.value != "" || e.target.value > 120) {
            setContactDetails({
                ...contactDetails,
                message: e.target.value
            });
        } else {
            setContactDetails({
                ...contactDetails,
                message: ""
            });
            setError({
                ...error,
                messageErr: {
                    messageErrMessage: "Wiadomość musi mieć co najmniej 120 znaków!"
                }
            })
        };
    };

    // console.log(contactDetails);

    // const API ="https://fer-api.coderslab.pl/v1/portfolio/contact";

    // fetch(`${API}`, {
    //     method: "POST",
    //     body: JSON.stringify(contactDetails),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    //     .then (response => response.json())
    //     .then (data => {
    //         // console.log(data)
    //     })
    //     .catch(error => {
    //         // console.log(error)
    //     })



    return (
        <>
            <div className="contact-img">
            </div>
            <div className="contact-container">
                <DecorationTitle title={"Skontaktuj się z nami"} />
                <form className="contact-form">
                    <div className="name-email-container">
                        <div className="name">
                            <label className="label-name">Wpisz swoje imię</label>
                            <input onChange={handleContactName} type="text"  placeholder="Krzysztof" className="input-name" value={contactDetails.name}></input>
                            {error.nameErr.isError ? <p style={{color:"red"}}>{error.nameErr.nameErrMessage}</p> : null}
                        </div>
                        <div className="email">
                            <label className="label-email">Wpisz swoj email</label>
                            <input onChange={handleContactEmail} type="text" placeholder="abc@xyz.pl" className="input-email" value={contactDetails.email}></input>
                            {error.emailErr.isError ? <p style={{color:"red"}}>{error.emailErr.emailErrMessage}</p> : null}
                        </div>
                    </div>
                    <div className="text-area-container">
                        <label className = "label-textarea">Wpisz swoją wiadomość</label>
                        <textarea onChange={handleContactMessage} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." className="textarea" ></textarea>
                        {error.messageErr.isError ? <p style={{color:"red"}}>{error.messageErr.messageErrMessage}</p> : null}
                    </div>
                    <div className="btn-submit-container">
                        <button type="submit" className="btn-submit">Wyślij</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default HomeContact
