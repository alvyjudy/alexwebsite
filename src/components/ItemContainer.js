import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact.js';
import styles from '../stylesheets/ItemContainer.module.css';
import mediaIndex from '../mediaIndex.json';

const HOST = "192.168.0.2:3002";

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
    let imgList = mediaIndex.images;
    let allItems = imgList.map(
      (imgName, i) => {
        return (
          <Item
            imgfile = {imgName}
            title = {imgName}
            key={i}
            theme='category'
          />
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

  renderPostcards() {
    let imgList = mediaIndex.postcards;
    let allItems = imgList.map(
      (imgName, i) => {
        return (
          <Item
            imgfile={imgName}
            title={imgName}
            key={i}
            theme='items'
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
          theme='items'
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
          theme='items'
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
    switch (this.props.theme) {
      case "category":
        return this.renderCategory();
      case "items":
        return this.renderItems();
    }
  }

  renderCategory() {
    return (
        <Link to="/keychains" className={styles.Category}>
          <p className={styles.TextInPic}>
            Keychains
          </p>
          <img src={`http://${HOST}/${this.props.imgfile}`} className={styles.Image} />
        </Link>
    )
  }

  renderItems() {
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
