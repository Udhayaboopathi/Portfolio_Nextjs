"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const projects = [
  {
    title: "Alcor Engineering Website",
    description:
      "A responsive corporate engineering services site with service sections, contact information, and static assets.",
    aiHint: "corporate engineering website",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Udhayaboopathi/alcor-engineering",
    live: "https://udhayaboopathi.github.io/alcor-engineering/",
  },
  {
    title: "Prompt Exam App",
    description:
      "An AI-driven application for creating, administering, and evaluating prompt-based exams and assessments.",
    aiHint: "prompt exam application",
    tags: ["Python", "FastAPI", "MongoDB"],
    github: "https://github.com/Udhayaboopathi/PROMPT_EXAM_APP",
    live: "/",
  },
  {
    title: "AI Prompt Quality Analyzer",
    description:
      "A lightweight interface (static HTML) for evaluating and scoring AI prompts based on defined quality criteria.",
    aiHint: "prompt quality analyzer",
    tags: ["HTML", "CSS", "JavaScript", "GeminiAPI"],
    github: "https://github.com/Udhayaboopathi/AI-Prompt-Quality-Analyzer",
    live: "https://udhayaboopathi.github.io/AI-Prompt-Quality-Analyzer/",
  },
  {
    title: "CodeCrest.tech",
    description:
      "A JavaScript-centric web project featuring dynamic site functionality (content interactions, components, and possible API integrations).",
    aiHint: "javascript web project",
    tags: ["React", "JavaScript", "CSS", "HTML"],
    github: "https://github.com/Udhayaboopathi/CodeCrest.tech",
    live: "https://code-crest-tech.vercel.app/",
  },
{
  "title": "Smart Summarization & Q&A Assistant (React)",
  "description": "A React-based frontend for an AI study assistant that ingests academic content, generates concise summaries, and supports contextual question answering for students.",
  "aiHint": "react summarization qa assistant",
  "tags": ["JavaScript", "React"],
  "github": "https://github.com/Udhayaboopathi/SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS-REACT",
  "live": "https://dist-smoky-two.vercel.app/"
},
 {
  "title": "Smart Summarization & Q&A Assistant (Backend)",
  "description": "Python-based backend (college mini project) that processes study materials (PDF/text) to generate concise summaries and support contextual question answering for students.",
  "aiHint": "python summarization qa backend",
  "tags": ["Python", "NLP", "Summarization", "FastAPI", "MongoDB", "Other"],
  "github": "https://github.com/Udhayaboopathi/SMART-SUMMARIZATION-Q-A-ASSISTANT-FOR-STUDENTS",
  "live": "/"
},
{
  "title": "Organic Food Recommendations",
  "description": "A mini project (PG Sathya) combining Python-based recommendation logic with a web interface (HTML/CSS/JS) to suggest organic or healthier food alternatives based on user input or dataset attributes.",
  "aiHint": "organic food recommendation system",
  "tags": ["FastAPI","HTML","CSS","JavaScript"],
  "github": "https://github.com/Udhayaboopathi/Organic-Food-Recommendations",
  "live": "/"
},
  {
  "title": "First Portfolio",
  "description": "Personal portfolio site (initial version) showcasing projects and profile. Built primarily with static HTML (likely with CSS/JS assets) and configured for GitHub Pages deployment.",
  "aiHint": "personal portfolio static site",
  "tags": ["HTML","CSS","JavaScript"],
  "github": "https://github.com/Udhayaboopathi/First-Portfolio",
  "live": "https://udhayaboopathi.github.io/First-Portfolio/"
},
  {
  "title": "Discord Bot (Python)",
  "description": "Private Python-based Discord bot project. Likely uses discord.py (or nextcord/py-cord) to implement custom commands, event handlers, and possibly moderation or utility features.",
  "aiHint": "python discord bot commands events",
  "tags": ["Python", "Discord-Bot", "Automation"],
  "github": "https://github.com/Udhayaboopathi/Discord-bot-python",
   "live": "/"
},
 {
  "title": "MST_BOT",
  "description": "JavaScript-based bot project (likely for messaging or automation). Repository is small (≈54 KB) and public; intended for experimenting with bot commands or task automation.",
  "aiHint": "javascript bot automation",
  "tags": ["JavaScript", "Bot", "Automation"],
  "github": "https://github.com/Udhayaboopathi/MST_BOT",
  "live": "/"
},
];

const INITIAL_PROJECT_COUNT = 3;

export default function Projects({ content }) {
  const [selectedTag, setSelectedTag] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const tags = useMemo(() => {
    const allTags = new Set();
    projects.forEach((project) => {
      project.tags.forEach((tag) => allTags.add(tag));
    });
    return ["All", ...Array.from(allTags)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedTag === "All") {
      return projects;
    }
    return projects.filter((project) => project.tags.includes(selectedTag));
  }, [selectedTag]);

  const projectsToShow = useMemo(() => {
    return showAll
      ? filteredProjects
      : filteredProjects.slice(0, INITIAL_PROJECT_COUNT);
  }, [filteredProjects, showAll]);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.1,
      },
    }),
  };

  return (
    <section
      id="projects"
      className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-[65px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold font-headline md:text-4xl">
          My Projects
        </h2>
        <p className="text-muted-foreground mt-2 mb-8 max-w-2xl mx-auto">
          {content}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center flex-wrap gap-2 mb-12"
      >
        {tags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
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
              <div className="p-6 flex flex-col flex-grow">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-end gap-2 mt-auto">
                  <Button variant="outline" size="icon" asChild>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <Github />
                    </Link>
                  </Button>
                  {project.live && typeof project.live === 'string' && project.live !== '#' ? (
                    <Button asChild>
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <ExternalLink className="mr-2" /> Live Demo
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" size="icon" disabled title="No live demo available">
                      <ExternalLink className="mr-2" /> Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {filteredProjects.length > INITIAL_PROJECT_COUNT && (
        <div className="mt-12 text-center">
          <Button onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </section>
  );
}
