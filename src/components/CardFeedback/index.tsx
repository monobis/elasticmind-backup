import Image from "next/image";
import styles from "./styles.module.css";

import Star from "@/../public/star.svg";
import { StarIcon } from "../Icons/StarIcon";

interface CardFeedbackProps {
  content: string;
  author: string;
  stars: number;
}

export function CardFeedback({ content, author, stars }: CardFeedbackProps) {
  return (
    <main className={styles.container}>
      <p className={styles.content}>"{content}"</p>
      <div className={styles.assessment}>
        <span className={styles.author}>{author}</span>
        <div className={styles.stars}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </main>
  );
}
