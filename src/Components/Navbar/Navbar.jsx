import React from 'react'
import "./Navbar.scss"
const Navbar = () => {
    return (
        <div className='Navbar__container'>
            <h1>
                Nithub-1
            </h1>
            <div className='Navbar__signup__button'>
                <button className='Button'>
                    Sign-up
                </button>
            </div>
        </div>
    )
}

export default Navbar