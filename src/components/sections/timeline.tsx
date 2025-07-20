"use client";

import { motion } from 'framer-motion';
import { Briefcase, Building, Code, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const timelineEvents = [
    {
        icon: <Building className="w-6 h-6" />,
        date: "2020 - Present",
        title: "Senior Developer",
        subtitle: "Tech Solutions Inc.",
        description: "Leading front-end development, mentoring, and architecting scalable solutions for enterprise clients."
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        date: "2018 - 2020",
        title: "Mid-Level Developer",
        subtitle: "Web Wizards LLC",
        description: "Built and maintained responsive web apps for a variety of clients using React and Node.js."
    },
    {
        icon: <Code className="w-6 h-6" />,
        date: "2017",
        title: "First Major Project",
        subtitle: "Personal E-commerce Site",
        description: "Developed a full-stack e-commerce application from scratch, solidifying my passion for web development."
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        date: "2016 - 2018",
        title: "M.S. in Computer Science",
        subtitle: "University of Technology",
        description: "Specialized in distributed systems and machine learning, deepening my theoretical knowledge."
    },
];

export default function Timeline() {
    return (
        <section id="timeline" className="container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">My Journey</h2>
                <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">A timeline of my career and key milestones.</p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-border/70"></div>
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-8 relative flex items-center w-full"
                    >
                        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                            {/* This div is for spacing on the opposite side of the card */}
                        </div>

                        <div className={`w-1/2 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                            <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10">
                                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg ring-8 ring-background">
                                    {event.icon}
                                </div>
                            </div>
                            <Card className={`w-full ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                <CardHeader>
                                    <p className="text-sm text-muted-foreground">{event.date}</p>
                                    <CardTitle>{event.title}</CardTitle>
                                    <CardDescription>{event.subtitle}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">{event.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
