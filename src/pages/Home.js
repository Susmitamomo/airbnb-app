import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import BannerImage from "../assets/background-image.jpg";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to Airbnb </h1>
        <p> Discover amazing places to stay and experience your destination like a local</p>
        <Link to="/Properties">
          <button> Find Properties </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
