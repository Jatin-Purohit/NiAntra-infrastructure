"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  description,
  location,
  delay = 0,
}) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white dark:bg-slate-800">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-orange-500 font-medium">
            {location}
          </span>
          {/* <motion.div
            className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 4 }}
          >
            <ArrowRight size={16} />
          </motion.div> */}
        </div>
      </div>
    </motion.div>
  );
}
