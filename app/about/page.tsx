import { Timeline } from "@/components/timeline"
import { Users, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">About Me</h1>
          <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            I'm a passionate developer with a mission to create beautiful, functional digital experiences. With over 5
            years of experience in web development, I've worked with startups and established companies to bring their
            visions to life.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">User-Centric</h3>
              <p className="text-muted-foreground">
                Every project starts with understanding the end user. I design and build with empathy and usability at
                the forefront.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                I'm committed to writing clean, maintainable code and delivering solutions that stand the test of time.
              </p>
            </div>
            <div className="p-8 rounded-lg border border-border hover:border-primary transition-colors">
              <Lightbulb className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                I stay current with emerging technologies and best practices to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">My Journey</h2>
          <Timeline />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Frontend</h3>
              <div className="space-y-3">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Backend & Tools</h3>
              <div className="space-y-3">
                {["Node.js", "PostgreSQL", "Git", "Docker", "AWS"].map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
