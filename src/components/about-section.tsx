"use client";
import { Button } from "@/components/ui/button"
import { Download, Mail } from "lucide-react"
import TestBrushPng from "../../public/TestBrushPng.png"
import PFP from "../../public/circlePFP.png"


export function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute -top-4 left-0 w-full h-8 backdrop-blur-xs"></div>
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

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="inline-block mb-12 relative -ml-16">
          {/* Background image behind the About text */}
          <img
            src={TestBrushPng.src}
            alt=""
            className="absolute -left-23 -top-5 w-[350%] max-w-none pointer-events-none"
          />
          <h2 className="text-2xl font-bold text-white relative">About</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-900 to-indigo-600 p-1">
                <div className="w-full h-full rounded-full bg-slate-900 p-2">
                  <img
                    src={PFP.src}
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
              <Button className="min-w-36 bg-purple-600 hover:bg-purple-900 text-white px-8 py-2"
              onClick={() => window.open('/Document/myresume.pdf', '_blank')}
              >
                <Download className=" w-4 h-4 mr-2" />
                CV
              </Button>
              <Button
                variant="outline"
                className="min-w-36 border-purple-500 text-purple-400 hover:bg-purple-500/10 px-6 py-2 bg-transparent"
                onClick={() => window.location.href = "/#contacts"}
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