import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import usersReducer from "./store/reducers/users";
import "bootstrap/dist/css/bootstrap.min.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
   usersReducer,
   composeEnhancers(applyMiddleware(thunk))
);

const app = (
   <Provider store={store}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
