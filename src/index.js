import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
//import Bootstrap from "bootstrap/dist/css/bootstrap.css"
const title = "US Presidents List";

ReactDOM.render(
  <App title={title} author="Simon Ding" now={new Date()}/>,
  document.getElementById("root")
);
registerServiceWorker();