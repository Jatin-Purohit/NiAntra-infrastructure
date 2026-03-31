"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Users,
  Target,
  Lightbulb,
  Code,
  Building,
} from "lucide-react";

import HeroSection from "../components/HeroSection";

// ✅ CORE VALUES
const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We deliver high-quality engineering and IT solutions with precision and attention to detail.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We work closely with clients and partners to achieve shared success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We adopt modern technologies and creative approaches to solve complex problems.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "We maintain transparency, honesty, and professionalism in every project.",
  },
];

// ✅ MAIN COMPONENT
export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* HERO */}
      <HeroSection
        title="About NiAntra Infrastructure"
        subtitle="Engineering and digital solutions for modern infrastructure."
        backgroundImage="/team-of-engineers-working-on-construction-site.jpg"
      />

      {/* ABOUT INTRO */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/Projects/2.jpg"
              alt="NiAntra Infrastructure"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white">
              Who We Are
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
              NiAntra Infrastructure is a growing company specializing in
              geotechnical investigations, topographical surveys, and modern IT
              solutions. We bridge the gap between traditional engineering and
              digital innovation.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
              Based in Himachal Pradesh, we support infrastructure,
              construction, and technology-driven projects with reliable data,
              expert insights, and scalable digital solutions.
            </p>

            <div className="flex gap-6 mt-6">
              <div className="flex items-center gap-2">
                <Building className="text-blue-600" />
                <span className="font-medium">Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="text-orange-500" />
                <span className="font-medium">IT Solutions</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <motion.div
            className="p-8 rounded-xl bg-white dark:bg-slate-900 shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-slate-600 dark:text-slate-400">
              To deliver reliable engineering and IT services that help clients
              build strong, efficient, and future-ready infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl bg-white dark:bg-slate-900 shadow"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400">
              To become a trusted name in infrastructure and technology by
              combining engineering expertise with digital innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Core Values
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded-xl bg-slate-50 dark:bg-slate-800 text-center hover:shadow-lg transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-orange-500">
                    <Icon className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>

                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
