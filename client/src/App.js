import React, { Component } from "react";
import Routes from "./Routes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const axios = require('axios')

class App extends Component {
  state = {
    allQuotes: null,
    authentication: false
  };

  componentDidMount = async () => {
    try {
      const token = localStorage.getItem("token");
      const authentication = await axios.get(
        `./user/current-user`,
        { headers: { token: token } }
      );
      this.setState({
        authentication: true,
        currentUser: authentication.data
      });
    } catch (err) {
      this.setState({
        authentication: false
      });
    }
  };

  createNewQuote = async quoteInfo => {
    // const url = "http://localhost:3000";
    try {
      const data = await axios.post(`./quote/newQuote`, quoteInfo);
      if (data) {
        return 'data posted'
      }
    } catch (err) {
      this.setState({
        errorMessage: 'Please fill in all the fields!'
      });
    }
  };


  login = async userCredentials => {
    // const url = "http://localhost:3000";
    try {
      const response = await axios.post(`./auth/login`, userCredentials);
      const token = response.data.token;
      localStorage.setItem("token", token);
      this.setState({
        authentication: true
      });
    } catch (err) {
      this.setState({
        authentication: false,
        errorMessage: 'Your credentials is invalid. Please try again.'
      });
    }
  };

  logout = () => {
    localStorage.removeItem("token")
    this.setState({
      authentication: false
    })
  }

 render() {
    const { authentication, errorMessage } = this.state;
    return (
      <div>
        <Navbar 
          authentication={authentication} 
          logout={this.logout} 
        />
        <Routes 
          authentication={authentication}
          login={this.login} 
          errorMessage={errorMessage}
          createNewQuote={this.createNewQuote}
        />
        <Footer />
      </div>
    )
  }
}

export default App;