import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

export default function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
        setErrorMessage('Failed to connect to server. Please try again.');
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
              onClick={onClose}
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
    </AnimatePresence>
  );
}
