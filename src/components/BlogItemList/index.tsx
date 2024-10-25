import Image from "next/image";
import styles from "./styles.module.css";
import BlogBanner from "@/../public/blog-banner.webp";

export function BlogItemList() {
  return (
    <main className={styles.container}>
      <Image
        className={styles.imageBanner}
        width={450}
        height={300}
        src={BlogBanner}
        alt="Blog Banner"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>Latest Blog Posts</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut labore et dolore doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut
          labore et.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </main>
  );
}
