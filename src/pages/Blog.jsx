"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import HeroSection from "../components/HeroSection";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Infrastructure",
      excerpt:
        "Exploring how green building practices and sustainable materials are revolutionizing the construction industry.",
      author: "Dr. Robert Anderson",
      date: "March 15, 2024",
      category: "Sustainability",
      image: "/sustainable-green-building.jpg",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "BIM Technology: Transforming Project Management",
      excerpt:
        "How Building Information Modeling is improving collaboration, reducing costs, and enhancing project outcomes.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      category: "Technology",
      image: "/bim-building-information-modeling.jpg",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "Structural Design Innovations in 2024",
      excerpt:
        "Latest trends and innovations in structural engineering that are shaping modern construction practices.",
      author: "James Wilson",
      date: "March 5, 2024",
      category: "Engineering",
      image: "/structural-design-modern-building.jpg",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Risk Management in Large-Scale Projects",
      excerpt:
        "Best practices for identifying, assessing, and mitigating risks in complex construction projects.",
      author: "Lisa Chen",
      date: "February 28, 2024",
      category: "Management",
      image: "/project-management-construction-site.jpg",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Infrastructure Resilience and Climate Adaptation",
      excerpt:
        "Designing infrastructure that can withstand climate challenges and environmental changes.",
      author: "Dr. Robert Anderson",
      date: "February 20, 2024",
      category: "Sustainability",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "The Role of AI in Construction Planning",
      excerpt:
        "How artificial intelligence is optimizing construction schedules, resource allocation, and safety.",
      author: "Emily Rodriguez",
      date: "February 15, 2024",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "7 min read",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Hero Section */}
      <HeroSection
        title="NiAntraInfrastructures Blog"
        subtitle="Insights, trends, and innovations in civil engineering and construction."
        backgroundImage="/placeholder.svg?height=1080&width=1920"
      />

      {/* Blog Posts */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-orange-500">
                      {post.readTime}
                    </span>
                    <motion.button
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-orange-500 transition-colors font-semibold"
                      whileHover={{ x: 4 }}
                    >
                      Read More <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-slate-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Subscribe to Our Newsletter
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 dark:text-slate-400 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Get the latest insights, trends, and updates in civil engineering
            delivered to your inbox.
          </motion.p>

          <motion.form
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing!");
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-slate-900 dark:text-white placeholder-slate-500"
            />
            <motion.button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
