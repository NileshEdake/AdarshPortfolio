import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <section id='home'>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-[#0D0D0D] text-[#E6E6E6] flex flex-col items-center justify-center p-8"
      >
        <div className="max-w-2xl text-center">
          
          {/* Header */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Adarsh Pujari
          </motion.h1>
          
          {/* Tagline */}
          <motion.h2 
            variants={itemVariants}
            className="text-lg md:text-xl text-[#9A9A9A] mb-8"
          >
            "Python developer | Machine Learning Explorer | Problem Solver"
          </motion.h2>
          
          {/* Brief Intro */}
          <motion.p 
            variants={itemVariants}
            className="text-base md:text-lg mb-12 text-[#E6E6E6]"
          >
            My journey includes leading teams, building intelligent systems, and competing in national-level tech events.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a 
              href="#projects"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-[#00ADB5] hover:bg-[#019CA5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              View Projects
            </motion.a>
            <motion.a 
              href="#contact"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="border-2 border-[#00ADB5] hover:border-[#F8B400] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
