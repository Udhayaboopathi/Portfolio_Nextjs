import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Timeline from "@/components/sections/timeline";
import Toolbox from "@/components/sections/toolbox";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer.jsx";

// ============================================================
// HOMEPAGE SEO METADATA
// ============================================================

export const metadata = {
  title: "Home",

  description:
    "Udhayaboopathi - Full Stack Developer specializing in React, Next.js, and Firebase. Explore my portfolio showcasing modern web applications, projects, and technical skills.",

  keywords: [
    "portfolio",
    "projects",
    "skills",
    "full stack developer",
    "web developer",
  ],

  // ============================================================
  // OPEN GRAPH
  // ============================================================

  openGraph: {
    title: "Udhayaboopathi - Full Stack Developer Portfolio",

    description:
      "Explore my portfolio showcasing modern web applications, projects, and technical skills as a Full Stack Developer.",

    url: "https://udhayaboopathi.tech",

    siteName: "Udhayaboopathi Portfolio",

    type: "website",

    images: [
      {
        url: "https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Udhayaboopathi Full Stack Developer Portfolio",
      },
    ],
  },

  // ============================================================
  // TWITTER / X
  // ============================================================

  twitter: {
    card: "summary_large_image",

    title:
      "Udhayaboopathi - Full Stack Developer Portfolio",

    description:
      "Explore my portfolio showcasing modern web applications, projects, and technical skills.",

    images: [
      "https://github.com/Udhayaboopathi/Portfolio_Nextjs/blob/master/src/assets/image.png?raw=true",
    ],

    creator: "@udhayaboopathi",
  },

  // ============================================================
  // CANONICAL URL
  // ============================================================

  alternates: {
    canonical: "https://udhayaboopathi.tech",
  },
};

// ============================================================
// HOMEPAGE
// ============================================================

export default function Home() {
  const aboutContent =
    "I am a web developer with a passion for creating beautiful and functional websites. I have a strong understanding of web technologies and a desire to learn new things.";

  const projectsContent =
    "I have worked on a variety of projects, from simple websites to complex web applications. Here are some of my favorite projects.";

  const skillsContent =
    "I have a strong understanding of web technologies and a desire to learn new things.";

  return (
    <div className="flex min-h-screen flex-col">
      {/* ========================================================
          NAVBAR
          ======================================================== */}

      <Navbar />

      {/* ========================================================
          MAIN CONTENT
          ======================================================== */}

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* About */}
        <About content={aboutContent} />

        {/* Skills */}
        <Skills content={skillsContent} />

        {/* Projects */}
        <Projects content={projectsContent} />

        {/* Timeline / Experience */}
        <Timeline />

        {/* Developer Toolbox */}
        <Toolbox />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact */}
        <Contact
          aboutSection={aboutContent}
          projectsSection={projectsContent}
          skillsSection={skillsContent}
        />
      </main>

      {/* ========================================================
          FOOTER
          ======================================================== */}

      <Footer />
    </div>
  );
}

