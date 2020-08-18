import React, { Component } from "react";
import "../style/greet.css";

export default class Greet extends Component {
  render() {
    return (
      <div className="greet">
        <div className="greet-container">
          <h1 className="greet-title"> LANDIA PUB</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            explicabo dignissimos ratione voluptas aliquid? Assumenda pariatur
            ducimus expedita officiis labore?
          </p>
        </div>
      </div>
    );
  }
}
