import Link from "next/link";
import { Button } from "./ui/moving-border";

const Contact = () => {
  return (
    <section className="h-[40rem] flex flex-col items-center justify-center space-y-10">
      <h1 className="text-2xl select-none">
        Want to get in touch? I&apos;m just a click away
      </h1>
      <div className="flex items-center justify-center gap-12">
        <Link href="mailto:tward5824@gmail.com">
          <Button
            borderRadius="2rem"
            className="bg-slate-900 text-white border-slate-800"
          >
            Email
          </Button>
        </Link>
        <Link
          href="https://drive.google.com/uc?export=download&id=1wwnT4kgZsBmaac5KbKAbshvwpNaJbkWo"
          rel="noopener noreferrer"
        >
          <Button
            borderRadius="2rem"
            className="bg-slate-900 text-white border-slate-800"
          >
            Resume
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
