"use client";
import { useState, useEffect, useRef } from "react";
import { CardPriority } from "../CardPriority";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
export function Carousel() {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      const scrollWidth = carousel.current.scrollWidth;
      const offsetWidth = carousel.current.offsetWidth;

      if (scrollWidth && offsetWidth) {
        setWidth(scrollWidth - offsetWidth);
      }
    }
  }, []);

  return (
    <div className={styles.containerCarousel}>
      <motion.div
        className={styles.carousel}
        ref={carousel}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className={styles.inner}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>

          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>

          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>

          <motion.div className={styles.containerCard}>
            <div className={styles.card}>
              <CardPriority />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
