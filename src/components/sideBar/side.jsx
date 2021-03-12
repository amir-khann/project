import React, { Component } from "react";
import A from "./a.png";
import B from "./b.PNG";
import "./side.css";

class Side extends Component {
  render() {
    return (
      <div className="side-bar">
        <div className="row">
          <div className="col-3">
            <img src={A} alt="" />
          </div>
          <div className="col">
            <h1 className="p-0 m-0">powder</h1>
            <h6 className="ml-4 color1 ">Finance</h6>
          </div>
        </div>
        <h4 className="mt-4">Your positions</h4>
        <div className="row">
          <div className="col">
            <p className="mt-3">powder Balance</p>
          </div>
          <div className="col">
            <h1 className="color1">12345</h1>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <p className="mt-3">Token name:</p>
          </div>
          <div className="col">
            <h6 className="mt-3">lorem ispum</h6>
          </div>
        </div>
        <p className="m-0 p-0">Tranch detail:</p>

        <p className="m-0 p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          provident, veritatis excepturi laborum ipsum
        </p>
        <div className="row">
          <div className="col">
            <p className="mt-3">Quantity:</p>
          </div>
          <div className="col">
            <h6 className="mt-3">lorem ispum</h6>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="">Value stack:</p>
          </div>
          <div className="col">
            <h6 className="">lorem ispum</h6>
          </div>
        </div>
        <img className="ml-4" src={B} alt="" />
      </div>
    );
  }
}

export default Side;
