"use client";

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

const categories = ['All', ...Object.keys(skillsData)];
const allSkills = Object.values(skillsData).flat();

export default function Skills({ content }) {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredSkills = selectedCategory === 'All'
        ? allSkills
        : skillsData[selectedCategory] || [];

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
        <section id="skills" className="container mx-auto bg-secondary/50">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-2 font-headline md:text-4xl">My Skills</h2>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">{content}</p>

                <div className="flex justify-center flex-wrap gap-2 mb-12">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={selectedCategory === category ? 'default' : 'outline'}
                            onClick={() => setSelectedCategory(category)}
                            className="transition-all"
                        >
                            {category}
                        </Button>
                    ))}
                </div>

                <TooltipProvider>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {filteredSkills.map((skill, index) => (
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
