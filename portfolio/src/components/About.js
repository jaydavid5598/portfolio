import React, { Component } from "react";
import "../style/about.css";

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">About Us</h1>
        <div className="about-desc">
          <label>
            Landia Pub's mission is to give the customers the best quality of
            service, food and entertainment.
          </label>
        </div>
      </div>
    );
  }
}
