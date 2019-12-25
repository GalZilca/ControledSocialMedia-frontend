import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LogIn } from "./components/LogIn";
import { SignUp } from "./components/SignUp";
import { Event } from "./components/Event";
import { Error } from "./components/Error";
import { Dashborad } from "./components/Dashborad";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashborad}/>
          <Route exact path="/logIn" component={LogIn}/>
          <Route exact path="/signUp" component={SignUp}/>
          <Route exact path="/event" component={Event}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
