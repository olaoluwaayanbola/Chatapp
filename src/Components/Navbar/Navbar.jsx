import React from 'react'
import "./Navbar.scss"
import { auth } from '../../firebase/firebase'
import { useState } from 'react';
import { signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Navbar = () => {
    let [state, setState] = useState({})
    const signout = () => {
        signOut(auth).then(() => {
            console.log("you've been logged out")
            setState(null)
        }).catch((error) => {
            console.log(error)
        });
    }
    const redir = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                setState(res)
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div className='Navbar__container'>
            <h2>
                Nithub-1
            </h2>
            <div className='Navbar__signup__button'>
                {
                    state ?
                        <button className='Button' onClick={signout}>
                            Sign-out
                        </button>
                        :
                        <button className='Button' onClick={redir}>
                            Sign-in
                        </button>
                }
            </div>
        </div>
    )
}

export default Navbar