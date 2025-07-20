import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold font-headline text-foreground">John Doe</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="Github">
              <Github />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter />
            </Link>
          </Button>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} John Doe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}