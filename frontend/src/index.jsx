import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";

//REDUX
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./main/reducers";
const devTools =
  window.__REDUX_DEVROOLS_EXTENSION__ && window.__REDUX_DEVROOLS_EXTENSION__();
const store = createStore(reducers);
ReactDOM.render(
  <Provider store={(store, devTools)}>
    <App />
  </Provider>,
  document.getElementById("app")
);
