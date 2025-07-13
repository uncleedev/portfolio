"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'
import { SiElectron, SiFirebase, SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiReact, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function TechStackSection() {

    const techStack = [
    { name: "React", icon: <SiReact className="w-8 h-8" /> },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8" /> },
    { name: "PHP", icon: <SiPhp className="w-8 h-8" /> },
    { name: "Electronjs", icon: <SiElectron className="w-8 h-8" /> },
    { name: "Typescript", icon: <SiTypescript className="w-8 h-8" /> },
    { name: "Mysql", icon: <SiMysql className="w-8 h-8" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
    { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
    { name: "Supabase", icon: <SiSupabase className="w-8 h-8" /> },
    { name: "Javascript", icon: <SiJavascript className="w-8 h-8" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" /> },
  ]

  return (
    <section id="tech" className="py-20  bg-[#053133]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            </p>
            The skills, tools and technologies I am really good at:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <Card
                  className="bg-[#053133]/70 border-[#4A7C7A]/30 hover:border-[#B8860B]/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-[#D4AF37] mb-3 flex justify-center">{tech.icon}</div>
                    <h3 className="text-white font-semibold text-sm">{tech.name}</h3>
                  </CardContent>
                </Card>
              </motion.div>

            ))}
          </div>
        </div>
    </section>
  )
}
