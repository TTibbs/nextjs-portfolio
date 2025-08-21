export type ProjectIcons = {
  id: number;
  name: string;
  designation: string;
  image: string;
};

export type Project = {
  name: string;
  description: string;
  image: string;
  github_frontend?: string;
  github_backend?: string;
  frontend?: string;
  npm_package?: string;
};

export type Word = {
  text: string;
  className: string;
};

export const words: Word[] = [
  {
    text: "Dad,",
    className: "text-zinc-800 dark:text-zinc-100",
  },
  {
    text: "Full-Stack Developer,",
    className: "text-zinc-800 dark:text-zinc-100",
  },
  {
    text: "and",
    className: "text-zinc-800 dark:text-zinc-100",
  },
  {
    text: "Continuous",
    className: "text-zinc-800 dark:text-zinc-100",
  },
  {
    text: "Learner",
    className: "text-zinc-800 dark:text-zinc-100",
  },
];

export const projects: Project[] = [
  {
    name: "Gamified Learning App (WIP)",
    description: "Gamified learning app built with React Native and Expo.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kym8SpSLMUaxqoi2OCNez7KRy0ulBgtrM59Fp",
  },
  {
    name: "Email Template Builder (WIP)",
    description: "Email template builder for creating and sending emails.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kpdl65ZzUJVuMCa5XOoZHYKbyPiSW6khA8szD",
    frontend: "https://snaptemplate.vercel.app/",
  },
  {
    name: "Events Platform",
    description: "Events platform for managing events and tickets.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KVyc0G2HLbaduqnG49QCEhD86oAZLspKY2MlP",
    frontend: "https://event-platform-fe-one.vercel.app/",
  },
  {
    name: "Create MVC Server",
    description:
      "CLI dev tool for scaffolding MVC API projects to help speed up development.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KxaRpUPemN6r4KM1WguhOiBoYma5JbnZdf9Pp",
    github_backend: "https://github.com/TTibbs/create-mvc-server",
    npm_package: "https://www.npmjs.com/package/create-mvc-server",
  },
  {
    name: "Time Treasures",
    description: "Team project for Northcoders bootcamp.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4K6b6ydnTlvL8HJ09RKZFnsXbNeWxwQaroVP6M",
    github_frontend:
      "https://github.com/benedict-robinson/Time-Treasures-Frontend",
    github_backend: "https://github.com/TTibbs/time-treasures-backend",
  },
  {
    name: "NC News",
    description:
      "Northcoders bootcamp project building a news site with a RESTful API.",
    image:
      "https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KHpjQuxy4scHYIbJjExuG2velDorKanVtfkdq",
    github_frontend: "https://github.com/TTibbs/nc-news",
    frontend: "https://nc-news-ten.vercel.app/",
  },
];

const gamifiedLearningAppIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "React Native",
    designation: "Frontend Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Runtime Environment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    name: "Expo",
    designation: "Development Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
  },
  {
    id: 6,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 7,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];
const emailTemplateBuilderIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Runtime Environment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];
const createMVCServerIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "Node.js",
    designation: "Runtime Environment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 2,
    name: "NPM",
    designation: "Package Manager",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
];
const eventsPlatformIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Runtime Environment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];
const timeTreasuresIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "React Native",
    designation: "Frontend Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Runtime Envrionment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];
const ncNewsIcons: ProjectIcons[] = [
  {
    id: 1,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 2,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 3,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 4,
    name: "Node.js",
    designation: "Runtime Envrionment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    id: 5,
    name: "JavaScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
];

export const projectIcons = {
  "Gamified Learning App (WIP)": gamifiedLearningAppIcons,
  "Email Template Builder (WIP)": emailTemplateBuilderIcons,
  "Create MVC Server": createMVCServerIcons,
  "Events Platform": eventsPlatformIcons,
  "Time Treasures": timeTreasuresIcons,
  "NC News": ncNewsIcons,
};
