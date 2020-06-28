import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from "../stylesheets/Home.module.css";


import mediaIndex from "../mediaIndex.json";
const HOST = "192.168.0.2:3002";

class Home extends React.Component {
  render(){
    return(
      <div className={styles.CategoryContainer}>

        <Link to="/keychains" className={styles.Category}>
          <p className={styles.TextInPic}>
            Keychains
          </p>
          <img src={`http://${HOST}/${mediaIndex.images[0]}`} className={styles.Image} />
        </Link>

        <Link to="/postcards" className={styles.Category}>
          <p className={styles.TextInPic}>
            postcards
          </p>
          <img src={`http://${HOST}/${mediaIndex.images[1]}`} className={styles.Image} />
        </Link>

        <Link to="/maskingtape" className={styles.Category}>
          <p className={styles.TextInPic}>
            masking tape
          </p>
          <img src={`http://${HOST}/${mediaIndex.images[2]}`} className={styles.Image} />
        </Link>

        <Link to="" className={styles.Category}>
          <p className={styles.TextInPic}>
            Untitled
          </p>
          <img src={`http://${HOST}/${mediaIndex.images[3]}`} className={styles.Image} />
        </Link>


      </div>
    )

  }
}


export default Home;
