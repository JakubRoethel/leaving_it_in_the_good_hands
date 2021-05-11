import React from 'react'
import DecorationTitle from './DecorationTitle'

function HomeContact() {
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
                            <input type="text"  placeholder="Krzysztof" className="input-name"></input>
                        </div>
                        <div className="email">
                            <label className="label-email">Wpisz swoj email</label>
                            <input type="text" placeholder="abc@xyz.pl" className="input-email"></input>
                        </div>
                    </div>
                    <div className="text-area-container">
                        <label className = "label-textarea">Wpisz swoją wiadomość</label>
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." className="textarea"></textarea>
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
