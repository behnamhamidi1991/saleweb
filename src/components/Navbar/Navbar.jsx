import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
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
      <RxHamburgerMenu className={styles.burgerIcon} />
    </div>
  );
};

export default Navbar;
