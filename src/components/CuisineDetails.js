
import React from "react";
import { v4 as uuidv4 } from "uuid";

const CuisineDetails = ({ Cuisines }) => {
  return Cuisines.map(cuisine => {
    return (
      <ul key={uuidv4()} className="cuisine-list">
        <li className="cuisine-type-name"> - {cuisine.Name}</li>
      </ul>
    );
  });
};

export default CuisineDetails;