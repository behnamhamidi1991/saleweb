"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./featured.module.css";
import Image from "next/image";
import { featuredAds } from "@/data";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const FeaturedSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className={styles.sliderContainer}>
      <h2>Featured Ads</h2>
      <Swiper
        spaceBetween={15}
        loop={true}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {featuredAds.map((ad) => (
          <SwiperSlide key={ad.id} className={styles.slide}>
            <Image src={ad.imgUrl} alt={ad.title} width={400} height={600} />
            <div className={styles.content}>
              <div className={styles.categoryLike}>
                <span>{ad.category}</span>
                <CiHeart className={styles.likeIcon} />
              </div>
              <div className={styles.titlePlace}>
                <h3>{ad.title}</h3>
                <p>{ad.location}</p>
              </div>
              <div className={styles.starReview}>{ad.reviews} Reviews</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedSlider;
