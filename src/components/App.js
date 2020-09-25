import React from 'react';
import {LoggedInNavBar, LoggedOutNavBar} from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import {ItemsView} from "./ItemsView";
import {Route, Switch} from "react-router-dom";
import {CartView} from "./CartView.js";
import {useSelector} from "react-redux";
import {Login} from "./LoginView.js";
import {PageNotFound} from "./PageNotFound";

const App = (props) => {
  const loggedIn = useSelector(state=>state.auth).loggedIn
  return ( 
    <React.Fragment>
      {loggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}
      <Switch>
        <Route exact path="/items/:category">
          <ItemsView />
        </Route>
        <Route exact path="/cart">
          <CartView />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/">
          <CategoriesView/>
        </Route>

        <Route>
          <PageNotFound/>
        </Route>
        
      </Switch>
    </React.Fragment>

  );
}



export default App;
