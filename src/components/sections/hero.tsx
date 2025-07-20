"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // You can add logic here for when particles are loaded
  }, []);

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
        value: theme === 'dark' ? "#FAD20F" : "#E64900"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center text-center p-0 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={particleOptions}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center gap-6 p-4"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tight">
          Alex Dev
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground">Full-Stack Developer</p>
        <TypeAnimation
          sequence={[
            'I build things for the web.',
            1500,
            'I love creating beautiful UIs.',
            1500,
            'I solve problems with code.',
            1500,
            'I am a lifelong learner.',
            1500
          ]}
          wrapper="p"
          speed={50}
          className="text-lg md:text-xl text-primary font-medium h-6"
          repeat={Infinity}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Button size="lg" className="mt-8" asChild>
            <a href="#about">
              <ArrowDown className="mr-2 h-5 w-5 animate-bounce" />
              See My Work
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
