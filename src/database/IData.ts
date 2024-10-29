import { StaticImageData } from "next/image";

export enum ArticleCategory {
  Popular = "POPULAR ARTICLE",
  Elasticmind = "ELASTICMIND",
  Latest = "LATEST ARTICLE",
  news = "NEWS",
  world = "WORLD",
}

export interface IArticles {
  id: string;
  image: StaticImageData;
  sector: string;
  title: string;
  description: string;
  author: string;
  authorPosition: string;
  category: ArticleCategory;
}
