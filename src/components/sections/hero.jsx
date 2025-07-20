
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      setParticleColor(theme === 'dark' ? ["#ffffff", "#facc15"] : ["#000000", "#facc15"]);
    }
  }, [theme, isMounted]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  if (!isMounted) {
    return (
      <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden p-4 text-center">
        {/* Render a static background or nothing on the server to prevent hydration issues */}
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
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden p-4 text-center">
      <div className="absolute inset-0 -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleOptions}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center gap-6"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl font-headline">
          Udhayaboopathi
        </h1>
        <div className="h-6 text-base font-medium text-primary sm:text-lg md:text-xl">
          {isMounted && (
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
              repeat={Infinity}
            />
          )}
        </div>
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
            <ArrowDown className="h-8 w-8 text-foreground/50 animate-bounce" />
          </a>
        </motion.div>
    </section>
  );
}
