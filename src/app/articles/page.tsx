"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CardArticle } from "@/components/CardArticle";
import { articles } from "@/database/data";
import { useRouter } from "next/navigation";

export default function Articles() {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState("ALL ARTICLE");

  const categories = [
    "ALL ARTICLE",
    "POPULAR ARTICLE",
    "LATEST ARTICLE",
    "ELASTICMIND",
    "NEWS",
    "WORLD",
  ];

  const principalArticle = articles.find(
    (article) => article.principal === true
  );

  const filteredArticles =
    selectedCategory === "ALL ARTICLE"
      ? articles.filter((article) => !article.principal)
      : articles.filter(
          (article) =>
            !article.principal &&
            article.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <main>
      <Header />

      <section className={styles.container}>
        <div className={styles.coreContent}>
          <h1 className={styles.coreTitle}>
            {principalArticle && principalArticle.title}
          </h1>

          <div className={styles.coreDescriptionContainer}>
            <p className={styles.coreDescription}>
              {principalArticle && principalArticle.description}
            </p>
          </div>

          <button
            className={styles.buttonReadMore}
            onClick={() =>
              principalArticle &&
              router.push(`/articles/${principalArticle.id}`)
            }
          >
            Read more
          </button>
        </div>

        <section className={styles.categoriesContainer}>
          <div className={styles.categories}>
            {categories.map((category, index) => (
              <h2
                key={index}
                className={`${styles.articleCategory} ${
                  selectedCategory === category ? styles.articleSelected : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </h2>
            ))}
          </div>
        </section>

        <section className={styles.articlesContainer} id="articles">
          <header className={styles.articlesHeader}>
            <h1 className={styles.titleArticlesList}>
              <span className={styles.titleArticlesEmphasis}>ELASTICMIND</span>{" "}
              article in 2024
            </h1>
            <p className={styles.descriptionArticlesHeader}>
              “Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit…”
            </p>
          </header>

          <section className={styles.articles}>
            {filteredArticles.map((article) => (
              <CardArticle
                key={article.id}
                id={article.id}
                image={article.image}
                sector={article.sector}
                title={article.title}
                description={article.description}
                author={article.author}
                authorPosition={article.authorPosition}
                category={article.category}
              />
            ))}
          </section>
        </section>
      </section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
