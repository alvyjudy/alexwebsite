import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from '../mediaIndex.json';
import itemsInfo from "../itemsInfo.json";


class ItemContainer extends React.Component {
  /*
    props.imgObj
      imgObj.url
      imbObj.name
      imgObj.desc
    props.theme: 'category' | 'items' | 'cart'
    props.dispatcher
      dispatcher.addItemToCart
      dispatcher.removeItemFromCart
  */

  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.content) {
      case "top":
        return this.renderCategoryView();
      case "aboutus":
        return this.renderAboutUs();
      case "contact":
        return this.renderContact();
      case "cart":
        return this.renderCart();
      default:
        return this.renderItems();
    }
  }

  renderCategoryView() {
    let imgList = mediaIndex.categories;
    let allItems = imgList.map(
      (imgObj, i) => {
        return (
          <Link to={`/items/${imgObj.name}`} className={styles.Category}>
            <p className={styles.TextInPic}>
              {imgObj.name}
            </p>
            <img src={imgObj.url} className={styles.Image} />
          </Link>
        )
      }
    );
    return (
      <div className={styles.CategoryContainer}>
        {allItems}
      </div>
    )


  }

  renderAboutUs() {
    return <div>Hello about us</div>
  }

  renderContact() {
    return <div>
    <Contact />
    </div>
  }

  renderItems() {
    let category = this.props.content;
    let imgList = mediaIndex[category];

    let allItems = imgList.map(
      (imgObj, i) => {
        let itemInfo = itemsInfo[imgObj.name];
        if (itemInfo) {
          return (
            <div className={styles.ItemCard}>
              <img
                className={styles.ItemImage}
                src={imgObj.url}
                alt='image failed to load'
              />
              <p className={styles.ItemTitle}>{`${itemInfo.title} CAD$${itemInfo.price}`}</p>
              <p className={styles.ItemTitle}>{itemInfo.description}</p>
              <button className={styles.Button}>Another button</button>
              <button
                className={styles.Button}
                type='button'
                onClick={() => {this.props.addItemToCart(imgObj)}}
                >Add to cart</button>
            </div>
        );
      }
    }
    );
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    );
  }

  renderCart() {
    let itemList = this.props.cartItems;
    let allItems = itemList.map(
      (imgObj, i) => {
        return (
          <div className={styles.cartItem}>
            <img
              className={styles.cartItemImage}
              src={imgObj.url}
              alt='image failed to load'
            />
            <p className={styles.ItemTitle}>Item title 4.99$</p>
            <button
              className={styles.Button}
              type='button'
              onClick={() => {this.props.removeItemFromCart(imgObj)}}
              >Remove</button>
          </div>
        )
      }
    );
    return(
      <div className={styles.cart}>
        <div className={styles.cartHeader}>
          header for cart
        </div>

        <div className={styles.cartContainer}>
          {allItems}
        </div>
      </div>
    );
  }
}


export default ItemContainer;
