const experiences = [
  {
    year: "2024",
    title: "Cybersecurity Intern",
    company: "TechSecure Solutions",
    description:
      "Conducted vulnerability assessments, implemented security protocols, and assisted in incident response procedures.",
    technologies: ["Nessus", "Wireshark", "Python", "Linux", "SIEM"],
  },
  {
    year: "2023",
    title: "Full-Stack Developer",
    company: "StartupHub Indonesia",
    description:
      "Developed and maintained web applications using modern frameworks, collaborated with cross-functional teams.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    year: "2023",
    title: "Research Assistant",
    company: "University of Indonesia",
    description:
      "Assisted in cybersecurity research projects, published papers on network security and threat detection.",
    technologies: ["Python", "TensorFlow", "Research", "Academic Writing"],
  },
  {
    year: "2022",
    title: "Software Development Intern",
    company: "Digital Innovation Lab",
    description:
      "Built mobile applications, participated in agile development processes, and learned industry best practices.",
    technologies: ["React Native", "Firebase", "JavaScript", "Git", "Agile"],
  },
  {
    year: "2021",
    title: "Computer Science Student",
    company: "University of Indonesia",
    description:
      "Focused on software engineering, cybersecurity, and computer networks. Maintained high academic performance.",
    technologies: ["Java", "C++", "Data Structures", "Algorithms", "Networking"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <h2 className="text-2xl font-bold text-white">Experience</h2>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400">Timeline - scrollable</p>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-8 w-max">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex-shrink-0 w-80">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6">
                  <div className="text-purple-400 font-bold text-lg mb-2">{exp.year}</div>
                  <h3 className="text-white font-semibold text-xl mb-1">{exp.title}</h3>
                  <p className="text-purple-300 mb-3">{exp.company}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-purple-500/50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
