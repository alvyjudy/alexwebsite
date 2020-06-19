import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Cart from './Cart';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Shopping cart</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/">
            <ItemContainer />
          </Route>

          <Route exact path="/aboutus">
            <ItemContainer />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

      </div>
    )
  }
}






export default NavBar;
