import React from "react";
import "../styles/Signup.css";

function Signup() {
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
