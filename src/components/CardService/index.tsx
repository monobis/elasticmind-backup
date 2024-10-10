import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";

interface CardServiceProps {
  title: string;
  description: string;
  Icon: React.FC;
}

export function CardService({ title, description, Icon }: CardServiceProps) {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div className={styles.icon}>
          <Icon />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>
        <span className={styles.buttonText}>Get Started</span> <ArrowRight />
      </button>
    </main>
  );
}
