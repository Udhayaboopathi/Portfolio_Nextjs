"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { 
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiFirebase,
    SiExpress,
    SiPostgresql,
    SiMongodb,
    SiMysql,
    SiGit,
    SiDocker,
    SiFigma,
    SiOpenai,
    SiFlask,
    SiJavascript ,
    SiFastapi,
    SiGooglecloud ,
    SiGithub 
} from 'react-icons/si';
import { LiaAws } from "react-icons/lia";

const iconClass = "w-10 h-10 text-primary";
const skillsData = {
    'Frontend': [
        { name: 'React', icon: <SiReact className={iconClass} /> },
        { name: 'Next.js', icon: <SiNextdotjs className={iconClass} /> },
        { name: 'JavaScript', icon: <SiJavascript className={iconClass} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className={iconClass} /> },
    ],
    'Backend': [
        { name: 'Python', icon: <SiPython className={iconClass} /> },
        { name: 'Flask', icon: <SiFlask className={iconClass} /> },
        { name: 'FastAPI', icon: <SiFastapi className={iconClass} /> },
        { name: 'Express.js', icon: <SiExpress className={iconClass} /> },
    ],
    'Database': [
            { name: 'PostgreSQL', icon: <SiPostgresql className={iconClass} /> },
            { name: 'MongoDB', icon: <SiMongodb className={iconClass} /> },
            { name: 'MySQL', icon: <SiMysql className={iconClass} /> },
    ],
    'Tools & More': [
        { name: 'Git', icon: <SiGit className={iconClass} /> },
        { name: 'OpenAI', icon: <SiOpenai className={iconClass} /> },
        {name:"gitHub", icon:<SiGithub  className={iconClass}/>},
    ],
    'Cloud': [
        { name: 'AWS', icon: <LiaAws  className={iconClass} /> },
        { name: 'Google Cloud', icon: <SiGooglecloud className={iconClass} /> },
    ],
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
    <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-[65px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="container mx-auto "
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
