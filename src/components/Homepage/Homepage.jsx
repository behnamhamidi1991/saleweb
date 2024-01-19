import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>Largest Classified In The World</h1>
          <p>You can sell or by anything you want</p>
        </div>
        <div className={styles.searchBar}></div>
      </div>
    </div>
  );
};

export default Homepage;
