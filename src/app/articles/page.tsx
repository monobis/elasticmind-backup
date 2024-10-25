import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Articles() {
  return (
    <main>
      <Header />

      <section className={styles.container}></section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
