import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

const Skills = () => {
  // Technical Skills Data
  const technicalSkills = {
    languages: ['Python', 'SQL', 'HTML', 'CSS'],
    libraries: ['Pandas', 'NumPy'],
    frameworks: ['TensorFlow', 'Tesseract', 'OpenCV', 'Django', 'Flask'],
    tools: ['Git', 'MySQL', 'VS Code']
  };

  // Achievements Data
  const achievements = [
    {
      title: "National Project Competition",
      description: "Represented with an innovative project",
      icon: "🏆"
    },
    {
      title: "Cricket Team Captain",
      description: "Led team to championship victory",
      icon: "🏏"
    },
    {
      title: "College Competitions",
      description: "Won multiple college-level competitions",
      icon: "🎯"
    }
  ];

  // Leadership Skills
  const leadershipSkills = [
    {
      title: "Leadership & Teamwork",
      description: "Captained cricket team, led technical projects",
      visual: "👥 → 🏆"
    },
    {
      title: "Continuous Learning",
      description: "Constantly updating AI/Data Science knowledge",
      visual: "📚 → 🧠"
    }
  ];

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const categories = Object.entries(technicalSkills);
  const icons = {
    languages: "⌨️",
    libraries: "📚",
    frameworks: "🧱",
    tools: "🛠️",
  };

  return (
    <section id='skills'>
     <div className="min-h-screen bg-[#010101] text-[#E6E6E6] py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        My{' '}
        <span className="text-[#F8B400]">Skills</span> &{' '}
        <span className="text-[#F8B400]">Achievements</span>
      </h1>
      <div className="w-32 h-1 bg-[#00ADB5] mx-auto rounded"></div>
    </motion.div>

    {/* Technical Skills */}
    <section className="mb-20">
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8 flex items-center text-[#F8B400]"
      >
        <span className="mr-3 capitalize">Technical Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(([title, skills], index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-[#121212] rounded-xl p-6 shadow-lg border border-[#00ADB5] hover:border-[#F8B400] transition-colors duration-300"
          >
            <h3 className="text-lg font-semibold text-white mb-4 border-b border-[#333] pb-2 flex items-center capitalize">
              <span className="text-xl mr-2">{icons[title]}</span> {title}
            </h3>
            <ul className="space-y-2">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="bg-[#1E1E1E] text-[#E6E6E6] text-sm py-1.5 px-3 rounded-md"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Achievements */}
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="mb-20"
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8 flex items-center text-[#F8B400]"
      >
        <span className="mr-3 capitalize">Achievements</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{ y: -5 }}
            className="bg-[#121212] p-6 rounded-xl text-center border-t-4 border-[#00ADB5] hover:border-[#F8B400] transition-colors duration-300 cursor-pointer"
          >
            <div className="text-4xl mb-4">{achievement.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-[#E6E6E6]">
              {achievement.title}
            </h3>
            <p className="text-[#AAAAAA]">{achievement.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>

    {/* Leadership & Soft Skills */}
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.h2
        variants={fadeIn}
        className="text-3xl font-bold mb-8 flex items-center text-[#F8B400]"
      >
        <span className="mr-3 capitalize">Leadership & Soft Skills</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {leadershipSkills.map((skill, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            className="bg-[#121212] p-6 rounded-xl border border-[#00ADB5] hover:border-[#F8B400] transition-colors duration-300 cursor-pointer"
          >
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-[#E6E6E6]">
                  {skill.title}
                </h3>
                <p className="text-[#AAAAAA] mb-4">{skill.description}</p>
              </div>
              <div className="text-3xl ml-4">{skill.visual}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
</div>

    </section>
  );
};

export default Skills;
