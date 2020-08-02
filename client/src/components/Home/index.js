import React, { Component } from 'react'
import style from './style.module.css'

class Home extends Component {
  state = {};

  render() { 
    return (
      <div className="container">
          <div className={style.homecontainer}>
          <div className={style.gallerycontainer}>
            <div className={style.galleryone}></div>
            <div className={style.gallerytwo}></div>
            <div className={style.gallerythree}></div>
            <div className={style.galleryfour}></div>
            <div className={style.galleryfive}></div>
            <div className={style.gallerysix}></div>
            <div className={style.galleryseven}></div>
            <div className={style.galleryeight}></div>
            <div className={style.gallerynine}></div>
            {/* <div className={style.galleryten}></div>
            <div className={style.galleryeleven}></div>
            <div className={style.gallerytwelve}></div> */}
          </div>
        </div> 
      </div>
    );
  }
}

export default Home;