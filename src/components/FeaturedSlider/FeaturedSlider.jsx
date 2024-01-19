"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import styles from "./featured.module.css";
import Image from "next/image";
import bmw from "../../../public/featured/bmw.jpg";
import house from "../../../public/featured/house.jpg";
import iphone from "../../../public/featured/iphone.jpg";
import lamp from "../../../public/featured/lamp.jpg";
import laptop from "../../../public/featured/laptop.jpg";
import moisture from "../../../public/featured/moisture.jpg";
import sofa from "../../../public/featured/sofa.jpg";
import tablet from "../../../public/featured/tablet.jpg";
import tshirt from "../../../public/featured/tshirt.jpg";
import watch from "../../../public/featured/watch.jpg";
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
        <SwiperSlide className={styles.slide}>
          <Image src={bmw} alt="image" />
          <div className={styles.content}>
            <div className={styles.categoryLike}>
              <span>Cars & Vehicles</span>
            </div>
            <div className={styles.titlePlace}></div>
            <div className={styles.starReview}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={bmw} alt="image" />
          <div className={styles.content}>
            <div className={styles.categoryLike}></div>
            <div className={styles.titlePlace}></div>
            <div className={styles.starReview}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={bmw} alt="image" />
          <div className={styles.content}>
            <div className={styles.categoryLike}></div>
            <div className={styles.titlePlace}></div>
            <div className={styles.starReview}></div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <Image src={bmw} alt="image" />
          <div className={styles.content}>
            <div className={styles.categoryLike}></div>
            <div className={styles.titlePlace}></div>
            <div className={styles.starReview}></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default FeaturedSlider;
