
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

import PageTransition from '@/components/PageTransition';
import { ScrollProgressProvider } from '@/components/ScrollProgressProvider';

export const metadata = {
  title: 'Udhayaboopathi </> Portfolio',
  description: 'Udhayaboopathi - Modern portfolio showcasing projects, skills, and experience as a full stack developer. Built with Next.js and Firebase.',
  keywords: ['Udhayaboopathi', 'Portfolio', 'Full Stack Developer', 'React', 'Next.js', 'Firebase', 'Web Developer', 'UI/UX'],
  authors: [{ name: 'Udhayaboopathi', url: 'https://udhayaboopathi.me' }],
  creator: 'Udhayaboopathi',
  manifest: '/manifest.json',
  icons: {
    icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZiZDIyZCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUteG1sLWljb24gbHVjaWRlLWNvZGUteG1sIj48cGF0aCBkPSJtMTggMTYgNC00LTQtNCIvPjxwYXRoIGQ9Im02IDgtNCA0IDQgNCIvPjxwYXRoIGQ9Im0xNC41IDQtNSAxNiIvPjwvc3ZnPg==',
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Udhayaboopathi - Full Stack Developer Portfolio',
    description: 'Check out my modern portfolio showcasing projects, skills, and experience as a full stack developer.',
    url: 'https://udhayaboopathi.me',
    siteName: 'Udhayaboopathi Portfolio',
    images: [
      {
        url: 'https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udhayaboopathi - Full Stack Developer Portfolio',
    description: 'Check out my modern portfolio showcasing projects, skills, and experience as a full stack developer.',
    images: ['https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true'],
    creator: '@udhayaboopathi',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  // Custom social links
  socials: {
    github: 'https://github.com/Udhayaboopathi',
    instagram: 'https://www.instagram.com/udhayaboopathi_/',
    discord: 'https://discordapp.com/users/581142001739628565', 
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressProvider />
          <PageTransition>
            {children}
          </PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
