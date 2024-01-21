import React from "react";
import styles from "./blog.module.css";
import { blogPosts } from "@/data";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.title}>
        <h2>Blog</h2>
        <p>Welcome To Our Blog</p>
      </div>

      <div className={styles.postContainer}>
        {blogPosts.map((post) => (
          <div key={post.id} className={styles.postBox}>
            <div className={styles.imgContainer}>
              <Image
                src={post.imgUrl}
                width={400}
                height={500}
                alt={post.title}
                className={styles.image}
              />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <div className={styles.categoryDate}>
                <span className={styles.date}>{post.date}</span>
                <span className={styles.author}>{post.author}</span>
                <span className={styles.category}>{post.category}</span>
              </div>

              <p className={styles.postText}>{post.content}</p>
              <button className={styles.readBtn}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
