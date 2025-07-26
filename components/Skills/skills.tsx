'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, Server, Database, Globe, Terminal, Code, Zap, Star } from 'lucide-react';

const skills = [
  {
    name: "ReactJS",
    category: "Frontend",
    level: 95,
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-50",
    description: "Component-based UI library"
  },
  {
    name: "NextJS",
    category: "Frontend",
    level: 90,
    icon: "▲",
    color: "from-gray-800 to-black",
    bgColor: "bg-gray-50",
    description: "React framework for production"
  },
  {
    name: "TypeScript",
    category: "Frontend",
    level: 85,
    icon: "TS",
    color: "from-blue-600 to-blue-800",
    bgColor: "bg-blue-50",
    description: "Typed JavaScript superset"
  },
  {
    name: "JavaScript",
    category: "Frontend",
    level: 92,
    icon: "JS",
    color: "from-yellow-400 to-yellow-600",
    bgColor: "bg-yellow-50",
    description: "Dynamic programming language"
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: 95,
    icon: "🌐",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    description: "Semantic markup language"
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: 90,
    icon: "🎨",
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-50",
    description: "Utility-first CSS framework"
  },
  {
    name: "CSS3",
    category: "Frontend",
    level: 88,
    icon: "🎯",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    description: "Styling and animations"
  },
  {
    name: "NodeJS",
    category: "Backend",
    level: 88,
    icon: "🟢",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    description: "JavaScript runtime environment"
  },
  {
    name: "ExpressJS",
    category: "Backend",
    level: 85,
    icon: "🚀",
    color: "from-gray-600 to-gray-800",
    bgColor: "bg-gray-50",
    description: "Fast web framework for Node.js"
  },
  {
    name: "Laravel",
    category: "Backend",
    level: 80,
    icon: "🔶",
    color: "from-red-500 to-orange-600",
    bgColor: "bg-red-50",
    description: "PHP web application framework"
  },
  {
    name: "Python",
    category: "Backend",
    level: 70,
    icon: "🐍",
    color: "from-blue-400 to-yellow-400",
    bgColor: "bg-blue-50",
    description: "Versatile programming language"
  },
  {
    name: "Supabase",
    category: "Backend",
    level: 78,
    icon: "🧬",
    color: "from-emerald-400 to-green-600",
    bgColor: "bg-emerald-50",
    description: "Open source Firebase alternative"
  },
  {
    name: "MongoDB",
    category: "Database",
    level: 80,
    icon: "🍃",
    color: "from-green-600 to-green-800",
    bgColor: "bg-green-50",
    description: "NoSQL document database"
  },
  {
    name: "MySQL",
    category: "Database",
    level: 75,
    icon: "🐬",
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    description: "Relational database management"
  },
  {
    name: "Docker",
    category: "DevOps",
    level: 75,
    icon: "🐳",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    description: "Containerization platform"
  },
  {
    name: "Vercel",
    category: "DevOps",
    level: 85,
    icon: "▲",
    color: "from-black to-gray-800",
    bgColor: "bg-gray-50",
    description: "Frontend deployment platform"
  },
  {
    name: "GitHub Actions",
    category: "DevOps",
    level: 80,
    icon: "⚙️",
    color: "from-gray-700 to-gray-900",
    bgColor: "bg-gray-100",
    description: "CI/CD automation tool"
  },
  
  {
    name: "Git/GitHub",
    category: "Tools",
    level: 90,
    icon: "🐙",
    color: "from-gray-800 to-black",
    bgColor: "bg-gray-50",
    description: "Version control system"
  },
  {
    name: "VS Code",
    category: "Tools",
    level: 95,
    icon: "📝",
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-50",
    description: "Code editor by Microsoft"
  },
  {
    name: "GitHub Copilot",
    category: "Tools",
    level: 80,
    icon: "🤖",
    color: "from-violet-500 to-indigo-600",
    bgColor: "bg-violet-50",
    description: "AI-powered code completion"
  },
  {
    name: "Cursor AI",
    category: "Tools",
    level: 75,
    icon: "🧠",
    color: "from-fuchsia-500 to-purple-700",
    bgColor: "bg-fuchsia-50",
    description: "AI-first code editor"
  }
];


const categories = [
  { name: "All", icon: Code, color: "from-cyan-500 to-blue-500" },
  { name: "Frontend", icon: Laptop, color: "from-cyan-500 to-blue-500" },
  { name: "Backend", icon: Server,color: "from-cyan-500 to-blue-500" },
  { name: "Database", icon: Database, color: "from-cyan-500 to-blue-500" },
  { name: "DevOps", icon: Globe, color: "from-cyan-500 to-blue-500"},
  { name: "Tools", icon: Terminal,color: "from-cyan-500 to-blue-500"},
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevel = (level) => {
    if (level >= 90) return { stars: 5, label: "Expert" };
    if (level >= 80) return { stars: 4, label: "Advanced" };
    if (level >= 70) return { stars: 3, label: "Intermediate" };
    if (level >= 60) return { stars: 2, label: "Beginner" };
    return { stars: 1, label: "Learning" };
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-400 mb-6 shadow-2xl"
          >
            <Zap className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.name)}
                className={`
                  relative group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg
                  ${activeCategory === category.name
                    ? 'text-white shadow-2xl transform scale-105'
                    : 'text-gray-300 bg-white/5 backdrop-blur-md border border-cyan-500/20 hover:text-white hover:shadow-xl hover:border-cyan-400/40'
                  }
                `}
              >
                <div className={`
                  absolute inset-0 rounded-2xl transition-all duration-300
                  ${activeCategory === category.name
                    ? `bg-gradient-to-r ${category.color} opacity-100`
                    : `bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100`
                  }
                `} />
                <div className="relative flex items-center space-x-3">
                  <Icon size={20} />
                  <span className="text-lg">{category.name}</span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => {
              const skillLevel = getSkillLevel(skill.level);
              return (
                <motion.div
                  key={`${skill.name}-${activeCategory}`}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  onHoverStart={() => setHoveredSkill(skill.name)}
                  onHoverEnd={() => setHoveredSkill(null)}
                  className="group relative cursor-pointer"
                >
                  <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-lg hover:shadow-2xl overflow-hidden h-48">
                    {/* Background Gradient */}
                    <div className={`
                      absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300
                      bg-gradient-to-br ${skill.color}
                    `} />
                    
                    {/* Floating Decoration */}
                    <motion.div
                      animate={{ 
                        rotate: hoveredSkill === skill.name ? 360 : 0,
                        scale: hoveredSkill === skill.name ? 1.1 : 1
                      }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 opacity-50 group-hover:opacity-100 flex items-center justify-center border border-cyan-500/30"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
                    </motion.div>

                    {/* Skill Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="text-4xl mb-4 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400/10 to-blue-400/10 shadow-md border border-cyan-500/20"
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Skill Description */}
                    <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    {/* Skill Level Stars */}
                    {/* <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                          >
                            <Star
                              size={14}
                              className={`
                                ${i < skillLevel.stars 
                                  ? 'text-cyan-400 fill-cyan-400' 
                                  : 'text-gray-600'
                                }
                              `}
                            />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-400 bg-white/5 backdrop-blur-sm px-2 py-1 rounded-full border border-cyan-500/20">
                        {skillLevel.label}
                      </span>
                    </div> */}

                    {/* Hover Glow Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: hoveredSkill === skill.name ? 0.1 : 0
                      }}
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${skill.color} pointer-events-none`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stats Footer */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center space-x-12 px-12 py-6 rounded-3xl bg-white/5 backdrop-blur-md shadow-xl border border-cyan-500/20">
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1"
              >
                {skills.length}+
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Technologies</div>
            </div>
            <div className="w-px h-12 bg-cyan-500/20" />
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1"
              >
                {new Set(skills.map(skill => skill.category)).size}
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Categories</div>
            </div>
            <div className="w-px h-12 bg-cyan-500/20" />
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1"
              >
                3+
              </motion.div>
              <div className="text-sm text-gray-400 font-medium">Years Experience</div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </div>
  );
}