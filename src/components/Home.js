import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from "../stylesheets/Home.module.css";

import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";


class Home extends React.Component {
  render(){
    return(
      <div className={styles.CategoryContainer}>

        <Link to="/keychains" className={styles.Category}>
          <p className={styles.TextInPic}>
            Keychains
          </p>
          <img src={img1} className={styles.Image} />
        </Link>

        <Link to="/postcards" className={styles.Category}>
          <p className={styles.TextInPic}>
            postcards
          </p>
          <img src={img2} className={styles.Image} />
        </Link>

        <Link to="/maskingtape" className={styles.Category}>
          <p className={styles.TextInPic}>
            masking tape
          </p>
          <img src={img3} className={styles.Image} />
        </Link>

        <Link to="" className={styles.Category}>
          <p className={styles.TextInPic}>
            Untitled
          </p>
          <img src={img4} className={styles.Image} />
        </Link>


      </div>
    )

  }
}


export default Home;
