import { useState } from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import "./works.scss";
import { data } from "./workData";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  function handelClick(prop) {
    prop === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }

  return (
    <div className="works" id="works">
      <h1>Works</h1>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => {
          return (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <img src={d.icon} alt="" />
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <h6>{d.tags}</h6>
                    <div className="buttonContainer">
                      <Link href={d.appLink} target="_blank">
                        <Button className="openButton" variant="outlined" color="secondary" size="small">
                          OPEN
                        </Button>
                      </Link>
                      <Link href={d.githubLink} target="_blank">
                        <Button variant="outlined" color="secondary" size="small">
                          CODE
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => {
          handelClick("left");
        }}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => {
          handelClick();
        }}
      />
    </div>
  );
}
