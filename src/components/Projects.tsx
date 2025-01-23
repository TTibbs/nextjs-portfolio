"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const ncNewsIcons = [
  {
    id: 1,
    name: "Node.js",
    designation: "Runtime Envrionment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
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
    name: "JavaScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Jest",
    designation: "Testing Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    id: 8,
    name: "Supabase",
    designation: "Backend Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
  {
    id: 9,
    name: "Vercel",
    designation: "Deployment Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
];
const timeTreasuresIcons = [
  {
    id: 1,
    name: "Node.js",
    designation: "Runtime Envrionment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
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
    name: "JavaScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Jest",
    designation: "Testing Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
  },
  {
    id: 8,
    name: "Supabase",
    designation: "Backend Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  },
];
const quizzupIcons = [
  {
    id: 1,
    name: "Expo",
    designation: "Development Platform",
    image: "/icons8-expo-50.png",
  },
  {
    id: 2,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "Axios",
    designation: "HTTP Client",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
  },
  {
    id: 6,
    name: "Vercel",
    designation: "Deployment Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
];
const createMVCServerIcons = [
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
  {
    id: 5,
    name: "Express",
    designation: "Web Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL",
    designation: "Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "MongoDB",
    designation: "NoSQL Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 8,
    name: "MySQL",
    designation: "Relational Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    id: 9,
    name: "SQLite",
    designation: "Embedded Database",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
];
const ttibbsChatIcons = [
  {
    id: 1,
    name: "React",
    designation: "UI Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Next.js",
    designation: "React Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Typed JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Tailwind CSS",
    designation: "Styling Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 5,
    name: "Framer",
    designation: "Animation Library",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
  },
  {
    id: 6,
    name: "OpenAI API",
    designation: "AI-Powered Backend",
    image: "/icons8-chatgpt-50.png",
  },
  {
    id: 7,
    name: "Vercel",
    designation: "Deployment Platform",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg",
  },
];

const buttonClass =
  "flex items-center justify-center px-4 py-4 min-w-[4rem] rounded-xl text-xs font-bold bg-zinc-800 text-white text-center";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl lg:text-4xl font-bold text-zinc-200 mb-6 select-none">
        Recent Projects
      </h2>
      <section className="my-10 grid w-[90vw] grid-cols-1 md:grid-cols-2 items-stretch xl:grid-cols-3 gap-5">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black dark:border-white/[0.2] border-blue-600 w-[25rem] h-[40rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              NC News
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Full stack news aggregate app
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="/nc-news.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10 gap-2">
              <AnimatedTooltip items={ncNewsIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/nc-news"
                target="__blank"
                className={buttonClass}
              >
                Frontend Repo
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://be-nc-news-92aj.onrender.com/api"
                target="__blank"
                className={buttonClass}
              >
                API
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/be-nc-news"
                target="__blank"
                className={buttonClass}
              >
                Backend Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black dark:border-white/[0.2] border-blue-600 w-[25rem] h-[40rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Time Treasures
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Frontend for NC Final Project "Time Treasures"
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="/time-treasures.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={timeTreasuresIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/benedict-robinson/Time-Treasures-Frontend"
                target="__blank"
                className={buttonClass}
              >
                Frontend Repo
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://time-treasures-backend.onrender.com/api"
                target="__blank"
                className={buttonClass}
              >
                API
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/time-treasures-backend"
                target="__blank"
                className={buttonClass}
              >
                Backend Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black dark:border-white/[0.2] border-blue-600 w-[25rem] h-[40rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Quizzup
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              React Native app using the OTDB API.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="/quizzup.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={quizzupIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://native-quiz-app.vercel.app/"
                target="__blank"
                className={buttonClass}
              >
                Live View
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/native-quiz-app"
                target="__blank"
                className={buttonClass}
              >
                GitHub Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black dark:border-white/[0.2] border-blue-600 w-[25rem] h-[40rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Create MVC Server
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              MVC server, CLI scaffolding tool.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="/create-mvc-server.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={createMVCServerIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://create-mvc-server.vercel.app/"
                target="__blank"
                className={buttonClass}
              >
                Live View
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/create-mvc-server"
                target="__blank"
                className={buttonClass}
              >
                GitHub Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black dark:border-white/[0.2] border-blue-600 w-[25rem] h-[40rem] rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white px-3"
            >
              TTibbs Chat
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 px-3"
            >
              AI chatbot, built with Next.js and the OpenAI API.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="/ttibbschat.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={ttibbsChatIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="/"
                className={buttonClass}
              >
                Live View (TBU)
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="/"
                className={buttonClass}
              >
                GitHub Repo (TBU)
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </section>
    </section>
  );
};

export default Projects;
