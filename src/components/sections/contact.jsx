"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { suggestFollowUp } from '@/ai/flows/suggest-follow-up';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Invalid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
  getSuggestion: z.boolean().default(false).optional(),
});


export default function Contact({ aboutSection, projectsSection, skillsSection }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', message: '', getSuggestion: false },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      // In a real app, you would send the email here via an API route.
      console.log('Form submitted:', data);
      
      if (data.getSuggestion) {
        const aiResponse = await suggestFollowUp({
          name: data.name,
          email: data.email,
          message: data.message,
          aboutSection,
          projectsSection,
          skillsSection,
        });
        setSuggestion(aiResponse.followUpSuggestion);
        setIsDialogOpen(true);
      }
      
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request. Please try again.",
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <section id="contact" className="bg-card">
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl py-20 lg:py-32"
          >
            <h2 className="text-3xl font-bold text-center mb-2 font-headline md:text-4xl">Get In Touch</h2>
            <p className="text-muted-foreground text-center mb-12">I'm currently available for freelance work.</p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="email" placeholder="Your Email" {...field} />
                      </FormControl>
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
                        <Textarea placeholder="Your Message" rows={6} {...field} />
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
                        <FormLabel className="text-base">
                          AI Follow-up Suggestion
                        </FormLabel>
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
      </section>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <Wand2 className="text-primary" />
              AI Follow-up Suggestion
            </AlertDialogTitle>
            <AlertDialogDescription>
              Here's a personalized suggestion for your follow-up email based on my profile and your message:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="bg-muted p-4 rounded-md border">
            <p className="text-sm">{suggestion}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>Got it, thanks!</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
