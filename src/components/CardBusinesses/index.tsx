import styles from "./styles.module.css";

interface ICardBusinessesProps {
  title: string;
  description: string;
}

export function CardBusinesses({ title, description }: ICardBusinessesProps) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Learn more</button>
      </div>
    </article>
  );
}
