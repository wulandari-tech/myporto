import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <motion.div 
            className="lowercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Features />
            <Testimonials />

            <div className="text-center py-12 bg-gray-900">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                        to="/portfolio"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 lowercase"
                    >
                        lihat semua portofolio
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HomePage;