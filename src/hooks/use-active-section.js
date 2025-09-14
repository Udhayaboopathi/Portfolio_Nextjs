"use client";

import { useState, useEffect } from 'react';

// Hook to observe sections and determine which is currently in view
export function useActiveSection(sectionIds, baseOffset = 0) {
  const [active, setActive] = useState(sectionIds[0] ? `#${sectionIds[0]}` : null);
  const [offset, setOffset] = useState(baseOffset);

  useEffect(() => {
    const computeOffset = () => {
      // Example responsive offsets (tweak as needed)
      if (window.innerWidth < 640) return 80;      // mobile
      if (window.innerWidth < 1024) return 100;    // tablet
      return 120;                                  // desktop
    };
    setOffset(computeOffset());
    const handleResize = () => setOffset(computeOffset());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sectionIds]);

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const newActive = `#${entry.target.id}`;
          setActive(prev => (prev !== newActive ? newActive : prev));
        }
      });
    };

    const options = {
      // Root margin shifts the intersection box to trigger earlier/later
      rootMargin: `-${offset}px 0px -55% 0px`,
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(handleIntersect, options);
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach(o => o.disconnect());
  }, [sectionIds, offset]);

  // Side-effect: update URL hash ONLY after active state has been committed
  useEffect(() => {
    if (typeof window === 'undefined' || !active) return;

    const currentHash = window.location.hash || '';
    if (active === '#home') {
      if (currentHash !== '') {
        // Remove hash while keeping path
        requestAnimationFrame(() => {
          if (history.replaceState) {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          }
        });
      }
      return;
    }

    if (currentHash !== active) {
      requestAnimationFrame(() => {
        if (history.replaceState) {
          history.replaceState(null, '', `${window.location.pathname}${active}`);
        }
      });
    }
  }, [active]);

  return active;
}
