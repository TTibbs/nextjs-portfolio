import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export const ProjectCards = () => {
  return (
    <>
      <ul className="my-10 grid w-full max-w-7xl grid-cols-1 space-y-6 md:space-y-0 md:grid-cols-2 xl:grid-cols-3 gap-4 px-4">
        {projects.slice(0, 3).map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </ul>
      <Link
        href="/projects"
        className="font-bold text-zinc-50 border-2 border-zinc-800 dark:border-zinc-100 bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-600 rounded-xl px-4 py-2 dark:hover:bg-emerald-700 transition-all duration-200 ease-linear"
      >
        View All Projects
      </Link>
    </>
  );
};
