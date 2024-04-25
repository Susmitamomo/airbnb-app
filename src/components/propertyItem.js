import React from "react";

function PropertyItem({ name, summary, location }) {
  return (
    <div className="propertyItem">
      <h1> {name} </h1>
      <p> {summary} </p>
      <p> {location} </p>
    </div>
  );
}

export default PropertyItem;
