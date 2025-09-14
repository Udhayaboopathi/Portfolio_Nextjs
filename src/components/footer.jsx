"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary py-6 text-center text-sm text-muted-foreground">
      {currentYear && (
        <div>
          <p>© {currentYear} Udhayaboopathi. All Rights Reserved.</p>
          <p>
            <Link
              href="https://github.com/Udhayaboopathi"
              target="_blank"
              className="hover:text-primary transition-colors"
            >
              Designed by Udhayaboopathi
            </Link>
          </p>
        </div>
      )}
    </footer>
  );
}
