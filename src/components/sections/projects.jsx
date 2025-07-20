
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
    title: 'Project 01',
    description: 'A full-featured e-commerce site with product listings, cart, checkout, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ecommerce website',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Project 02',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and notifications.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'task management',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Project 03',
    description: 'The very portfolio you are looking at, built with modern web technologies and a focus on UX.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'portfolio design',
    tags: ['Next.js', 'GenAI', 'ShadCN UI', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'Project 04',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types and filters.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'data dashboard',
    tags: ['D3.js', 'React', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'Project 05',
    description: 'A conversational AI chatbot that provides helpful information and companionship, built with modern NLP models.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ai chatbot',
    tags: ['Python', 'Genkit', 'Flask', 'WebSocket'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'Project 06',
    description: 'A cross-platform mobile app to track workouts, set goals, and view progress over time.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'fitness app',
    tags: ['React Native', 'Expo', 'GraphQL', 'SQLite'],
    github: 'https://github.com',
    live: '#',
  },
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
        <section id="projects" className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                                <Image src={project.image} alt={project.title} layout="fill" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={project.aiHint} />
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
