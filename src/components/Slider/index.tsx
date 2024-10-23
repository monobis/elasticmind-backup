import styles from "./styles.module.css";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();

interface SwiperProps {
  children: React.ReactNode;
}

export function Slider({ children }: SwiperProps) {
  return (
    <main className={styles.container}>
      <Swiper
        className={styles.swiper}
        slidesPerView={2}
        pagination={{ clickable: true }}
        navigation
        spaceBetween={50}
      >
        {children}
      </Swiper>
    </main>
  );
}
