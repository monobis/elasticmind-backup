"use client";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Carousel } from "@/components/Carousel";
import styles from "./page.module.css";
import PeapleImage from "@/../public/peaple-image.jpeg";
import {
  ArrowDown,
  Code,
  Figma,
  Grid,
  Search,
  Settings,
  Tool,
} from "react-feather";
import { businesses, feedbacks, priorities, services } from "@/database/data";
import { CardPriority } from "@/components/CardPriority";
import { CardTechnologyPrimary } from "@/components/CardTechnologyPrimary";
import { CardTechnologySecondary } from "@/components/CardTechnologySecondary";
import { CardService } from "@/components/CardService";
import { CardBusinesses } from "@/components/CardBusinesses";
import { CardFeedback } from "@/components/CardFeedback";
import { SwiperSlide } from "swiper/react";
import { Slider } from "@/components/Slider";
import { useState, useEffect, FormEvent } from "react";
import { BlogItemList } from "@/components/BlogItemList";
import BlogBanner from "@/../public/blog-banner.webp";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [service, setService] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showAllBlogs, setShowAllBlogs] = useState(false);

  function handleChangeService(serviceSelected: string) {
    if (serviceSelected === service) {
      setService("");
    } else {
      setService(serviceSelected);
      setErrorMessage("");
    }
  }

  useEffect(() => {}, [service]);

  function handleSubmit(e: FormEvent, service: string, comment: string) {
    e.preventDefault();

    if (service === "") {
      setErrorMessage("Please select a service.");
      return;
    }

    setErrorMessage("");
    console.log({ service: service, comment: comment });
  }
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
            {priorities.map((priority) => (
              <motion.div key={priority.id} className={styles.containerCard}>
                <div className={styles.card}>
                  <CardPriority
                    category={priority.category}
                    title={priority.title}
                    listDescription={priority.listDescription}
                  />
                </div>
              </motion.div>
            ))}
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
          {services.map((service) => (
            <CardService
              key={service.id}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
            />
          ))}
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
            <Carousel key="carousel-businesses">
              {businesses.map((business) => (
                <motion.div
                  key={business.id}
                  className={styles.containerCardBusinesses}
                >
                  <div className={styles.card}>
                    <CardBusinesses
                      title={business.title}
                      description={business.description}
                    />
                  </div>
                </motion.div>
              ))}
            </Carousel>
          </div>
        </div>

        <div className={styles.imageReinvent}></div>

        <div className={styles.feedbackContainer}>
          <h2 className={styles.titleCarousel}>Feedbacks</h2>
          <div className={styles.feedbackContent}>
            <h1 className={styles.feedbackTitle}>Feedbacks from Our Clients</h1>
          </div>

          <div className={styles.feedbackSlider}>
            <Slider>
              {feedbacks.map((feedback) => (
                <SwiperSlide key={feedback.id}>
                  <div className={styles.slide}>
                    <CardFeedback
                      image={feedback.image}
                      description={feedback.description}
                      author={feedback.author}
                      stars={feedback.stars}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Slider>
          </div>
        </div>

        <div className={styles.contactContent}>
          <header className={styles.headerContact}>
            <div className={styles.headerContactContainer}>
              <div className={styles.headerDetailContact}></div>
              <h1 className={styles.headerTitle}>HOW CAN WE HELP YOU?</h1>
              <div className={styles.headerDetailContact}></div>
            </div>
            <span className={styles.headerDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor .
            </span>
          </header>

          <form
            className={styles.formContact}
            onSubmit={(e: FormEvent) => handleSubmit(e, service, comment)}
          >
            <div className={styles.buttons}>
              <div className={styles.buttonsDivisor}>
                <button
                  onClick={() => handleChangeService("Services")}
                  className={`${styles.buttonContact} ${
                    service === "Services" && styles.buttonSelected
                  }`}
                  type="button"
                >
                  Services
                </button>
                <button
                  onClick={() => handleChangeService("Careers")}
                  className={`${styles.buttonContact} ${
                    service === "Careers" && styles.buttonSelected
                  }`}
                  type="button"
                >
                  Careers
                </button>
              </div>
              <div className={styles.buttonsDivisor}>
                {" "}
                <button
                  onClick={() => handleChangeService("Partnerships & Sales")}
                  className={`${styles.buttonContact} ${
                    service === "Partnerships & Sales" && styles.buttonSelected
                  }`}
                  type="button"
                >
                  Partnerships & Sales
                </button>
                <button
                  onClick={() => handleChangeService("Other")}
                  className={`${styles.buttonContact} ${
                    service === "Other" && styles.buttonSelected
                  }`}
                  type="button"
                >
                  Other
                </button>
              </div>
            </div>

            {errorMessage && (
              <p className={styles.errorMessage}>{errorMessage}</p>
            )}

            <label className={styles.labelComment} htmlFor="comment">
              Comment ( optional )
            </label>
            <textarea
              className={styles.comment}
              name="comment"
              id="coment"
              placeholder="Your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>

            <div className={styles.checkboxContent}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="checkboxPrivacy"
                name="checkbox"
              />
              <label className={styles.checkboxLabel} htmlFor="checkboxPrivacy">
                I accept your Privacy policy.
              </label>
            </div>

            <div className={styles.checkboxContent}>
              <input
                className={styles.checkbox}
                type="checkbox"
                id="checkboxContact"
                name="checkbox"
              />
              <label className={styles.checkboxLabel} htmlFor="checkboxContact">
                I agree to be contacted by provided email.
              </label>
            </div>

            <button type="submit" className={styles.buttonSubmit}>
              Submit
            </button>
          </form>
        </div>

        <div className={styles.blogContent}>
          <h1 className={styles.blogListTitle}>Blog</h1>
          <div className={styles.blogList}>
            <BlogItemList
              image={BlogBanner}
              title="Latest Blog Posts"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
          labore et."
            />

            <BlogItemList
              image={BlogBanner}
              title="Latest Blog Posts"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
          labore et."
            />

            <BlogItemList
              image={BlogBanner}
              title="Latest Blog Posts"
              description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
          labore et."
            />

            {showAllBlogs && (
              <>
                <BlogItemList
                  image={BlogBanner}
                  title="Latest Blog Posts"
                  description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
            labore et."
                />

                <BlogItemList
                  image={BlogBanner}
                  title="Latest Blog Posts"
                  description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
            labore et."
                />

                <BlogItemList
                  image={BlogBanner}
                  title="Latest Blog Posts"
                  description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
            tempor incididunt ut labore et dolore doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
            labore et."
                />
              </>
            )}

            <button
              onClick={() => setShowAllBlogs(!showAllBlogs)}
              className={styles.buttonReadMoreBlogs}
            >
              {showAllBlogs ? "Read Recent Blogs" : "Read More Blogs"}
            </button>
          </div>
        </div>

        <div className={styles.footer}>
          {" "}
          <Footer />
        </div>
      </section>
    </main>
  );
}
