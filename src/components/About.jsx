import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { number: '100+', label: 'Website Dibuat', icon: 'fa-globe' },
    { number: '50+', label: 'Klien Puas', icon: 'fa-users' },
    { number: '24/7', label: 'Support', icon: 'fa-headset' },
    { number: '99%', label: 'Uptime', icon: 'fa-chart-line' }
  ];

  const technologies = [
    { name: 'React.js', icon: 'fab fa-react', color: 'text-blue-400' },
    { name: 'GSAP', icon: 'fas fa-magic', color: 'text-green-400' },
    { name: 'Three.js', icon: 'fas fa-cube', color: 'text-purple-400' },
    { name: 'TailwindCSS', icon: 'fas fa-paint-brush', color: 'text-cyan-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', color: 'text-green-500' },
    { name: 'MongoDB', icon: 'fas fa-database', color: 'text-green-600' }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Kenapa Pilih 
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {" "}WanzoFC Tech?
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Didesain profesional dengan teknologi modern seperti GSAP, Three.js, dan animasi Lottie karakter eksklusif Wanz. 
            Kami menghadirkan solusi web yang tidak hanya cantik, tapi juga powerful!
          </motion.p>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas ${stat.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <div className="text-center mb-12">
          <motion.h3
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Teknologi yang Kami Gunakan
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <i className={`${tech.icon} ${tech.color} text-4xl mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://wa.me/6288801074059?text=Halo%20WanzoFC%20Tech!%20Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20teknologi%20yang%20Anda%20gunakan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-whatsapp mr-3 text-xl"></i>
            Diskusi Proyek Anda
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;