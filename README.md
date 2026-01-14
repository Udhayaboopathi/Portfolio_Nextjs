# 🚀 Udhayaboopathi's Portfolio

A modern, interactive portfolio website built with Next.js, featuring stunning animations, dark mode, and a seamless user experience.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18+-blue?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations
- **🌓 Dark/Light Mode** - Theme toggle with system preference support
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **⚡ Fast Performance** - Built with Next.js 15 and optimized for speed
- **🎭 Interactive Animations** - Framer Motion animations throughout
- **🎯 SEO Optimized** - Meta tags, structured data, and sitemap
- **📄 Resume Download** - Download resume as PDF
- **🖼️ Image Carousel** - Auto-rotating profile images in About section
- **📧 Contact Form** - Easy way to get in touch
- **🎨 Particles Background** - Dynamic particle effects in hero section

## 🛠️ Tech Stack

### Core

- **[Next.js 15.5.3](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety (optional)
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

### UI & Animations

- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Lucide Icons](https://lucide.dev/)** - Beautiful icon library
- **[React Type Animation](https://www.npmjs.com/package/react-type-animation)** - Typing animations
- **[React TSParticles](https://particles.js.org/)** - Particle effects

### Additional Libraries

- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[class-variance-authority](https://cva.style/)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** - Conditional classnames
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

## 📂 Project Structure

```
Portfolio_Nextjs/
├── public/                # Static assets
│   ├── resume.pdf        # Resume file
│   ├── image.png         # Profile images
│   ├── image_1.png
│   └── icon.svg
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.jsx    # Root layout
│   │   ├── page.jsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   ├── not-found.jsx # 404 page
│   │   └── resume/       # Resume page
│   ├── components/       # React components
│   │   ├── sections/     # Page sections
│   │   │   ├── hero.jsx
│   │   │   ├── about.jsx
│   │   │   ├── skills.jsx
│   │   │   ├── projects.jsx
│   │   │   ├── timeline.jsx
│   │   │   └── contact.jsx
│   │   ├── ui/           # shadcn/ui components
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   └── theme-provider.jsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   └── assets/           # Images and media
├── components.json       # shadcn/ui config
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** or **pnpm**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Udhayaboopathi/Portfolio_Nextjs.git
   cd Portfolio_Nextjs
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit the content in these files:

- `src/components/sections/about.jsx` - About, experience, education, certifications
- `src/components/sections/skills.jsx` - Skills and technologies
- `src/components/sections/projects.jsx` - Portfolio projects
- `src/components/sections/contact.jsx` - Contact information
- `src/app/layout.jsx` - SEO metadata

### Add Your Resume

Replace `/public/resume.pdf` with your own resume file.

### Update Profile Images

Add your images to `/public/` and update the paths in `src/components/sections/about.jsx`:

```javascript
const profileImages = ["/your-image-1.png", "/your-image-2.png"];
```

### Customize Theme Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: "your-color-here",
      // ... other colors
    }
  }
}
```

## 🎨 Sections Overview

- **Hero** - Animated intro with particles background and typing effect
- **About** - Bio with rotating profile images, experience, education, and certifications
- **Skills** - Technical skills with progress bars or icons
- **Projects** - Portfolio showcase with project cards
- **Timeline** - Career/education timeline
- **Contact** - Contact form and social links

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Udhayaboopathi/Portfolio_Nextjs)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to [Netlify](https://www.netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Udhayaboopathi V**

- Portfolio: [udhayaboopathi.tech](https://udhayaboopathi.tech)
- GitHub: [@Udhayaboopathi](https://github.com/Udhayaboopathi)
- LinkedIn: [Udhayaboopathi](https://www.linkedin.com/in/udhayaboopathi)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Vercel](https://vercel.com/) - Hosting Platform

---

⭐ Star this repo if you found it helpful!
