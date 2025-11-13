
"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Briefcase, GraduationCap, User, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';

// Profile images array
const profileImages = [
  "/image_1.png",
  "/image.png",
];

const aboutContent = `I’m a developer who loves building digital experiences that feel powerful, engaging, and meaningful. To me, development goes beyond writing code. it’s about solving real problems, shaping ideas into reality, and always pushing the limits of what’s possible.

Every project I take on is a chance to mix creativity with precision, with the goal of delivering results that are not only functional but also memorable. My approach is simple: think boldly, work smart, and keep evolving.`;

const experience = [
  {
    role: "MERN Stack Intern",
    company: "Arttifai Tech",
    period: "15 Days",
    description: "Worked on building web applications using the MERN stack and gained hands-on experience in full-stack development."
  },
  {
    role: "Digital Marketing Intern",
    company: "First Success Technology, Salem",
    period: "15 Days",
    description: "Learned digital marketing strategies, SEO, and social media campaigns to enhance online visibility."
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "Ongoing",
    description: "Completed multiple freelance projects, including web applications and websites for clients, focusing on clean UI and scalable solutions."
  }
];


const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Government Arts and Science College, Mettur",
    period: "2021 - 2024",
    description: "Focused on core computer science subjects including programming, data structures, and web development."
  },
  {
    degree: "Master of Science in Computer Science",
    institution: "Periyar University, Salem",
    period: "2024 - 2026",
    description: "Pursuing advanced studies in computer science with a focus on research, software engineering, and emerging technologies."
  }
];

const certifications = [
  {
    title: "Python Programming",
    issuer: "GUVI (Google for Education Partner)",
    date: "2022",
    description: "Completed hands-on training in Python fundamentals, problem-solving, and application development.",
    id: "5J38a57TpXn61206i7",
    link: "https://www.guvi.in/certificate?id=5J38a57TpXn61206i7"
  },
  {
    title: "Microsoft Office 365 Productivity Suite (Advanced)",
    issuer: "Naan Mudhalvan & Microsoft",
    date: "2023",
    description: "Gained advanced-level knowledge of Microsoft 365 tools, cloud collaboration, and productivity workflows.",
    link: "https://drive.google.com/file/d/1f2DgCJTo2h4LQnxWV9gk3R4qqB7ymJPR/view?usp=drive_link"
  },
  
];


export default function About({ content }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % profileImages.length
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
    <section id="about" className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[65px]">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-center mb-2 mt-2 font-headline md:text-4xl">About Me</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">My introduction</p>
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    <motion.div 
                      className="md:col-span-1 flex justify-center relative"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative w-[300px] h-[300px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={profileImages[currentImageIndex]}
                                        data-ai-hint="profile picture"
                                        alt="Udhayaboopathi"
                                        width={300}
                                        height={300}
                                        sizes="(max-width: 768px) 100vw, 300px"
                                        className="rounded-full object-cover border-4 border-primary shadow-lg aspect-square"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Image indicators */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                                {profileImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === currentImageIndex 
                                                ? 'bg-primary w-6' 
                                                : 'bg-gray-400 dark:bg-gray-600'
                                        }`}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                    <div className="md:col-span-2">
                        <Tabs defaultValue="overview" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto sm:h-10">
                                <TabsTrigger value="overview"><User className="mr-2 h-4 w-4" />About Me</TabsTrigger>
                                <TabsTrigger value="experience"><Briefcase className="mr-2 h-4 w-4" />Experience</TabsTrigger>
                                <TabsTrigger value="education"><GraduationCap className="mr-2 h-4 w-4" />Education</TabsTrigger>
                                <TabsTrigger value="certifications"><Award className="mr-2 h-4 w-4" />Certifications</TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="mt-6">
                                <Card>
                                    <CardContent className="pt-6">
                                        <p className="text-muted-foreground leading-relaxed">{aboutContent}</p>
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
                            <TabsContent value="certifications" className="mt-6 space-y-6">
                                {certifications.map((item, index) => (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={index}>
                                         <Card key={index}>
                                        <CardHeader>
                                            <CardTitle>{item.title}</CardTitle>
                                            <CardDescription>{item.issuer} | {item.date}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                    </a>
                                   
                                ))}
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
