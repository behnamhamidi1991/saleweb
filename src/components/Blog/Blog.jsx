import React from "react";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.title}></div>

      <div className={styles.postContainer}></div>
    </div>
  );
};

export default Blog;
