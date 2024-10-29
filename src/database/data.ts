import ArticleImage from "@/../public/immage-tecnology.jpg";
import PeapleImage from "@/../public/peaple-image.jpeg";
import BlogBanner from "@/../public/blog-banner.webp";
import {
  ArticleCategory,
  IArticle,
  IBlogPost,
  IBusiness,
  IFeedback,
  IPriority,
  IService,
} from "./IData";
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

export const businesses: IBusiness[] = [
  {
    id: uuidv4(),
    title: "Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: uuidv4(),
    title: "Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },

  {
    id: uuidv4(),
    title: "Small to medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: uuidv4(),
    title: "Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: uuidv4(),
    title: "Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },

  {
    id: uuidv4(),
    title: "Small to medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
];

export const feedbacks: IFeedback[] = [
  {
    id: uuidv4(),
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },

  {
    id: uuidv4(),
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },

  {
    id: uuidv4(),
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },

  {
    id: uuidv4(),
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },

  {
    id: uuidv4(),
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
];

export const blogPosts: IBlogPost[] = [
  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },

  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },

  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },

  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },

  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },

  {
    id: uuidv4(),
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
];
