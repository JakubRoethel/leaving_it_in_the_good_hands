import React, {useContext,useState} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "./UserContext";
import firebase from '../firebase/firebase'

export default function HomeHeaderSign() {
    const [user,setUser] = useContext(UserContext);
    const userLogOut = () => {

        firebase.auth().signOut().then(() => {
          // Sign-out successful.
          console.log("sign-out")
        }).catch((error) => {
          // An error happened.
        });
        setUser(undefined)
      };

    return (
        <>
        {user ==null ?
            <>
                <Link
                className="link sign-in"
                to="/zaloguj">
                    Zaloguj
                </Link>
                <Link
                className="link sign-up" to="/rejestracja">
                    Załóź konto
                </Link>
            </>
            :
            <>
                <span className="title">Cześć {user.email}</span>
                <Link className="link get-back" to="/">Oddaj rzeczy</Link>
                <Link className="link" onClick={userLogOut} to="/wyloguj"> Wyloguj</Link>
            </>
        }
            </>
    )
}
