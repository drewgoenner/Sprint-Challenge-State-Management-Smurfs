import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {smurfReducer} from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const smurfState = createStore(
  smurfReducer,
  composeEnhancers(applyMiddleware(thunk))
);


ReactDOM.render(
<Provider store = {smurfState}>
    <App />
</Provider>, document.getElementById("root"));

