import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

import PageTransition from "@/components/PageTransition";
import { ScrollProgressProvider } from "@/components/ScrollProgressProvider";
import logo from "@/app/logo.svg";

// ✅ Metadata configuration for SEO
export const metadata = {
  metadataBase: new URL("https://udhayaboopathi.tech"),
  title: {
    default: "Udhayaboopathi </> Portfolio",
    template: "%s | Udhayaboopathi </> Portfolio",
  },
  description:
    "Udhayaboopathi - Modern portfolio showcasing projects, skills, and experience as a full stack developer. Built with Next.js and Firebase.",
  keywords: [
    "Udhayaboopathi",
    "udhay",
    "udhayaboopathi",
    "Udhaya boopathi",
    "udhaya boopathi",
    "Udhayaboopath V",
    "udhayaboopathi v",
    "Udhaya boopathi v",
    "udhaya boopathi v",
    "Portfolio",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Firebase",
    "Web Developer",
    "UI/UX",
    "Frontend Developer",
    "Backend Developer",
    "MERN Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Udhayaboopathi", url: "https://udhayaboopathi.tech" }],
  creator: "Udhayaboopathi",
  publisher: "Udhayaboopathi",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://udhayaboopathi.tech",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/logo.svg",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Udhayaboopathi - Developer Portfolio",
    description:
      "Check out my modern portfolio showcasing projects, skills, and experience as a developer.",
    url: "https://udhayaboopathi.tech",
    siteName: "Udhayaboopathi Portfolio",
    images: [
      {
        url: "https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Udhayaboopathi Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Udhayaboopathi - Full Stack Developer Portfolio",
    description:
      "Check out my modern portfolio showcasing projects, skills, and experience as a full stack developer.",
    images:
      "https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true",
    creator: "@udhayaboopathi",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // ✅ Structured data for Google Rich Snippets
  other: {
    "application-name": "Udhayaboopathi Portfolio",
    "theme-color": "#000000",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "Udhayaboopathi Portfolio",
    "og:locale": "en_US",
    "og:site_name": "Udhayaboopathi Portfolio",
  },

  // ✅ Additional metadata for better SEO
  category: "portfolio",
  classification: "Business",
  referrer: "origin-when-cross-origin",
};

// ✅ Root Layout Component
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Performance & SEO Enhancements */}
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

        {/* ✅ Sitemap & RSS for SEO */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" href="/rss.xml" />

        {/* ✅ Favicons for SEO */}
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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

        {/* ✅ JSON-LD Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Udhayaboopathi",
              url: "https://udhayaboopathi.tech",
              image:
                "https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true",
              sameAs: [
                "https://github.com/Udhayaboopathi",
                "https://www.instagram.com/udhayaboopathi_/",
                "https://discordapp.com/users/581142001739628565",
              ],
              jobTitle: "Full Stack Developer",
              description:
                "Full Stack Developer specializing in React, Next.js, and Firebase",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "Firebase",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Full Stack Development",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Udhayaboopathi Portfolio",
              url: "https://udhayaboopathi.tech",
              description:
                "Modern portfolio showcasing projects, skills, and experience as a full stack developer",
              author: {
                "@type": "Person",
                name: "Udhayaboopathi",
              },
              inLanguage: "en-US",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              mainEntity: {
                "@type": "Person",
                name: "Udhayaboopathi",
                alternateName: ["Udhaya Boopathi", "Udhayaboopathi V"],
                description: "Full Stack Developer",
                url: "https://udhayaboopathi.tech",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
