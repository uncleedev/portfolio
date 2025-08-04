"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { Facebook, Github, Linkedin, Mail, Youtube } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {

  const socialLinks = [
    { href: 'https://github.com/uncleedev', icon: <Github className="w-6 h-6" /> },
    { href: 'https://www.linkedin.com/in/uncledev/', icon: <Linkedin className="w-6 h-6" /> },
    { href: 'https://www.facebook.com/uncledev/', icon: <Facebook className="w-6 h-6" /> },
    { href: 'https://www.youtube.com/@uncleedev', icon: <Youtube className="w-6 h-6" /> },
  ];

  return (
    <section id="home" className="pt-20 pb-16">
      <div className="section-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Jhon Brian Arce
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">
                Aspiring Software Engineer
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                I am a 4th year college student with a passion for development and a goal of becoming a successful Software Engineer.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#4A7C7A] hover:bg-[#4A7C7A]/80 text-white px-8 py-3 text-lg"
                onClick={() => window.location.href = '#projects'}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#B8860B] text-accent hover:bg-accent hover:text-[#053133] px-8 py-3 text-lg bg-transparent"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>

            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-[#B8860B]/30 shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="uncledev profile picture"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#B8860B]/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#4A7C7A]/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
