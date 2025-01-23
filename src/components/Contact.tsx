import Link from "next/link";
import { Button } from "./ui/moving-border";

const Contact = () => {
  return (
    <section className="h-[40rem] flex flex-col items-center justify-center space-y-10">
      <h1 className="text-2xl">
        Want to get in touch? I am just a click away.
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
          href="https://drive.google.com/uc?export=download&id=137DZr6c1XGrL4jZvDe4FhARX180spy8n"
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
