import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        CLASSY<span>ADS</span>{" "}
      </div>
      <ul className={styles.menu}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">Categories</Link>
        </li>
        <li>
          <Link href="/">Contact Us</Link>
        </li>
        <li>
          <Link href="/">About Us</Link>
        </li>
      </ul>

      <div className={styles.adBtn}>
        <button>Create An Ad</button>
      </div>
    </div>
  );
};

export default Navbar;
