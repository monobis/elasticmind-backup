import styles from "./styles.module.css";

interface CardBusinessesProps {
  title: string;
  description: string;
}

export function CardBusinesses({ title, description }: CardBusinessesProps) {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>Learn more</button>
      </div>
    </main>
  );
}
