import React from "react";
import Button from "../common/button";

import A from "../../assets/logo.png";
import B from "../../assets/footer-logo.png";
import "./side.css";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="center">
        <img className="center" src={A} alt="" />
      </div>

      <h4 className="position">Your positions</h4>
      <div className="flex-div">
        <p className="balance">powder balance:</p>

        <h1 className="color1 mt">12345</h1>
      </div>
      <hr />
      <div className="flex-div">
        <p className="mt">Token name:</p>
        <h4 className="mt">lorem ipsum</h4>
      </div>
      <p className="tranch">Tranche details:</p>
      <p>
        lorem ipsum is simplu dummy text of the printing and typesetting
        industry
      </p>
      <div className="flex-div">
        <p className="mt">Quantity:</p>
        <h4 className="mt">lorem ipsum</h4>
      </div>
      <div className="flex-div">
        <p className="value">Value staked:</p>
        <h4>lorem ipsum</h4>
      </div>
      <div className="center">
        <Button
          size="19px"
          color="white"
          bgcolor="#48b6f1"
          padding="10px 30px"
          content="claim powder"
        />
      </div>
      <div className="center">
        <img src={B} alt="" />
      </div>
    </div>
  );
};

export default SideBar;
