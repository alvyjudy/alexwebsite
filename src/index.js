import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combinedReducer from "./states/reducers.js";
import thunk from "redux-thunk";

const store = createStore(
  combinedReducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
