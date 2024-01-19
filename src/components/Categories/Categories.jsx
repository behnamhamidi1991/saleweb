import React from "react";
import styles from "./categories.module.css";
import { MdOutlineApartment } from "react-icons/md";
import { PiBooksDuotone } from "react-icons/pi";
import { GiSofa } from "react-icons/gi";
import { GiBedLamp } from "react-icons/gi";
import { FaCarAlt } from "react-icons/fa";
import { IoShirtSharp } from "react-icons/io5";

const Categories = () => {
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.box}>
        <MdOutlineApartment />
        <p>Real Estate</p>
        <span>3,921</span>
      </div>
      <div className={styles.box}>
        <PiBooksDuotone />
        <p>Books & Magazines</p>
        <span>421</span>
      </div>
      <div className={styles.box}>
        <GiSofa />
        <p>Furniture</p>
        <span>1,245</span>
      </div>
      <div className={styles.box}>
        <GiBedLamp />
        <p>Electronics</p>
        <span>32,418</span>
      </div>
      <div className={styles.box}>
        <FaCarAlt />
        <p>Cars & Vehicles</p>
        <span>29,553</span>
      </div>
      <div className={styles.box}>
        <IoShirtSharp />
        <p>Fashion</p>
        <span>14,118</span>
      </div>
    </div>
  );
};

export default Categories;
