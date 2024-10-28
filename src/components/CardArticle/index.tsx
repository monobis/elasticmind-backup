import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

interface ICardProps {
  image: StaticImageData;
  sector: string;
  title: string;
  description: string;
  author: string;
  authorPosition: string;
  category: string;
}

export function CardArticle({
  image,
  sector,
  title,
  description,
  author,
  authorPosition,
  category,
}: ICardProps) {
  return (
    <main className={styles.container}>
      <Image className={styles.articleImage} src={image} alt="Article image" />

      <section className={styles.content}>
        <h2 className={styles.sector}>{sector}</h2>
        <h2 className={styles.articleTitle}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.authorContainer}>
          <div className={styles.authorContent}>
            <span>{author}</span>
            <span className={styles.authorPosition}>{authorPosition}</span>
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </section>
    </main>
  );
}
