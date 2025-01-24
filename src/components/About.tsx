import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const words = [
    {
      text: "Full-Stack Developer,",
      className: "text-zinc-100",
    },
    {
      text: "Dad,",
      className: "text-zinc-100",
    },
    {
      text: "and",
      className: "text-zinc-100",
    },
    {
      text: "Life-Long",
      className: "text-zinc-100",
    },
    {
      text: "Learner.",
      className: "text-zinc-100",
    },
  ];
  return (
    <section
      className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen"
      aria-label="About Terry"
    >
      <h1 className="text-zinc-200 dark:text-neutral-200 text-2xl select-none">
        Hi, I&apos;m Terry, I am a...
      </h1>
      <TypewriterEffectSmooth
        words={words}
        cursorClassName="bg-zinc-100"
        className="select-none"
      />
      <div className="flex space-x-4">
        <Link href="https://www.linkedin.com/in/terry-www/" target="_blank">
          <Image
            src="/linkedin.png"
            alt="LinkedIn"
            width={24}
            height={24}
            className="w-9 h-9 md:w-11 md:h-11 lg:w-13 lg:h-13"
          />
        </Link>
        <Link href="https://www.github.com/TTibbs" target="_blank">
          <Image
            src="/icons8-github-50.png"
            alt="GitHub"
            width={24}
            height={24}
            className="w-9 h-9 md:w-11 md:h-11 lg:w-13 lg:h-13"
          />
        </Link>
      </div>
    </section>
  );
};

export default About;
