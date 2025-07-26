import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Download, ChevronDown, Code, 
  Rocket, Star, Zap, Award, Coffee, Users, ArrowRight,
  Terminal, Globe, Briefcase, Heart
} from 'lucide-react';

export default function HeroAboutSections() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Full Stack Developer",
    "Frontend Developer", 
    "Backend Developer",
    "MERN Stack Developer",
    "Problem Solver"
  ];

  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

//   const achievements = [
//     { icon: Code, count: "50+", label: "Projects Built" },
//     { icon: Star, count: "3+", label: "Years Experience" },
//     { icon: Zap, count: "15+", label: "Technologies" },
//     { icon: Coffee, count: "∞", label: "Coffee Consumed" }
//   ];

  const techStack = [
    { name: "React", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "Next.js", icon: "▲", color: "from-gray-600 to-black" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-green-700" },
    { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
    { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-400" }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section - First Impression */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 to-blue-600/5" />
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="mb-8 relative"
          >
            <div className="w-48 h-48 mx-auto relative">
              {/* Rotating Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 p-1"
              >
                <div className="w-full h-full rounded-full bg-black" />
              </motion.div>
              
              {/* Profile Photo */}
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl font-bold text-white"
                >
                  AA
                </motion.div>
              </div>

              {/* Floating Tech Icons */}
              {/* {techStack.slice(0, 4).map((tech, index) => {
                const positions = [
                  { top: "10%", right: "10%" },
                  { bottom: "10%", right: "10%" },
                  { bottom: "10%", left: "10%" },
                  { top: "10%", left: "10%" }
                ];
                
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                    className="absolute w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center"
                    style={positions[index]}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <span className="text-lg">{tech.icon}</span>
                  </motion.div>
                );
              })} */}
            </div>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              Ayesha Akhtar
            </h1>
            
            <div className="text-2xl sm:text-3xl mb-6 h-12 flex items-center justify-center">
              <span className="text-gray-300 mr-3">I craft</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, rotateX: 90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -20, rotateX: -90 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
            >
              Transforming ideas into powerful digital experiences with modern web technologies
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <Rocket className="mr-2" size={20} />
                Let's Work Together
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

           <a href="/Resume.pdf" download>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold text-lg hover:bg-cyan-400 hover:text-black transition-all duration-300"
  >
    <Download className="mr-2 inline" size={20} />
    Download Resume
  </motion.button>
</a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-8"
          >
            {[
              { icon: Github, href: "https://github.com/developerAyesha", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ayesha-akhtar-0aaaa2254", label: "LinkedIn" },
              { icon: Mail, href: "mailto:ayeshaakh234@gmail.com", label: "Email" }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="w-14 h-14 bg-white/5 backdrop-blur-md border border-cyan-500/30 rounded-full flex items-center justify-center text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center">
            <span className="text-cyan-400 text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="text-cyan-400" size={32} />
          </div>
        </motion.div>
      </section>

      {/* About Section - Deep Dive */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 mb-6"
            >
              <Users className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The story behind the code and the passion that drives innovation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            {/* Story & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My journey in web development began with a simple curiosity about how websites work. 
                  What started as tinkering with HTML quickly evolved into a deep passion for creating 
                  digital experiences that make a real difference.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, I specialize in the MERN stack, combining technical expertise with creative 
                  problem-solving to build applications that are not just functional, but truly impactful.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                    <Terminal className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">My Approach</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. 
                  Every line of code I write is crafted with purpose, performance, and scalability in mind. 
                  I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
                </p>
              </div>
            </motion.div>

            {/* Skills Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Tech Arsenal</h3>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="bg-white/5 rounded-xl p-4 text-center border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <div className="text-2xl mb-2">{tech.icon}</div>
                      <div className="text-sm text-gray-300 font-medium">{tech.name}</div>
                    </motion.div>
                  ))}
                </div>

                <div className="space-y-3">
                  <div className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Backend:</span> Node.js, Express.js, Python, Laravel
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Database:</span> MongoDB, MySQL, PostgreSQL
                  </div>
                  <div className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Tools:</span> Git, Docker, AWS, Vercel
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                {[
                  { icon: Briefcase, text: "View My Portfolio", action: () => scrollToSection("projects") },
                  { icon: Mail, text: "Let's Connect", action: () => scrollToSection("contact") }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.text}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      onClick={item.action}
                      className="w-full flex items-center space-x-4 p-4 bg-white/5 rounded-xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 text-left group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full flex items-center justify-center">
                        <Icon className="text-cyan-400" size={20} />
                      </div>
                      <span className="text-white font-medium flex-1">{item.text}</span>
                      <ArrowRight className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </div>

        
        
        </div>
      </section>
    </div>
  );
}