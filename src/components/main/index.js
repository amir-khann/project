import React from "react";
import Card from "../Card";

import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="header">
        <h2>Dashboard</h2>
        <div className="timer-section">
          <div className="clock">
            <div className="clock-time">
              <h2>10</h2>
              <p>Day</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>12</h2>
              <p>Hours</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>30</h2>
              <p>Minutes</p>
            </div>
            <h2 className="dot">:</h2>
            <div className="clock-time">
              <h2>14</h2>
              <p>Seconds</p>
            </div>
          </div>
          <button>Buy Powder</button>
        </div>
      </div>

      {/* <div className="flexbox">
          <div className="nright">
            <div>
              <span>
                <h1 className="m0 color1"> 10 : 12 : 30 : 14 </h1>
                <br />
                <span className="latter-spacing day">
                  Day Hours Minutes Seconds
                </span>
              </span>
            </div>
            <div className="buy">
              <span>
                <Button
                  size="19px"
                  color="white"
                  bgcolor="#48b6f1"
                  padding="20px 30px"
                  content="Buy powder"
                />
              </span>
            </div>
          </div>
        </div> */}

      <div className="around">
        <div>
          <p>dgldgkldgjdklgjdlgjdgdiogjfgodgdfkgfiogjd</p>
          <Card padding="20px 60px" />
        </div>
        <div>
          <p>dgldgkldgjdklgjdlgjdgdiogjfgodgdfkgfiogjd</p>
          <Card padding="20px 60px" />
        </div>
        <div>
          <p>dgldgkldgjdklgjdlgjdgdiogjfgodgdfkgfiogjd</p>
          <Card padding="20px 60px" />
        </div>
      </div>
    </div>
  );
};

export default Main;
