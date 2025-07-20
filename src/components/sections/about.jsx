"use client"
import Image from 'next/image';
import { Briefcase, GraduationCap, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const experience = [
    {
        role: 'Software Engineer',
        company: 'Google',
        period: '2022 - Present',
        description: 'Working on the Google Search team to improve the search experience for users.'
    },
    {
        role: 'Web Developer',
        company: 'Apple',
        period: '2020 - 2022',
        description: 'Developed and maintained the Apple website, ensuring a seamless user experience.'
    }
];

const education = [
    {
        degree: 'Master\'s Degree',
        institution: 'Stanford University',
        period: '2018 - 2020',
        description: 'Studied computer science with a focus on artificial intelligence.'
    },
    {
        degree: 'Bachelor\'s Degree',
        institution: 'Harvard University',
        period: '2014 - 2018',
        description: 'Graduated with a degree in computer science and a minor in mathematics.'
    }
];

export default function About({ content }) {
    return (
        <section id="about" className="container mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-2 font-headline md:text-4xl">About Me</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">My introduction</p>
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <motion.div 
                      className="md:col-span-1 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Image
                            src="https://placehold.co/400x400.png"
                            data-ai-hint="profile picture"
                            alt="John Doe"
                            width={300}
                            height={300}
                            className="rounded-full object-cover border-4 border-primary shadow-lg aspect-square"
                        />
                    </motion.div>
                    <div className="md:col-span-2">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="overview"><User className="mr-2 h-4 w-4" />About Me</TabsTrigger>
                                <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" />Experience</TabsTrigger>
                                <TabsTrigger value="education"><GraduationCap className="mr-2 h-4 w-4" />Education</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="mt-6">
                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground leading-relaxed">{content}</p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="experience" className="mt-6 space-y-6">
                                {experience.map((item, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle>{item.role}</CardTitle>
                                            <CardDescription>{item.company} | {item.period}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>
                            <TabsContent value="education" className="mt-6 space-y-6">
                                {education.map((item, index) => (
                                    <Card key={index}>
                                        <CardHeader>
                                            <CardTitle>{item.degree}</CardTitle>
                                            <CardDescription>{item.institution} | {item.period}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
