import React from 'react';
import ReactDom from 'react-dom';
import App from "./components/App";

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartItems from "./states/reducers.js";

const store = createStore(cartItems);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
