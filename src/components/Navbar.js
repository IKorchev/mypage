import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../index.css'


export default function Navbar() {


  return (
    <nav className="navbar navbar-expand navbar-light shadow sticky-top" id="idNav">
        <Link className="navbar-brand" id="p-link-1" to="/" >Korchev</Link>
        <div className="navbar navbar-expand" id="navbarNavAltMarkup">
            <div className="container navbar-nav" >
              <Link className="nav-item nav-link" id="p-link"  to="/projects">Projects</Link>
              <Link className="nav-item nav-link" id="p-link" to="Contact">Contact</Link>
            </div>
        </div>
    </nav>
  );
}
