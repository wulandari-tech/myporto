import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Header = ({ darkMode, setDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'beranda', href: '/' },
    { name: 'harga', href: '/pricing' },
    { name: 'portfolio', href: '/portfolio' },
    { name: 'produk digital', href: '/digital-products' },
    { name: 'kontak', href: '/contact' }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        darkMode 
          ? 'bg-gray-900/90 backdrop-blur-md border-gray-700' 
          : 'bg-white/90 backdrop-blur-md border-gray-200'
      } border-b`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center space-x-3">
            <motion.div
                className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 15 }}
            >
              <span className="text-white font-bold text-lg">w</span>
            </motion.div>
            <span className={`font-bold text-xl lowercase ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              wanzofc tech
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
                <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                    `font-medium transition-colors hover:text-cyan-500 lowercase ${
                        isActive ? 'text-cyan-500' : (darkMode ? 'text-gray-300' : 'text-gray-700')
                    }`
                    }
                >
                    {({ isActive }) => (
                         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                            {item.name}
                            {isActive && (
                                <motion.div
                                className="h-0.5 bg-cyan-500 rounded-full"
                                layoutId="underline"
                                />
                            )}
                        </motion.div>
                    )}
                </NavLink>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors z-[1001] ${
                darkMode 
                  ? 'text-white' 
                  : 'text-gray-700'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md lg:hidden z-[1000] flex flex-col items-center justify-center`}
              initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <nav className="flex flex-col items-center space-y-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                  <NavLink
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-3xl font-bold transition-colors hover:text-cyan-400 lowercase ${
                        isActive ? 'text-cyan-400' : 'text-white'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;