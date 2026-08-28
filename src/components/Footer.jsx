import { ArrowUp } from "lucide-react";

//TODO: move second sectence to left side of the footer
export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        A special thanks to PedroTech for inspiring this portfolio design. Built
        with React and Tailwind CSS, deployed with Vercel. &copy;{" "}
        {new Date().getFullYear()} Jesse. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
