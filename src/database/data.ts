import ArticleImage from "@/../public/immage-tecnology.jpg";
import { ArticleCategory, IArticles, IPriorities } from "./IData";
import { randomUUID } from "crypto";

export const priorities: IPriorities[] = [
  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },

  {
    id: randomUUID(),
    category: "To nurture",
    title: "professional growth",
    listDescription: [
      "Culture of self-development",
      "Time for skill-up as part of the schedule",
      "Internal and external knowledge-sharing",
      "Contribution to open-source",
    ],
  },
];

export const articles: IArticles[] = [
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Latest,
  },
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Elasticmind,
  },
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Elasticmind,
  },
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Elasticmind,
  },
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Latest,
  },
  {
    id: randomUUID(),
    image: ArticleImage,
    sector: "nft",
    title: "Neque porro quisquam est qui dolorem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus massa ac felis gravida eleifend.",
    author: "John Doe",
    authorPosition: "CEO",
    category: ArticleCategory.Popular,
  },
];
