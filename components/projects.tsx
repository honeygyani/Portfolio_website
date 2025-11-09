"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.2)" }}
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          layoutId={`overlay-${index}`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
            0{index + 1}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <Github className="w-4 h-4" />
            Code
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "Brieffly",
      description: "An interactive AI-powered platform that helps students master complex formulas through dynamic, adaptive quizzes designed for deep understanding and retention.",
      tags: ["Next.js", "Tailwind CSS", "Gemini API", "AppWrite DB"],
      github: "https://github.com/honeygyani/Brieffly",
      live: "https://brieffly-ten.vercel.app/",
    },
    {
      title: "Smart Attendance System using Face Recognition",
      description: "Face recognition-based attendance system for automated student registration and attendance tracking.",
      tags: ["OpenCV (cv2)", "scikit-learn (sklearn)", "Streamlit", "Python Standard Libraries"],
      github: "https://github.com/honeygyani/Smart-Attendance-System-with-face-recognition",
      live: "#",
    },
    {
      title: "Shape Based Inventory Mangement System using OpenCV",
      description: "An automated inventory system that uses OpenCV to detect and categorize items based on their shapes for efficient real-time stock management.",
      tags: ["Python", "OpenCV", "Numpy", "Collections"],
      github: "https://github.com/honeygyani/Shape-Based-Inventory-Management-System-using-OpenCV",
      live: "#",
    },
    {
      title: "PackPilot",
      description: "PackPilot is an intelligent truck loading system that optimizes space, reduces loading time, and ensures efficient cargo arrangement.",
      tags: ["Nextjs", "WebGL", "Neon SQL", "Nodejs"],
      github: "https://github.com/honeygyani/packpilotv1",
      live: "#",
    },
    {
      title: "SkyGuide",
      description: "A real-time weather app that provides accurate forecasts, temperature updates, and location-based climate insights.",
      tags: ["ReactJS", "Tailwind CSS"],
      github: "https://github.com/honeygyani/Weather_App",
      live: "https://weather-app-gold-eight-rp8tnofiwz.vercel.app/",
    },
    {
      title: "Neon Cursor",
      description: "A dynamic animated frontend",
      tags: ["HTML", "CSS", "Javascript"],
      github: "https://github.com/honeygyani/Neon_Cursor",
      live: "https://honeygyani.github.io/Neon_Cursor/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          <p className="text-foreground/70 mt-4 text-lg">Explore some of my recent work and technical expertise</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
