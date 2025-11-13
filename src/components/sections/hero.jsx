"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState(["#ffffff"]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setParticleColor(
        theme === "dark" ? ["#ffffff", "#facc15"] : ["#000000", "#facc15"]
      );
    }
  }, [theme, isMounted]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const { scrollY } = useScroll();
  // Parallax transforms
  const titleY = useTransform(scrollY, [0, 400], [0, 120]);
  const subtitleY = useTransform(scrollY, [0, 400], [0, 160]);
  const fadeOut = useTransform(scrollY, [0, 400], [1, 0]);
  const scaleBg = useTransform(scrollY, [0, 600], [1, 1.15]);

  if (!isMounted) {
    return (
      <section
        id="home"
        className="relative flex h-screen w-full items-center justify-center overflow-hidden p-4 text-center"
      >
        {/* Render nothing until client mount to prevent hydration issues */}
      </section>
    );
  }

  const particleOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      move: {
        enable: true,
        random: true,
        speed: 1,
        outModes: {
          default: "bounce",
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <section
      id="home"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden px-6 py-20 text-center scroll-mt-32"
    >
      {/* Background Particles */}
      <motion.div className="absolute inset-0 -z-10" style={{ scale: scaleBg }}>
        <Particles id="tsparticles" init={particlesInit} options={particleOptions} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex max-w-5xl flex-col items-center gap-6 sm:gap-8 will-change-transform"
        style={{ opacity: fadeOut }}
      >
        {/* Name */}
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline"
          style={{ y: titleY }}
        >
          I Am Udhayaboopathi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-3xl text-base text-muted-foreground sm:text-lg md:text-xl"
          style={{ y: subtitleY }}
        >
          Full Stack Developer | Problem Solver | Automation & Backend Integration | Interactive Web Experiences Creator
        </motion.p>

        {/* Typing Animation */}
        <div className="h-8 text-base font-medium text-primary sm:text-lg md:text-xl">
          {isMounted && (
            <TypeAnimation
              sequence={[
                "I craft modern web experiences.",
                1500,
                "I turn ideas into code.",
                1500,
                "I design with users in mind.",
                1500,
                "I develop scalable solutions.",
                1500,
                "I create animations that wow.",
                1500,
                "I bridge creativity and logic.",
                1500,
                "I write clean and efficient code.",
                1500,
                "I bring digital products to life.",
                1500,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          )}
        </div>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >

          {/* Secondary CTA - Download Resume */}
          <motion.div
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="group px-8 py-6 text-base font-semibold hover:bg-foreground/5 transition-all duration-300 sm:text-lg"
              asChild
            >
              <a href="/Udhayaboopathi_V_Resume.pdf" download="Udhayaboopathi_Resume.pdf">
                <Download className="mr-2 h-5 w-5 transition-all group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
          </motion.div>


          {/* Tertiary CTA - View Projects */}
          <motion.div
            animate={{ scale: [1, 1.07, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="ghost"
              className="group px-8 py-6 text-base font-semibold hover:bg-foreground/5 transition-all duration-300 sm:text-lg"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <motion.span
                className="ml-2 inline-block"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </Button>
          </motion.div>

        </motion.div>


        {/* Primary CTA - Let's Collaborate (Eye-catching with gradient & animation) */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(250, 204, 21, 0.3)",
              "0 0 40px rgba(250, 204, 21, 0.5)",
              "0 0 20px rgba(250, 204, 21, 0.3)"
            ]
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="rounded-lg"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-primary via-yellow-500 to-primary bg-[length:200%_100%] px-8 py-6 text-base font-bold text-black shadow-lg hover:bg-[position:100%_0] transition-all duration-500 sm:text-lg"
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10 flex items-center">
              Let&apos;s Collaborate
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-2" />
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('about')}
          aria-label="Scroll down"
          className="cursor-pointer"
        >
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
