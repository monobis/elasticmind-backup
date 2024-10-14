"use client";
import { motion } from "framer-motion";

import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import styles from "./page.module.css";
import {
  ArrowDown,
  Code,
  Figma,
  Grid,
  Search,
  Settings,
  Tool,
} from "react-feather";
import { CardPriority } from "@/components/CardPriority";
import { CardTechnologyPrimary } from "@/components/CardTechnologyPrimary";
import { CardTechnologySecondary } from "@/components/CardTechnologySecondary";
import { CardService } from "@/components/CardService";

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
          <Carousel key="carousel-priorities">
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
          <Carousel key="carousel-technologies">
            <motion.div className={styles.containerCard}>
              <div className={styles.card}>
                <CardTechnologyPrimary />
              </div>
            </motion.div>

            <motion.div className={styles.containerCard}>
              <div className={styles.card}>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.containerCard}>
              <div className={styles.card}>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
              </div>
            </motion.div>

            <motion.div className={styles.containerCard}>
              <div className={styles.card}>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
                <div className={styles.cardTechnologySecondary}>
                  <CardTechnologySecondary />
                  <CardTechnologySecondary />
                </div>
              </div>
            </motion.div>
          </Carousel>
        </div>

        <div className={styles.ourServices}>
          <h2 className={styles.titleCarousel}>Priorities</h2>
          <div className={styles.ourServicesContent}>
            <h1 className={styles.ourServicesTitle}>
              Delivering Future Digital Services
            </h1>
            <div className={styles.numberData}>
              <div className={styles.numberDataContent}>
                <span className={styles.clientsNumber}>
                  1,000<span>+</span>
                </span>
                <span className={styles.clientsText}>
                  Satisfied Clients Worldwide
                </span>
              </div>

              <div className={styles.numberDataContent}>
                <span className={styles.clientsNumber}>
                  1,000<span>+</span>
                </span>
                <span className={styles.clientsText}>
                  Satisfied Clients Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.services}>
          <CardService
            title="Design"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Figma}
          />

          <CardService
            title="Software Engineering"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Code}
          />

          <CardService
            title="Quality Assurance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Search}
          />

          <CardService
            title="DevOps"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Settings}
          />

          <CardService
            title="Support & Maintenance"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Tool}
          />

          <CardService
            title="Project Management"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud"
            Icon={Grid}
          />
        </div>

        <div className={styles.businesses}>
          <h2 className={styles.titleCarousel}>Businesses</h2>
          <div className={styles.businessesContent}>
            {" "}
            <p className={styles.businessesText}>
              Depending on{" "}
              <span className={styles.businessesEmphasis}>business</span>{" "}
              maturity, we try to{" "}
              <span className={styles.businessesEmphasis}>anticipate</span> and
              cover the most common{" "}
              <span className={styles.businessesEmphasis}>
                challenges companies face.
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
