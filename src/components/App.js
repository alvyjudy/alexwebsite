import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';

import styles from '../stylesheets/NavBar.module.css';
import ItemContainer from "./ItemContainer.js";
import Cart from "./Cart.js";


//import "./App.css";
//import ItemView from './components/InsertItems.js';


//object for managing application state
//to do...

//object for UI
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart(item) {
    console.log('item', item);
console.log('cart item before:', this.state.cartItems);
    let newCartItems = this.state.cartItems.slice()
    newCartItems.push(item);
    this.setState(
      {cartItems: newCartItems},
      () => {console.log('cart item after:', this.state.cartItems);}
    );
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

        <Route
          exact path="/cart"
          component={() => <Cart
                              cartItems={this.state.cartItems}
                            />
                    }
        />

        <Route
          path='/items/:category'
          component={
            () =>
              <ItemContainer
                content= {useParams().category}
                addItemToCart={this.addItemToCart}
              />}
        />


      </BrowserRouter>

    );
  }
}

export default App;
