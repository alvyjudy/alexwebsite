import React from 'react';
import styles from "../stylesheets/ItemsView.module.css";
import itemsCatalog from "../itemsInfo.json";
import {Link, useParams} from "react-router-dom";
import {addNewItem} from "../states/actions.js";
import {useDispatch} from "react-redux";

const ItemsView = ({category}) => {
  const itemsSubset = itemsCatalog.filter(
    item => item["category"] === category
  );
  const itemsJSX = itemsSubset.map(
    item => <OneItem key={item.itemID} {...item} />
  );
  return <div className={styles.Container}>{itemsJSX}</div>
}

const OneItem = ({itemID, title, url, price, description}) => {
  const targetLink = "/item/" + itemID;
  const dispatch = useDispatch();
  return (
    <div className={styles.ItemCard}>

      <img
        className={styles.ItemImage}
        src={url}
        alt='image failed to load'/>

      <Link className={styles.ItemTitle}
         to={targetLink}>
          {`${title}`}
      </Link>

      <p className={styles.ItemTitle}>
        {`${price} CAD$`}
      </p>

      <p className={styles.ItemTitle}>
        {`${description}`}
      </p>

      <button className={styles.Button}
        onClick={(e)=>{
          e.preventDefault;
          dispatch(addNewItem(itemID));
        }}>
          add to cart
        </button>


    </div>
  );
}

const RoutedItemsView = () => {
  const category = useParams().category;
  return <ItemsView category={category} />
}

export default RoutedItemsView;
