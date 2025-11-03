import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsPreview } from "@/components/projects-preview"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <ProjectsPreview />
      <CTASection />
    </main>
  )
}
