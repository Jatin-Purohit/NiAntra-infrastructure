"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Map, Layers, ClipboardList, Users } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import StatCounter from "../components/StatCounter";

export default function Home() {
  const services = [
    {
      icon: Map,
      title: "Geotechnical Investigation",
      description:
        "Comprehensive subsurface investigations to determine soil and rock properties essential for safe and reliable structural design.",
    },
    {
      icon: Layers,
      title: "Topographical Survey",
      description:
        "Accurate terrain mapping and contour analysis using modern surveying technologies to ensure precise project planning and execution.",
    },
    {
      icon: ClipboardList,
      title: "Pre-Tender",
      description:
        "Preliminary site assessment and data collection carried out before tendering to support project feasibility, design assumptions, and tender documentation.",
    },
    {
      icon: Users,
      title: "Project Consultation",
      description:
        "Expert consultation and project assessment services to guide clients from initial concept through successful implementation.",
    },
  ];

  const featuredProjects = [
    {
      image: "/Projects/1.jpg",
      title: "Construction of New Broad Gauge Line",
      description:
        "Construction of a new broad gauge railway line between Chainage 25.400 and Chainage 66.400 (41.000 km), including electrical, signal, and telecommunication works between Thimmarajanahalli (Excl.) and Tavarekere (Incl.) stations in the Tumkur–Chitradurga–Davangere section.",
      location: "Karnataka, India",
    },

    {
      image: "/Projects/2.jpg",
      title: "Upgradation of Kolde-Kalamba to Visarwadi Highway",
      description:
        "Construction and up-gradation of the Kolde-Kalamba to Visarwadi (near junction of NH-6 Nandurbar–State Highway) section from Design Ch. Km 50+200 to Km 56+800 and Km 62+400 to Km 100+403 of NH-752G to two-lane with paved shoulder / four-lane configuration in Maharashtra on Engineering, Procurement & Construction (EPC) basis.",
      location: "Maharashtra, India",
    },
    {
      image: "/Projects/3.jpg",
      title:
        "Construction of Vehicular Underpasses and Service Road Strengthening",
      description:
        "Construction of vehicular underpasses at Ch. 317+520 and Ch. 321+600, along with widening and strengthening of the service road of NH-44 in the state of Punjab on EPC mode.",
      location: "Punjab, India",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Thakur",
      role: "Project Engineer",
      company: "FBC",
      text: "NiAntra Infrastructure provided highly professional and detailed geotechnical investigations for our projects. Their reports were accurate and on time.",
      image: "/testimonial-man1.jpg",
    },
    {
      name: "Anjali Verma",
      role: "Technical Head",
      company: "CivilMantra",
      text: "The team at NiAntra Infrastructure brings precision and dedication to every assignment. Their topographical survey quality is unmatched.",
      image: "/testimonial-woman1.jpg",
    },
    {
      name: "Manish Kumar",
      role: "Site Supervisor",
      company: "Sumad Enterprises",
      text: "We collaborated with NiAntra Infrastructure on multiple pre-tender investigations. Their data accuracy and professionalism are exceptional.",
      image: "/testimonial-man2.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Engineering the Groundwork for the Future"
        subtitle="Professional geotechnical and topographical services that strengthen every foundation."
        backgroundImage="/construction-site-blueprint-city-skyline.jpg"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Quote <ArrowRight size={20} />
          </motion.button>
          <motion.button
            className="px-8 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </div>
      </HeroSection>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCounter end={8} label="Months of Experience" delay={0} />
            <StatCounter end={20} label="Projects Completed" delay={0.1} />
            <StatCounter end={10} label="Clients Served" delay={0.2} />
            <StatCounter end={10} label="Expert Team Members" delay={0.3} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="/Projects/2.jpg"
                alt="About NiAntra Infrastructure"
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                About NiAntra Infrastructure
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                Based in Hamirpur, Himachal Pradesh, NiAntra Infrastructure is a
                trusted provider of geotechnical investigations and
                topographical surveys. We specialize in delivering accurate,
                data-driven insights for infrastructure, road, and bridge
                projects.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                With a dedicated team of professionals and modern equipment, we
                ensure reliability and precision in every project we undertake.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Learn More <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Delivering reliable and precise investigation and survey services
              for every infrastructure need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A glimpse into some of our recent surveys and geotechnical works.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Valued Clients
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-8 text-lg font-semibold text-slate-700 dark:text-slate-300">
            <span>FBC</span>
            <span>CivilMantra</span>
            <span>Sumad Enterprises</span>
            <span>PWD Himachal</span>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Build a Strong Foundation Together
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact NiAntra Infrastructure today to discuss your next project.
          </motion.p>
          <motion.div
            className="text-white text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Galore, District Hamirpur, Himachal Pradesh — PIN 177026
          </motion.div>
          <Link to="/contact">
            <motion.button
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
