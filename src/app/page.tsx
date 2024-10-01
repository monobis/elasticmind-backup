import { Header } from "@/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}></section>
    </main>
  );
}
