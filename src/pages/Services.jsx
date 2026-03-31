"use client";

import { motion } from "framer-motion";
import {
  Map,
  Layers,
  ClipboardList,
  Users,
  Code,
  Globe,
  Smartphone,
  Cloud,
  Database,
  ArrowRight,
  Lock,
  Briefcase,
  GitBranch,
} from "lucide-react";

import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

// ✅ ENGINEERING SERVICES
const engineeringServices = [
  {
    icon: Map,
    title: "Geotechnical Investigation",
    description:
      "Subsurface investigations to determine soil and rock properties for safe structural design.",
  },
  {
    icon: Layers,
    title: "Topographical Survey",
    description:
      "Accurate terrain mapping and contour analysis using modern surveying tools.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Tender Investigation",
    description:
      "Site assessments and data collection for feasibility and tender preparation.",
  },
  {
    icon: Users,
    title: "Project Consultation",
    description:
      "Expert guidance from planning to execution for infrastructure projects.",
  },
];

// ✅ IT SERVICES
const itServices = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions for enterprise, web, and mobile platforms.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, scalable, and responsive website development.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android & iOS apps with high performance and user experience.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Cloud deployment, migration, and infrastructure management.",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Security solutions to protect systems, networks, and data.",
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Efficient and secure data storage and optimization solutions.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description: "Strategic guidance to align technology with business goals.",
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description: "CI/CD pipelines, automation, and faster deployments.",
  },
];

// ✅ DETAILED ENGINEERING SERVICES
const serviceDetails = [
  {
    title: "Geotechnical Investigation",
    image: "/Projects/2.jpg",
    description:
      "Detailed subsurface exploration to support safe foundation and infrastructure design.",
    features: [
      "Soil testing & borehole drilling",
      "SPT & rock core analysis",
      "Groundwater study",
      "Foundation recommendations",
      "Geotechnical reports",
    ],
  },
  {
    title: "Topographical Survey",
    image: "/Projects/1.jpg",
    description:
      "High-accuracy land and terrain surveys for planning and execution.",
    features: [
      "DGPS & Total Station survey",
      "Contour mapping",
      "Route alignment",
      "DTM modeling",
      "Data processing",
    ],
  },
  {
    title: "Pre-Tender Investigation",
    image: "/Projects/5.jpg",
    description:
      "Initial analysis and reporting to support tender documentation.",
    features: [
      "Site reconnaissance",
      "Soil & rock assessment",
      "Hydrological study",
      "Risk analysis",
      "Tender inputs",
    ],
  },
];

// ✅ WHY CHOOSE US
const whyChoose = [
  {
    title: "Experienced Team",
    description:
      "Skilled engineers and developers delivering reliable solutions.",
  },
  {
    title: "Modern Technology",
    description: "Use of advanced tools in both engineering and IT services.",
  },
  {
    title: "Quality Focus",
    description: "Strict quality checks to ensure accuracy and performance.",
  },
  {
    title: "Timely Delivery",
    description: "Projects completed within deadlines and budget.",
  },
  {
    title: "Client-Centric",
    description: "Transparent communication and dedicated support.",
  },
  {
    title: "End-to-End Solutions",
    description: "From site investigation to digital implementation.",
  },
];

// ✅ MAIN COMPONENT
export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* HERO */}
      <HeroSection
        title="Our Services"
        subtitle="Engineering and IT solutions for modern infrastructure."
        backgroundImage="/engineering-blueprint-construction-site.jpg"
      />

      {/* ENGINEERING SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Engineering Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* IT SERVICES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">IT Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          {serviceDetails.map((service, idx) => (
            <div
              key={idx}
              className="mb-16 grid lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

                <p className="mb-6 text-slate-600 dark:text-slate-400">
                  {service.description}
                </p>

                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white dark:bg-slate-900 rounded-xl shadow"
              >
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Need Our Services?</h2>

        <p className="mb-6">
          Contact us today to get a customized solution for your project.
        </p>

        <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold flex items-center gap-2 mx-auto">
          Get in Touch <ArrowRight size={18} />
        </button>
      </section>
    </div>
  );
}
