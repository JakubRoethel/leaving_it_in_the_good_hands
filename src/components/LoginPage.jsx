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

function LoginPage() {
    const [user,setUser] = useContext(UserContext);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [emailError,setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")

    const handleInputs = (e) => {
        if(e.target.id == "inputEmail"){
            setEmail(e.target.value)
            // console.log(e.target.value)
        } else if (e.target.id == "inputPassword"){
            setPassword(e.target.value)
            // console.log(e.target.value)
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

        validateEmail();
        validatePassword();

    }


    // console.log(email)
    // console.log(user)

    const LogIn = (e,email,password) => {
        e.preventDefault();

        // zapytać grześka

        firebase.auth().signInWithEmailAndPassword(email, password)
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
                <DecorationTitle title={"Zaloguj się"}/>
                <form onSubmit={(event) => {
              LogIn(event, email, password)}} className="login-form">
                  <div className="form-box">
                    <label className="login-label">Email</label>
                    <input onChange={handleInputs} type="text" id="inputEmail" className="login-input"></input>
                    <span className="email-err">{emailError}</span>
                    <label className="login-label">Hasło</label>
                    <input type="password"  id="inputPassword" onChange={handleInputs} className="login-input"></input>
                    <span className="password-err">{passwordError}</span>
                </div>
                <div className="box-btn">
                    <Link className="link-login-page" to ="/rejestracja">Załóz konto</Link>
                    <button onClick={validate} className="log-in-btn" type="submit"> Zaloguj się</button>
                  </div>
                </form>
            </div>
            </>
        :
         <Home/>
        }

        </>
    )
}

export default LoginPage
