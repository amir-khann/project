import React, { Component } from "react";
import { Main, SideBar } from "./components";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SideBar />
        <Main />
      </div>
    );
  }
}

export default App;
