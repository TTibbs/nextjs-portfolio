import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { projectIcons } from "@/lib/data";
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <CardContainer>
      <CardBody className="bg-gray-50 relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.7] dark:bg-black hover:border hover:border-emerald-700 transition-all duration-200 ease-linear w-[20rem] md:w-[25rem] h-[38.5rem] rounded-xl p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 h-12 overflow-hidden"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-6">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
            priority
          />
        </CardItem>
        <div className="flex flex-row w-full justify-center items-center mt-16 mb-10">
          <AnimatedTooltip
            items={
              projectIcons[project.name as keyof typeof projectIcons] || []
            }
          />
        </div>
        <div className="flex flex-row w-full justify-between items-center mb-10">
          {project.github_frontend && (
            <CardItem
              translateZ="100"
              className="flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center"
            >
              <Link href={project.github_frontend} target="_blank">
                Frontend Repo
              </Link>
            </CardItem>
          )}
          {project.github_backend && (
            <CardItem
              translateZ="100"
              className="flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center"
            >
              <Link href={project.github_backend} target="_blank">
                Backend Repo
              </Link>
            </CardItem>
          )}
          {project.npm_package && (
            <CardItem
              translateZ="100"
              className="flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center"
            >
              <Link href={project.npm_package} target="_blank">
                NPM Package
              </Link>
            </CardItem>
          )}
          {project.frontend && (
            <CardItem
              translateZ="100"
              className="flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center"
            >
              <Link href={project.frontend} target="_blank">
                Live Site
              </Link>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};
