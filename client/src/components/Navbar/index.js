import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render () {
    const { authentication } = this.props;
    return (
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Joanne's Home Bakery
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link
                  to="Home"
                  className={
                      window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  >
                  Home
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                  to="About"
                  className={
                      window.location.pathname === "/" || window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  >
                  About
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                  to="/Quote"
                  className={window.location.pathname === "/order" ? "nav-link active" : "nav-link"}
                  >
                  Quote
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                  >
                  Contact
                  </Link>
              </li>
              {authentication ? (
                <li className="nav-item">
                    <Link
                    to="/contact"
                    className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}
                    >
                    Admin
                    </Link>
                </li>
              ) : null}
              {authentication ? null : (
                <li className="nav-item">
                    <Link
                    to="/login"
                    className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                    >
                    Login
                    </Link>
                </li>
              )}
              {authentication ? (
                <li className="nav-item" onClick={this.handleLogout}>
                    <Link
                    to="/login"
                    className={window.location.pathname === "/logout" ? "nav-link active" : "nav-link"}
                    >
                    Logout
                    </Link>
                </li>
               ) : null}
          </ul>
        </div>
      </nav>
      </div>
    
    );
  }
}

export default Navbar;