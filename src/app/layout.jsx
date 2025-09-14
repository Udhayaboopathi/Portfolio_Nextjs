import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "@/components/ui/toaster";

import PageTransition from '@/components/PageTransition';
import { ScrollProgressProvider } from '@/components/ScrollProgressProvider';
import logo from "@/app/logo.svg";
import profile from "@/assets/image.png";

export const metadata = {
  title: 'Udhayaboopathi </> Portfolio',
  description:
    'Udhayaboopathi - Modern portfolio showcasing projects, skills, and experience as a full stack developer. Built with Next.js and Firebase.',
  keywords: [
    'Udhayaboopathi',
    "udhay",
    "udhayaboopathi",
    "Udhaya boopathi",
    "udhaya boopathi",
    'Udhayaboopath V',
    "udhay",
    "udhayaboopathi v",
    "Udhaya boopathi v",
    "udhaya boopathi v",

    'Portfolio',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Firebase',
    'Web Developer',
    'UI/UX',
  ],
  authors: [{ name: 'Udhayaboopathi', url: 'https://udhayaboopathi.me' }],
  creator: 'Udhayaboopathi',
  manifest: '/manifest.json',
  icons: {
    icon: logo.src, // set site favicon / primary icon
    shortcut: '/logo.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Udhayaboopathi - Full Stack Developer Portfolio',
    description:
      'Check out my modern portfolio showcasing projects, skills, and experience as a full stack developer.',
    url: 'https://udhayaboopathi.me',
    siteName: 'Udhayaboopathi Portfolio',
    images: [
      {
        url: profile.src,
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
    description:
      'Check out my modern portfolio showcasing projects, skills, and experience as a full stack developer.',
    images: [
      'https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true',
    ],
    creator: '@udhayaboopathi',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgressProvider />
          <PageTransition>{children}</PageTransition>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
