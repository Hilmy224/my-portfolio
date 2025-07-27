"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Smartphone, Presentation } from "lucide-react"
import { useState } from "react"
import TestBrushPng from "../../public/TestBrushPng.png"

// Define the Project type
type Project = {
  title: string
  description: string
  fullDescription: string
  technologies: string[]
  images: string[]
  links: Array<{
    type: string
    url: string
    label: string
  }>
}

const projects: Project[] = [
  {
    title: "Explosive Outplay",
    description:
      "A fast-paced 2-player tactical arcade game with delayed bombs and chess-style movement. Nominated for Best Visual & Best Gameplay at GIM ITB GameJam 2025.",
    fullDescription:
      "A fast-paced 2-player tactical arcade game with delayed bombs and chess-style movement. Nominated for Best Visual & Best Gameplay at GIM ITB GameJam 2025. This innovative game combines strategic thinking with quick reflexes, featuring unique bomb mechanics that add layers of tactical depth to every match. Players must carefully plan their moves while anticipating their opponent's strategy, creating an engaging and competitive experience.",
    technologies: ["Game Development", "Godot", "GDScript"],
    images: ["projectsImage/explosive1.png?height=400&width=600", "projectsImage/explosive2.png?height=400&width=600&text=Gameplay"],
    links: [
      { type: "demo", url: "https://samueltaniel.itch.io/explosive-outplay", label: "Play Game" }
    ]
  },
  {
    title: "On the Flip Side",
    description:
      "A simple 3D FPS with playstyle state switching mechanics, built using Godot engine.",
    fullDescription:
      "A simple 3D FPS with playstyle state switching mechanics, built using Godot engine. This game features a unique mechanic where players can flip between different modes, each with its own benefits and weakness. Depending on the situation you have to switch playstyles",
    technologies: ["Game Development", "Godot", "Blender", "GDScript"],
    images: ["projectsImage/flip1.png?height=400&width=600", "projectsImage/flip2.png?height=400&width=600&text=World1"],
    links: [
      { type: "demo", url: "https://subdvd2.itch.io/ontheflipside", label: "Play Game" }
    ]
  },
  {
    title: "Full Stack Witchcraft",
    description:
      "A color pop game featuring duplicating books and a watchful teacher. An struggle to be the teachers best student.",
    fullDescription:
      "A game featuring duplicating books and a watchful government. An 2 Player PvP game where you are tasked to clean up the mess in the lab by your teacher but your competitive spirit gets the better of you to the point of sabotaging your fellow student.",
    technologies: ["Game Development","Blender",],
    images: ["projectsImage/witchcraft1.png?height=400&width=600", "projectsImage/witchcraft2.png?height=400&width=600&text=Story"],
    links: [
      { type: "demo", url: "https://samueltaniel.itch.io/full-stack-witchcraft", label: "Play Game" }
    ]
  },
  {
    title: "Futsal Management Board",
    description:
      "A comprehensive web-based platform to streamline football administration, enabling digital registration, transfers, and competition management.",
    fullDescription:
      "A comprehensive web-based platform to streamline football administration, enabling digital registration, transfers, and competition management. This system is a step to how futsal leagues and tournaments are managed, providing tools for player registration, team management, match scheduling, and score tracking. The platform includes administrative dashboards, player coach and club admin management, verification processes for transfers between clubs",
    technologies: ["Web Development","Jira", "Next Js", "Nest Js", "TypeScript", "Prisma"],
    images: ["projectsImage/fmb1.png?height=400&width=600", "projectsImage/fmb2.png?height=400&width=600&text=Dashboard"],
    links: [
      { type: "github", url: "https://github.com/Momofin-K02", label: "Source Code" },
      { type: "demo", url: "https://futsal-frontend-opal.vercel.app/", label: "Live Demo" }
    ]
  },
  {
    title: "SiBook",
    description:
      "A web-based book borrowing platform designed to promote literacy, featuring user-friendly interfaces for book management and borrowing systems.",
    fullDescription:
      "A web-based book borrowing platform designed to promote literacy, featuring user-friendly interfaces for book management and borrowing systems. SiBook connects readers with a vast digital library, allowing them to discover, borrow, and manage books seamlessly. The platform includes features like community reviews, and administrative tools for librarians to manage inventory and user accounts.",
    technologies: ["Web Development", "Django", "Python","Flutter", "Dart"],
    images: ["projectsImage/Sibook1.png?height=400&width=600", "projectsImage/Sibook2.png?height=400&width=600&text=Library"],
    links: [
      { type: "github", url: "https://github.com/SiBook-D08/SiBook", label: "Web Repository" },
      { type: "github", url: "https://github.com/SiBook-D08/SiBook-mobile", label: "Mobile Repository" },
      { type: "demo", url: "https://si-book.vercel.app/", label: "Web Demo" },
    ]
  },
  {
    title: "Fashion Pedia",
    description:
      "A Spring Boot-based fashion encyclopedia project providing  fashion information and resources in an organized digital format.",
    fullDescription:
      "A Spring Boot-based fashion encyclopedia project providing  fashion information and resources in an organized digital format. Fashion Pedia serves as a  database of fashion trends, designers, brands, and style guides. Users can explore fashion history, discover current trends, and access detailed information about clothing items, accessories, and fashion industry insights through an intuitive and visually appealing interface.",
    technologies: ["Spring Boot", "Java", "Web Development"],
    images: ["projectsImage/AFK31.png?height=400&width=600"],
    links: [
      { type: "github", url: "https://github.com/orgs/AFK-3/repositories", label: "Organization" },
      { type: "demo", url: "https://afk-3-frontend.vercel.app/auth", label: "Live Demo" },
      { type: "presentation", url: "https://docs.google.com/presentation/d/1aUwTew08ABGy51emztkQutVc2-GvzGZuK4FY4v59bWc/edit?usp=sharing", label: "Presentation" }
    ]
  },
  {
    title: "Inventory System",
    description:
      "A practical shopping-list and inventory management application built using Django, featuring CRUD operations and user-friendly interface.",
    fullDescription:
      "A practical shopping-list and inventory management application built using Django, featuring CRUD operations and user-friendly interface. This system helps users organize their shopping needs and manage inventory efficiently. Features include item categorization, quantity tracking, shopping list generation, price monitoring, and inventory alerts for low-stock items. The application provides both web and mobile-responsive interfaces for maximum accessibility.",
    technologies: ["Django", "Python", "Web Development", "Database Management"],
    images: ["projectsImage/Inventory1.png?height=400&width=600", "projectsImage/Inventory2.png?height=400&width=600&text=Inventory"],
    links: [
      { type: "github", url: "https://github.com/Hilmy224/shopping-list-TaskVersion", label: "Source Code" },
      { type: "demo", url: "https://muhammad-hilmy21-tugas.pbp.cs.ui.ac.id/", label: "Live Demo" }
    ]
  },
]

const getLinkIcon = (type: string) => {
  switch (type) {
    case 'github':
      return <Github className="w-4 h-4" />
    case 'mobile':
      return <Smartphone className="w-4 h-4" />
    case 'presentation':
      return <Presentation className="w-4 h-4" />
    default:
      return <ExternalLink className="w-4 h-4" />
  }
}

export function ProjectsSection() {
  // Use proper typing for the state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project: Project, imageIndex = 0) => {
    setSelectedProject(project)
    setCurrentImageIndex(imageIndex)
  }

  const closeModal = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <>
      <section id="projects" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative ">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block mb-12 relative">
            {/* Background image behind the Projects text */}
            <img
              src={TestBrushPng.src}
              alt=""
              className="absolute -left-23 -top-5 w-[280%] max-w-none pointer-events-none"
            />
            <h2 className="text-2xl font-bold text-white relative">Projects</h2>
          </div>

          {/* Custom Scrollable Container */}
          <div className="relative">
            {/* Custom Scrollbar Container */}
            <div 
              className="overflow-x-auto pb-6 custom-scrollbar"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#8b5cf6 #1e293b'
              }}
            >
              <div className="flex space-x-6 w-max">
                {projects.map((project, index) => (
                  <Card key={index} className="w-80 h-[520px] bg-slate-900/50 border-purple-500/30 backdrop-blur-sm flex-shrink-0 hover:bg-slate-900/70 transition-all duration-300 flex flex-col">
                    <CardHeader className="pb-3 flex-shrink-0">
                      <div 
                        className="relative cursor-pointer group"
                        onClick={() => openModal(project, 0)}
                      >
                        <img
                          src={project.images[0] || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded-lg mb-4 transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <span className="text-white text-sm font-medium">Click to view</span>
                        </div>
                        {project.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                            +{project.images.length - 1} more
                          </div>
                        )}
                      </div>
                      <CardTitle className="text-white text-lg line-clamp-2">{project.title}</CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex-1 flex flex-col">
                      {/* Description with fixed height */}
                      <CardDescription className="text-gray-400 text-sm leading-relaxed mb-4 h-16 overflow-hidden">
                        {project.description}
                      </CardDescription>
                      
                      {/* Technologies - flexible space */}
                      <div className="flex-1 mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      {/* Links - always at bottom */}
                      <div className="flex flex-wrap gap-3 mt-auto">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {getLinkIcon(link.type)}
                            <span className="ml-1">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Gradient Fade Effects */}
            <div className="absolute left-0 top-0 bottom-6 w-8 bg-gradient-to-r from-slate-800 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-6 w-8 bg-gradient-to-l from-slate-800 to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Custom CSS Styles */}
        <style jsx>{`
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #8b5cf6 #1e293b;
            scroll-behavior: smooth;
          }

          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #1e293b;
            border-radius: 4px;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #8b5cf6, #a855f7);
            border-radius: 4px;
            border: 1px solid #334155;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #7c3aed, #9333ea);
          }

          .custom-scrollbar::-webkit-scrollbar-corner {
            background: #1e293b;
          }

          /* Smooth scroll snapping */
          .custom-scrollbar {
            scroll-snap-type: x proximity;
          }

          .custom-scrollbar > div > * {
            scroll-snap-align: start;
          }

          /* Hide scrollbar on mobile for cleaner look */
          @media (max-width: 768px) {
            .custom-scrollbar::-webkit-scrollbar {
              display: none;
            }
            
            .custom-scrollbar {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          }

          /* Utility classes for text truncation */
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-purple-500/30">
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image Gallery */}
                <div className="relative">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-80 object-cover rounded-lg"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {selectedProject.images.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Project Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-purple-600/20 text-purple-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Links</h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          className="flex items-center bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-purple-200 px-4 py-2 rounded-lg transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {getLinkIcon(link.type)}
                          <span className="ml-2">{link.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}