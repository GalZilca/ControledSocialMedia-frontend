import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { FormAddEvent } from "./components/FormAddEvent";
import { Event } from "./components/Event";
import { Error } from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/formAddEvent" component={FormAddEvent}/>
          <Route exact path="/event" component={Event}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
