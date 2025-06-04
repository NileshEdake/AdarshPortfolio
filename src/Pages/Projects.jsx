import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Project Data
  const projects = [
    {
      id: 1,
      title: "Auto Guard Traffic Sentinel",
      description: "AI-based traffic management using computer vision and IoT to detect violations and manage traffic flow.",
      tech: ["Python", "TensorFlow", "CNN SSD", "AWS"],
      category: "AI/Computer Vision"
    },
    {
      id: 2,
      title: "OCR Based App",
      description: "Extracts text from images using Optical Character Recognition.",
      tech: ["Python", "Tesseract OCR", "OpenCV"],
      category: "Machine Learning"
    }
  ];

  // Internship Data
  const internships = [
    {
      id: 1,
      role: "Java Intern",
      company: "Ap-Tech Solutions",
      duration: "3 months",
      description: "Worked on Inventory Management System",
      skills: ["Java", "Spring Boot", "MySQL"]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Q-Sective Pvt Ltd",
      duration: "4 weeks",
      description: "Built static/dynamic web pages for clients",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      role: "Java Trainee",
      company: "StormSoft Technologies",
      duration: "4 weeks",
      description: "Hands-on Java project work",
      skills: ["Java", "OOP", "Algorithms"]
    }
  ];

  // Animation Variants
  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id='projects'>
    <div className="min-h-screen bg-[#010101] text-[#E6E6E6] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Projects Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-[#6D6D6D]">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-[#4A4A4A] mx-auto"
          ></motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-28">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative group"
            >
              <div className="h-full bg-[#1C1C1C] rounded-xl overflow-hidden border border-[#4A4A4A] transition-all duration-300 group-hover:border-[#6D6D6D]">
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="text-xs uppercase tracking-wider bg-[#4A4A4A] text-[#E6E6E6] px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-4">
                  <p className="mb-6">{project.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-[#6D6D6D]">TECH STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="bg-[#010101] text-[#E6E6E6] text-xs px-3 py-1 rounded-full border border-[#4A4A4A]"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#4A4A4A]/10 to-[#6D6D6D]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Internship Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="relative z-10">Professional Experience</span>
          </motion.h2>
          <div className="h-1 bg-[#4A4A4A] w-32 mx-auto"></div>
        </div>

        <div className="space-y-10">
          {internships.map((internship) => (
            <motion.div
              key={internship.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative pl-12 before:absolute before:left-6 before:top-0 before:h-full before:w-1 before:bg-[#4A4A4A]"
            >
              <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#1C1C1C] border-4 border-[#4A4A4A] flex items-center justify-center">
                <span className="text-xl">🏢</span>
              </div>
              <div className="bg-[#1C1C1C] p-6 rounded-xl ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold">{internship.role}</h3>
                    <p className="text-[#6D6D6D]">{internship.company}</p>
                  </div>
                  <span className="bg-[#4A4A4A] text-[#E6E6E6] text-sm px-3 py-1 rounded-full whitespace-nowrap">
                    {internship.duration}
                  </span>
                </div>
                <p className="my-4">{internship.description}</p>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2">Skills Gained</h4>
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="bg-[#4A4A4A] text-[#E6E6E6] text-xs px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
};

export default Projects;
