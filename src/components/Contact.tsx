import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Coffee, MessageCircle, Heart, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-orange-50 dark:from-pink-900/20 dark:via-gray-900 dark:to-orange-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-pink-600 dark:text-pink-400" />
            <span className="text-sm font-medium text-pink-600 dark:text-pink-400">Get In Touch</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gray-900 dark:text-white">Let's </span>
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's <span className="font-semibold text-pink-600 dark:text-pink-400">innovate</span>, 
            <span className="font-semibold text-purple-600 dark:text-purple-400"> experiment</span> and create something 
            <span className="font-semibold text-blue-600 dark:text-blue-400"> amazing</span> together. Welcome to my world 
            <span className="text-2xl">🚀</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-red-500" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Let's start a conversation
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you're here for <span className="font-semibold text-blue-600 dark:text-blue-400">insights</span> or just exploring, I hope my work adds value to your journey. 
                I'm always open to discussing <span className="font-semibold text-purple-600 dark:text-purple-400">new projects</span>, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">contact@satyanchal.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Available for remote work</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  className="p-3 bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-3 bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a
                  href="mailto:contact@satyanchal.com"
                  className="p-3 bg-white dark:bg-dark-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Email"
                >
                  <Coffee className="w-5 h-5 text-amber-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-dark-200 rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-200"
                  placeholder="Let's work together!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-100 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
