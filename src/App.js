import React, { Component } from "react";
import { Main, SideBar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-3 m-0 p-0">
          <SideBar />
        </div>
        <div className="col m-0 p-0">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
