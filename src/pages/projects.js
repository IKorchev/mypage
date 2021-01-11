import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import imageOfProject1 from "../assets/Untitled.png";
import imageOfProject2 from "../assets/TravelAgency.png";
import imageOfProject3 from "../assets/nasa-project.png";

function Projects() {
  return (
    <div className="container div1 text-center lead text-light mt-5">
      <h1 className="display-4 text-center text-light">My projects</h1>
      <p id="text-center lead text-light">
            Here are some of my projects!<br></br>
            More are on the way!
      </p>
      <div className="container mt-5">
        <div className="row text-center justify-content-center">
          <div className="col-lg-3 mx-3 my-5">
            <div className="card shadow-lg align-items-center ">
              <h4 className="card-header text-dark">Fragrance Picker</h4>
              <img
                className="card-img-top text-center"
                src={imageOfProject1}
                alt="project random fragrance picker"></img>
              <div className="card-body">
                <a
                  href="https://github.com/IKorchev/randomiser"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-block btn-outline-secondary">
                  View code
                </a>
                <a
                  href="http://ikorchev.github.io/randomiser"
                  target="_blank"
                  rel="noreferrer"
                  className="btn mx-1 btn-sm btn-block btn-outline-secondary">
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mx-2 my-5">
            <div className="card shadow-lg align-items-center">
              <h4 className="card-header text-dark">Travel Agency Website</h4>
              <img
                className="card-img-top"
                src={imageOfProject2}
                alt="Random  two"></img>
              <div className="card-body">
                <a
                  href="https://ikorchev.github.io/travel-agency/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-block btn-outline-secondary">
                  View project
                </a>
                <a
                  href="https://github.com/IKorchev/travel-agency"
                  target="_blank"
                  rel="noreferrer"
                  className="btn mx-1 btn-sm btn-block btn-outline-secondary">
                  View code
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mx-3 my-5">
            <div className="card shadow-lg align-items-center">
              <h4 className="card-header text-dark">Nasa APOD app</h4>
              <img
                className="card-img-top"
                src={imageOfProject3}
                alt="Random  two"></img>
              <div className="card-body">
                <a
                  href="https://ikorchev.github.io/apod-nasa-project/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-sm btn-block btn-outline-secondary">
                  View project
                </a>
                <a
                  href="https://github.com/IKorchev/apod-nasa-project"
                  target="_blank"
                  rel="noreferrer"
                  className="btn mx-1 btn-sm btn-block btn-outline-secondary">
                  View code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
