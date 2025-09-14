"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { suggestFollowUp } from '@/ai/flows/suggest-follow-up';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import {
  AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle,
  AlertDialogDescription, AlertDialogFooter, AlertDialogAction
} from '@/components/ui/alert-dialog';
import { useState, useEffect, useRef } from 'react';
import { Loader2, Wand2 } from 'lucide-react';
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaWhatsapp } from "react-icons/lia";
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  getSuggestion: z.boolean().default(false).optional(),
});

export default function Contact({ aboutSection, projectsSection, skillsSection }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState('');

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  const iconClass = "text-2xl text-foreground hover:text-primary transition-colors duration-300";

  useEffect(() => setCurrentYear(new Date().getFullYear().toString()), []);
  useEffect(() => { if (isInView) controls.start("visible"); }, [isInView, controls]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '', getSuggestion: false },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      if (data.getSuggestion) {
        const aiResponse = await suggestFollowUp({
          name: data.name,
          email: data.email,
          message: data.message,
          aboutSection,
          projectsSection,
          skillsSection,
        });
        setSuggestion(aiResponse?.followUpSuggestion || '');
        setIsDialogOpen(true);
      }
      toast({ title: "Message Sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: 'destructive'
      });
    } finally { setIsLoading(false); }
  }

  return (
    <section
      id="contact"
      className="container mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-[65px]"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto pb-14 lg:pb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl">Get In Touch</h2>
        <p className="text-muted-foreground mb-12">
          I'm currently available for freelance work. Reach out via the form, email, phone, or social links below.
        </p>
      </motion.div>

      {/* Equal width, equal height layout */}
      <div className="grid gap-12 lg:grid-cols-2 items-stretch">
        {/* Left Column (Form) */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 h-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl><Input placeholder="Your Name" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl><Input type="email" placeholder="Your Email" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
             <FormField
  control={form.control}
  name="message"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Textarea
          placeholder="Your Message"
          className="min-h-[270px] resize-y"
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
              <FormField
                control={form.control}
                name="getSuggestion"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4 bg-background">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base">AI Follow-up Suggestion</FormLabel>
                      <p className="text-sm text-muted-foreground">
                        Get an AI-powered suggestion for your follow-up email.
                      </p>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-label="Toggle AI follow-up suggestion"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Send Message'}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Right Column (Map + Info) */}
        <motion.div
          className="flex flex-col gap-6 h-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Map takes proportional height */}
            {/* If you want map shorter, change flex-1 to e.g. flex-[0.6] and below flex to flex-[1.4] etc */}
          <div className="flex-1 min-h-[260px] rounded-lg overflow-hidden border">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1072.1703159141398!2d78.07225326959028!3d11.685482312592251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQxJzA3LjciTiA3OMKwMDQnMjIuNCJF!5e1!3m2!1sen!2sin!4v1732352173470!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info fills remaining space */}
          <div className="flex-1 bg-background rounded-lg p-6 border flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-muted-foreground">Salem, Tamil Nadu, India, Pin: 637504</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+91 63692 55254</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground">udhayaboopathi2003@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Link href="https://www.facebook.com/Udhayaboopathi2003" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className={iconClass} />
              </Link>
              <Link href="https://www.instagram.com/udhayaboopathi_/" target="_blank" rel="noopener noreferrer">
                <SiInstagram className={iconClass} />
              </Link>
              <Link href="https://wa.me/916369255254" target="_blank" rel="noopener noreferrer">
                <LiaWhatsapp className={iconClass} />
              </Link>
              <Link href="https://www.linkedin.com/in/udhayaboopathi" target="_blank" rel="noopener noreferrer">
                <SiLinkedin className={iconClass} />
              </Link>
              <Link href="https://github.com/Udhayaboopathi" target="_blank" rel="noopener noreferrer">
                <SiGithub className={iconClass} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" /> AI Follow-up Suggestion
            </AlertDialogTitle>
            <AlertDialogDescription>
              Here's a personalized suggestion for your follow-up email based on my profile and your message:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="bg-muted p-4 rounded-md border">
            <p className="text-sm whitespace-pre-line">{suggestion}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Got it, thanks!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}