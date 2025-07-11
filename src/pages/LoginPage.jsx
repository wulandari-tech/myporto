import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';
import ParticleBackground from '@/components/ParticleBackground';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      login(username, password);
      toast({
        title: "login berhasil! 🎉",
        description: "selamat datang, admin! anda akan diarahkan ke dashboard.",
      });
      navigate('/admin/dashboard');
    } catch (error) {
      toast({
        title: "login gagal! 🚨",
        description: error.message || "username atau password salah. silakan coba lagi.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-4 lowercase">
      <ParticleBackground />
      <motion.div
        className="relative z-10 w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="text-center">
          <motion.div 
            className="w-20 h-20 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          >
            <i className="fas fa-lock text-white text-3xl"></i>
          </motion.div>
          <h1 className="text-3xl font-bold text-white">admin login</h1>
          <p className="text-cyan-300">selamat datang kembali, admin wanzofc!</p>
        </div>
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">username</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-user text-gray-400"></i>
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="wanzofc"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">password</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <i className="fas fa-key text-gray-400"></i>
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="••••••••"
                required
              />
            </div>
          </div>
          <motion.button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            login
          </motion.button>
        </form>
         <div className="text-center">
            <button onClick={() => navigate('/')} className="text-sm text-cyan-300 hover:underline">
                kembali ke beranda
            </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;