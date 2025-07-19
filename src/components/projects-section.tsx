import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "SecureAuth Dashboard",
    description:
      "A comprehensive authentication system with multi-factor authentication, role-based access control, and real-time security monitoring.",
    technologies: ["React", "Node.js", "PostgreSQL", "JWT", "Redis"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "CyberThreat Analyzer",
    description:
      "Machine learning-powered tool for analyzing and detecting potential cybersecurity threats in network traffic patterns.",
    technologies: ["Python", "TensorFlow", "Flask", "MongoDB", "Docker"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "Blockchain Voting System",
    description:
      "Decentralized voting platform ensuring transparency, security, and immutability using blockchain technology.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat Application",
    description: "End-to-end encrypted messaging platform with real-time communication and file sharing capabilities.",
    technologies: ["Socket.io", "Express", "React", "MongoDB", "WebRTC"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
  {
    title: "API Security Scanner",
    description:
      "Automated tool for scanning REST APIs for common security vulnerabilities and generating detailed reports.",
    technologies: ["Python", "FastAPI", "SQLite", "Pytest", "Docker"],
    image: "/placeholder.svg?height=200&width=300",
    github: "#",
    demo: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <h2 className="text-2xl font-bold text-white">Projects</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {projects.map((project, index) => (
              <Card key={index} className="w-80 bg-slate-900/50 border-purple-500/30 backdrop-blur-sm flex-shrink-0">
                <CardHeader className="pb-3">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-400 text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
