import React, {useContext} from 'react';
import styles from "../stylesheets/OneCategoryStyle.module.css";
import itemsCatalog from "../itemsInfo.json";
import createLinkTo from "./CreateLinkTo.js";
import StateContext from "./StateContext.js";

const CategoriesView = ({pathUpdator}) => {
  const itemsSubset = itemsCatalog.filter(
    (item) => {return item["category"] === "categories"}
  );
  const itemsJSX = itemsSubset.map(
    (item, i) => {return <OneCategory
      item={item}
      pathUpdator={pathUpdator}
      key={i} />;}
  );
  return (
    <div className={styles.Container}>
      {itemsJSX}
    </div>
  );
}

const OneCategory = ({item, pathUpdator}) => {
  const contextTest = useContext(StateContext);
  console.log(contextTest);
  const targetLink = "/items/" + item.title;
  return (
    <a onClick={createLinkTo(targetLink, pathUpdator)}
      className={styles.Category}
    >
      <p className={styles.TextInPic}>
        {item.title}
      </p>
      <img src={item.url} className={styles.Image} />
    </a>
  );
}

export default CategoriesView;
