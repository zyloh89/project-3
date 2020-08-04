import React, { Component } from "react";
// import UserProvider from "./providers/UserProvider";
import firebase from "./components/Login/firebase";
// import {auth} from "./components/Login/firebase";
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


  login = async () => {
    try {
      const response = await firebase.auth.GoogleAuthProvider();
      const token = response.getAuthResponse().id_token;
      console.log(token)
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
        {/* <UserProvider> */}
        <Routes 
           
          authentication={authentication}
          login={this.login} 
          errorMessage={errorMessage}
          createNewQuote={this.createNewQuote}
        />
        {/* </UserProvider> */}
        <Footer />
      </div>
    )
  }
}

export default App;



// import React, { useContext } from "react";
// import { UserContext } from "../providers/UserProvider";
// import {auth} from "../firebase";
// const ProfilePage = () => {
//   const user = useContext(UserContext);
//   const {photoURL, displayName, email} = user;
//   return (
//     <div className = "mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
//       <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
//         <div
//           style={{
//             background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
//             backgroundSize: "cover",
//             height: "200px",
//             width: "200px"
//           }}
//           className="border border-blue-300"
//         ></div>
//         <div className = "md:pl-4">
//         <h2 className = "text-2xl font-semibold">{displayName}</h2>
//         <h3 className = "italic">{email}</h3>
//         </div>
//       </div>
//       <button className = "w-full py-3 bg-red-600 mt-4 text-white" onClick = {() => {auth.signOut()}}>Sign out</button>
//     </div>
//   ) 
// };
// export default ProfilePage;
// As you can see, we used the useContext Hook to g