"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  link?: string
  github?: string
  year: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online store with product catalog, shopping cart, and payment integration.",
    longDescription:
      "Built a complete e-commerce solution with React and Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard for managing products and orders.",
    tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "/ecommerce-platform.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2023",
  },
  {
    id: "2",
    title: "SaaS Analytics Dashboard",
    description: "Analytics dashboard with real-time data visualization and user management features.",
    longDescription:
      "Developed a comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features. Implemented with React, TypeScript, and Recharts for interactive charts.",
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    image: "/saas-dashboard.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2023",
  },
  {
    id: "3",
    title: "Mobile Fitness App",
    description: "Cross-platform mobile application with offline support and cloud synchronization.",
    longDescription:
      "Created a fitness tracking app using React Native with offline capabilities, cloud sync, and social features. Integrated with wearable devices and implemented push notifications for user engagement.",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/fitness-mobile-app.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2022",
  },
  {
    id: "4",
    title: "Content Management System",
    description: "Headless CMS with API-first architecture for managing digital content.",
    longDescription:
      "Built a flexible content management system with a modern API, supporting multiple content types, versioning, and publishing workflows. Designed for scalability and ease of integration.",
    tags: ["Node.js", "PostgreSQL", "GraphQL", "Docker"],
    image: "/cms-system.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2022",
  },
  {
    id: "5",
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search, filtering, and virtual tours.",
    longDescription:
      "Developed a comprehensive real estate platform featuring advanced search capabilities, 3D virtual tours, mortgage calculators, and agent management tools. Optimized for mobile and desktop experiences.",
    tags: ["React", "Next.js", "Mapbox", "Tailwind CSS"],
    image: "/real-estate-portal.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2023",
  },
  {
    id: "6",
    title: "Social Media Analytics",
    description: "Tool for tracking and analyzing social media performance across platforms.",
    longDescription:
      "Created a social media analytics tool that aggregates data from multiple platforms, provides insights, and generates automated reports. Features include sentiment analysis and competitor tracking.",
    tags: ["React", "Python", "PostgreSQL", "AWS"],
    image: "/social-media-analytics.jpg",
    link: "https://example.com",
    github: "https://github.com",
    year: "2022",
  },
]

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProjects = selectedTag ? projects.filter((p) => p.tags.includes(selectedTag)) : projects

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            A selection of projects I've worked on, showcasing my skills in web development, design, and
            problem-solving. Each project represents a unique challenge and learning opportunity.
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Filter by technology:</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedTag === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-border"
              }`}
            >
              All Projects
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-lg border border-border overflow-hidden hover:border-primary transition-all hover:shadow-lg"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-muted overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSelectedTag(tag)}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-medium"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Interested in Working Together?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            I'm always open to discussing new projects and opportunities. Let's create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start a Project
          </a>
        </div>
      </section>
    </main>
  )
}
