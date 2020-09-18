import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {reducer} from "./states/reducer.js";
import thunk from "redux-thunk";

const store = createStore(
  reducer, 
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
