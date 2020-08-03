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
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <Link
                  to="/about"
                  className={window.location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  >
                  About
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                  to="/quote"
                  className={window.location.pathname === "/quote" 
                  ? "nav-link active" 
                  : "nav-link"}
                  >
                  Quote
                  </Link>
              </li>
              <li className="nav-item">
                  <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" 
                  ? "nav-link active" 
                  : "nav-link"}
                  >
                  Contact
                  </Link>
              </li>
              {authentication ? (
                <li className="nav-item">
                    <Link
                    to="/admin"
                    className={window.location.pathname === "/admin" 
                    ? "nav-link active" 
                    : "nav-link"}
                    >
                    Admin
                    </Link>
                </li>
              ) : null}
              {authentication ? null : (
                <li className="nav-item">
                    <Link
                    to="/login"
                    className={window.location.pathname === "/login" 
                    ? "nav-link active" 
                    : "nav-link"}
                    >
                    Login
                    </Link>
                </li>
              )}
              {authentication ? (
                <li className="nav-item" onClick={this.handleLogout}>
                    <Link
                    to="/"
                    className={window.location.pathname === "/logout" 
                    ? "nav-link active" 
                    : "nav-link"}
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
