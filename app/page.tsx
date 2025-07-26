"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Database,
  Globe,
  Briefcase,
  GraduationCap,
  MessageSquare,
  ChevronDown,
  Menu,
  X,
  Terminal,
  Laptop,
  Server,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import SkillsSection from "@/components/Skills/skills"
import HeroAboutSections from "@/components/About/about"
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [currentRole, setCurrentRole] = useState(0)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress || 0, [0, 1], ["0%", "50%"])
  const [mounted, setMounted] = useState(false)

  const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "MERN Stack Developer"]

  const skills = [
    { name: "NextJS", category: "Frontend", level: 90 },
    { name: "ReactJS", category: "Frontend", level: 95 },
    { name: "TypeScript", category: "Frontend", level: 85 },
    { name: "Tailwind CSS", category: "Frontend", level: 90 },
    { name: "NodeJS", category: "Backend", level: 88 },
    { name: "ExpressJS", category: "Backend", level: 85 },
    { name: "MongoDB", category: "Database", level: 80 },
    { name: "MySQL", category: "Database", level: 75 },
    { name: "Laravel", category: "Backend", level: 80 },
    { name: "Python", category: "Backend", level: 70 },
    { name: "Docker", category: "DevOps", level: 75 },
    { name: "Git/GitHub", category: "Tools", level: 90 },
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "SSQAURE PK",
      period: "03/2025 – Present",
      location: "Lahore, Pakistan",
      description:
        "Developed and deployed production-level web applications such as EthisX and Invoiceme.io using Next.js, React.js, and Laravel.",
      achievements: [
        "Built fully responsive and interactive UIs with Tailwind CSS, Bootstrap, and Framer Motion",
        "Collaborated with cross-functional teams using Git for version control",
        "Participated in API integration, deployment, and debugging",
      ],
    },
    {
      title: "MERN Stack Developer Intern",
      company: "iifa tech",
      period: "18/11/2024 – 03/2025",
      location: "Lahore, Pakistan",
      description:
        "Designed and developed a fully functional eCommerce store using Next.js, managing both frontend and backend operations.",
      achievements: [
        "Integrated secure payment gateways including Stripe and PayFast",
        "Built responsive UI components with Tailwind CSS",
        "Developed RESTful APIs for product listings, authentication, and order management",
      ],
    },
    {
      title: "MERN Stack Developer Intern",
      company: "Educist",
      period: "01/08/2024 – 01/11/2024",
      location: "Lahore, Pakistan",
      description:
        "Contributed to a real-world educational platform built with Next.js, focusing on frontend functionality and user experience improvements.",
      achievements: [
        "Enhanced application performance, usability, and responsiveness",
        "Applied responsive design techniques using Tailwind CSS and Bootstrap",
        "Ensured mobile and cross-device compatibility",
      ],
    },
  ]

  const education = [
    {
      degree: "BS Software Engineering",
      institution: "UMT",
      period: "2021 – 2025",
      grade: "3.8 GPA",
    },
    {
      degree: "Intermediate",
      institution: "Superior College",
      period: "2019 – 2021",
      grade: "98%",
    },
    {
      degree: "Matriculation",
      institution: "PSF",
      period: "2017 – 2019",
      grade: "85%",
    },
  ]

  const projects = [
 {
    title: "EthisX Platform",
    description: "A comprehensive web application built with Next.js and Laravel for ethical business practices.",
    technologies: ["Next.js", "Laravel", "Tailwind CSS", "MySQL"],
    image: "/EthisX.png", // ✅ Correct file name and path
    link: "https://ethisx.co/",
  },
    {
      title: "Invoiceme.io",
      description: "Invoice management system with automated billing and payment processing.",
      technologies: ["React.js", "Node.js", "MongoDB", "Stripe"],
      image: "/InvoiceMe2.png",
      link: "https://invoiceme.io/",
    },
    {
      title: "eCommerce Store",
      description: "Full-featured online store with payment gateway integration and admin panel.",
      technologies: ["Next.js", "Express.js", "MongoDB", "Cloudinary",'Google Auth','Linkedin Auth'],
      image: "/EStore.png",
      link: "https://github.com/developerAyesha/EStore",
    },
    {
      title: "Educational Platform (Company Project not public)",
      description: "Interactive learning platform with course management and progress tracking.",
      technologies: ["Next.js", "React.js",  "MongoDB", "Cloudinary","Bootstrap", "TypeScript"],
      image: "/Educist.png",
      link: "#",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
            >
              Ayesha Akhtar
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "skills", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-sm font-medium transition-colors ${
                    activeSection === item ? "text-cyan-400" : "text-white hover:text-cyan-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-4 py-2 space-y-2">
              {["home", "about", "experience", "skills", "projects", "education", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize text-white hover:text-cyan-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>


      <HeroAboutSections/>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20 hover:bg-white/10 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Briefcase className="text-white" size={24} />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl mb-2">{exp.title}</CardTitle>
                          <CardDescription className="text-cyan-300 text-lg font-semibold">
                            {exp.company}
                          </CardDescription>
                        </div>
                      </div>
                      <div className="text-right mt-4 sm:mt-0">
                        <p className="text-gray-300">{exp.period}</p>
                        <p className="text-gray-400">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <SkillsSection />

  
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20 hover:bg-white/10 transition-all duration-300 group shadow-xl hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                   <div className="absolute top-4 right-4">
  <a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
  >
    <ExternalLink
      className="text-cyan-400 group-hover:text-cyan-300 transition-colors bg-black/50 p-2 rounded-full"
      size={32}
    />
  </a>
</div>

                  </div>
                  <CardHeader>
                    <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-300">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="bg-cyan-600/20 text-cyan-300 border-cyan-400/30 hover:bg-cyan-600/30 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20 hover:bg-white/10 transition-all duration-300 shadow-xl">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                          <GraduationCap className="text-white" size={32} />
                        </div>
                        <div>
                          <CardTitle className="text-white text-xl">{edu.degree}</CardTitle>
                          <CardDescription className="text-cyan-300 text-lg">{edu.institution}</CardDescription>
                        </div>
                      </div>
                      <div className="text-right mt-4 sm:mt-0">
                        <p className="text-gray-300">{edu.period}</p>
                        <p className="text-cyan-300 font-semibold text-lg">{edu.grade}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect and create
              something amazing together!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-white text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <p className="text-white font-semibold">ayeshaakh234@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-300">Phone</p>
                        <p className="text-white font-semibold">03297463499</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-300">Location</p>
                        <p className="text-white font-semibold">Street no 1 rampura Bata pur lahore</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-cyan-500/20 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-white text-2xl font-semibold mb-6">Send a Message</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Input
                          placeholder="Your Name"
                          className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                        />
                      </div>
                    </div>
                    <div>
                      <Input
                        placeholder="Subject"
                        className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={5}
                        className="bg-white/10 border-cyan-500/30 text-white placeholder-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <MessageSquare className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-cyan-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 sm:mb-0">© 2025 Ayesha Akhtar. All rights reserved.</p>
            <div className="flex space-x-6">
              <a
                href="https://github.com/developerAyesha"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/ayesha-akhtar-0aaaa2254"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ayeshaakh234@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
