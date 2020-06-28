import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from '../mediaIndex.json';

const HOST = "localhost:3002";

class ItemContainer extends React.Component {

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
      case 'postcards':
        return this.renderPostcards();
      case 'keychains':
        return this.renderKeychains();
      case 'maskingtape':
        return this.renderMaskingtape();
    }
  }

  renderCategoryView() {
    return <Home />;

  }

  renderAboutUs() {
    return <div>Hello about us</div>
  }

  renderContact() {
    return <div>
    <Contact />
    </div>
  }

  renderPostcards() {
    let imgList = mediaIndex.postcards;
    let allItems = imgList.map(
      (imgName, i) => {
        //next line is some webpack magic, figure it out later
        return (
          <Item
          imgfile={imgName}
          title={imgName}
          key={i}
        />)
      }
    )
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    )
  }

  renderKeychains() {
    let imgList = mediaIndex.postcards;
    let allItems = imgList.map(
      (imgName, i) => {
        //next line is some webpack magic, figure it out later
        return (
          <Item
          imgfile={imgName}
          title={imgName}
          key={i}
        />)
      }
    )
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    )
  }

  renderMaskingtape() {
    let imgList = mediaIndex.postcards;
    let allItems = imgList.map(
      (imgName, i) => {
        //next line is some webpack magic, figure it out later
        return (
          <Item
          imgfile={imgName}
          title={imgName}
          key={i}
        />)
      }
    )
    return (
      <div className={styles.ItemContainer}>
        {allItems}
      </div>
    )
  }
}


class Item extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className={styles.ItemCard}>
      <img
        className={styles.ItemImage}
        src={`http://${HOST}/${this.props.imgfile}`}
        alt='image failed to load'
      />
      <p className={styles.ItemTitle}>Item title 4.99$</p>
      <button className={styles.Button}>Another button</button>
      <button className={styles.Button} type='button' >Add to cart</button>
    </div>
    )
  }
}



export default ItemContainer;
export { Item };
