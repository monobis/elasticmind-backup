import { ArrowRight } from "react-feather";
import styles from "./styles.module.css";
import React from "react";

interface ICardServiceProps {
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number | string }>;
}

export function CardService({ title, description, Icon }: ICardServiceProps) {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div className={styles.icon}>
          <Icon size={36} />
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <button className={styles.button}>
        <span className={styles.buttonText}>Get Started</span> <ArrowRight />
      </button>
    </main>
  );
}
