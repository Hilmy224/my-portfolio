import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

const articles = [
  {
    title: "Understanding Zero-Day Vulnerabilities",
    description:
      "A comprehensive guide to identifying, preventing, and responding to zero-day attacks in modern applications.",
    category: "Cybersecurity",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Building Secure APIs with Node.js",
    description: "Best practices for implementing authentication, authorization, and data validation in RESTful APIs.",
    category: "Development",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "The Future of Blockchain Security",
    description: "Exploring emerging threats and security measures in decentralized applications and smart contracts.",
    category: "Blockchain",
    date: "Nov 10, 2024",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Machine Learning in Threat Detection",
    description: "How AI and ML algorithms are revolutionizing cybersecurity threat detection and response systems.",
    category: "AI/ML",
    date: "Oct 22, 2024",
    readTime: "15 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Secure Coding Practices for React",
    description:
      "Essential security considerations when building React applications, from XSS prevention to secure state management.",
    category: "Frontend",
    date: "Oct 5, 2024",
    readTime: "9 min read",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export function ArticlesSection() {
  return (
    <section id="articles" className="py-20 bg-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <h2 className="text-2xl font-bold text-white">Articles</h2>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex space-x-6 w-max">
            {articles.map((article, index) => (
              <Card
                key={index}
                className="w-80 bg-slate-900/50 border-purple-500/30 backdrop-blur-sm flex-shrink-0 hover:bg-slate-900/70 transition-colors cursor-pointer"
              >
                <CardHeader className="pb-3">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
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
      </div>
    </section>
  )
}
