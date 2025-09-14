
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { useState, useMemo } from 'react';

const projects = [
    {
    "title": "SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["Python"],
    "github": "https://github.com/Udhayaboopathi/SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS",
    "live": "#"
  },
  {
    "title": "Portfolio_Nextjs",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["JavaScript", "CSS", "Next.js"],
    "github": "https://github.com/Udhayaboopathi/Portfolio_Nextjs",
    "live": "#"
  },
  {
    "title": "Portfolio",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["HTML", "CSS", "JavaScript", "PHP"],
    "github": "https://github.com/Udhayaboopathi/Portfolio",
    "live": "#"
  },
  {
    "title": "CodeCrest.tech",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["JavaScript", "HTML", "CSS"],
    "github": "https://github.com/Udhayaboopathi/CodeCrest.tech",
    "live": "#"
  },
  {
    "title": "AI-Prompt-Quality-Analyzer",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["HTML"],
    "github": "https://github.com/Udhayaboopathi/AI-Prompt-Quality-Analyzer",
    "live": "#"
  },
  {
    "title": "Do-To-list",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["JavaScript", "CSS", "HTML"],
    "github": "https://github.com/Udhayaboopathi/Do-To-list",
    "live": "#"
  },
  {
    "title": "Do-To",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["JavaScript", "CSS", "HTML"],
    "github": "https://github.com/Udhayaboopathi/Do-To",
    "live": "#"
  },
  {
    "title": "DeepLeaning_Arttifai_Tech_batch_8",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["Python"],
    "github": "https://github.com/Udhayaboopathi/DeepLeaning_Arttifai_Tech_batch_8",
    "live": "#"
  },
  {
    "title": "Udhayaboopathi.github.io",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": [],
    "github": "https://github.com/Udhayaboopathi/Udhayaboopathi.github.io",
    "live": "#"
  },
  {
    "title": "SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS-REACT",
    "description": "A full-featured e-commerce site with product listings, cart, checkout, and user authentication.",
    "image": "https://placehold.co/600x400.png",
    "aiHint": "ecommerce website",
    "tags": ["JavaScript", "Other"],
        "github": "https://github.com/Udhayaboopathi/SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS-REACT",
        "live": "#"
    }
];

const INITIAL_PROJECT_COUNT = 3;

export default function Projects({ content }) {
    const [selectedTag, setSelectedTag] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const tags = useMemo(() => {
        const allTags = new Set();
        projects.forEach(project => {
            project.tags.forEach(tag => allTags.add(tag));
        });
        return ['All', ...Array.from(allTags)];
    }, []);

    const filteredProjects = useMemo(() => {
        if (selectedTag === 'All') {
            return projects;
        }
        return projects.filter(project => project.tags.includes(selectedTag));
    }, [selectedTag]);

    const projectsToShow = useMemo(() => {
        return showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);
    }, [filteredProjects, showAll]);

    const cardVariants = {
        offscreen: {
            y: 50,
            opacity: 0
        },
        onscreen: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: i * 0.1
            }
        })
    };

    return (
    <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-15">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold font-headline md:text-4xl">My Projects</h2>
                <p className="text-muted-foreground mt-2 mb-8 max-w-2xl mx-auto">{content}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center flex-wrap gap-2 mb-12"
            >
                {tags.map(tag => (
                    <Button
                        key={tag}
                        variant={selectedTag === tag ? 'default' : 'outline'}
                        onClick={() => setSelectedTag(tag)}
                    >
                        {tag}
                    </Button>
                ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsToShow.map((project, index) => (
                    <motion.div
                        key={project.title}
                        custom={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        layout
                    >
                        <Card className="group relative overflow-hidden rounded-lg shadow-lg h-full flex flex-col">
                            <div className="relative h-56">
                                <Image 
                                    src={project.image} 
                                    alt={project.title} 
                                    fill 
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                                    data-ai-hint={project.aiHint} 
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <CardTitle className="mb-2">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                                <div className="flex justify-end gap-2 mt-auto">
                                    <Button variant="outline" size="icon" asChild>
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
                                            <Github />
                                        </Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                                            <ExternalLink className="mr-2" /> Live Demo
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {filteredProjects.length > INITIAL_PROJECT_COUNT && (
                <div className="mt-12 text-center">
                    <Button onClick={() => setShowAll(!showAll)}>
                        {showAll ? 'Show Less' : 'Show More'}
                    </Button>
                </div>
            )}
        </section>
    );
}
