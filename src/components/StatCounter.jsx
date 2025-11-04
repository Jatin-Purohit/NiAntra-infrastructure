"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function StatCounter({ end, label, delay = 0 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50;
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="text-4xl sm:text-5xl font-bold text-orange-500 mb-2">
        {count}+
      </div>
      <p className="text-slate-600 dark:text-slate-400 font-medium">{label}</p>
    </motion.div>
  );
}
