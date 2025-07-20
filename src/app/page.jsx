import Navbar from '@/components/navbar';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Timeline from '@/components/sections/timeline';
import Toolbox from '@/components/sections/toolbox';
import Testimonials from '@/components/sections/testimonials';
import Contact from '@/components/sections/contact';
import Footer from '@/components/footer';

export default function Home() {
  const aboutContent = `I am a web developer with a passion for creating beautiful and functional websites. I have a strong understanding of web technologies and a desire to learn new things.`;
  const projectsContent = `I have worked on a variety of projects, from simple websites to complex web applications. Here are some of my favorite projects.`;
  const skillsContent = `I have a strong understanding of web technologies and a desire to learn new things.`;

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About content={aboutContent} />
        <Skills content={skillsContent} />
        <Projects content={projectsContent} />
        <Timeline />
        <Toolbox />
        <Testimonials />
        <Contact
          aboutSection={aboutContent}
          projectsSection={projectsContent}
          skillsSection={skillsContent}
        />
      </main>
      <Footer />
    </div>
  );
}
