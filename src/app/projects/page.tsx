import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { projectIcons, projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="w-full bg-zinc-200 bg-dot-black/[0.4] dark:bg-zinc-900 dark:bg-dot-white/[0.4] relative flex items-center justify-center min-h-screen">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <section className="flex flex-col items-center justify-center mt-12 w-full">
        <div className="flex items-center justify-between w-full max-w-7xl px-4 mb-8">
          <h1 className="text-3xl lg:text-5xl font-bold text-zinc-800 dark:text-zinc-200 select-none">
            All Projects
          </h1>
          <Link
            href="/"
            className="font-bold text-zinc-50 border-2 border-zinc-800 dark:border-zinc-100 bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-600 rounded-xl px-4 py-2 dark:hover:bg-emerald-700 transition-all duration-200 ease-linear"
          >
            Back Home
          </Link>
        </div>

        <ul className="grid w-full max-w-7xl grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 pb-12">
          {projects.map((project) => (
            <CardContainer key={project.name}>
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
                      projectIcons[project.name as keyof typeof projectIcons] ||
                      []
                    }
                  />
                </div>
                {project.link && (
                  <CardItem
                    translateZ="100"
                    className="flex items-center justify-center py-3 px-4 h-10 w-20 rounded-xl text-xs font-bold bg-zinc-800 text-white text-center"
                  >
                    <Link href={project.link} target="_blank">
                      View Project
                    </Link>
                  </CardItem>
                )}
              </CardBody>
            </CardContainer>
          ))}
        </ul>
      </section>
    </div>
  );
}
