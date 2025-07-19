import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <h2 className="text-2xl font-bold text-white">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 p-2">
                  <img
                    src="/placeholder.svg?height=240&width=240"
                    alt="M Hilmy AA"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Aspiring software engineer with a strong foundation in computer science, currently in my final year
              pursuing a Bachelor's degree at the University of Indonesia. Passionate about cybersecurity, full-stack
              development, and creating innovative solutions to complex problems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With expertise in modern web technologies, secure coding practices, and a keen interest in emerging
              technologies, I strive to build applications that are not only functional but also secure and scalable.
            </p>

            <div className="flex gap-4 pt-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
                <Download className="w-4 h-4 mr-2" />
                CV
              </Button>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-2 bg-transparent"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
