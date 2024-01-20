import React from "react";
import styles from "./trend.module.css";
import { featuredAds } from "@/data";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const Trend = () => {
  const newFeaturedAds = featuredAds.filter((ad) => ad.id >= 6);

  return (
    <div className={styles.trendContainer}>
      <div className={styles.header}></div>
      <div className={styles.trendItemsContainer}>
        {newFeaturedAds.map((ad) => (
          <div key={ad.id}>
            <div className={styles.image}>
              <Image src={ad.imgUrl} width={400} height={400} alt={ad.title} />
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
                <p className={styles.review}>{ad.reviews}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trend;
