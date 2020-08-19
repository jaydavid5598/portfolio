import React, { Component } from "react";
import "../style/contact.css";
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
              <br />
              <label>Monday - Saturday</label>
              <br />
              <label> 5:00 PM - 6:00 AM</label>
            </div>
            <div className="contactlist-item">
              <h3>Location</h3>
              <br />
              <label>L&S Subdivision, Narra St, Angeles, Pampanga</label>
            </div>
            <div className="contactlist-item">
              <h3>Mobile Contact</h3>
              <br />
              <label>+923 - 4566 - 789</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
