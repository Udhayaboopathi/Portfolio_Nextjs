"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from "react-type-animation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
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
      className="relative flex h-screen w-full items-center justify-center overflow-hidden p-4 text-center scroll-mt-32"
    >
      {/* Background Particles */}
      <motion.div className="absolute inset-0 -z-10" style={{ scale: scaleBg }}>
        <Particles id="tsparticles" init={particlesInit} options={particleOptions} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center gap-6 will-change-transform"
        style={{ opacity: fadeOut }}
      >
        {/* Name */}
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl font-headline"
          style={{ y: titleY }}
        >
          I Am Udhayaboopathi
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base text-muted-foreground sm:text-lg md:text-xl"

          style={{ y: subtitleY }}
        >
          Full Stack Developer | Problem Solver | Automation & Backend Integration | Interactive Web Experiences Creator
        </motion.p>

        {/* Typing Animation */}
        <div className="h-6 text-base font-medium text-primary sm:text-lg md:text-xl">
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

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button size="lg" className="mt-8" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
