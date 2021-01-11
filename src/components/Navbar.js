import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../index.css'


export default function Navbar() {

  

  return (
    <nav className="navbar navbar-expand sticky-top d-flex justify-content-between" id="idNav">
        <div className="navbar navbar-expand mx-1" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" id="p-link"  to="/">Home</Link>
          <Link className="nav-item nav-link" id="p-link"  to="/projects">Projects</Link>
          <Link className="nav-item nav-link" id="p-link" to="Contact">Contact</Link>
        </div>

    </nav>
  );
}
