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
  <section
  id="contact"
  className="min-h-screen py-12 px-4 sm:px-8"
  style={{ backgroundColor: '#111111' }} // Matte black background
>
  <div className="max-w-4xl mx-auto pt-16">
    {/* Heading */}
    <div className="text-center mb-20">
  <motion.h2 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="text-4xl md:text-5xl font-bold mb-4 text-[#E6E6E6]" // Make main text light gray
  >
    Contact <span className="text-[#F8B400]">Me</span>
  </motion.h2>
  <motion.div
    initial={{ width: 0 }}
    animate={{ width: '100px' }}
    transition={{ duration: 0.8 }}
    className="h-1 bg-[#F8B400] mx-auto"
  ></motion.div>
</div>


    <div className="flex flex-col md:flex-row gap-8">
      {/* Contact Form */}
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="hidden"
            name="access_key"
            value="b42ce9f4-9515-4ee5-9a90-5b88a75b2c16"
          />

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[#E6E6E6]"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-2 rounded-lg bg-[#121212] text-[#E6E6E6] placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#B8860B] shadow-sm shadow-black"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-[#E6E6E6]"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-lg bg-[#121212] text-[#E6E6E6] placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#B8860B] shadow-sm shadow-black"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-[#E6E6E6]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              minLength="10"
              placeholder="Write your message here..."
              className="w-full px-4 py-2 rounded-lg bg-[#121212] text-[#E6E6E6] placeholder-[#6D6D6D] focus:outline-none focus:ring-2 focus:ring-[#B8860B] shadow-sm shadow-black"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={submitted}
            className="w-full md:w-auto px-6 py-3 rounded-lg font-medium bg-[#121212] text-[#E6E6E6] border border-[#B8860B] transition-colors hover:bg-[#B8860B] hover:text-[#121212]"
          >
            {submitted ? 'Submitted ' : 'Send Message'}
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start space-y-8 text-[#E6E6E6]">
        <h3 className="text-2xl font-semibold">Get in touch</h3>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-xl text-[#6D6D6D] transition-colors hover:text-[#B8860B]" />
            <a
              href="mailto:adarshpujari55@gmail.com"
              className="hover:underline hover:text-[#B8860B]"
            >
              adarshpujari55@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaLinkedin className="text-xl text-[#6D6D6D] transition-colors hover:text-[#B8860B]" />
            <a
              href="https://www.linkedin.com/in/adarsh-pujari-76809424b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#B8860B]"
            >
              Adarsh Pujari
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <FaGithub className="text-xl text-[#6D6D6D] transition-colors hover:text-[#B8860B]" />
            <a
              href="https://github.com/24adarsh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-[#B8860B]"
            >
              24adarsh
            </a>
          </div>
        </div>

        <div className="pt-8">
          <p className="text-sm italic text-[#6D6D6D]">
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
