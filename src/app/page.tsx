import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center">
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
