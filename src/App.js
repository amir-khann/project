import React, { Component } from "react";
import Main from "./components/main/main";
import Side from "./components/sideBar/side";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <div className="row ">
            <div className="col-3 m-0 p-0">
              <Side />
            </div>
            <div className="col m-0 p-0">
              <Main />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
