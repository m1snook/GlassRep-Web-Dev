import React from "react";
import ReactDOM from "react-dom";
// Main css for everything
import "./index.css";
// For carousel
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import App from "./App";
// TODO: Fix jQuery error
// import "./lib/easing/easing.min.js";
// import "./lib/owlcarousel/owl.carousel.min.js";
// import "./mail/jqBootstrapValidation.min.js";
// import "./mail/contact.js";
// import "./js/main";
import { BrowserRouter } from "react-router-dom";
import reducers from "./redux/reducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
