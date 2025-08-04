import { ProjectCards } from "@/components/ProjectCards";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-12">
      <h2 className="text-2xl lg:text-4xl font-bold text-zinc-800 dark:text-zinc-200 select-none">
        Recent Projects
      </h2>
      <ProjectCards />
    </section>
  );
};

export default Projects;
