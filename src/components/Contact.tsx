"use client";

import Link from "next/link";
import { Button } from "./ui/moving-border";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("tward5824@gmail.com");
    toast.success("Email copied to clipboard!", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <section className="h-[40rem] flex flex-col items-center justify-center space-y-10">
      <h1 className="text-base lg:text-2xl text-center select-none">
        Want to get in touch? I&apos;m just a click away
      </h1>
      <div className="flex items-center justify-center gap-12">
        <Button
          borderRadius="2rem"
          onClick={copyEmailToClipboard}
          className="bg-slate-900 text-white border-slate-800 rounded-full"
        >
          Email
        </Button>
        <Link
          href="https://drive.google.com/file/d/1wwnT4kgZsBmaac5KbKAbshvwpNaJbkWo/view"
          target="_blank"
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
      <ToastContainer />
    </section>
  );
};

export default Contact;
