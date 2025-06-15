import React,{useState} from "react";
import { motion } from "framer-motion";
import AWS from "../images/AWS.png";
import CloudComputing from "../images/CloudComputing.png";
import DataAnalysis from "../images/DataAnalysis.png";
import DataVsualization from "../images/DataVisualization.png";
import featureEngg from "../images/featureEngg.png";
import GenerativeAi from "../images/GenerativeAi.jpg";
import PowerBI from "../images/PowerBI.png";

import AwsCerificate from '../images/certificate/AWSCertificate.jpg'
import CloudComputionCertificate from '../images/certificate/CloudComputionCertificate.jpg'
import DataAnalysisCertificate from '../images/certificate/DataAnalysisCertificate.jpg'
import DataVisualizationCertificate from '../images/certificate/DataVisualizationCertification.jpg'
import FeatureEnggCertificate from '../images/certificate/FeatureEnggCertificate.jpg'
import GenerativeAICertificate from '../images/certificate/GenerativeAICertificate.jpg'
import PowerBICertificate from '../images/certificate/PowerBICertificate.jpg'


const Education = () => {
   const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Education data
  const educationData = [
    {
      id: 1,
      degree: "B.Tech in AI and Data Science",
      institution: "Sharad Institute of Technology",
      details: "CGPA: 7.06 | 2021–2025",
      icon: "🎓",
    },
    {
      id: 2,
      degree: "12th Grade",
      institution: "KLE's GIB, Nippani",
      details: "Percentage: 83.12% | 2021",
      icon: "📚",
    },
    {
      id: 3,
      degree: "10th Grade",
      institution: "Arihant Marathi Medium School",
      details: "Percentage: 95.04% | 2019",
      icon: "🏫",
    },
  ];

  // Certifications data
const certifications = [
    {
      name: "Amazon Web Services",
      image: AWS,
      certificate: AwsCerificate,
    },
    {
      name: "Cloud Computing",
      image: CloudComputing,
      certificate: CloudComputionCertificate,
    },
    {
      name: "Data Analysis",
      image: DataAnalysis,
      certificate: DataAnalysisCertificate,
    },
    {
      name: "Data Visualization",
      image: DataVsualization,
      certificate: DataVisualizationCertificate,
    },
    {
      name: "Feature Engineering",
      image: featureEngg,
      certificate: FeatureEnggCertificate,
    },
    {
      name: "Generative AI",
      image: GenerativeAi,
      certificate: GenerativeAICertificate,
    },
    {
      name: "Power BI",
      image: PowerBI,
      certificate: PowerBICertificate,
    },
  ];
const openCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id ='education'>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#0D0D0D] text-[#E6E6E6] py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-20">
                  <motion.h2 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                  >
                    Education  <span className="text-[#F8B400]">& certificate</span>
        
                  </motion.h2>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100px' }}
                    transition={{ duration: 0.8 }}
                    className="h-1 bg-[#00ADB5] mx-auto"
                  ></motion.div>
                </div>

        {/* Education Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-8 text-[#E6E6E6] border-b border-[#00ADB5] pb-2">
            Academic Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 h-full w-0.5 bg-[#00ADB5] transform -translate-x-1/2"></div>

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                custom={index}
                className="relative pl-16 pb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 top-1 w-4 h-4 rounded-full bg-[#F8B400] transform -translate-x-1/2"></div>

                {/* Education card */}
                <div className="bg-[#1C1C1C] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 text-[#00ADB5]">{edu.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-[#E6E6E6]">
                        {edu.degree}
                      </h3>
                      <p className="text-[#9A9A9A]">{edu.institution}</p>
                      <p className="text-[#E6E6E6] mt-2">{edu.details}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <h2 className="text-2xl font-semibold mb-8 text-[#E6E6E6] border-b border-[#00ADB5] pb-2">
    Certifications
  </h2>

  {/* Top row - 4 certificates */}
  <div className="flex justify-center mb-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {certifications.slice(0, 4).map((cert, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          custom={index}
          whileHover={{ scale: 1.05 }}
          className="bg-[#1C1C1C] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer"
          onClick={() => openCertificate(cert)}
        >
          <div className="w-28 h-28 mb-4 bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#4A4A4A]">
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/certificates/default-certificate.png";
              }}
            />
          </div>
          <p className="text-[#E6E6E6] text-sm text-center font-medium">
            {cert.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom row - 3 certificates (centered) */}
  <div className="flex justify-center">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {certifications.slice(4, 7).map((cert, index) => (
        <motion.div
          key={index + 4}
          variants={itemVariants}
          custom={index + 4}
          whileHover={{ scale: 1.05 }}
          className="bg-[#1C1C1C] p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center cursor-pointer"
          onClick={() => openCertificate(cert)}
        >
          <div className="w-28 h-28 mb-4 bg-[#2A2A2A] rounded-lg overflow-hidden border border-[#00ADB5]">
            <img
              src={cert.image}
              alt={cert.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/certificates/default-certificate.png";
              }}
            />
          </div>
          <p className="text-[#E6E6E6] text-sm text-center font-medium">
            {cert.name}
          </p>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Certificate Modal */}
  {isModalOpen && selectedCertificate && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="relative bg-[#1C1C1C] p-4 rounded-lg max-w-3xl w-full mx-4">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
        >
          X
        </button>
        <img
          src={selectedCertificate.certificate}
          alt={selectedCertificate.name}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        <p className="text-center text-[#E6E6E6] mt-4 font-semibold">
          {selectedCertificate.name}
        </p>
      </div>
    </div>
  )}
</motion.div>


      </div>
    </motion.div>
    </section>
  );
};

export default Education;
