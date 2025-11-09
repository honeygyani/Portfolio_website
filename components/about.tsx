"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const SkillBar = ({ label, percentage }: { label: string; percentage: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-foreground/80">{label}</span>
      <span className="text-xs text-primary">{percentage}%</span>
    </div>
    <div className="h-2 bg-muted rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-primary to-accent"
      />
    </div>
  </div>
)

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const skills = {
    technical: [
      { label: "React & Next.js", percentage: 95 },
      { label: "TypeScript", percentage: 90 },
      { label: "Tailwind CSS", percentage: 95 },
      { label: "Full Stack Development", percentage: 85 },
    ],
    soft: [
      { label: "Problem Solving", percentage: 90 },
      { label: "Communication", percentage: 88 },
      { label: "Team Collaboration", percentage: 92 },
      { label: "Project Management", percentage: 85 },
    ],
  }

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Section Title */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
          </motion.div>

          {/* Bio & Info */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate final-year student with a strong foundation in web development and software
                engineering. I love building elegant solutions to complex problems using modern technologies.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My journey in tech has been driven by curiosity and a desire to create meaningful digital experiences.
                I'm always eager to learn new technologies and best practices.
              </p>
              <div className="pt-4">
                <h3 className="font-semibold text-foreground mb-3">Education</h3>
                <p className="text-foreground/70">
                  <span className="font-medium">B.Tech in Electronics and Computer Engineering</span>
                  <br />
                  Amrita Vishwa Vidyapeetham Amritapuri Kerala | Graduation : 2026
                </p>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[
                { label: "Projects", value: "20+" },
                { label: "Internships", value: "2" },
                { label: "Years Experience", value: "3+" },
                { label: "Happy Clients", value: "15+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background/50 p-6 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Skills */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
              {skills.technical.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percentage={skill.percentage} />
              ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-8">Soft Skills</h3>
              {skills.soft.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} percentage={skill.percentage} />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
