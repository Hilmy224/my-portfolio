"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import TestBrushPng from "../../public/TestBrushPng.png"

const articles = [
  {
    title: "Importance Of Scrum",
    description:
      "My experience with Scrum methodology in software development, focusing on its benefits",
    category: "SCRUM",
    date: "Mar 3, 2025",
    readTime: "3 min read",
    image: "https://miro.medium.com/v2/resize:fit:640/format:webp/0*QdhkmuUcY-ZlN_lq?height=200&width=300",
  },
  {
    title: "Security Implementation Using JWT",
    description:
      "Security analysis of Web Project using JWT for Role based authentication",
    category: "Web Security",
    date: "Mar 19, 2025",
    readTime: "4 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*REVOFwRi4IvFt-CzwfLFHQ.png",
  },
  {
    title: "Usability Heuristic and Analysis of FMB",
    description:
      "UI/UX analysis of Web Project, Identifying implemented Heurristics, usability issues and providing recommendations",
    category: "UI/UX",
    date: "Mar 3, 2025",
    readTime: "6 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*hmqmuEJ7quu9ZtR5qWXstg.png",
  },
  {
    title: "Static Analysis & QA using SonarQube",
    description:
      "A personal guide on how to use SonarQube for static code analysis and quality assurance in software projects",
    category: "Quality Assurance",
    date: "Apr 15, 2025",
    readTime: "5 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*2Q6XUpX0SqJyqdJEFg0OiA.png",
  },
  {
    title: "Standardization of Design for your web app",
    description:
      "A guide on why and how to standardize design elements in web applications for consistency and usability",
    category: "UI",
    date: "May 13, 2025",
    readTime: "3 min read",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*HcwLbYpz_JfICZmt-jS52w.png",
  },
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block mb-12 relative">
            {/* Background image behind the About text */}
            <img
              src={TestBrushPng.src}
              alt=""
              className="absolute -left-23 -top-5 w-[280%] max-w-none pointer-events-none"
            />
            <h2 className="text-2xl font-bold text-white relative">Articles</h2>
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
              {articles.map((article, index) => (
                <Card
                  key={index}
                  className="w-80 bg-slate-900/50 border-purple-500/30 backdrop-blur-sm flex-shrink-0 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-lg mb-4 transition-transform hover:scale-105"
                    />
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                        {article.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-lg leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-sm leading-relaxed">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex items-center justify-between text-gray-500 text-xs">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
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
      `}</style>
    </section>
  )
}