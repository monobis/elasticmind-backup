import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.css";

interface IBlogItemListProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export function BlogItemList({
  image,
  title,
  description,
}: IBlogItemListProps) {
  return (
    <main className={styles.container}>
      <Image
        className={styles.imageBanner}
        width={450}
        height={300}
        src={image}
        alt="Blog Banner"
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </main>
  );
}
