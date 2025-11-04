"use client";

import { motion } from "framer-motion";
// import {
//   Briefcase,
//   Users,
//   Award,
//   Zap,
//   Building2,
//   Hammer,
//   BarChart3,
//   Shield,
// } from "lucide-react";
import { ArrowRight, Map, Layers, ClipboardList, Users } from "lucide-react";
import HeroSection from "../components/HeroSection";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  const mainServices = [
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
      title: "Pre-Tender Geotech Investigation",
      description:
        "Early-stage geotechnical and topographical studies to support project feasibility and tender documentation.",
    },
    {
      icon: Users,
      title: "Project Consultation",
      description:
        "Expert consultation and project assessment services to guide clients from initial concept through successful implementation.",
    },
  ];

  const serviceDetails = [
    {
      title: "Geotechnical Investigation",
      image: "/Projects/2.jpg",
      description:
        "Comprehensive subsurface investigations to determine soil and rock properties essential for safe and reliable structural and infrastructure design.",
      features: [
        "Soil sampling and laboratory testing",
        "Borehole drilling and SPT analysis",
        "Rock coring and strength evaluation",
        "Groundwater level observation",
        "Foundation recommendation reports",
        "Geotechnical data interpretation",
      ],
    },
    {
      title: "Topographical Survey",
      image: "/Projects/1.jpg",
      description:
        "Accurate terrain mapping and contour analysis using modern surveying technologies to ensure precise project planning and execution.",
      features: [
        "DGPS and Total Station surveys",
        "Contour and elevation mapping",
        "Boundary and alignment surveys",
        "Route and corridor mapping",
        "Digital terrain modeling (DTM)",
        "Survey data processing and plotting",
      ],
    },
    {
      title: "Pre-Tender Geotech Investigation",
      image: "/Projects/5.jpg",
      description:
        "Early-stage geotechnical and topographical studies to support project feasibility, design evaluation, and tender documentation.",
      features: [
        "Preliminary soil exploration",
        "Desk study and site reconnaissance",
        "Feasibility-level soil and rock assessment",
        "Preliminary foundation recommendations",
        "Support for tender documentation",
        "Risk identification and mitigation advice",
      ],
    },
    {
      title: "Project Consultation",
      image: "/Projects/4.jpg",
      description:
        "Expert consultation and technical assessment services to guide clients from conceptual planning through detailed execution.",
      features: [
        "Technical feasibility studies",
        "Design and methodology review",
        "Project cost and schedule assessment",
        "Value engineering recommendations",
        "Regulatory and compliance guidance",
        "Ongoing project advisory support",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive civil engineering solutions tailored to your project needs and objectives."
        backgroundImage="/engineering-blueprint-construction-site.jpg"
      />

      {/* Main Services Grid */}
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
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A complete range of civil engineering services to meet all your
              project requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, idx) => (
              <ServiceCard key={idx} {...service} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceDetails.map((service, idx) => (
            <motion.div
              key={idx}
              className="mb-16 last:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <img
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose NiAntraInfrastructures?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description:
                  "Highly qualified engineers with decades of combined experience.",
              },
              {
                title: "Advanced Technology",
                description:
                  "Cutting-edge tools and software for optimal project outcomes.",
              },
              {
                title: "Quality Assurance",
                description:
                  "Rigorous quality control at every stage of project execution.",
              },
              {
                title: "Sustainability",
                description:
                  "Commitment to environmentally responsible engineering practices.",
              },
              {
                title: "On-Time Delivery",
                description:
                  "Proven track record of meeting project schedules and budgets.",
              },
              {
                title: "Client Focus",
                description:
                  "Dedicated support and transparent communication throughout.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Need Our Services?
          </motion.h2>
          <motion.p
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Contact our team today to discuss your project requirements and get
            a customized solution.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </div>
  );
}
