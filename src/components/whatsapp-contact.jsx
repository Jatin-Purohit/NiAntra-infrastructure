import {
  MessageCircle,
  Mail,
  Phone,
  Linkedin,
  Github,
  Twitter,
} from "lucide-react";

export function WhatsAppContact() {
  const phoneNumber = "+918627090587"; // Replace with your WhatsApp number
  const whatsappMessage =
    "Hi! I'm interested in discussing a project with you.";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* WhatsApp Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Get in Touch via WhatsApp
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          The fastest way to reach us. Send a message on WhatsApp and we'll
          respond within 24 hours.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#20ba5a] transition-colors w-fit"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </a>
      </div>

      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Other Ways to Reach Us
          </h3>
          <div className="space-y-4">
            <a
              href="mailto:info@niantra.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span>info@niantra.com</span>
            </a>
            <a
              href="tel:+918627090587"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span>+91 (862) 7090-587</span>
              <span>+91 (981) 4284-447</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/niantra-infrastructure/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary" />
            </a> */}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Response Time
          </h3>
          <p className="text-sm text-muted-foreground">
            We typically respond to WhatsApp messages within 24 hours. For
            urgent matters, please call directly.
          </p>
        </div>
      </div>
    </div>
  );
}
