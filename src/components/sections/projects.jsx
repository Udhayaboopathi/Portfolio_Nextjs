"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, cart, checkout, and user authentication.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ecommerce website',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool with drag-and-drop boards, real-time updates, and notifications.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'task management',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'The very portfolio you are looking at, built with modern web technologies and a focus on UX.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'portfolio design',
    tags: ['Next.js', 'GenAI', 'ShadCN UI', 'Framer Motion'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets with various chart types and filters.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'data dashboard',
    tags: ['D3.js', 'React', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'AI Chatbot Companion',
    description: 'A conversational AI chatbot that provides helpful information and companionship, built with modern NLP models.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'ai chatbot',
    tags: ['Python', 'Genkit', 'Flask', 'WebSocket'],
    github: 'https://github.com',
    live: '#',
  },
   {
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app to track workouts, set goals, and view progress over time.',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'fitness app',
    tags: ['React Native', 'Expo', 'GraphQL', 'SQLite'],
    github: 'https://github.com',
    live: '#',
  },
];

export default function Projects({ content }) {
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
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{content}</p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                        whileHover={{ scale: 1.03, y: -8 }}
                        className="h-full"
                    >
                        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 bg-background">
                            <CardHeader className="p-0">
                                <div className="aspect-video relative">
                                    <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint={project.aiHint} />
                                </div>
                                <div className="p-6">
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="mt-2">{project.description}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-grow p-6 pt-0">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-end gap-2 p-6 pt-0">
                                <Button variant="outline" size="icon" asChild>
                                    <Link href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub for ${project.title}`}>
                                        <Github />
                                    </Link>
                                </Button>
                                <Button variant="default" size="icon" asChild>
                                    <Link href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                                        <ExternalLink />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
