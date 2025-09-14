"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Using brand-specific icons for tools to avoid mismatch (skills section already uses react-icons)
import {
  SiVisualstudiocode,
  SiApple,
  SiGit,
  SiFigma,
  SiFigshare,
  SiGithub,
  SiPostman ,
  SiOpenai ,
} from "react-icons/si";
import { FaTerminal } from "react-icons/fa"; 
import { VscVscode } from "react-icons/vsc";

const iconClass = "w-10 h-10 text-primary";

// If Fig (terminal autocomplete) doesn't have an official icon in simple-icons, using SiFigshare as a placeholder.
// Replace with an SVG brand icon if you have one for higher fidelity.
const tools = [
  {
    name: "VS Code",
    category: "IDE",
    icon: <VscVscode className={iconClass} />,
    description:
      "My go-to code editor for its versatility and vast extension ecosystem.",
  },
{
name:"gitHub",
icon:<SiGithub className={iconClass}/>,
description:"Essential for version control and collaborative development.",
category:"Version Control"
},
  {
    name: "iTerm2 + Zsh",
    category: "Terminal",
    icon: <FaTerminal className={iconClass} />, // ✅ replaced with working icon
    description:
      "A powerful terminal setup for a streamlined command-line workflow.",
  },
  {
    name: "Git",
    category: "Version Control",
    icon: <SiGit className={iconClass} />,
    description: "Essential for version control and collaborative development.",
  },
  {
    name: "Postman ",
    category: "API Testing",
    icon: <SiPostman className={iconClass} />,
    description:
      "API development & testing platform I use for designing, debugging and documenting RESTful services.",
  },
  {
    name: "OpenAI",
    category: "Productivity",
    icon: <SiOpenai className={iconClass} />,
    description: "Adds IDE-style autocomplete to my terminal.",
  },
];

export default function Toolbox() {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="toolbox"
      className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-[65px] py-16 lg:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">
          My Toolbox
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          The tools and technologies I use to build my projects.
        </p>
      </motion.div>

      <TooltipProvider>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center text-center gap-3 p-4 rounded-lg bg-background shadow-md hover:shadow-primary/20 hover:scale-105 transition-all cursor-pointer aspect-square justify-center">
                    {tool.icon}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-semibold">{tool.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </TooltipProvider>
    </section>
  );
}
