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
      category: "railway",
      image: "/Projects/5.jpg",
      title: "Construction of New Broad Gauge Line",
      description:
        "Construction of a new broad gauge railway line between Chainage 25.400 and 66.400 (41.000 km), including electrical, signal, and telecommunication works between Thimmarajanahalli (Excl.) and Tavarekere (Incl.) stations in the Tumkur–Chitradurga–Davangere section.",
      location: "Karnataka, India",
    },
    {
      id: 2,
      category: "highway",
      image: "/Projects/6.jpg",
      title: "Upgradation of Kolde-Kalamba to Visarwadi Highway",
      description:
        "Construction and up-gradation of Kolde–Kalamba to Visarwadi (near junction of NH-6 Nandurbar–State Highway) section from Design Ch. Km 50+200 to Km 56+800 and Km 62+400 to Km 100+403 of NH-752G to two-lane with paved shoulder / four-lane configuration in Maharashtra on EPC basis.",
      location: "Maharashtra, India",
    },
    {
      id: 3,
      category: "infrastructure",
      image: "/Projects/8.jpg",
      title: "Vehicular Underpasses and Service Road Strengthening",
      description:
        "Construction of vehicular underpasses at Ch. 317+520 and Ch. 321+600, and widening and strengthening of the service road of NH-44 in Punjab on EPC mode.",
      location: "Punjab, India",
    },
    {
      id: 4,
      category: "tunnel",
      image: "/Projects/9.jpg",
      title: "4-Lane Highway with Twin Tube Tunnel (NH-205)",
      description:
        "Construction of a new 4-lane highway with paved shoulder from Dareota Village to Kalar Bala Village of NH-205 (Design Chainage Km 33+175 to Km 41+000, Design Length – 7.825 Km), including a twin tube tunnel, Package-IIB, in Himachal Pradesh under NH(O) on Hybrid Annuity Mode.",
      location: "Himachal Pradesh, India",
    },
    {
      id: 5,
      category: "highway",
      image: "/Projects/7.jpg",
      title: "Service Road and Underpasses on NH-30 & NH-34",
      description:
        "Construction of new service roads and underpasses at various locations on the Rewa–Katni–Jabalpur section (Km 813+257 to Km 880+600, Pkg-4) and Jabalpur–Lakhnadon section (Km 880+600 to Km 891+780 of NH-30 and Km 1358+000 to Km 1428+557 of NH-34) in Madhya Pradesh on EPC mode.",
      location: "Madhya Pradesh, India",
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
        backgroundImage="/Projects/13.png"
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
              { number: "5+", label: "Projects Completed" },
              { number: "20+", label: "Team Members" },
              { number: "8+", label: "Months Experience" },
              { number: "10+", label: "Happy Clients" },
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
