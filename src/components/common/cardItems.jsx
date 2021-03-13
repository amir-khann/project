import React, { useState } from "react";

import "./cardItems.css";

function CardItems(props) {
  console.log(props);
  const [A] = useState(props.A);
  return (
    <div className="flexbox">
      <img src={A} alt="" />
      <p className="price">12345</p>
      <p className="currency">usd</p>
    </div>
  );
}

export default CardItems;
