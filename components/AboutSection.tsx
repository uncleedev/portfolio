import Image from 'next/image'
import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#053133]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Software Engineer with over 3 years of experience in designing and implementing
                  scalable cloud solutions. My expertise spans across full-stack development, and
                  system architecture.I'm a graduating student from Colegio de Montalban, pursuing a Bachelor of Science in Information Technology. I’m passionate about web development and design, with a strong interest in building new things and exploring emerging technologies.
                </p>
                <p>
                  Over the past three years, I’ve taken the initiative to deepen my understanding of technology through self-study and hands-on projects. I focus on writing clean, maintainable code and continuously strive to improve my skills. For me, learning never stops—especially in a field that evolves as fast as tech.
                </p>
                <p>
                  When I'm not coding, you’ll often find me at the gym, building strength and discipline. I also enjoy exploring new experiences—both in technology and in life.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-[#B8860B] font-semibold mb-2">Experience</h4>
                  <p className="text-white text-2xl font-bold">3+ years</p>
                </div>
                <div>
                  <h4 className="text-[#B8860B] font-semibold mb-2">Projects</h4>
                  <p className="text-white text-2xl font-bold">10+ completed</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 sm:w-96 sm:h-[28rem] rounded-2xl overflow-hidden border-4 border-[#B8860B]/30 shadow-2xl">
                  <Image
                    src="/about.jpg"
                    alt="uncle working"
                    width={400}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#B8860B]/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#4A7C7A]/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
