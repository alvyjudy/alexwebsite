import React, {useState} from 'react';
import {LoggedInNavBar, LoggedOutNavBar} from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import ItemsView from "./ItemsView";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CartView from "./CartView.js";
import {useSelector} from "react-redux";

const App = (props) => {
  const authenticated = useSelector(state=>state.auth.authenticated)
  console.log(authenticated);
  return <div>Helloworld</div>
  return (
    <BrowserRouter>
      {authenticated ? <LoggedInNavBar /> : <LoggedOutNavBar />}
      <Switch>
        <Route path="/items/:category">
          <ItemsView />
        </Route>
        <Route path="/cart">
          <CartView />
        </Route>
        <Route path="/">
          <CategoriesView />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}



export default App;
