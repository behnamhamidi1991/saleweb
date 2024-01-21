"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import "./responsive.css";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <div className={!openMenu ? "navContainer" : "navContainer open"}>
        <div className="logo">
          CLASSY<span>ADS</span>{" "}
        </div>
        <ul className="menu">
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

        <div className="adBtn">
          <button>Create An Ad</button>
        </div>
      </div>
      <button
        onClick={(prev) => (openMenu ? setOpenMenu(!prev) : setOpenMenu(prev))}
      >
        {" "}
        {!openMenu ? (
          <RxHamburgerMenu className="menuIcon" />
        ) : (
          <RxCross1 className="menuIcon" />
        )}
      </button>
    </div>
  );
};

export default Navbar;
