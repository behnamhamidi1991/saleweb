"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./feedback.module.css";
export { feedback } from "../../data";
import Image from "next/image";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { feedback } from "@/data";

const Feedback = () => {
  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.title}>
        <h2>Testimonials</h2>
        <p>See what people think of us</p>
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className={styles.mySlider}
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id} className={styles.slide}>
              <Image
                src={item.img}
                width={200}
                height={200}
                alt={item.name}
                className={styles.profileImg}
              />
              <h4 className={styles.name}>{item.name}</h4>
              <p className={styles.feedback}>{item.feedback}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
