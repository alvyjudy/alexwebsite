import React from 'react';
import styles from "../stylesheets/ItemsView.module.css";
import itemsCatalog from "../itemsInfo.json";
import {Link, useParams} from "react-router-dom";

const ItemsView = ({category}) => {
  const itemsSubset = itemsCatalog.filter(
    (item) => {return item["category"] === category;}
  );
  const itemsJSX = itemsSubset.map(
    (item, i) => { return <OneItem
      item={item} 
      key={i}/>;}
  );
  return (
    <div className={styles.Container}>
      {itemsJSX}
    </div>);
}

const OneItem = ({item}) => {
  const targetLink = "/item/" + item.title;
  return (
    <div className={styles.ItemCard}>

      <img
        className={styles.ItemImage}
        src={item.url}
        alt='image failed to load'/>

      <Link className={styles.ItemTitle}
         to={targetLink}>
          {`${item.title}`}
      </Link>

      <p className={styles.ItemTitle}>
        {`${item.price} CAD$`}
      </p>

      <p className={styles.ItemTitle}>
        {`${item.description}`}
      </p>


    </div>
  );
}

const RoutedItemsView = () => {
  const category = useParams().category;
  return <ItemsView category={category} />
}

export default RoutedItemsView;
