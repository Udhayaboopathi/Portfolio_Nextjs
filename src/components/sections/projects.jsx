
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

export default function Projects({ content }) {
    const [selectedTag, setSelectedTag] = useState('All');

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
        <section id="projects" className="container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-2 font-headline md:text-4xl">My Projects</h2>
                <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">{content}</p>
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
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        custom={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        layout
                    >
                        <Card className="group relative overflow-hidden rounded-lg shadow-lg h-full">
                            <div className="absolute inset-0">
                                <Image src={project.image} alt={project.title} layout="fill" className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" data-ai-hint={project.aiHint} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            </div>
                            <div className="relative flex flex-col h-full p-6 justify-end">
                                <CardTitle className="text-white mb-2">{project.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary" className="bg-white/20 text-white border-none">{tag}</Badge>)}
                                </div>
                                <div className="overflow-hidden h-0 group-hover:h-auto group-hover:mt-4 transition-all duration-500 ease-in-out">
                                    <p className="text-white/80 mb-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{project.description}</p>
                                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                                        <Button variant="outline" size="icon" asChild className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                                            <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
                                                <Github />
                                            </Link>
                                        </Button>
                                        <Button variant="default" asChild>
                                            <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                                                Live Project
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
