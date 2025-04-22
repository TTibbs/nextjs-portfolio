"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { projectIcons } from "@/lib/data";

const buttonClass =
  "flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h2 className="text-2xl lg:text-4xl font-bold text-zinc-200 mb-6 select-none">
        Recent Projects
      </h2>
      <section className="my-10 grid w-full max-w-7xl grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Email Template Builder
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12 overflow-hidden"
            >
              Build and save email templates with a drag and drop interface.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kpdl65ZzUJVuMCa5XOoZHYKbyPiSW6khA8szD"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip
                items={projectIcons.noCodeTemplateBuilderIcons}
              />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://no-code-email-template-builder.vercel.app/"
                target="__blank"
                className={buttonClass}
              >
                Live View
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/no-code-email-template-builder"
                target="__blank"
                className={buttonClass}
              >
                GitHub Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Prompt Wallet
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12 overflow-hidden"
            >
              Save and organise your AI prompts, uses Firebase Auth and
              Firestore with Stripe.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Ku0rTMRpT6F1HCrQWNasAUhpqJEw9Smc4BfnP"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={projectIcons.promptWalletIcons} />
            </div>
            <div className="flex justify-between items-center mt-16">
              <CardItem
                translateZ={20}
                as={Link}
                href="https://prompt-wallet.vercel.app/"
                target="__blank"
                className={buttonClass}
              >
                Live View
              </CardItem>
              <CardItem
                translateZ={20}
                as={Link}
                href="https://github.com/TTibbs/prompt-wallet"
                target="__blank"
                className={buttonClass}
              >
                GitHub Repo
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Create MVC Server
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12"
            >
              MVC server, CLI scaffolding tool.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kuicix8pT6F1HCrQWNasAUhpqJEw9Smc4BfnP"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={projectIcons.createMVCServerIcons} />
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
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Quizzup
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12"
            >
              React Native app using the OTDB API.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4Kriq3ofeD4a6LsfCkMlTopJtqhv2VI3BwiU5K"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={projectIcons.quizzupIcons} />
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
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              Time Treasures
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12"
            >
              Frontend for NC Final Project "Time Treasures"
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4K6b6ydnTlvL8HJ09RKZFnsXbNeWxwQaroVP6M"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
              <AnimatedTooltip items={projectIcons.timeTreasuresIcons} />
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
          <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              NC News
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12"
            >
              Full stack app for an article forum
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-6">
              <Image
                src="https://zorlgi4yg6.ufs.sh/f/xOzRGhmN6r4KHpjQuxy4scHYIbJjExuG2velDorKanVtfkdq"
                height="1000"
                width="1000"
                className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
                priority
              />
            </CardItem>
            <div className="flex flex-row w-full justify-center items-center mt-16 mb-10 gap-2">
              <AnimatedTooltip items={projectIcons.ncNewsIcons} />
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
      </section>
    </section>
  );
};

export default Projects;
