// import { WhatsAppContact } from "../../src/"
import { Clock, MapPin, Zap } from "lucide-react";
import { WhatsAppContact } from "../../src/components/whatsapp-contact";

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Let's Work Together
          </h1>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            Have a project in mind? I'd love to hear about it. Get in touch and
            let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Clock className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Quick Response
              </h3>
              <p className="text-sm text-muted-foreground">
                I respond to inquiries within 24-48 hours
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Zap className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Fast Turnaround
              </h3>
              <p className="text-sm text-muted-foreground">
                Efficient project delivery without compromising quality
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <MapPin className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Remote Friendly
              </h3>
              <p className="text-sm text-muted-foreground">
                Available for projects worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <WhatsAppContact />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                question: "What's your typical project timeline?",
                answer:
                  "Project timelines vary based on scope and complexity. Small projects typically take 2-4 weeks, while larger projects may take 2-3 months. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes! I offer maintenance and support packages for all projects. This includes bug fixes, updates, and performance optimization to keep your site running smoothly.",
              },
              {
                question: "What's your pricing structure?",
                answer:
                  "I offer flexible pricing based on project scope, complexity, and timeline. I provide detailed quotes after understanding your requirements. Let's discuss what works best for your budget.",
              },
              {
                question: "Can you work with my existing team?",
                answer:
                  "I'm experienced in collaborating with designers, project managers, and other developers. I can integrate seamlessly into your existing workflow.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {item.question}
                </h3>
                <p className="text-muted-foreground">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
