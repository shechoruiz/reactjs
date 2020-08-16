import React, { Component } from "react";
import Logo1 from "../images/platziconf-logo.svg";
import Logo2 from "../images/astronauts.svg";
import "./styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home__container">
          <div className="container__img1">
            <img src={Logo1} alt="" />
            <h2>PRINT YOUR BADGES</h2>
            <p>The easiest way to manage your conference</p>
          </div>
          <div className="container__img2">
            <img src={Logo2} alt="" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
