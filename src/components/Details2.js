import React, { useState } from "react";

const Detail2 = ({ detail2 }) => {
  const { SeoName } = detail2;
    return (
    <div className="recipe">
      <h2>Cuisine:{SeoName}</h2>
    </div>
  );
};

export default Detail2;