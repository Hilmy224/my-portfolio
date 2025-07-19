import { Navigation } from "../components/navigation"
import { HeroSection } from "../components/hero-section"
import { AboutSection } from "../components/about-section"
import { ProjectsSection } from "../components/projects-section"
import { ExperienceSection } from "../components/experience-section"
import { ArticlesSection } from "../components/articles-section"
import { ContactsSection } from "../components/contacts-section"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ArticlesSection />
      <ContactsSection />
    </div>
  )
}
