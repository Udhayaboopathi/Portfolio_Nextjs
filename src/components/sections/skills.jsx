import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Code, Database, Wind, Server, Palette, Bot, GitMerge, Braces, Rocket, Cog } from 'lucide-react';

const skillsData = {
  'Frontend': [
    { name: 'React', icon: <Code className="w-10 h-10 text-primary" /> },
    { name: 'Next.js', icon: <Rocket className="w-10 h-10 text-primary" /> },
    { name: 'TypeScript', icon: <Braces className="w-10 h-10 text-primary" /> },
    { name: 'Tailwind CSS', icon: <Wind className="w-10 h-10 text-primary" /> },
  ],
  'Backend': [
    { name: 'Node.js', icon: <Server className="w-10 h-10 text-primary" /> },
    { name: 'Python', icon: <Code className="w-10 h-10 text-primary" /> },
    { name: 'Firebase', icon: <Database className="w-10 h-10 text-primary" /> },
    { name: 'Express.js', icon: <Server className="w-10 h-10 text-primary" /> },
  ],
  'Database': [
      { name: 'PostgreSQL', icon: <Database className="w-10 h-10 text-primary" /> },
      { name: 'MongoDB', icon: <Database className="w-10 h-10 text-primary" /> },
      { name: 'SQL', icon: <Database className="w-10 h-10 text-primary" /> },
  ],
  'Tools & More': [
      { name: 'Git & GitHub', icon: <GitMerge className="w-10 h-10 text-primary" /> },
      { name: 'Docker', icon: <Cog className="w-10 h-10 text-primary" /> },
      { name: 'Figma', icon: <Palette className="w-10 h-10 text-primary" /> },
      { name: 'GenAI', icon: <Bot className="w-10 h-10 text-primary" /> },
  ]
};

const allSkills = Object.values(skillsData).flat();

export default function Skills({ content }) {
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
        <section id="skills" className="bg-card">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
            >
                <h2 className="text-3xl font-bold text-center mb-2 font-headline md:text-4xl">My Skills</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">My technical level</p>

                <TooltipProvider>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {allSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                custom={index}
                            >
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-background shadow-md hover:shadow-primary/20 hover:scale-105 transition-all cursor-pointer aspect-square justify-center">
                                            {skill.icon}
                                            <span className="text-sm font-medium text-center">{skill.name}</span>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>{skill.name}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </motion.div>
                        ))}
                    </div>
                </TooltipProvider>
            </motion.div>
        </section>
    );
}
