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
      subtotal: 0.00,
      _count:0
    };
    this.addItemToCart = this.addItemToCart.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.adjustItemCount = this.adjustItemCount.bind(this);

  }

  addItemToCart(item) {
    let newCartItems = this.state.cartItems.slice();
    item.inCart = true;
    if (newCartItems.includes(item)){
      item.count ++;
      this.setState({});
    } else {
      item.count = 1;
      newCartItems.push(item);
      this.setState(
        {cartItems: newCartItems,}
      );
    }


  }

  removeItemFromCart(item) {
    item.inCart = false;
    let newCartItems = this.state.cartItems.filter(
      cartItem => {return cartItem !== item}
    );
    this.setState(
      {
        cartItems: newCartItems,
      }
    )
  }

  adjustItemCount(item, operation) {
    if (operation === "add") {
      item.count ++;
    }

    if (operation === "minus") {
      if (item.count !==1) {item.count --;}
    }

    this.setState({});
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
          component={() => <ItemContainer content='categories'/>}
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
            adjustItemCount={this.adjustItemCount}
            />
          }
        />


        <Route path='/items/:category'
          component={() =>
            <ItemContainer
              content= {useParams().category}
              cart={this.state}
              addItemToCart={this.addItemToCart}
            />
          }
        />



      </BrowserRouter>

    );
  }
}

export default App;
