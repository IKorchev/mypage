import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

function Home() {
  return (
    <div className="main-div container">
      <div className="main text-div d-flex flex-columns">
        <header id="header" className="container">
            <h1  id="h1">Ivaylo Korchev</h1>
            <h1 id="h1">JavaScript Developer</h1>
        </header>
      </div>
    </div>
  );
}

export default Home;
