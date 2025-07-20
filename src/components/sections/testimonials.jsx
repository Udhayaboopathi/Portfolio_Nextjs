
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
    quote: "Udhayaboopathi is a phenomenal developer. Their attention to detail and ability to tackle complex problems is second to none. A true asset to any team.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'JS'
  },
  {
    name: 'Mark Johnson',
    role: 'Lead Designer, Creative Co.',
    quote: "Working with Udhayaboopathi was a breeze. They have a great eye for design and were able to translate our mockups into a pixel-perfect, responsive reality.",
    avatar: 'https://placehold.co/100x100.png',
    initials: 'MJ'
  }
];

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
      >
        <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">My Testimonials</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">What my clients say about me</p>
      </motion.div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1 p-4">
              <Card className="h-full bg-card">
                <CardContent className="flex flex-col items-center text-center p-8 gap-6">
                  <Avatar className="w-24 h-24 border-4 border-primary">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint="person face" sizes="96px" />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <blockquote className="text-lg italic text-foreground max-w-2xl">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-4">
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
