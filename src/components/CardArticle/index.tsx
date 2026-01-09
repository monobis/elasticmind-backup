import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

interface ICardProps {
  id: string;
  image: StaticImageData;
  sector: string;
  title: string;
  description: string;
  author: string;
  authorPosition: string;
  category: string;
}

export function CardArticle({
  id,
  image,
  sector,
  title,
  description,
  author,
  authorPosition,
}: ICardProps) {
  const router = useRouter();

  return (
    <article className={styles.container}>
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
          <button
            className={styles.button}
            onClick={() => router.push(`/articles/${id}`)}
          >
            Read More
          </button>
        </div>
      </section>
    </article>
  );
}
