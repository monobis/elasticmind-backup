"use client";

import styles from "./styles.module.css";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";

register();

interface ISwiperProps {
  children: React.ReactNode;
}

export function Slider({ children }: ISwiperProps) {
  const [slidePerView, setSlidePerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1600) {
        setSlidePerView(1);
      } else {
        setSlidePerView(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className={styles.container}>
      <Swiper
        className={styles.swiper}
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={50}
      >
        {children}
      </Swiper>
    </main>
  );
}
