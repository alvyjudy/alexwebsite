
//import library
import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

//app related 
import {reducer} from "../../src/states/reducer";
import {PageNotFound} from "../../src/components/PageNotFound";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
  ));




const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageNotFound/>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"))