import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";

export function CardPriority() {
  return (
    <main className={styles.container}>
      <h4 className={styles.emphasis}>To nurture</h4>
      <h2 className={styles.title}>professional growth</h2>
      <ul className={styles.list}>
        <li className={styles.listItem}> Culture of self-development</li>
        <li className={styles.listItem}>
          Time for skill-up as part of the schedule
        </li>
        <li className={styles.listItem}>
          Internal and external knowledge-sharing
        </li>
        <li className={styles.listItem}>Contribution to open-source</li>
      </ul>

      <button className={styles.button}>
        <span className={styles.buttonText}>Visit Blog</span> <ArrowRight />
      </button>
    </main>
  );
}
