import React from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'beranda', href: '/' },
    { name: 'harga', href: '/pricing' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'kontak', href: '/contact' }
  ];

  const services = [
    'website landing page',
    'toko online',
    'website company profile',
    'aplikasi web custom',
    'maintenance website',
    'seo optimization'
  ];

  const socialLinks = [
    { 
      name: 'WhatsApp', 
      icon: 'fab fa-whatsapp', 
      href: 'https://wa.me/6288801074059',
      color: 'hover:text-green-400'
    },
    { 
      name: 'Instagram', 
      icon: 'fab fa-instagram', 
      href: 'https://instagram.com/wanz_brayy',
      color: 'hover:text-pink-400'
    },
    { 
      name: 'Facebook', 
      icon: 'fab fa-facebook', 
      href: '#',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Twitter', 
      icon: 'fab fa-twitter', 
      href: '#',
      color: 'hover:text-cyan-400'
    }
  ];

  const handleSocialClick = (link) => {
    if (link.href === '#') {
      toast({
        title: "🚧 fitur ini belum tersedia!",
        description: "tapi jangan khawatir! anda bisa request di prompt berikutnya! 🚀",
      });
    } else {
      window.open(link.href, '_blank');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-purple-900 text-white lowercase">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">w</span>
              </div>
              <span className="font-bold text-2xl">wanzofc tech</span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              jasa pembuatan website profesional dengan harga terjangkau. teknologi modern, 
              desain menarik, dan fitur canggih untuk semua kebutuhan bisnis anda.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold">menu cepat</span>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <i className="fas fa-chevron-right text-cyan-400 mr-2 text-sm group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold">layanan kami</span>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 flex items-center">
                  <i className="fas fa-check text-cyan-400 mr-2 text-sm"></i>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold">hubungi kami</span>
            <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <motion.button
                    key={social.name}
                    onClick={() => handleSocialClick(social)}
                    className={`w-10 h-10 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 hover:bg-white/20`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={`${social.icon} text-lg`}></i>
                  </motion.button>
                ))}
              </div>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-center md:text-left">
              © {currentYear} wanzofc tech. all rights reserved.
            </p>
            
            <div className="flex items-center space-x-6">
              <Link to="/login" className="text-gray-300 hover:text-cyan-400 transition-colors">
                admin login
              </Link>
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-arrow-up text-white"></i>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;