import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  const iconSize = 30;

  return (
    <footer className="container-fluid " id="footer-container">
      <div className="row text-center justify-content-around">
        <div className="col-lg-2 py-2 text-center">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-icons mx-2">
            <FaLinkedin size={iconSize}></FaLinkedin>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="footer-icons mx-2">
            <FaGithub size={iconSize}></FaGithub>
          </a>
          <small className="d-block mt-2 text-muted">Copyright © 2020</small>
          <small className="d-block mb-3 text-muted">Ivaylo Korchev</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
