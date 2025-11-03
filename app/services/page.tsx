import type React from "react"
import { Code, Palette, Zap, Users, Smartphone, Database, Rocket, Shield } from "lucide-react"

interface Service {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
}

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive, performant websites with modern technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive interfaces that users love with thoughtful design and attention to detail.",
    features: ["Wireframing", "Prototyping", "User Research", "Design Systems"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications that deliver native-like experiences.",
    features: ["React Native", "iOS & Android", "App Store Deployment", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building scalable, secure backend systems that power your applications.",
    features: ["Node.js & Express", "Database Design", "API Development", "Cloud Integration"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing applications for speed and efficiency to deliver exceptional user experiences.",
    features: ["Code Splitting", "Caching Strategies", "Image Optimization", "Monitoring & Analytics"],
  },
  {
    icon: Users,
    title: "Consultation",
    description: "Providing strategic guidance on technology choices and digital transformation initiatives.",
    features: ["Tech Stack Selection", "Architecture Planning", "Team Training", "Code Reviews"],
  },
  {
    icon: Rocket,
    title: "Deployment & DevOps",
    description: "Managing deployment pipelines and infrastructure for reliable, scalable applications.",
    features: ["CI/CD Pipelines", "Docker & Kubernetes", "Cloud Platforms", "Monitoring Setup"],
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Ensuring your applications remain secure, up-to-date, and running smoothly.",
    features: ["Security Audits", "Dependency Updates", "Bug Fixes", "Performance Monitoring"],
  },
]

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Comprehensive Services</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            From concept to deployment, I offer a full range of services to bring your digital vision to life. Whether
            you need a complete website overhaul or targeted optimization, I have the expertise to deliver.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg group"
                >
                  <Icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">My Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your goals, target audience, and project requirements in detail.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a comprehensive roadmap and technical architecture for your project.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with clean code, best practices, and regular updates.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploying your project and providing ongoing maintenance and support.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary mb-4 opacity-20">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground mb-8 text-balance opacity-90">
            Let's discuss how I can help bring your project to life. Contact me today for a free consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </main>
  )
}
