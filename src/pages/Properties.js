import React from "react";
import { PropertyList } from "../helpers/propertyList";
import PropertyItem from "../components/propertyItem";
import "../styles/Properties.css";

function Properties() {
  return (
     <div className="menu">
       <h1 className="menuTitle">Our Properties</h1>
       <div className="menuList">
         {PropertyList.map((propertyItem, key) => {
           return (
             <PropertyItem
               key={key}
               name={propertyItem.name}
               summary={propertyItem.summary}
               location={propertyItem.location}
             />
           );
         })}
       </div>
     </div>
   );
 }

export default Properties;
