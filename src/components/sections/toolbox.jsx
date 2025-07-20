"use client"

import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Monitor, Terminal, Code, Wind, GitBranch, Palette } from 'lucide-react';

const tools = [
  { name: 'VS Code', category: 'IDE', icon: <Code className="w-10 h-10 text-primary" />, description: 'My go-to code editor for its versatility and vast extension ecosystem.' },
  { name: 'macOS', category: 'OS', icon: <Monitor className="w-10 h-10 text-primary" />, description: 'I use macOS for its Unix-based environment and smooth user experience.' },
  { name: 'iTerm2 + Zsh', category: 'Terminal', icon: <Terminal className="w-10 h-10 text-primary" />, description: 'A powerful terminal setup for a streamlined command-line workflow.' },
  { name: 'Git', category: 'Version Control', icon: <GitBranch className="w-10 h-10 text-primary" />, description: 'Essential for version control and collaborative development.' },
  { name: 'Figma', category: 'Design', icon: <Palette className="w-10 h-10 text-primary" />, description: 'My favorite design tool for creating beautiful and functional user interfaces.' },
  { name: 'Fig', category: 'Productivity', icon: <Wind className="w-10 h-10 text-primary" />, description: 'Adds IDE-style autocomplete to my terminal.' },
];

export default function Toolbox() {
  const fadeInAnimationVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
  };

  return (
    <section id="toolbox" className="bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">My Toolbox</h2>
                <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">The tools and technologies I use to build my projects.</p>
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
                                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                                </TooltipContent>
                            </Tooltip>
                        </motion.div>
                    ))}
                </div>
            </TooltipProvider>
        </div>
    </section>
  );
}
