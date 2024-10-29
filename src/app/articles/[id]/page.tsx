"use client";
import styles from "./styles.module.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeaderArticleDetails } from "@/components/HeaderArticleDetails";
import { articles } from "@/database/data";
import { IArticle } from "@/database/IData";
import { main } from "framer-motion/client";
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

  // useEffect(() => {
  //   if (!article) {
  //     router.push("/articles");
  //   }
  // }, [article, router]);

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
        {/* <p className={styles.articleParagraph}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempus massa ac felis gravida eleifend. Suspendisse mattis rhoncus
          purus, et commodo mi lacinia at. Aenean auctor et felis id feugiat.
          Nulla facilisi. Maecenas auctor augue quis justo pretium sodales.
          Proin in tincidunt felis. Nunc fringilla tellus turpis, in accumsan
          tellus blandit sed. Ut sit amet imperdiet ipsum. Donec varius et dui a
          dignissim. Vivamus id metus dapibus, auctor risus non, venenatis odio.
          Nunc ultricies facilisis ligula ac congue. Mauris lectus odio,
          accumsan quis gravida non, maximus vitae nisi. Nunc vel erat
          fermentum, accumsan augue vel, eleifend tellus. Vestibulum a ex nec
          ipsum aliquam commodo. Donec arcu orci, mollis sit amet blandit at,
          ultrices ornare diam. Mauris at lacus tincidunt, dignissim velit et,
          facilisis velit.
        </p>

        <p className={styles.articleParagraph}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempus massa ac felis gravida eleifend. Suspendisse mattis rhoncus
          purus, et commodo mi lacinia at. Aenean auctor et felis id feugiat.
          Nulla facilisi. Maecenas auctor augue quis justo pretium sodales.
          Proin in tincidunt felis. Nunc fringilla tellus turpis, in accumsan
          tellus blandit sed. Ut sit amet imperdiet ipsum. Donec varius et dui a
          dignissim. Vivamus id metus dapibus, auctor risus non, venenatis odio.
          Nunc ultricies facilisis ligula ac congue. Mauris lectus odio,
          accumsan quis gravida non, maximus vitae nisi. Nunc vel erat
          fermentum, accumsan augue vel, eleifend tellus. Vestibulum a ex nec
          ipsum aliquam commodo. Donec arcu orci, mollis sit amet blandit at,
          ultrices ornare diam. Mauris at lacus tincidunt, dignissim velit et,
          facilisis velit.
        </p>

        <p className={styles.articleParagraph}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tempus massa ac felis gravida eleifend. Suspendisse mattis rhoncus
          purus, et commodo mi lacinia at. Aenean auctor et felis id feugiat.
          Nulla facilisi. Maecenas auctor augue quis justo pretium sodales.
          Proin in tincidunt felis. Nunc fringilla tellus turpis, in accumsan
          tellus blandit sed. Ut sit amet imperdiet ipsum. Donec varius et dui a
          dignissim. Vivamus id metus dapibus, auctor risus non, venenatis odio.
          Nunc ultricies facilisis ligula ac congue. Mauris lectus odio,
          accumsan quis gravida non, maximus vitae nisi. Nunc vel erat
          fermentum, accumsan augue vel, eleifend tellus. Vestibulum a ex nec
          ipsum aliquam commodo. Donec arcu orci, mollis sit amet blandit at,
          ultrices ornare diam. Mauris at lacus tincidunt, dignissim velit et,
          facilisis velit.
        </p> */}

        <p className={styles.articleParagraph}>{article.description}</p>
      </section>

      <div className={styles.footer}>
        {" "}
        <Footer />
      </div>
    </main>
  );
}
