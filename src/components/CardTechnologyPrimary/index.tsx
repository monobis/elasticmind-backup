import { ArrowDown } from "react-feather";
import styles from "./styles.module.css";

export function CardTechnologyPrimary() {
  return (
    <main className={styles.container}>
      <button className={styles.button}>
        <span className={styles.buttonText}>
          Check our open source contributions
        </span>{" "}
        <ArrowDown />
      </button>
    </main>
  );
}
