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
  const aboutContent = `I am a passionate and creative full-stack developer with a knack for building beautiful, functional, and user-centric web applications. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions. I'm always eager to learn new things and take on new challenges.`;
  const projectsContent = `I love building things. Here are some of my projects, where I've explored different technologies and concepts.`;
  const skillsContent = `I have experience with a variety of technologies and tools. Here are some of my key skills.`;

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
