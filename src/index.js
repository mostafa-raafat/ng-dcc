// React //
import React from "react";
import ReactDOM from "react-dom";

// Redux //
import { Provider } from "react-redux";
import { initStore } from "./redux/store";

// Components //
import App from "./components/App";

// Styles //
import { GlobalStyle } from "./styles/global";

//golden-layout css files
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css";
import "./styles/fonts.css";

// Create Redux Store
export const store = initStore();

//required for golden-layouts
window.React = React;
window.ReactDOM = ReactDOM;

// App entry point
ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);
