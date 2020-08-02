import React, { Component } from "react";
import style from "./style.module.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className={style.contactcontainer}>
          <div className={style.contacttitle}>
            <h2>Reach me at:</h2>
          </div>
          <div className={style.email}>
              <p>
              <a href="mailto:joanne@gmail.com">joanne@gmail.com</a>
              </p>
            </div>
        </div>
      </div>
    );
  }
}

export default Contact;