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
    id: "a3bb189e-8bf9-3888-9912-ace4e6543002",
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
    id: "9b1deb24-79c2-42c8-9529-3e657d841e1d",
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
    id: "c4b30c29-b91d-4b4a-8a48-0f67c52557b3",
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
    id: "1c708b10-11f4-4ecf-a5be-d48e65c0ac65",
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
    id: "f8966f53-2c55-4e1d-9ef9-d6e88f1392a4",
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
    id: "b7f2244a-dc04-42f0-bff8-bb9e6d4b5e77",
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
    id: "5f0d72ec-030c-4894-a640-fc44e12d602d",
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
    id: "16e1f2b6-69a2-482b-bf0e-88826b70c578",
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
    id: "a3bb189e-8bf9-3888-9912-ace4e6543001",
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
    id: "9b1deb24-79c2-42c8-9529-3e657d841e1e",
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
    id: "c4b30c29-b91d-4b4a-8a48-0f67c52557b4",
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
    id: "1c708b10-11f4-4ecf-a5be-d48e65c0ac66",
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
    id: "f8966f53-2c55-4e1d-9ef9-d6e88f1392a5",
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
    id: "b7f2244a-dc04-42f0-bff8-bb9e6d4b5e78",
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
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    title: "Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d480",
    title: "Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d481",
    title: "Small to medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d482", // ID fixo
    title: "Startups",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d483", // ID fixo
    title: "Enterprises",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d484", // ID fixo
    title: "Small to medium",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
  },
];

export const feedbacks: IFeedback[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d485", // ID fixo
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d486", // ID fixo
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d487", // ID fixo
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d488", // ID fixo
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d489", // ID fixo
    image: PeapleImage,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.",
    author: "John Doe",
    stars: 5,
  },
];

export const blogPosts: IBlogPost[] = [
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d490", // ID fixo
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d491", // ID fixo
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d492", // ID fixo
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d493", // ID fixo
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d494", // ID fixo
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
  {
    id: "f47ac10b-58cc-4372-a567-0e02b2c3d495",
    image: BlogBanner,
    title: "Latest Blog Posts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et.",
  },
];
