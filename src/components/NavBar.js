import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Cart from './Cart';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <NavItems />
        <NavItems />

        <Switch>
          <Route exact path="/">
            <ItemContainer content='top'/>
          </Route>

          <Route exact path="/aboutus">
            <ItemContainer content='aboutus' />
          </Route>

          <Route exact path='/contact'>
            <ItemContainer content='contact' />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

      </div>
    )
  }
}


class NavItems extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Shopping cart</Link>
        </li>
        <li>
          <Link to='/aboutus'>About us</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
    </ul>);
  }
}

export default NavBar;
