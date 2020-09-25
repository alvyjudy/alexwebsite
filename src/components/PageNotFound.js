import React from 'react';
import {useLocation} from "react-router-dom";
import styles from "../stylesheets/PageNotFound.module.css";

export const PageNotFound = props => {
  const url = useLocation().pathname
  return <div className={styles.container}>
    <p className={styles.title}>Page not found</p>
    <p className={styles.subtitle}>The requested URL cannot be
    found on the website</p>
    <p className={styles.url}>{url}</p>
  </div>
}
