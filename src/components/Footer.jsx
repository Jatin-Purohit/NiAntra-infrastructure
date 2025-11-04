"use client";

import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      // { name: "Blog", path: "/blog" },
    ],
    // Resources: [
    //   { name: "Documentation", path: "#" },
    //   { name: "Case Studies", path: "#" },
    //   { name: "Guides", path: "#" },
    //   { name: "FAQ", path: "#" },
    // ],
    // Legal: [
    //   { name: "Privacy Policy", path: "#" },
    //   { name: "Terms of Service", path: "#" },
    //   { name: "Cookie Policy", path: "#" },
    //   { name: "Disclaimer", path: "#" },
    // ],
  };

  const socialLinks = [
    { icon: Facebook, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Linkedin, url: "#" },
    { icon: Instagram, url: "#" },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> */}
        <div className="flex justify-between gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-full flex items-center gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">CE</span>
              </div> */}
              {/* <div className=" w-40 h-40 rounded-lg flex items-center justify-center"> */}
              {/* <span className="text-white font-bold text-lg">CE</span> */}
              <img src="/logo/logo.png" alt="" className="w-48 h-48" />
              {/* </div> */}
              {/* <span className="font-bold text-lg">NiAntraInfrastructures</span> */}
            </div>
            <p className="text-slate-400 text-sm">
              Building the future with precision and innovation.
            </p>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map((section, idx) => (
            <motion.div
              key={section[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold mb-4">{section[0]}</h3>
              <ul className="space-y-2">
                {section[1].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-orange-500" />
                <span>+91 (862) 709-0587</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-orange-500" />
                <span>info@niantra.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-orange-500" />
                <span>
                  Galore dist - Hamirpur Himachal Pradesh Pin code  177026
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={idx}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-400 text-sm">
            <p>
              &copy; {currentYear} NiAntraInfrastructures. All rights reserved.
              | Designed with precision for excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
