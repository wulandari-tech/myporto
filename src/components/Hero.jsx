import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 z-0"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div className="text-center lg:text-left">
                 <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight lowercase"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    jasa create website
                    <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    by wanzofc
                    </span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-cyan-300 mb-8 max-w-xl mx-auto lg:mx-0 lowercase"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    kami di <strong>wanzofc tech</strong> percaya semua orang bisa punya website keren tanpa mahal. mulai dari 30 ribuan, siap naik kelas!
                </motion.p>
                
                 <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                >
                    <motion.div
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <Link
                        to="/pricing"
                        className="w-full sm:w-auto inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 lowercase"
                    >
                        <i className="fas fa-rocket mr-2"></i>
                        lihat paket cuan
                    </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto inline-block px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 lowercase"
                    >
                        <i className="fab fa-whatsapp mr-2"></i>
                        konsultasi gratis
                    </Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div 
                className="w-full h-full"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1, ease: 'easeOut' }}
            >
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/802bd8b9-a297-4835-9c90-19965a3f1593/y3A4aO3I5l.json"
                    style={{ height: '100%', width: '100%', minHeight: '400px' }}
                >
                </Player>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;