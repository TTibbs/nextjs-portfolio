import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data";

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
            <ProjectCard key={project.name} project={project} />
          ))}
        </ul>
      </section>
    </div>
  );
}
