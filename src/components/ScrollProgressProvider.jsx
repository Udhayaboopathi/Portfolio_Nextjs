"use client";
import dynamic from 'next/dynamic';
import React from 'react';

// Dynamically load the progress bar only on client
const ScrollProgressBar = dynamic(() => import('./ScrollProgressBar'), { ssr: false });

export function ScrollProgressProvider() {
  return <ScrollProgressBar />;
}
