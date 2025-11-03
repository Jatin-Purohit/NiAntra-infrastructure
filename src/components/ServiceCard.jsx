"use client"

import { motion } from "framer-motion"

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="group p-8 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Icon size={32} className="text-white" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  )
}
