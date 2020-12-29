import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './Navbar.css'



export default function Navbar() {
    let iconSize = 25

  return (
    <nav className="navbar navbar-expand navbar-light shadow sticky-top" id="idNav">
        <Link className="navbar-brand" to="/" >Korchev</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="container navbar-nav d-flex mx-5" >
            <Link className="nav-item nav-link" to="/projects">Projects</Link>
            <Link className="nav-item nav-link" to="About">About</Link>
            <Link className="nav-item nav-link" to="Contact">Contact</Link>
            </div>
            <div className="d-flex navbar-nav justify-content-center ms-auto" id="nav-icons" >
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="nav-item nav-link"><FaLinkedin size={iconSize}></FaLinkedin></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="nav-item nav-link"><FaGithub size={iconSize}></FaGithub></a>
            </div>
        </div>
    </nav>
  );
}
