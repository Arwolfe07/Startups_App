import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import reducers from "./reducers/index.js";

// Store for storing the redux data
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
