import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Add this animation variant
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000); // Hide after 3 seconds
    }
  };

  return (
    <section id="contact" className="min-h-screen py-12 px-4 sm:px-8" style={{ backgroundColor: '#1C1C1C' }}>
      <div className="max-w-4xl mx-auto pt-16">
        
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#E6E6E6]"
        >
          Contact Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="b42ce9f4-9515-4ee5-9a90-5b88a75b2c16" />

              {/* Name */}
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#E6E6E6]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4A4A4A] text-[#E6E6E6]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#E6E6E6]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4A4A4A] text-[#E6E6E6]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#E6E6E6]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  minLength="10"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#4A4A4A] text-[#E6E6E6]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="px-6 py-3 rounded-lg font-medium transition-colors hover:bg-gray-600 bg-[#010101] text-[#E6E6E6]"
                disabled={submitted}
              >
                {submitted ? 'Submitted ✅' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-8 text-[#E6E6E6]">
            <h3 className="text-2xl font-semibold">Get in touch</h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-xl text-gray-400" />
                <a href="mailto:adarshpujari55@gmail.com" className="hover:underline">adarshpujari55@gmail.com</a>
              </div>

              <div className="flex items-center space-x-4">
                <FaLinkedin className="text-xl text-gray-400" />
                <a href="https://linkedin.com/in/adarsh-pujari" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Adarsh Pujari
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <FaGithub className="text-xl text-gray-400" />
                <a href="https://github.com/24adarsh" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  24adarsh
                </a>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-400">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
