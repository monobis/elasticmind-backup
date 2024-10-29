import { StaticImageData } from "next/image";

export interface IPriority {
  id: string;
  category: string;
  title: string;
  listDescription: string[];
}

export enum ArticleCategory {
  Popular = "POPULAR ARTICLE",
  Elasticmind = "ELASTICMIND",
  Latest = "LATEST ARTICLE",
  news = "NEWS",
  world = "WORLD",
}

export interface IArticle {
  id: string;
  image: StaticImageData;
  sector: string;
  title: string;
  description: string;
  author: string;
  authorPosition: string;
  category: ArticleCategory;
}

export interface IService {
  id: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ size?: number | string }>;
}

export interface IBusiness {
  id: string;
  title: string;
  description: string;
}

export interface IFeedback {
  id: string;
  image: StaticImageData;
  description: string;
  author: string;
  stars: number;
}
