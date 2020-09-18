import React, {useState} from 'react';
import {LoggedInNavBar, LoggedOutNavBar} from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import {ItemsView} from "./ItemsView";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {CartView} from "./CartView.js";
import {useSelector} from "react-redux";
import {Login} from "./LoginView.js";

const App = (props) => {
  const loggedIn = useSelector(state=>state.auth).loggedIn

  return (
    <BrowserRouter>
      {loggedIn ? <LoggedInNavBar /> : <LoggedOutNavBar />}
      <Switch>
        <Route path="/items/:category">
          <ItemsView />
        </Route>
        <Route path="/cart">
          <CartView />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <CategoriesView />
        </Route>

        <Route>
          No match!
        </Route>
        
      </Switch>
    </BrowserRouter>

  );
}



export default App;
