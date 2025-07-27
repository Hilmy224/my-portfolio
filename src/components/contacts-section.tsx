"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin} from "lucide-react";
import BgBrush from "../../public/TsetcontentcardPng.png"

const handleSocialClick = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export function ContactsSection() {
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
 
  const contactItems = [
    { icon: Mail, label: "Email", value: "m.hilmy.abdul.aziz.6673@gmail.com", color: "from-blue-400 to-cyan-400" },
    { icon: Phone, label: "Phone", value: "+62 811-9433-773", color: "from-green-400 to-emerald-400" },
    { icon: MapPin, label: "Location", value: "Jakarta, Indonesia", color: "from-purple-400 to-pink-400" }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", color: "hover:from-gray-600 hover:to-gray-800",link:"https://github.com/Hilmy224" },
    { icon: Linkedin, label: "LinkedIn", color: "hover:from-blue-600 hover:to-blue-800", link:"https://www.linkedin.com/in/muhammad-hilmy-abdul-aziz-a5a98824b"},
  ];

  return (
    <section id="contacts" className="relative py-18 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
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

      <div className=" relative max-w-7xl mx-auto px-6 pt-35">
        {/* Header */}
        <div className="text-center"> {/* This div already handles horizontal centering of its content */}
        <div className="mb-12 relative w-124 h-32 mx-auto"> {/* Added mx-auto to center this specific div */}
          {/* Background image behind the About text */}
          <img
            src={BgBrush.src}
            alt=""
            className="absolute inset-0 w-full h-full object-fill pointer-events-none"
          />
          
          <p className="absolute inset-0 flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold z-10 bg-gradient-to-r from-purple-300 via-purple-200[50%] to-blue-200 bg-clip-text text-transparent drop-shadow-2xl leading-relaxed">
            Ready to collaborate
          </p>
        </div>
      </div>

        {/* Contact Info Grid - Now distributed across full width */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
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

        {/* Social Links - Centered */}
        <div className="text-center mb-16 ">
          <p className="text-gray-400 mb-6 font-medium">My social media</p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((social, index) => (
              <button
                key={index}
                onMouseEnter={() => setHoveredSocial(index)}
                onMouseLeave={() => setHoveredSocial(null)}
                onClick={() => handleSocialClick(social.link)}
                className={`group relative p-4 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 ${social.color} transition-all duration-300 hover:transform hover:scale-110 hover:shadow-2xl cursor-pointer`}
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
    </section>
  );
}


