import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Cart from './Cart';

import styles from '../stylesheets/NavBar.module.css';

class NavBar extends React.Component {
  insertRoutes() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
  render() {
    return (
      <div>
        <NavItems />
        {this.insertRoutes()}
      </div>
    )
  }
}


class NavItems extends React.Component {
  render() {
    return (
      <div className={styles.NavBarContainer}>
        <Link to="/" className={styles.NavBarItem}>Home</Link>
        <Link to="/cart" className={styles.NavBarItem}>Shopping cart</Link>
        <Link to='/aboutus' className={styles.NavBarItem}>About us</Link>
        <Link to='/contact' className={styles.NavBarItem}>Contact</Link>
      </div>
        );
  }
}

export default NavBar;
