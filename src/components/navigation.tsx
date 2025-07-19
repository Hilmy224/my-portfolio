"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "articles", label: "Articles" },
    { id: "contacts", label: "Contacts" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">M Hilmy AA</div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm transition-colors hover:text-purple-400 ${
                  activeSection === item.id ? "text-purple-400" : "text-gray-300"
                }`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
