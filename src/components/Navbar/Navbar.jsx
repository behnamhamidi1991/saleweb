import React from "react";
import { Menu } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <Menu
      mode="horizontal"
      className={styles.menu}
      items={[
        {
          label: "Home",
          key: "Home",
        },
        {
          label: "Blog",
          key: "Blog",
        },
        {
          label: "Categories",
          key: "Categories",
          icon: <IoIosArrowDown />,
          children: [
            {
              label: "Cars",
              key: "Cars",
            },
            {
              label: "Digital",
              key: "Digital",
              children: [
                {
                  label: "Laptop",
                  key: "Laptop",
                },
                {
                  label: "PC",
                  key: "PC",
                },
                {
                  label: "Mobile",
                  key: "Mobile",
                },
                {
                  label: "TV",
                  key: "TV",
                },
                {
                  label: "Radio",
                  key: "Radio",
                },
                {
                  label: "Speaker",
                  key: "Speaker",
                },
                {
                  label: "Headphones",
                  key: "Headphones",
                },
                {
                  label: "Router",
                  key: "Router",
                },
                {
                  label: "Receiver",
                  key: "Receiver",
                },
              ],
            },
            {
              label: "Clothes",
              key: "Clothes",
              children: [
                {
                  label: "Men",
                  key: "Men",
                },
                {
                  label: "Women",
                  key: "Men",
                },
                {
                  label: "Kids",
                  key: "Men",
                },
              ],
            },
            {
              label: "Furniture",
              key: "Furniture",
            },
            {
              label: "Study",
              key: "Study",
            },
            {
              label: "Accessory",
              key: "Accessory",
            },
            {
              label: "Kitchen",
              key: "Kitchen",
            },
            {
              label: "Sport",
              key: "Sport",
            },
            {
              label: "Watch",
              key: "Watch",
            },
            {
              label: "Apartment",
              key: "Apartment",
            },
          ],
        },
        {
          label: "Contact",
          key: "Contact",
        },
        {
          label: "About",
          key: "About",
        },

        {
          label: "Post An Ad",
          key: "Post_Ad",
          className: "postBtn",
        },
      ]}
    ></Menu>
  );
};

export default Navbar;
