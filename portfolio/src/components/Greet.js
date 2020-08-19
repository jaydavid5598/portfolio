import React, { Component } from "react";
import "../style/greet.css";

export default class Greet extends Component {
  render() {
    return (
      <div className="greet">
        <div className="greet-container">
          <h1 className="greet-title"> LANDIA PUB </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div>
            <button>Get Started</button>
            <button>Visit Us</button>
          </div>
        </div>
      </div>
    );
  }
}
