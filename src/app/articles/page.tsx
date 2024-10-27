import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Articles() {
  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.coreContent}>
          <h1 className={styles.coreTitle}>
            <span className={styles.titleCategory}>Título:</span> Chamada
            notícia Principal.
          </h1>

          <p className={styles.coreDescription}>
            Elasticmind is more than just a software development company. We’re
            a team of people driven by innovation who pull off the impossible
            with the blend of the brightest technological minds.
          </p>

          <button className={styles.buttonReadMore}>Read more</button>
        </div>
      </section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
