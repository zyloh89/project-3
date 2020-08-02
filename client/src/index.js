import React from "react";
import ReactDOM from "react-dom";
import dotenv from "dotenv";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
dotenv.config();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
     document.getElementById("root"));

registerServiceWorker();
