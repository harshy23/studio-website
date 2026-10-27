import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

import { LogoSecondary } from '../logos';

// ============================================================================
// BACKGROUND PANORAMA
// ============================================================================
import longBgImage from '../logos/conatct_us_logo/LONG BG.PNG';
import socialIcons from '../logos/social media icons.png';

function BackgroundSlideshow() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
      {/* 
        Seamless loop: The panoramic image is placed twice side by side.
        Each image has min-w-full and h-full object-cover so initially it covers the full window width & height.
        Moving horizontally with ease 'linear' and repeat Infinity creates a seamless loop.
      */}
      <motion.div
        className="flex h-full w-max"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 45,
            ease: 'linear',
          },
        }}
      >
        <img
          src={longBgImage}
          alt="Panoramic Background Part 1"
          className="h-full min-w-full object-cover object-left flex-shrink-0"
          draggable={false}
          aria-hidden="true"
        />
        <img
          src={longBgImage}
          alt="Panoramic Background Part 2"
          className="h-full min-w-full object-cover object-left flex-shrink-0"
          draggable={false}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

export default function SlideshowSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await axios.post('https://studio-biskoot-backend.onrender.com/api/contact/', formData);
      if (response.status === 201 || response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      }
    } catch (err) {
      setStatus('error');
      const data = err.response?.data;
      if (data) {
        const firstErrKey = Object.keys(data)[0];
        const errorMsg = data[firstErrKey];
        setErrorMessage(Array.isArray(errorMsg) ? `${firstErrKey}: ${errorMsg[0]}` : errorMsg);
      } else {
        setErrorMessage('Failed to connect to the server. Please check your internet connection and try again.');
      }
    }
  };

  return (
    <section id="contact" className="relative min-h-screen w-full font-fredoka overflow-hidden  text-white selection:bg-white">
      {/* Background Slideshow */}
      <BackgroundSlideshow />

      {/* Subtle Overlay to ensure text readability against varying backgrounds */}
      {/* <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none" aria-hidden="true" /> */}

      {/* Foreground Content */}
      <div className="relative z-10 w-full h-full min-h-screen flex flex-col justify-between p-8 md:p-12 lg:px-24 lg:py-16">

        {/* TOP / RIGHT NAVIGATION & CONTACT INFO */}
        <div className="flex flex-col md:flex-row justify-end items-end md:items-start gap-12 md:gap-32 w-full pt-8">

          {/* Navigation */}
          <nav className="flex flex-col items-end md:items-start gap-4 text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium">
            {/* <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#work" className="hover:opacity-80 transition-opacity">Work</a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About Us</a>
            <a href="#testimonials" className="hover:opacity-80 transition-opacity">Client Testimonials</a> */}
          </nav>

          {/* Contact Info */}
          <div className="flex flex-col items-end md:items-start gap-6 text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            <a href="mailto:hello@studiobiskoot.com" className="font-medium hover:opacity-80 transition-opacity">
              hello@studiobiskoot.com
            </a>
            <p className="max-w-[250px] leading-snug font-medium text-right md:text-left">
              506, Lodha Supremus,11th<br />
              Road, MIDC, Andheri East,<br />
              Mumbai,Maharashtra,<br />
              400093,India<br /><br />


              10 Aldrin Dr Mount <br />
              Waverley 3149 Victoria, <br />
              Australia<br />
            </p>

            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="mt-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-lg text-sm"
            >
              Send Message
            </button> */}
          </div>
        </div>


      </div>

      {/* BOTTOM AREA */}
      <div className="flex flex-col md:flex-row justify-between ml-0 items-center md:items-end w-full mt-auto relative h-full">

        {/* Bottom Left - Character Artwork & Copyright */}


        {/* Bottom Center - Brand Logo */}

        {/* Bottom Right - Socials & Legal */}
        <div className="flex w-full h-full justify-end items-end gap-6 pb-10 ml-60 mr-10">
          {/* Social Icons with Links */}
          <div className="relative flex items-end pb-1 w-48 drop-shadow-md">
            <img src={socialIcons} alt="Social Media" className="w-full h-auto object-contain select-none pointer-events-none" />
            <div className="absolute inset-0 flex">
              <a
                href="https://www.linkedin.com/company/studio-biskoot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/3 h-full hover:opacity-80 transition-opacity"
                title="LinkedIn"
                aria-label="Studio Biskoot LinkedIn"
              />
              <a
                href="https://www.instagram.com/studiobiskoot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/3 h-full hover:opacity-80 transition-opacity"
                title="Instagram"
                aria-label="Studio Biskoot Instagram"
              />
              <a
                href="mailto:hello@studiobiskoot.com"
                className="w-1/3 h-full hover:opacity-80 transition-opacity"
                title="Email Us"
                aria-label="Studio Biskoot Email"
              />
            </div>
          </div>

          {/* Legal Links */}

        </div>
      </div>

      {/* CONTACT FORM MODAL */}
      {/* <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-white text-black p-8 rounded-3xl w-full max-w-lg relative shadow-2xl font-fredoka"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-bold mb-6">Let's Talk</h2>

              {status === 'success' ? (
                <div className="py-8 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Thank you for reaching out! We'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="py-2.5 px-6 bg-black hover:bg-gray-800 text-white text-sm font-semibold rounded-xl transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-black focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-black focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="hello@example.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-black focus:outline-none focus:border-black transition-colors text-sm"
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="bg-gray-50 border border-gray-200 py-3 px-4 rounded-xl text-black focus:outline-none focus:border-black transition-colors text-sm resize-none"
                      placeholder="Tell us about your project..."
                      required
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2.5 text-red-600 bg-red-50 p-3 rounded-xl text-sm border border-red-100">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3.5 bg-black hover:bg-gray-800 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors disabled:opacity-50 mt-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
}
