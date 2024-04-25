import React from "react";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile</h1>
      </div>
      <div className="profile-info">
        <div className="profile-picture">
          <img src="https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Profile" />
        </div>
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Location: New York, USA</p>
          <p>Joined: January 1, 2020</p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
