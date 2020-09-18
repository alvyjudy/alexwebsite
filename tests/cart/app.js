
//import library
import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

//app related 
import {reducer} from "../../src/states/reducer"
import {ItemsView} from "../../src/components/ItemsView";
import {CartView} from "../../src/components/CartView";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
  ));


const App = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{
          overflow: "scroll",
          height: "600px",
          border: "1px black solid",
        }}>
            <ItemsView category="Keychain"/>
        </div>
        
        <hr></hr>
        <CartView />
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"))