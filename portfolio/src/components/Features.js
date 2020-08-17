import React, { Component } from "react";
import "../style/features.css";
import Karaoke from "../img/karaoke.jpg";
import Beverages from "../img/beverage.jpeg";
import Food from "../img/food.jpeg";

export default class Features extends Component {
  render() {
    return (
      <div className="features-container">
        <h1>Services</h1>
        <div className="feature-items">
          <div className="card">
            <div>
              <img className="card-logo" src={Food} alt="karaoke-logo" />
            </div>
            <div>
              <h3>Foods</h3>
            </div>
            <div className="card-details">
              <ul>
                <li>Pizza</li>
                <li>Wings</li>
                <li>BBQ</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-logo" src={Beverages} alt="karaoke-logo" />
            </div>
            <div>
              <h3>Beverages</h3>
            </div>
            <div className="card-details">
              <ul>
                <li>Beer</li>
                <li>Cocktails</li>
                <li>Wine</li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div>
              <img className="card-logo" src={Karaoke} alt="karaoke-logo" />
            </div>
            <div>
              <h3>Entertainment</h3>
            </div>
            <div className="card-details">
              <ul className="card-list">
                <li>Karaoke</li>
                <li>Billiards</li>
                <li>Darts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
