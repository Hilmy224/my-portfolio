"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, ArrowRight, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export function ContactsSection() {
  const [formData, setFormData] = useState({
    name: 'Muhammad Hilmy Abdul Aziz',
    email: '',
    message: ''
  });
  
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
 
  const contactItems = [
    { icon: Mail, label: "Email", value: "m.hilmy.aa@ui.ac.id", color: "from-blue-400 to-cyan-400" },
    { icon: Phone, label: "Phone", value: "+62 812-3456-7890", color: "from-green-400 to-emerald-400" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", color: "from-purple-400 to-pink-400" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", color: "hover:from-gray-600 hover:to-gray-800" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:from-blue-600 hover:to-blue-800" },
    { icon: Twitter, label: "Twitter", color: "hover:from-sky-500 hover:to-sky-700" }
  ];

  return (
    <section id="contacts" className="relative py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-purple-500/5 via-transparent to-blue-500/5 rounded-full animate-spin duration-[20s]"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        ></div>
      ))}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl rounded-full px-8 py-3 mb-8 border border-white/10">
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your next project to life? Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-8 relative">
                Get In Touch
                <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or connect with fellow developers and cybersecurity enthusiasts. Let's build the future together.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactItems.map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                      <p className="text-white font-semibold text-lg">{item.value}</p>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <p className="text-gray-400 mb-6 font-medium">Follow me on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`group relative p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl`}
                  >
                    <social.icon className="w-6 h-6 text-white group-hover:text-white transition-colors duration-300" />
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-white/10">
          <p className="text-gray-400 text-lg mb-4">
            Ready to start your next project?
          </p>  
          <div className="inline-flex items-center gap-2 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold text-xl">
            Let's make it happen
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

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
