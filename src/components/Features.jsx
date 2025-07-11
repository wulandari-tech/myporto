import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: 'fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Website yang sempurna di semua perangkat - mobile, tablet, dan desktop',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 'fa-rocket',
      title: 'Loading Super Cepat',
      description: 'Optimasi performa tinggi dengan teknologi modern untuk loading kilat',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'fa-magic',
      title: 'Animasi GSAP',
      description: 'Animasi smooth dan interaktif yang membuat website Anda tampil memukau',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 'fa-search',
      title: 'SEO Optimized',
      description: 'Website yang mudah ditemukan di Google dengan optimasi SEO terbaik',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: 'fa-shield-alt',
      title: 'Keamanan Tinggi',
      description: 'SSL Certificate dan security measures untuk melindungi website Anda',
      color: 'from-indigo-400 to-purple-600'
    },
    {
      icon: 'fa-headset',
      title: 'Support 24/7',
      description: 'Tim support yang siap membantu Anda kapan saja melalui WhatsApp',
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const technologies = [
    { name: 'React.js', progress: 95, color: 'bg-blue-500' },
    { name: 'GSAP Animation', progress: 90, color: 'bg-green-500' },
    { name: 'TailwindCSS', progress: 98, color: 'bg-cyan-500' },
    { name: 'Three.js', progress: 85, color: 'bg-purple-500' },
    { name: 'Node.js', progress: 88, color: 'bg-green-600' },
    { name: 'MongoDB', progress: 92, color: 'bg-emerald-600' }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Fitur 
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Unggulan
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Teknologi terdepan dan fitur canggih yang membuat website Anda unggul dari kompetitor
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`fas ${feature.icon} text-white text-2xl`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Technology Skills */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Keahlian Teknologi Kami
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="space-y-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">{tech.name}</span>
                  <span className="text-gray-600 dark:text-gray-300">{tech.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className={`h-full ${tech.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.progress}%` }}
                    transition={{ delay: (index * 0.1) + 0.5, duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Siap Membuat Website Impian Anda?
          </h3>
          
          <motion.a
            href="https://wa.me/6288801074059?text=Halo%20WanzoFC%20Tech!%20Saya%20tertarik%20dengan%20fitur-fitur%20canggih%20yang%20Anda%20tawarkan.%20Bisa%20diskusi%20lebih%20lanjut?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp mr-3 text-xl"></i>
            Mulai Proyek Sekarang
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;