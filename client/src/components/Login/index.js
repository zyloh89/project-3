import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import firebase from './firebase'
import style from "./style.module.css"


class Login extends Component {

  handleLogin = e => {
    e.preventDefault()
    this.props.login(this.state)
    const provider = new firebase.auth.GoogleAuthProvider();
   
    firebase.auth().signInWithPopup(provider).then(result => {
      console.log(result);
    })
  }

  render() {
    if (this.props.authentication) {
      return <Redirect to="/" />
    } else {
      return (
        <div className="container">
          <div className={style.logincontainer}>
            <div className={style.logininner}>
              <h1 className={style.logintitle}>Login</h1>
              <div className={style.formcon}>
                <form>  
                  {/* <input className={style.input} placeholder="Email"
                    type="text"
                    name="email"
                    id="email"
                    onChange={this.handleInput}
                  />
                  <input className={style.input} placeholder="Password"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.handleInput}
                  /> */}
                  <div className={style.submitcon}>
                    <input className={style.subinput} type="submit" value="Login with Google" onClick={this.handleLogin} />
                  </div>
                </form>
                {/* <div className={style.error}>
                  {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
                </div>             */}
              </div>


            </div>
          </div>
        </div>
      )
    }
  }
}

export default Login
