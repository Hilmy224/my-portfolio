import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="inline-block bg-purple-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-12">
          <h2 className="text-2xl font-bold text-white">Contacts</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm always interested in discussing new opportunities, collaborating on projects, or simply connecting
              with fellow developers and cybersecurity enthusiasts.
            </p>

            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-purple-400" />
                <span>m.hilmy.aa@ui.ac.id</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-purple-400" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </Button>
            </div>
          </div>

          <Card className="bg-slate-800/50 border-purple-500/30 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-purple-500/30 rounded-lg text-white focus:outline-none focus:border-purple-400 resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
