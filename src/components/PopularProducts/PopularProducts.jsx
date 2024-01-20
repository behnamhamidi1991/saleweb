import React from "react";
import styles from "./popular.module.css";
import { featuredAds } from "@/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const PopularProducts = () => {
  const newFeaturedAds = featuredAds.filter((ad) => ad.id <= 5);
  return (
    <div className={styles.productContainer}>
      {newFeaturedAds.map((ad) => (
        <div key={ad.id} className={styles.production}>
          <div className={styles.zoomIn}>
            <Image src={ad.imgUrl} alt={ad.title} className={styles.img} />
          </div>
          <div className={styles.content}>
            <div className={styles.category}>{ad.category}</div>
            <div className={styles.footer}>
              <div className={styles.left}>
                <h3 className={styles.title}>{ad.title}</h3>
                <p className={styles.location}>{ad.location}</p>
              </div>
              <div className={styles.right}>
                <span className={styles.likeIcon}>
                  <CiHeart />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;
