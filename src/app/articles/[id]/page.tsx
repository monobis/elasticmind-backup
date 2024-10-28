"use client";
import styles from "./styles.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface IArticleDetailsProps {
  params: {
    id: string;
  };
}

export default function ArticleDetails({ params }: IArticleDetailsProps) {
  const { id } = params;

  console.log(id);
  return (
    <main>
      <Header />
      <section className={styles.content}></section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
