export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
        <div
          className="absolute inset-0 bg-[url('/background.png')] bg-cover bg-center opacity-50"
        />
      </div> 

      {/* Content */}
      <div className="relative z-10 px-6">
        <div className="inline-block bg-slate-800/60 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="font-zilla text-lg">Software Engineer</span>
            <span className="block text-purple-400">Cybersecurity</span>
            <span className="block">Enthusiast</span>
          </h1>
        </div>
      </div>

      {/* Floating cityscape elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
    </section>
  )
}
