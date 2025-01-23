import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { SocialIcon } from "react-social-icons";

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
    <section className="flex flex-col items-center justify-center min-h-[80vh] md:min-h-screen">
      <p className="text-zinc-200 dark:text-neutral-200 text-2xl select-none">
        Hi, I&apos;m Terry, I am a...
      </p>
      <TypewriterEffectSmooth
        words={words}
        cursorClassName="bg-zinc-100"
        className="select-none"
      />
      <div className="flex space-x-4">
        <SocialIcon
          network="linkedin"
          url="https://www.linkedin.com/in/terry-www/"
          target="_blank"
        />
        <SocialIcon
          network="github"
          url="https://www.github.com/TTibbs"
          bgColor="white"
          fgColor="black"
          target="_blank"
        />
        <SocialIcon
          network="dev.to"
          url="https://dev.to/ttibbs"
          bgColor="slategray"
          target="_blank"
        />
      </div>
    </section>
  );
};

export default About;
