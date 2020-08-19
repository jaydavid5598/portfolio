import React, { Component } from "react";
import "../style/nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>LANDIA PUB BAR</h3>

        <ul className="nav-ul">
          <li>Services</li>
          <li>Menu</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    );
  }
}
