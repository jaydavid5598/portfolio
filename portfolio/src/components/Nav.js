import React, { Component } from "react";
import "../style/nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>LANDIA PUB</h3>

        <ul className="nav-ul">
          <li>Services</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
