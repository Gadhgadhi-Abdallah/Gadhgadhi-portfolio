import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skillsContainer">
        <div className="heading">
          <h1>Skills</h1>
        </div>
        <div className="frameworks">
          <img key={1} src="assets/react.png" alt="" />
          <img key={2} src="assets/redux.png" alt="" />
          <img key={3} src="assets/javascript.png" alt="" />
          <img key={4} src="assets/html.png" alt="" />
          <img key={5} src="assets/css3.png" alt="" />
          <img key={6} src="assets/sass.png" alt="" />
          <img key={7} src="assets/bootstrap.png" alt="" />
          <img key={8} src="assets/material-ui.png" alt="" />
          <img key={9} src="assets/nodejs.png" alt="" />
          <img key={10} src="assets/mongodb.png" alt="" />
          <img key={11} src="assets/git.png" alt="" />
          <img key={12} src="assets/github.png" alt="" />
          <img key={13} src="assets/python.png" alt="" />
          <img key={14} src="assets/keras.png" alt="" />
          <img key={15} src="assets/tensorflow.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
