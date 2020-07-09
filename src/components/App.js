import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

import styles from '../stylesheets/NavBar.module.css';
import ItemContainer from "./ItemContainer.js";

/*
itemsMeta
[
  {
    "filename":"",
    "title":"",
    "category":"",
    "description":"",
    "price":Float
  },
  ...
]
*/


//object for UI
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      subtotal: 0.00
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
  }

  addItemToCart(item) {
    console.log('item to add', item);
    let newCartItems = this.state.cartItems.slice();
    newCartItems.push(item);
    this.setState(
      {cartItems: newCartItems,
      totalAmt: this.state.subtotal + item.price}
    );
  }

  removeItemFromCart(item) {
    console.log('item to remove', item);
    let newCartItems = this.state.cartItems.filter(
      cartItem => {return cartItem !== item}
    );
    console.log('new cart', newCartItems);
    this.setState(
      {
        cartItems: newCartItems,
        totalAmt: this.state.subtotal - item.price
      }
    )
  }


  render() {
    return (
      <BrowserRouter>
        <div className={styles.NavBarContainer}>
          <Link to="/" className={styles.NavBarItem}>Home</Link>
          <Link to="/cart" className={styles.NavBarItem}>Cart</Link>
          <Link to='/aboutus' className={styles.NavBarItem}>About</Link>
          <Link to='/contact' className={styles.NavBarItem}>Contact</Link>
        </div>

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

        <Route exact path="/cart"
          component={() =>
            <ItemContainer
            content='cart'
            cart={this.state}
            removeItemFromCart={this.removeItemFromCart}
            />
          }
        />


        <Route path='/items/:category'
          component={() =>
            <ItemContainer
              content= {useParams().category}
              addItemToCart={this.addItemToCart}
            />
          }
        />



      </BrowserRouter>

    );
  }
}

export default App;
