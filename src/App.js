import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionPage from "./components/ActionPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionPage />
      </div>
    );
  }
}

export default App;
