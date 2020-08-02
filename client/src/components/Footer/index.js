import React, { Component } from "react";
import style from "./style.module.css";

class Footer extends Component {
  render() {
    return (
      <>
      <div className="container">
      <footer className="footer">
        <div className={style.footercontainer}>
          <div className={style.footertext}>
          <span>Life's too short to say no to cake!</span>
        </div>
        </div>
      </footer>
      </div>
      </>
    );
  }
}
export default Footer;