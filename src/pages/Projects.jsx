"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "../components/HeroSection";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      category: "commercial",
      image: "/modern-office-building-construction.jpg",
      title: "Downtown Office Complex",
      description:
        "A 25-story mixed-use development with sustainable design features.",
      location: "New York, NY",
    },
    {
      id: 2,
      category: "infrastructure",
      image: "/highway-bridge-infrastructure.jpg",
      title: "Metropolitan Bridge",
      description:
        "Cable-stayed bridge spanning 2.5 km with innovative engineering.",
      location: "San Francisco, CA",
    },
    {
      id: 3,
      category: "residential",
      image: "/residential-apartment-complex.jpg",
      title: "Riverside Residences",
      description:
        "Luxury residential complex with 500+ units and modern amenities.",
      location: "Miami, FL",
    },
    {
      id: 4,
      category: "commercial",
      image: "/shopping-mall-retail-center.jpg",
      title: "Central Shopping Mall",
      description:
        "State-of-the-art retail complex with integrated parking facilities.",
      location: "Chicago, IL",
    },
    {
      id: 5,
      category: "infrastructure",
      image: "/highway-road-construction.jpg",
      title: "Interstate Highway Expansion",
      description:
        "Major highway expansion project connecting three major cities.",
      location: "Texas, USA",
    },
    {
      id: 6,
      category: "residential",
      image: "/townhouse-development.jpg",
      title: "Green Valley Townhouses",
      description:
        "Eco-friendly townhouse community with sustainable features.",
      location: "Portland, OR",
    },
    {
      id: 7,
      category: "commercial",
      image: "/hospital-medical-facility.jpg",
      title: "Medical Research Center",
      description:
        "Advanced medical facility with cutting-edge laboratory spaces.",
      location: "Boston, MA",
    },
    {
      id: 8,
      category: "infrastructure",
      image: "/water-treatment-plant.jpg",
      title: "Water Treatment Facility",
      description: "Modern water treatment plant serving 500,000+ residents.",
      location: "Los Angeles, CA",
    },
    {
      id: 9,
      category: "residential",
      image: "/luxury-villa-estate.jpg",
      title: "Luxury Villa Estate",
      description: "Premium residential development with exclusive amenities.",
      location: "Miami Beach, FL",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "residential", label: "Residential" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Our Portfolio"
        subtitle="Showcasing our most impressive and innovative projects across diverse sectors."
        backgroundImage="/construction-site-portfolio-projects.jpg"
      />

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-orange-500 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, idx) => (
                <ProjectCard key={project.id} {...project} delay={idx * 0.05} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Team Members" },
              { number: "25+", label: "Years Experience" },
              { number: "1000+", label: "Happy Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
