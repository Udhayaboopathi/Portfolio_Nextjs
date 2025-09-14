
"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useActiveSection } from '@/hooks/use-active-section';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const sectionIds = navLinks.map(l => l.href.replace('#',''));
  const observedActive = useActiveSection(sectionIds, 120);
  const [optimisticActive, setOptimisticActive] = useState('#home');

  // Sync optimistic state with observed when scroll changes it
  useEffect(() => {
    if (observedActive && observedActive !== optimisticActive) {
      setOptimisticActive(observedActive);
    }
  }, [observedActive, optimisticActive]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMounted]);

  const toggleButtonRef = useRef(null);
  const firstMobileLinkRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Body scroll lock when menu open
  useEffect(() => {
    if (!isMounted) return;
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow || '';
    }
    return () => { document.body.style.overflow = originalOverflow || ''; };
  }, [isMenuOpen, isMounted]);

  // Focus management when opening/closing
  useEffect(() => {
    if (isMenuOpen && firstMobileLinkRef.current) {
      firstMobileLinkRef.current.focus();
    } else if (!isMenuOpen && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }
  }, [isMenuOpen]);

  // Escape key to close
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  // Custom eased smooth scroll (more natural than native smooth) with interruption support
  const scrollAnimRef = useRef(null);
  const smoothScrollTo = useCallback((href) => {
    const section = document.querySelector(href);
    if (!section) return;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      section.scrollIntoView({ block: 'start' });
      return;
    }

    const headerEl = document.querySelector('header');
    const offset = headerEl ? headerEl.offsetHeight - 2 : 78; // align with scroll-mt-[65px]
    const startY = window.scrollY;
    const targetY = section.getBoundingClientRect().top + window.scrollY - offset;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return; // negligible

    const maxDuration = 900; // ms cap
    const minDuration = 320;
    // scale duration with distance (0.5ms per px) within bounds
    const duration = Math.min(maxDuration, Math.max(minDuration, Math.abs(distance) * 0.5));

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    // Cancel any existing animation
    if (scrollAnimRef.current) cancelAnimationFrame(scrollAnimRef.current);

    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(progress);
      window.scrollTo(0, startY + distance * eased);
      if (progress < 1) {
        scrollAnimRef.current = requestAnimationFrame(step);
      } else {
        scrollAnimRef.current = null;
      }
    };
    scrollAnimRef.current = requestAnimationFrame(step);
  }, []);

  // Interruption: cancel animation on user input (wheel, touch, key nav)
  useEffect(() => {
    const cancel = () => {
      if (scrollAnimRef.current) {
        cancelAnimationFrame(scrollAnimRef.current);
        scrollAnimRef.current = null;
      }
    };
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });
    window.addEventListener('keydown', cancel);
    return () => {
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
      window.removeEventListener('keydown', cancel);
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOptimisticActive(href); // immediate visual response
    smoothScrollTo(href);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleMobileLinkClick = (href) => {
    if (isMenuOpen) setIsMenuOpen(false);
    setOptimisticActive(href);
    const delay = isMenuOpen ? 320 : 0;
    setTimeout(() => smoothScrollTo(href), delay);
  };
  
  if (!isMounted) {
    return null;
  }
  
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen
          ? "bg-background/80 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-2" onClick={() => handleMobileLinkClick('#home')}>
          <motion.div
            animate={{ rotate: [0, 15, -10, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Code2 className="h-8 w-8 text-primary" />
          </motion.div>
          <span className="text-xl font-bold font-headline">Udhayaboopathi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative cursor-pointer",
                optimisticActive === link.href ? "text-primary" : ""
              )}
              aria-current={optimisticActive === link.href ? 'page' : undefined}
            >
              {link.name}
              {optimisticActive === link.href && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  layoutId="active-link-underline-desktop"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            ref={toggleButtonRef}
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav id="mobile-nav" className="flex flex-col items-center gap-4 py-4" role="menu">
              {navLinks.map((link, idx) => (
                <a
                  key={`mobile-${link.href}`}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(link.href);
                  }}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary w-full text-center py-2 cursor-pointer",
                    optimisticActive === link.href ? "text-primary" : ""
                  )}
                  aria-current={optimisticActive === link.href ? 'page' : undefined}
                  role="menuitem"
                  ref={idx === 0 ? firstMobileLinkRef : undefined}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}