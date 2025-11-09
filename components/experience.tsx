"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Award, Calendar } from "lucide-react"

const TimelineItem = ({ item, index }: { item: any; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className={`flex gap-8 items-start ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
          {index < 2 && <div className="w-1 h-24 bg-gradient-to-b from-primary/50 to-transparent mt-4" />}
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <motion.div
            whileHover={{ x: 10 }}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all"
          >
            <div className="flex items-start gap-3 mb-2">
              {item.type === "experience" ? (
                <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              ) : (
                <Award className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
              )}
              <div>
                <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-primary font-medium">{item.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
              <Calendar className="w-4 h-4" />
              {item.period}
            </div>

            <p className="text-foreground/80 text-sm leading-relaxed mb-3">{item.description}</p>

            {item.highlights && (
              <ul className="space-y-2">
                {item.highlights.map((highlight: string, i: number) => (
                  <li key={i} className="text-sm text-foreground/70 flex gap-2">
                    <span className="text-primary">→</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const { ref: titleRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const timeline = [
        {
      type: "experience",
      title: "ACM Club Member, Amritapuri",
      company: "ACM Student Chapter",
      period: "Sep 2023 - Dec 2024",
      description:
        "Collaborated with a 5-member team to update, maintain, and enhance the ACM Club website, ensuring reliability and improved user engagement.",
      highlights: [
        "Mentored 10+ junior members, providing guidance in programming and web development best practices, which improved their project delivery and coding efficiency.",
        "Improved website performance by optimizing code, implementing new features, and enhancing functionality for a better user experience.",
        "Contributed to maintaining and upgrading the ACM Club’s online presence to foster greater community engagement."
      ],
    },
    {
  type: "achievement",
  title: "HackHub 2023 & Walmart Sparkathon 2025 Finalist",
  company: "HackHub | Walmart Global Tech",
  period: "Oct 2023 - Aug 2025",
  description:
    "Recognized for excellence in AI and innovation across multiple national-level competitions, including winning the Best AI Project at HackHub 2023 and being a Grand Jury Finalist at Walmart Sparkathon 2025.",
  highlights: [
    "Won Best AI Project at HackHub 2023 for developing an AI-powered application within a 24-hour hackathon.",
    "Led a team of 3 developers, implementing ML model integration and delivering a complete end-to-end product within the hackathon timeframe.",
    "Top 11 Finalist out of 7,100+ teams and 21,000+ participants at Walmart Sparkathon 2025; received recognition from Walmart jury members and presented the idea in the Grand Jury Round.",
    "Pitched the project to Walmart’s final jury panel, emphasizing innovation, feasibility, and real-world impact.",
  ],
}
,
    {
  type: "experience",
  title: "Cyber Security Awareness Workshop",
  company: "SSR Initiative",
  period: "Aug 2024",
  description:
    "Conducted a cyber security awareness workshop for 80+ grade VI and VII students, covering phishing, social engineering, and online scams to promote safe online practices.",
  highlights: [
    "Educated students about common cyber threats and safe internet usage.",
    "Explained phishing, social engineering, and online scams through interactive sessions.",
    "Improved digital safety awareness and responsible online behavior among participants.",
  ],
}
,
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Achievements</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
