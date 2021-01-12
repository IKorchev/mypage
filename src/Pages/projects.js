import React from "react";
import pic from "../assets/London.jpg";

const projects = () => {
  return (
    <div
      class="container d-flex flex-row text-center justify-content-center"
      id="projects">
      <div class="col-xl-5 m-3" id="column">
        <div class="card card-body" id="card">
          <h2 class="card-title">HELLO</h2>
          <img class="card-img" src={pic}></img>
          <p>Project</p>
          <div>
            <button class="btn btn-light mx-2">View Code</button>
            <button class="btn btn-light mx-2">View Project</button>
          </div>
        </div>
      </div>
      <div class="col-xl-5 m-3" id="column">
        <div class="card card-body" id="card">
          <h2 class="card-title">HELLO</h2>
          <img class="card-img" src={pic}></img>
          <p>Project </p>
          <div>
            <button class="btn btn-light mx-2">View Code</button>
            <button class="btn btn-light mx-2">View Project</button>
          </div>
        </div>
      </div>
      <div class="col-xl-5 m-3" id="column">
        <div class="card card-body" id="card">
          <h2 class="card-title">HELLO</h2>
          <img class="card-img" src={pic}></img>
          <p>Project</p>
          <div>
            <button class="btn btn-light mx-2">View Code</button>
            <button class="btn btn-light mx-2">View Project</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
