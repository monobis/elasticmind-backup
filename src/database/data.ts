import ArticleImage from "@/../public/immage-tecnology.jpg";
import { ArticleCategory, IArticle, IPriority, IService } from "./IData";
import { v4 as uuidv4 } from "uuid";
import {
  ArrowDown,
  Code,
  Figma,
  Grid,
  Search,
  Settings,
  Tool,
} from "react-feather";

export const priorities: IPriority[] = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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

export const articles: IArticle[] = [
  {
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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
    id: uuidv4(),
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

export const services: IService[] = [
  {
    id: uuidv4(),
    title: "Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Figma,
  },
  {
    id: uuidv4(),
    title: "Software Engineering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Code,
  },
  {
    id: uuidv4(),
    title: "Quality Assurance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Search,
  },
  {
    id: uuidv4(),
    title: "DevOps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Settings,
  },
  {
    id: uuidv4(),
    title: "Support & Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Tool,
  },
  {
    id: uuidv4(),
    title: "Project Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Ut enim ad minim veniam, quis nostrud",
    Icon: Grid,
  },
];
