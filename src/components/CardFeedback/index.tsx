import Image from "next/image";
import styles from "./styles.module.css";

import PeapleImage from "@/../public/peaple-image.jpeg";
import { StarIcon } from "../Icons/StarIcon";

interface CardFeedbackProps {
  content: string;
  author: string;
  stars: number;
}

export function CardFeedback({ content, author, stars }: CardFeedbackProps) {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Image
          src={PeapleImage}
          alt="Client Image"
          width={110}
          height={110}
          className={styles.clientImage}
        />
      </header>
      <p className={styles.content}>"{content}"</p>
      <div className={styles.assessment}>
        <div className={styles.assessmentContent}>
          <span className={styles.author}>{author}</span>
          <div className={styles.stars}>
            <span className={styles.icon}>
              <StarIcon width={30} height={35} />
            </span>

            <span className={styles.icon}>
              <StarIcon width={30} height={35} />
            </span>

            <span className={styles.icon}>
              <StarIcon width={30} height={35} />
            </span>

            <span className={styles.icon}>
              <StarIcon width={30} height={35} />
            </span>

            <span className={styles.icon}>
              <StarIcon width={30} height={35} />
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
