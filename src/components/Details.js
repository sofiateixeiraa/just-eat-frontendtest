import React from "react";
import CuisineDetails from "./CuisineDetails";

const Detail = ({ detail, cuisine }) => {
  const { Name, RatingAverage, Cuisines} = detail;
  
    return (
    <div className="details">
      <h2>Name: {Name}</h2>
      <h3>Rating of the Restaurant: {RatingAverage}</h3>
      <h4>Cuisine Type: <CuisineDetails Cuisines={Cuisines} /> </h4>
    </div>
  );
};

export default Detail;