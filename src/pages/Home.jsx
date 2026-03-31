"use client";

import { Link } from "react-router-dom";
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
import ProjectCard from "../components/ProjectCard";
import StatCounter from "../components/StatCounter";

// ✅ ENGINEERING SERVICES
const engineeringServices = [
  {
    icon: Map,
    title: "Geotechnical Investigation",
    description:
      "Comprehensive subsurface investigations to determine soil and rock properties for safe structural design.",
  },
  {
    icon: Layers,
    title: "Topographical Survey",
    description:
      "Accurate terrain mapping and contour analysis using modern surveying technologies.",
  },
  {
    icon: ClipboardList,
    title: "Pre-Tender",
    description:
      "Preliminary site assessment and data collection for project feasibility and tendering.",
  },
  {
    icon: Users,
    title: "Project Consultation",
    description:
      "Expert consultation from concept to execution for infrastructure projects.",
  },
];

// ✅ IT SERVICES
const itServices = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Custom software solutions including enterprise, web, and mobile applications.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable websites using latest technologies.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "High-performance Android and iOS applications with seamless UX.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloud setup, migration, and infrastructure management (AWS, Azure, GCP).",
  },
  {
    icon: Lock,
    title: "Cybersecurity",
    description:
      "Advanced protection against cyber threats with monitoring and risk control.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Secure, scalable, and optimized database solutions.",
  },
  {
    icon: Briefcase,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to improve business efficiency.",
  },
  {
    icon: GitBranch,
    title: "DevOps Services",
    description:
      "CI/CD pipelines, automation, and faster deployment workflows.",
  },
];

// ✅ PROJECTS
const featuredProjects = [
  {
    image: "/Projects/1.jpg",
    title: "Construction of New Broad Gauge Line",
    description:
      "Construction of a 41 km railway line including electrical, signal, and telecommunication works.",
    location: "Karnataka, India",
  },
  {
    image: "/Projects/2.jpg",
    title: "Highway Upgradation Project",
    description:
      "Upgradation of NH-752G into a two/four-lane highway under EPC mode.",
    location: "Maharashtra, India",
  },
  {
    image: "/Projects/3.jpg",
    title: "Vehicular Underpasses Construction",
    description:
      "Construction of underpasses and service road strengthening on NH-44.",
    location: "Punjab, India",
  },
];

// ✅ MAIN COMPONENT
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* HERO */}
      <HeroSection
        title="Engineering the Groundwork for the Future"
        subtitle="Engineering and digital solutions for modern infrastructure"
        backgroundImage="/construction-site-blueprint-city-skyline.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Get a Quote <ArrowRight size={20} />
          </motion.button>

          <motion.button
            className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold border border-white/30"
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.button>
        </div>
      </HeroSection>

      {/* STATS */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4">
          <StatCounter end={8} label="Months of Experience" />
          <StatCounter end={20} label="Projects Completed" />
          <StatCounter end={10} label="Clients Served" />
          <StatCounter end={10} label="Team Members" />
        </div>
      </section>

      {/* ENGINEERING SERVICES */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Engineering Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {engineeringServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* IT SERVICES */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">IT Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {itServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={i} {...project} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Let's Build a Strong Foundation Together
        </h2>

        <p className="mb-6">
          Contact NiAntra Infrastructure today to discuss your next project.
        </p>

        <Link to="/contact">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
