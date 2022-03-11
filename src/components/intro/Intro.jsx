import "./intro.scss";
import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import DoubleArrow from "@material-ui/icons/DoubleArrow";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Web Developer", "AI Enthousiast"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer ">
          <div className="leftSVG">
            <div className="animationSVG">
              <svg id="triangle" width="200px" height="200px" viewBox="-3 -4 39 39">
                <polygon fill="rgba(52, 152, 219, .3)" stroke="#2980b9" stroke-width="1" points="0,16 16,0 32,16 16,32"></polygon>
              </svg>
            </div>
          </div>
          <div className="rightSVG">
            <div className="quote">
              <h4>DON'T STOP UNTIL YOU'RE PROUD</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Abdallah Gadhgadhi</h1>
          <h3>
            Engineer, <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      <a href="#skills">
        <DoubleArrow className="doubleArrow" />
      </a>
    </div>
  );
}
