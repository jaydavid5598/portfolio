import React, { Component } from "react";
import "../style/contact.css";
import fbLogo from "../img/fb-logo.png";
export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <div className="contact-title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact-lists">
          <div className="contact-list">
            <div className="contactlist-item">
              <h3>Opening Hours</h3>
              <label>Monday - Saturday</label>
              <label> 5:00 PM - 6:00 AM</label>
            </div>
            <div className="contactlist-item">
              <label>LOCATION</label>
              <label>L&S Subdivision, Narra St, Angeles, Pampanga</label>
            </div>
            <div className="contactlist-item">
              <label>MOBILE CONTACT</label>
              <label>+923 - 4566 - 789</label>
            </div>
          </div>
          <div className="contact-list-social">
            <div className="contact-list-title">
              <h3>Connect With Us</h3>
            </div>
            <div className="contact-list-item">
              <img src={fbLogo} alt="facebook-logo" />
              <label>thelandiapub2020</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
