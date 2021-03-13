import React, { useState } from "react";
import PropTypes from "prop-types";
import CardItems from "./cardItems";
import A from "../../assets/logo.png";
import "./card.css";

function Card(props) {
  const [padding] = useState(props.padding);

  return (
    <div className="card" style={{ padding: padding }}>
      <CardItems A={A} />
    </div>
  );
}
Card.defaultProps = {
  padding: "15px",
};

Card.propTypes = {
  padding: PropTypes.string.isRequired,
};

export default Card;
