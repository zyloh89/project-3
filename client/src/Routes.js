// Using Routes as a variable object instead of component

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Quote from "./components/Quote";
import Admin from "./components/Admin";
import QuoteData from "./components/QuoteData";

class Routes extends React.Component {
  state = {};

  handleLogin = () => {
    if (this.props.authentication) {
      return <Redirect to="/" />;
    } else {
      return (
        <Login
          login={this.props.login}
          authentication={this.props.authentication}
          errorMessage={this.props.errorMessage}
        />
      );
    }
  };

  render() {
    const { authentication } = this.props;
    return (
      <Switch>
          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
          <Route
          path="/Quote"
          render={props => {
              return (
              <Quote {...props} 
                  createNewQuote={this.props.createNewQuote}
                  errorMessage={this.props.errorMessage}
              />
              );
          }}
          />

          <Route path="/Login" render={this.handleLogin} />
          {authentication ? (
          <Route
              path="/Admin"
              render={props => {
              return <Admin {...props} />;
              }}
          />
          ) : null}

          {authentication ? (
          <Route
              path="/QuoteData/:id"
              render={props => {
              return <QuoteData {...props} />;
              }}
          />
          ) : null}
          <Route path="/" exact component={Home} />
      </Switch>
    );
  }
}

export default Routes;
