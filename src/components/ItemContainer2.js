import React, { useState, useEffect } from 'react';
import styles from '../stylesheets/ItemContainer.module.css';
import itemsMeta from "../itemsInfo.json";
import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';


var CategoryView = (props) => {
  var category = props.category;
  var items = itemsMeta.filter(
    (item) => {return item['category'] === category}
  );
  return (
    <div className={styles.CategoryContainer}>
      {items.map(
        (item, i) => {
          return <OneCategory
                  item={item}
                  styles={styles}
                  key={i} />}
      )}
    </div>
  )
}

<GenericContainer
  itemsSuper={itemsMeta}
  filterField={"category"}
  fieldValue={"categories"}
  style={styles.CategoryContainer}
  render={(item) => {return (
    <OneCategory
      item={item}
      styles={}
  }}
