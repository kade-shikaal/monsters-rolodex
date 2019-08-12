import React from "react";
//The React library allows us to write the JSX
import ReactDOM from "react-dom";
//Allows for interaction with the DOM
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
//replaces the root div in the public body with the <App/> import from the App.js src file

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
