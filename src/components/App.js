import React, {useState} from 'react';
import NavBar from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import ItemsView from "./ItemsView";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CartView from "./CartView.js";


const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
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
