import React from "react";
import styles from "./trend.module.css";
import { featuredAds } from "@/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const Trend = () => {
  const newFeaturedAds = featuredAds.filter((ad) => ad.id <= 6);

  return (
    <div className={styles.trendContainer}>
      <div className={styles.header}>
        <h2>Trending Today</h2>
        <p>Take a look at our trending posts</p>
      </div>
      <div className={styles.trendItemsContainer}>
        {newFeaturedAds.map((ad) => (
          <div key={ad.id} className={styles.box}>
            <div className={styles.imageContainer}>
              <Image
                src={ad.imgUrl}
                width={400}
                height={400}
                alt={ad.title}
                className={styles.image}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.contentHeader}>
                <span className={styles.category}>{ad.category}</span>
                <CiHeart />
              </div>
              <div>
                <h3 className={styles.title}>{ad.title}</h3>
                <p className={styles.location}>{ad.location}</p>
              </div>
              <div>
                <p className={styles.review}>{ad.reviews} Reviews</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trend;
