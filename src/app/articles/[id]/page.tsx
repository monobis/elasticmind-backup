"use client";;
import styles from "./styles.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderArticleDetails } from "@/components/HeaderArticleDetails";
import { articles } from "@/database/data";
import { IArticle } from "@/database/IData";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IArticleDetailsProps {
  params: {
    id: string;
  };
}

export default function ArticleDetails({ params }: IArticleDetailsProps) {
  const router = useRouter();

  const { id } = params;

  const article: IArticle = articles.find(
    (article) => article.id === id
  ) as IArticle;

  console.log(article);

  useEffect(() => {
    if (!article) {
      router.push("/articles");
    }
  }, [article, router]);

  if (!article) return null;

  return (
    <main>
      <Header />
      <section className={styles.content}>
        <HeaderArticleDetails
          title={article.title}
          subtitle={article.subtitle}
        />
      </section>

      <section className={styles.articleContent}>


        <p className={styles.articleParagraph}>{article.description}</p>
      </section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
