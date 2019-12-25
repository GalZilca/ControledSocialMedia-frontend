import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LogIn } from "./components/LogIn";
import { ChooseActionPage } from "./components/ChooseActionPage";
import { ActionPage } from "./components/ActionPage";
import { Error } from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LogIn}/>
          <Route exact path="/chooseActionPage" component={ChooseActionPage}/>
          <Route exact path="/ActionPage" component={ActionPage}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
