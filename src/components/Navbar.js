import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../index.css'


export default function Navbar() {


  return (
    <nav className="navbar navbar-expand sticky-top d-flex justify-content-between" id="idNav">
        <Link className="navbar-brand" id="p-link-1" to="/home" >Korchev</Link>
        <div className="navbar navbar-expand" id="navbarNavAltMarkup">
          <Link className="nav-item nav-link" id="p-link"  to="/projects">Projects</Link>
          <Link className="nav-item nav-link" id="p-link" to="Contact">Contact</Link>
        </div>
    </nav>
  );
}
