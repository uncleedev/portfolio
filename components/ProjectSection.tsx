"use client"

import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ExternalLink } from 'lucide-react'

export default function ProjectSection() {

    const projects = [
    {
      title: "ImApp",
      description: "Inventory management application for small businesses. This was my 2nd year project at CDM.",
      image: "/imapp.jpg",
      tech: ["Php", "Mysql", "HTML", "CSS", "Javascript"],
      link: "https://github.com/verastigue18/imApp/tree/main/imApp",
    },
    {
      title: "SpaceSync",
      description: "A Colegio De Montalban's Class Scheduling System. This was my 2nd year project at CDM.",
      image: "/spacesync.jpg",
      tech: ["Visual Basic", "mysql", "GunaUI", ".Net"],
      link: "https://github.com/uncleedev/spacesync",
    },
    {
      title: "ReGate",
      description: "Enhancing Interaction and Educational Resources at Colegio de Montalban. This was my 3rd year project at CDM.",
      image: "/regate.jpg",
      tech: ["Nextjs", "Tailwind", "MongoDB", "Javascript"],
      link: "https://github.com/uncleedev/ReGate",
    }, 
  ]

  return (
    <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and contributions to various projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-[#053133]/50 border-[#4A7C7A]/30 hover:border-[#B8860B]/50 transition-all duration-300 hover:scale-105 overflow-hidden p-0"
              >
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>
                <CardContent className="px-6 pb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-[#B8860B]/20 text-[#B8860B] border-[#B8860B]/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-[#053133] bg-transparent"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
    </section>
  )
}
