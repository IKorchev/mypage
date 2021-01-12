import React from "react";

const home = () => {
  const clickHandle = (e) => {
    const listGroup = document.getElementById("skillsDiv");
    if (listGroup.classList.contains("hide-skillsDiv")) {
      listGroup.classList.remove("hide-skillsDiv");
    } else {
      listGroup.classList.add("hide-skillsDiv");
    }
  };
  return (
    <div class="jumbo">
      <div class="jumbo-text text-center">
        <h1>Ivaylo Korchev</h1>
        <h4>Front End Developer</h4>
      </div>
      <div class=" skillsDiv" id="skillsDiv">
        <ul class="list-group">
          <li class="list-group-item">Cras justo odio</li>
          <li class="list-group-item">Dapibus ac facilisis in</li>
          <li class="list-group-item">Morbi leo risus</li>
          <li class="list-group-item">Porta ac consectetur ac</li>
        </ul>
        <button class="skillsButton" onClick={clickHandle}>
          
          <span id="btnText">SKILLS</span>
        </button>
      </div>
    </div>
  );
};

export default home;
