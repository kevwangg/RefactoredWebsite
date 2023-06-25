import React from 'react'
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import '../styles/Connect.css'

function Connect() {
    return (
        <>
        <h1>Connect with me!</h1>
        <ul className="connectList">
            <li>
                <a className="connectLogo" href="mailto:kjw2@andrew.cmu.edu" target="_blank"><FaEnvelope /></a>
            </li>
            <li>
                <a className="connectLogo" href="https://github.com/kevwangg" target="_blank"><FaGithub /></a>
            </li>
            <li>
                <a className="connectLogo" href="https://www.linkedin.com/in/kevinjwang22/" target="_blank"><FaLinkedin /></a>
            </li>
        </ul>

 
        

        </>
    )
}

export default Connect