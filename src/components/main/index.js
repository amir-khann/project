import React from "react";
import Button from "../common/button";
import Card from "../common/card";
import "./main.css";

const Main = () => {
  return (
    <React.Fragment>
      <div className="main">
        <div className="flexbox">
          <h1>Dashboard</h1>
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
        </div>
        {/* this is the end of flex box div */}
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
        <p>dgldgkldgjdklgjdlgjdgdiogjfgodgdfkgfiogjd</p>
        <div className="around">
          <Card padding="63px 10px" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
