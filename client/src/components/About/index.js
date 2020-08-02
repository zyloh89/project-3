import React, { Component } from "react";
import style from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
      <div className={style.aboutcontainer}>
        <div className={style.aboutcontent}>
          <div className={style.abouttitle}>
            <h1>Hello!</h1>
          </div>
          <div className={style.aboutpara}>
            <p>
              Welcome to my humble baking journey. 
              I work full time as a nurse, but enjoyed baking for friends and family and have been doing so for the past 4 years.
              Please browse through my cake designs and feel free to submit a quote query or contact me if you would like more information!              
            </p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;