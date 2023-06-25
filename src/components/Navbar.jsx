import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    return(
        <nav>
        <ul className="navbar">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/courses">Courses</Link>
            </li>
            <li>
                <Link to="/connect">Connect</Link>
            </li>
        </ul>
      </nav>
    )
}

export default Navbar;