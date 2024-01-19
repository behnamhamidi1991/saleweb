import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./homepage.module.css";
import { FaLocationDot } from "react-icons/fa6";

const Homepage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.homePageContainer}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Largest Classified In The World</h1>
            <p>You can sell or by anything you want</p>
          </div>
          <div className={styles.searchBar}>
            <input type="text" placeholder="What are you looking for?" />
            <div className={styles.locationContainer}>
              <input type="text" placeholder="Location" />
              <FaLocationDot className={styles.locationIcon} />
            </div>
            <select>
              <option>All Categories</option>
              <option>Real State</option>
              <option>Books & Magazines</option>
              <option>Furniture</option>
              <option>Electronics</option>
              <option>Cars & Vehicles</option>
              <option>Others</option>
            </select>

            <button className={styles.searchBtn}>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
