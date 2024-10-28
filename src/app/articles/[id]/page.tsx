"use client";
import styles from "./styles.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderArticleDetails } from "@/components/HeaderArticleDetails";

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
      <section className={styles.content}>
        <HeaderArticleDetails
          title="ELASTICMIND article in 2024"
          subtitle="“Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, 
adipisci velit…”"
        />
      </section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
