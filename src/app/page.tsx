"use client";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import styles from "./page.module.css";
import { ArrowDown } from "react-feather";
import { CardPriority } from "@/components/CardPriority";
import { CardTechnologyPrimary } from "@/components/CardTechnologyPrimary";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.centerContent}>
          <h1 className={styles.title}>
            Thought leaders In Front End digital Transformation
          </h1>
          <p className={styles.description}>
            Elasticmind is more than just a software development company. We’re
            a team of people driven by innovation who pull off the impossible
            with the blend of the brightest technological minds and edge
            technologies.
          </p>
          <button className={styles.buttonReview}>
            <span className={styles.textButton}>Review our tech stack</span>{" "}
            <ArrowDown size={20} />
          </button>
        </div>

        <div className={styles.carousel}>
          <h2 className={styles.titleCarousel}>Priorities</h2>
          <Carousel>
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
          </Carousel>
        </div>

        <div className={styles.carousel}>
          <h2 className={styles.titleCarousel}>Technology</h2>
          <Carousel>
            <motion.div className={styles.containerCard}>
              <div className={styles.card}>
                <CardTechnologyPrimary />
              </div>
            </motion.div>
          </Carousel>
        </div>
      </section>
    </main>
  );
}
