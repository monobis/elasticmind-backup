import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";
import { handleScrollToSection } from "@/utils/scrollUtils";

interface ICardPriorityProps {
  category: string;
  title: string;
  listDescription: string[];
}

export function CardPriority({
  category,
  title,
  listDescription,
}: ICardPriorityProps) {
  return (
    <main className={styles.container}>
      <h4 className={styles.emphasis}>{category}</h4>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {listDescription.map((description, index) => (
          <li key={index} className={styles.listItem}>
            {description}
          </li>
        ))}
      </ul>

      <button className={styles.button}    onClick={() => handleScrollToSection("blog")}>
        <span className={styles.buttonText}>Visit Blog</span> <ArrowRight />
      </button>
    </main>
  );
}
