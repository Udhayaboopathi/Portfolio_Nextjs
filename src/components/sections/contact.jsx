"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, useAnimation, useInView } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { suggestFollowUp } from "@/ai/flows/suggest-follow-up";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { useState, useEffect, useRef } from "react";
import { Loader2, Wand2, Check } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { LiaWhatsapp } from "react-icons/lia";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  projectType: z.string().min(1, "Please select a project type."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  getSuggestion: z.boolean().default(false).optional(),
});

export default function Contact({
  aboutSection,
  projectsSection,
  skillsSection,
}) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [suggestion, setSuggestion] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const iconVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconClass =
    "text-2xl text-foreground hover:text-primary transition-colors duration-300";

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { 
      name: "", 
      email: "", 
      projectType: "",
      message: "", 
      getSuggestion: false 
    },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    setIsSuccess(false);
    
    try {
      // Generate AI suggestion if enabled
      if (data.getSuggestion) {
        try {
          const aiResponse = await suggestFollowUp({
            name: data.name,
            email: data.email,
            message: data.message,
            aboutSection: aboutSection || "Full Stack Developer",
            projectsSection: projectsSection || "Various web development projects",
            skillsSection: skillsSection || "React, Next.js, Node.js, and more",
          });
          
          const suggestionText = aiResponse?.followUpSuggestion || aiResponse?.output?.followUpSuggestion;
          
          if (suggestionText) {
            setSuggestion(suggestionText);
          } else {
            setSuggestion("Thank you for your message! I'll review your inquiry and respond within 24-48 hours with relevant information about how we can work together.");
          }
          setIsDialogOpen(true);
        } catch (aiError) {
          console.error("AI suggestion error:", aiError);
          // Provide a meaningful fallback suggestion
          setSuggestion(
            `Thank you for reaching out, ${data.name}! Based on your message, I'd be happy to discuss how my skills in web development and automation can help with your project. I'll get back to you shortly to explore this further.`
          );
          setIsDialogOpen(true);
        }
      }

      // Create email content with project type
      const subject = encodeURIComponent(`${data.projectType} - ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\n\nMessage:\n${data.message}\n\nRegards,\n${data.name}`
      );
      
      // Redirect to default mail client
      window.location.href = `mailto:udhayaboopathi2003@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success state
      setIsSuccess(true);
      
      toast({
        title: "✅ Message Sent Successfully!",
        description: "Your email client will open with the message details.",
      });
      
      // Reset form after showing success animation
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
      }, 2000);
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "❌ Something went wrong",
        description: "There was a problem with your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 scroll-mt-[86px]"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto pb-14 lg:pb-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-2 font-headline md:text-4xl lg:text-5xl">
          Let&apos;s Build Something Awesome Together
        </h2>
        <p className="text-muted-foreground mb-12">
          I'm currently available for freelance work. Reach out via the form,
          email, phone, or social links below.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 items-stretch">
        {/* Left Column (Form) */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Form {...form}>
            <form
              onSubmit={(e) => {
                e.preventDefault(); // prevent default browser mail action
                form.handleSubmit(onSubmit)(e);
              }}
              className="space-y-6 h-full"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your Name" 
                        className="border-2 focus:border-primary transition-colors"
                        {...field} 
                      />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="border-2 focus:border-primary transition-colors"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-2 focus:border-primary transition-colors">
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Mobile App">Mobile App</SelectItem>
                        <SelectItem value="E-commerce">E-commerce</SelectItem>
                        <SelectItem value="Automation">Automation</SelectItem>
                        <SelectItem value="API Integration">API Integration</SelectItem>
                        <SelectItem value="Full Stack Project">Full Stack Project</SelectItem>
                        <SelectItem value="Consultation">Consultation</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        className="min-h-[150px] resize-y border-2 focus:border-primary transition-colors"
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
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border-2 border-primary/20 p-4 bg-primary/5">
                    <div className="space-y-0.5">
                      <FormLabel className="text-base font-semibold">
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
              
              <Button 
                type="submit" 
                disabled={isLoading || isSuccess} 
                className="w-full h-12 text-base font-semibold relative overflow-hidden group"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex items-center"
                  >
                    <Check className="mr-2 h-5 w-5" />
                    Message Sent!
                  </motion.div>
                ) : (
                  <>
                    Send Message
                    <motion.div
                      className="absolute inset-0 bg-primary/20"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Right Column (Map + Info) */}
        <motion.div
          className="flex flex-col gap-6 h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <div className="flex-1 min-h-[260px] rounded-lg overflow-hidden border">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1072.1703159141398!2d78.07225326959028!3d11.685482312592251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDQxJzA3LjciTiA3OMKwMDQnMjIuNCJF!5e1!3m2!1sen!2sin!4v1732352173470!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex-1 bg-background rounded-lg p-6 border flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Address</h3>
                <p className="text-muted-foreground">
                  Salem, Tamil Nadu, India, Pin: 637504
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-muted-foreground">+91 63692 55254</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-muted-foreground">
                  udhayaboopathi2003@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/Udhayaboopathi2003"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className={iconClass} />
              </Link>
              <Link
                href="https://www.instagram.com/udhayaboopathi_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className={iconClass} />
              </Link>
              <Link
                href="https://wa.me/916369255254"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiaWhatsapp className={iconClass} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/udhayaboopathi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className={iconClass} />
              </Link>
              <Link
                href="https://github.com/Udhayaboopathi"
                target="_blank"
                rel="noopener noreferrer"
              >
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
              Here's a personalized suggestion for your follow-up email based on
              my profile and your message:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="bg-muted p-4 rounded-md border">
            <p className="text-sm whitespace-pre-line">{suggestion}</p>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDialogOpen(false)}>
              Got it, thanks!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
