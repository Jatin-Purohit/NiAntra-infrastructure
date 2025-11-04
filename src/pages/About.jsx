"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Target, Lightbulb } from "lucide-react";
import HeroSection from "../components/HeroSection";

export default function About() {
  const timeline = [
    {
      year: "2000",
      event: "Founded NiAntraInfrastructures with a vision for excellence",
    },
    { year: "2005", event: "Expanded to international markets" },
    { year: "2010", event: "Completed 100+ major infrastructure projects" },
    { year: "2015", event: "Pioneered BIM technology adoption" },
    {
      year: "2020",
      event: "Achieved ISO 9001 and environmental certifications",
    },
    {
      year: "2024",
      event: "Recognized as industry leader in sustainable engineering",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We pursue excellence in every aspect of our work, from design to execution.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and strong client partnerships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and innovative solutions.",
    },
    {
      icon: CheckCircle,
      title: "Integrity",
      description:
        "We maintain the highest standards of professional ethics and transparency.",
    },
  ];

  const team = [
    {
      name: "Dr. Robert Anderson",
      role: "Chief Executive Officer",
      image: "/professional-headshot-senior-man.jpg",
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Technical Officer",
      image: "/professional-headshot-woman-engineer.jpg",
    },
    {
      name: "James Wilson",
      role: "Head of Project Management",
      image: "/professional-headshot-man-manager.jpg",
    },
    {
      name: "Lisa Chen",
      role: "Director of Sustainability",
      image: "/professional-asian-woman-headshot.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="About NiAntraInfrastructures"
        subtitle="Leading the future of civil engineering with innovation, precision, and sustainability."
        backgroundImage="/team-of-engineers-working-on-construction-site.jpg"
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-slate-800 dark:to-slate-700 rounded-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                To deliver world-class civil engineering solutions that
                transform communities, create sustainable infrastructure, and
                exceed client expectations through innovation, expertise, and
                unwavering commitment to quality.
              </p>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-slate-800 dark:to-slate-700 rounded-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                To be the most trusted and innovative civil engineering firm
                globally, recognized for creating sustainable, resilient
                infrastructure that improves quality of life and drives economic
                growth for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-orange-500"></div>

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`flex ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-1/2 pr-8 text-right">
                    {idx % 2 === 0 && (
                      <div>
                        <p className="text-2xl font-bold text-orange-500">
                          {item.year}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                          {item.event}
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="w-8 flex justify-center">
                    <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-slate-800"></div>
                  </div>

                  <div className="w-1/2 pl-8">
                    {idx % 2 === 1 && (
                      <div>
                        <p className="text-2xl font-bold text-orange-500">
                          {item.year}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 mt-2">
                          {item.event}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Values */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl text-center hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership Team
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                className="group text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
