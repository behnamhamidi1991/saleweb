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

const FeaturedSlider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={4}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {featuredAds.map((ad) => (
          <SwiperSlide key={ad.id} className={styles.slide}>
            <Image src={ad.imgUrl} alt={ad.title} width={400} height={600} />
            <div className={styles.content}>
              <div className={styles.categoryLike}>
                <span></span>
              </div>
              <div className={styles.titlePlace}></div>
              <div className={styles.starReview}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedSlider;
