"use client";

import { motion } from 'framer-motion';
import { Briefcase, Building, GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const timelineEvents = [
    {
        icon: <Building className="w-6 h-6" />,
        date: "2021 - Present",
        title: "Software Engineer",
        subtitle: "Innovate Tech",
        description: "Developing and maintaining web applications using modern technologies."
    },
    {
        icon: <Briefcase className="w-6 h-6" />,
        date: "2019 - 2021",
        title: "Jr. Web Developer",
        subtitle: "Digital Solutions",
        description: "Assisted in the development of websites and web applications for various clients."
    },
    {
        icon: <GraduationCap className="w-6 h-6" />,
        date: "2015 - 2019",
        title: "Bachelor of Science in Computer Science",
        subtitle: "University of Technology",
        description: "Focused on web development and software engineering."
    },
];

export default function Timeline() {
    return (
    <section id="timeline" className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-[65px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">My Journey</h2>
                <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">My career path and education.</p>
            </motion.div>

            <div className="relative max-w-3xl mx-auto">
                <div className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 bg-border/70 -translate-x-1/2" />
                {timelineEvents.map((event, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="mb-8 relative flex w-full items-start md:even:flex-row-reverse"
                    >
                        <div className="absolute top-0 left-6 -translate-x-1/2 z-10 md:left-1/2">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg ring-8 ring-background">
                                {event.icon}
                            </div>
                        </div>
                        
                        <div className="w-full pl-20 md:w-1/2 md:pl-0 md:pr-12 md:even:pr-0 md:even:pl-12">
                            <Card className="bg-card text-left">
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
