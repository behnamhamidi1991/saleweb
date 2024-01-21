import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Get the best deal today!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit,
            debitis esse? Fugiat consequatur nobis repellendus, maiores commodi
            iure ad rerum neque recusandae enim quo facilis optio libero
            voluptate cumque eius!
          </p>
        </div>
        <div className={styles.right}>
          <h2>Subscribe To Get The Best Offers</h2>
          <div className={styles.inputContainer}>
            <input type="text" placeholder="Enter your email here ..." />
            <button className={styles.subBtn}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.linkBox}>
          <h3>Navigation</h3>
          <ul className={styles.linkUl}>
            <li>Home</li>
            <li>Blog</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={styles.linkBox}>
          <h3>Resources</h3>
          <ul className={styles.linkUl}>
            <li>Guides</li>
            <li>Webinars</li>
            <li>Writers</li>
            <li>Courses</li>
            <li>Business</li>
          </ul>
        </div>
        <div className={styles.linkBox}>
          <h3>Product</h3>
          <ul className={styles.linkUl}>
            <li>Features</li>
            <li>Services</li>
            <li>Courses</li>
            <li>Overview</li>
            <li>Support</li>
          </ul>
        </div>
        <div className={styles.linkBox}>
          <h3>Partners</h3>
          <ul className={styles.linkUl}>
            <li>Guides</li>
            <li>Webinars</li>
            <li>Writers</li>
            <li>Courses</li>
            <li>Business</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        Copyright {getDate} - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
