
import { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold font-headline text-foreground">Udhayaboopathi</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <Button variant="ghost" size="icon">
            <a href="https://github.com" target="_blank" aria-label="Github">
              <Github />
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </Button>
          <Button variant="ghost" size="icon">
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter />
            </a>
          </Button>
        </div>
        <p className="text-sm h-5">
          {currentYear && `© ${currentYear} Udhayaboopathi. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
