import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Layout = () => {
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'dark' : 'light'}`}>
            <ParticleBackground />
            <div className="relative z-10">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;