import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChooseActionPage from "./components/ChooseActionPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChooseActionPage />
      </div>
    );
  }
}

export default App;
