import React, { useContext, useEffect, useState } from 'react';
import HomeHeaderSign from './HomeHeaderSign';
import HomeHeaderNav from './HomeHeaderNav'
import DecorationTitle from './DecorationTitle';
import {Link} from 'react-router-dom';
import firebase from '../firebase/firebase'
import "firebase/auth";
import Home from './Home';
import {UserContext} from "./UserContext";
import validator from 'validator';

function SignInPage() {
    const [user,setUser] = useContext(UserContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleInputs = (e) => {
        if(e.target.id == "inputEmail"){
            setEmail(e.target.value)
            // console.log(e.target.value)
        } else if (e.target.id == "inputPassword"){
            setPassword(e.target.value)
            // console.log(e.target.value)
        } else if (e.target.id == "confirmPassword"){
            setConfirmPassword(e.target.value);
        }
    }

    const validate = () => {

        const validateEmail = () => {
            let checkEmail = email
            if(validator.isEmail(checkEmail)) {
                setEmail(checkEmail);
                setEmailError("");
            } else {
                console.log("kupa")
                setEmailError("Podany email jest nieprawidłowy!")
            }
        }
    
        const validatePassword = () => {
            let checkPassword = password
            if (checkPassword.length >= 6) {
                setPassword(checkPassword);
                setPasswordError("")
            } else {
                setPasswordError("Podane hasło jest za krótkie")
            }
        }
        const validateConfirmPassword = () => {
            let checkConfirmPassword = confirmPassword
            if (checkConfirmPassword.length >= 6 && checkConfirmPassword == password) {
                setConfirmPassword(checkConfirmPassword);
                setConfirmPasswordError("")
            } else {
                setConfirmPasswordError("Hasła są niezgodne")
            }
        }

        validateEmail();
        validatePassword();
        validateConfirmPassword();
    }




    const SignIn = (e,email,password) => {
        e.preventDefault();

        // zapytać grześka

        firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    setUser(user);
                })


                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log('Not signed');
                    // console.log(error)
                });
                console.log('inside');
            setEmail("");
            setPassword("");

    };

    return (
        <>
        {user === null ?
        <>
            <div className="login-header-box">
                    <div className="sign-links">
                        <HomeHeaderSign/>
                    </div>
                    <div className="nav-list">
                        <HomeHeaderNav/>
                    </div>
                </div>
                <div className="login-wrapper">
                    <DecorationTitle title={"Załóz konto"}/>
                    <form onSubmit={(event) => {
                            SignIn(event, email, password)}} className="login-form">
                        <div className="form-box">
                            <label className="login-label">Email</label>
                            <input onChange={handleInputs} type="text" id="inputEmail" className="login-input"></input>
                            <span className="email-err">{emailError}</span>
                            <label className="login-label">Hasło</label>
                            <input type="password" onChange={handleInputs} id="inputPassword" className="login-input"></input>
                            <span className="password-err">{passwordError}</span>
                            <label className="login-label">Powtórz hasło</label>
                            <input type="password" onChange={handleInputs} id="confirmPassword" className="login-input"></input>
                            <span className="confirm-password-err">{confirmPasswordError}</span>
                        </div>
                        <div className="box-btn">
                            <Link className="link-login-page" to ="/zaloguj">Zaloguj</Link>
                            <button onClick={validate} className="log-in-btn" type="submit"> Załóz konto</button>
                        </div>
                    </form>
                </div>
        </> :
        <Home/>
    }
            </>
    )
}

export default SignInPage
