"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    name: 'Jane Smith',
    role: 'Project Manager, Tech Solutions Inc.',
    quote: "Alex is a phenomenal developer. Their attention to detail and ability to tackle complex problems is second to none. A true asset to any team.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'JS'
  },
  {
    name: 'Mark Johnson',
    role: 'Lead Designer, Creative Co.',
    quote: "Working with Alex was a breeze. They have a great eye for design and were able to translate our mockups into a pixel-perfect, responsive reality.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'MJ'
  },
  {
    name: 'Sarah Chen',
    role: 'CTO, Innovate Startups',
    quote: "Alex's technical expertise and problem-solving skills were instrumental in launching our MVP on time. Highly recommended for any challenging project.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'SC'
  },
   {
    name: 'David Lee',
    role: 'Fellow Developer, Web Wizards LLC',
    quote: "I learned so much from pair-programming with Alex. Their code is clean, well-documented, and they're always open to new ideas and feedback.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'DL'
  },
];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="container mx-auto">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">What Others Say</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">A few words from people I've worked with.</p>
      </motion.div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
              <Card className="h-full bg-background">
                <CardContent className="flex flex-col items-center text-center p-8 gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-muted-foreground italic border-l-4 border-primary pl-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}
