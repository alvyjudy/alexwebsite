
//import library
import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import axios from "axios";

//app related 
import {reducer} from "../../src/states/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
  ));

const AjaxReq = props => {
  return <button onClick={e=>{
    e.preventDefault();
    console.log(location.host)
    const reqObj = axios({
      baseURL:"http://localhost:3003",
      url: "/log",
      method: 'get'
    })
    .then(res=>{console.log("result", res)})
    .catch(e=>{
      console.log('error', e.request, e.config, e.response)
    })
  }}>click me</button>
}


const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AjaxReq/>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"))