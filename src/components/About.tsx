import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Image from "next/image";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { FaArrowDown } from "react-icons/fa";

const About = () => {
  const words = [
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
      text: "Life-Long",
      className: "text-zinc-800 dark:text-zinc-100",
    },
    {
      text: "Learner.",
      className: "text-zinc-800 dark:text-zinc-100",
    },
  ];
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen relative"
      aria-label="About Terry"
    >
      <Spotlight className="-top-0 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="flex flex-col items-center justify-center flex-1">
        <h1 className="text-zinc-800 dark:text-zinc-100 text-2xl select-none">
          Hi, I&apos;m Terry, I am a...
        </h1>
        <TypewriterEffectSmooth
          words={words}
          cursorClassName="bg-zinc-800 dark:bg-zinc-100"
          className="select-none"
        />
        <div className="flex space-x-4">
          <Link href="https://www.linkedin.com/in/terry-www/" target="_blank">
            <Image
              src="/linkedin.png"
              alt="LinkedIn"
              width={24}
              height={24}
              className="w-9 h-9 md:w-11 md:h-11 lg:w-13 lg:h-13 rounded-lg hover:scale-110 transition-all duration-300"
            />
          </Link>
          <Link href="https://www.github.com/TTibbs" target="_blank">
            <Image
              src="/icons8-github-50.png"
              alt="GitHub"
              width={24}
              height={24}
              className="w-9 h-9 md:w-11 md:h-11 lg:w-13 lg:h-13 rounded-lg hover:scale-110 transition-all duration-300"
            />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce bg-zinc-800 dark:bg-zinc-100 w-10 h-10 rounded-full flex items-center justify-center">
        <FaArrowDown className="w-6 h-6 text-zinc-100 dark:text-zinc-800" />
      </div>
    </section>
  );
};

export default About;
