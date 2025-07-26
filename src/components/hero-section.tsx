export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-50"
        />
      </div> 

      {/* Content */}
      <div className="relative z-10 px-6 ml-8 md:ml-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          <span className="px-6 block font-serif text-white-400 opacity-70">Software Engineer</span>
          <span className="px-4 block font-serif text-white-400 opacity-70">Cybersecurity</span>
          <span className="block font-serif text-white-400 opacity-70">Enthusiast</span>
        </h1>
      </div>

      {/* Floating cityscape elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
    </section>
  )
}