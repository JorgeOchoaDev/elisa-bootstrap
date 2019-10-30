import React from 'react';
import Logo from '../logo.png'

import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <nav className="navbar navbar-light">
            <a className="navbar-brand">
                <Link to="/">
                    <img src={Logo} width="100px" height="auto" alt="" id="logo"/>
                </Link>
            </a>
            <button type="button" id="signup" className="btn btn-dark ml-auto">Signup</button>
            <button type="button" className="btn btn-light ml-2">Log in</button>
        </nav>
    )
}



