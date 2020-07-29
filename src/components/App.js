import React, {useState} from 'react';
import NavBar from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import ItemsView from "./ItemsView";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";



const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/items/:category">
          <ItemsView />
        </Route>
        <Route path="/">
          <CategoriesView />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}



export default App;
