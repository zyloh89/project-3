import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Hero;


{/* <span>Photo by <a href="https://unsplash.com/@twinsfisch?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Isabella and Louisa Fischer</a> on <a href="https://unsplash.com/s/photos/bake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></div></div> */}