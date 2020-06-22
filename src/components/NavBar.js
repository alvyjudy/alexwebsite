import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ItemContainer from './ItemContainer';
import Item from './Item.js';
import Cart from './Cart';

import styles from '../stylesheets/NavBar.module.css';


let itemId = 10000;

class NavBar extends React.Component {
  insertRoutes() {
    return (
      <React.Fragment>
        <Route
          exact path="/"
          component={() => <ItemContainer content='top'/>}
        />


        <Route
          exact path="/aboutus"
          component={() => <ItemContainer content='aboutus'/>}
       />


        <Route
          exact path='/contact'
          component={() => <ItemContainer content='contact'/>}
        />

        <Route
          exact path="/cart"
          component={() => <Cart />}
        />

        <Route
          exact path='/keychains'
          component={() => <ItemContainer content='items' category='keychain' />}
        />

        <Route
          exact path='/postcard'
          component={() => <ItemContainer content='items' category='postcard' />}
        />

        <Route
          exact path='/maskingtape'
          component={() => <ItemContainer content='items' category='maskingtape' />}
        />

        <Route
          exact path="/:itemId"
          component={() => <Item content={itemId} />}
        />

      </React.Fragment>
    )
  }

  insertItems() {
    return (
      <div className={styles.NavBarContainer}>
        <Link to="/" className={styles.NavBarItem}>Home</Link>
        <Link to="/cart" className={styles.NavBarItem}>Cart</Link>
        <Link to='/aboutus' className={styles.NavBarItem}>About</Link>
        <Link to='/contact' className={styles.NavBarItem}>Contact</Link>
      </div>
    )
  }

  render() {
    return (
      <BrowserRouter>
        {this.insertItems()}
        {this.insertRoutes()}
      </BrowserRouter>
    )
  }
}




export default NavBar;
