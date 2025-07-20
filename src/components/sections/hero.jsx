
"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();
  const [particleColor, setParticleColor] = useState(["#ffffff"]);

  useEffect(() => {
    // This hook ensures the particle color is updated on the client-side
    // after the theme is resolved, avoiding hydration mismatches.
    setParticleColor(theme === 'dark' ? ["#ffffff", "#ffff00", "#0000ff"] : ["#0000ff", "#000000", "#333333"]);
  }, [theme]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
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
        value: particleColor,
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
        value: 80,
      },
      opacity: {
        value: {min: 0.3, max: 0.8},
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
          Udhayaboopathi
        </h1>
        <TypeAnimation
          sequence={[
            'I am a Passionate Developer',
            1500,
            'I build things for the web.',
            1500,
            'I love creating beautiful UIs.',
            1500,
            'I solve problems with code.',
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
            <a href="#projects">
              View My Work
            </a>
          </Button>
        </motion.div>
      </motion.div>
       <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="w-8 h-8 text-foreground/50 animate-bounce" />
          </a>
        </motion.div>
    </section>
  );
}
