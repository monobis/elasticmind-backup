import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { StarIcon } from "../Icons/StarIcon";

interface ICardFeedbackProps {
  image: StaticImageData;
  description: string;
  author: string;
  stars: number;
}

export function CardFeedback({
  image,
  description,
  author,
  stars,
}: ICardFeedbackProps) {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Image
          src={image}
          alt="Client Image"
          width={110}
          height={110}
          className={styles.clientImage}
        />
      </header>
      <p className={styles.content}>"{description}"</p>
      <div className={styles.assessment}>
        <div className={styles.assessmentContent}>
          <span className={styles.author}>{author}</span>
          <div className={styles.stars}>
            {Array.from({ length: stars }, (_, index) => (
              <span key={index} className={styles.icon}>
                <StarIcon width={30} height={35} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
