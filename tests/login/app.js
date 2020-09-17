
//import library
import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

//app related 
import {reducer} from "../../src/states/reducer"
import {Login, LoginUI} from "../../src/components/LoginView";

const store = createStore(reducer, applyMiddleware(thunk));

const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"))