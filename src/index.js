import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
// import App from './App';
import Comment from "../src/components/comment/Comment.js";
import reportWebVitals from "./reportWebVitals";
// For Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";

// Set my store
let store = createStore(allReducers);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* (STR) For Redux */}
    <Provider store={store}>
      <Comment />
    </Provider>
    {/* (END) For Redux */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
