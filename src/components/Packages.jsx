import React from 'react';
import { motion } from 'framer-motion';

const Packages = () => {
  const packages = [
    {
      name: 'Paket Cuan Lite',
      price: 'Rp30.000',
      description: 'Website basic dengan 1 halaman',
      features: [
        'Landing page responsif',
        'Desain modern & menarik',
        'Form kontak WhatsApp',
        'Optimasi mobile',
        'Loading cepat',
        'SSL Certificate'
      ],
      popular: false,
      color: 'from-blue-400 to-cyan-500',
      icon: 'fa-rocket'
    },
    {
      name: 'Paket UMKM',
      price: 'Rp40.000',
      description: 'Cocok untuk bisnis kecil',
      features: [
        'Multi halaman (3-5 halaman)',
        'Galeri produk/layanan',
        'Integrasi sosial media',
        'Form kontak advanced',
        'Google Maps',
        'SEO basic'
      ],
      popular: false,
      color: 'from-green-400 to-emerald-500',
      icon: 'fa-store'
    },
    {
      name: 'Paket Landing Pro',
      price: 'Rp100.000',
      description: 'Full landing page + form WA',
      features: [
        'Landing page premium',
        'Animasi GSAP canggih',
        'Form booking/order',
        'Testimoni slider',
        'Counter animasi',
        'Chat widget'
      ],
      popular: true,
      color: 'from-purple-400 to-pink-500',
      icon: 'fa-crown'
    },
    {
      name: 'Paket Startup Boost',
      price: 'Rp250.000',
      description: 'Untuk portofolio/toko online mini',
      features: [
        'Website multi-fungsi',
        'Dashboard admin',
        'Sistem login',
        'Upload gambar',
        'Database integration',
        'Payment gateway'
      ],
      popular: false,
      color: 'from-orange-400 to-red-500',
      icon: 'fa-chart-line'
    },
    {
      name: 'Paket Sultan',
      price: 'Rp500.000',
      description: 'Website profesional siap pakai',
      features: [
        'Full-stack application',
        'CMS lengkap',
        'Multi-user system',
        'Advanced animations',
        'API integration',
        'Cloud hosting'
      ],
      popular: false,
      color: 'from-indigo-400 to-purple-600',
      icon: 'fa-gem'
    },
    {
      name: 'Paket Ultimate Wanz',
      price: 'Rp1.000.000',
      description: 'Web custom dengan fitur spesial',
      features: [
        'Custom development',
        'Advanced features',
        'Real-time updates',
        'AI integration',
        'Progressive Web App',
        'Maintenance 6 bulan'
      ],
      popular: false,
      color: 'from-yellow-400 to-orange-500',
      icon: 'fa-star'
    }
  ];

  const handleOrderClick = (packageData) => {
    const message = `Halo WanzoFC Tech! 🚀

Saya tertarik dengan *${packageData.name}* (${packageData.price})

${packageData.description}

Fitur yang saya butuhkan:
${packageData.features.map(feature => `✅ ${feature}`).join('\n')}

Bisa diskusi lebih lanjut? Terima kasih! 😊`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6288801074059?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="packages" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-purple-900 lowercase">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            paket 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}cuan terbaik
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-cyan-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            pilih paket yang sesuai dengan kebutuhan bisnis anda. semua paket sudah termasuk desain profesional dan teknologi modern!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              className={`relative p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 ${
                pkg.popular 
                  ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-400' 
                  : 'bg-white/10 backdrop-blur-md border border-white/20'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    🔥 TERPOPULER
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`fas ${pkg.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-cyan-300 mb-4">{pkg.description}</p>
                
                <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                <p className="text-gray-300 text-sm">sekali bayar</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + (featureIndex * 0.05), duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <i className="fas fa-check text-cyan-400 mr-3"></i>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={() => handleOrderClick(pkg)}
                className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-lg hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp mr-2"></i>
                pesan sekarang
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              <i className="fas fa-gift text-cyan-400 mr-3"></i>
              bonus spesial!
            </h3>
            <p className="text-cyan-300 text-lg mb-6">
              semua paket sudah termasuk: domain gratis 1 tahun, ssl certificate, dan konsultasi gratis selamanya!
            </p>
            <motion.a
              href="https://wa.me/6288801074059?text=halo%20wanzofc%20tech!%20saya%20ingin%20konsultasi%20gratis%20untuk%20memilih%20paket%20yang%20tepat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-full text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fab fa-whatsapp mr-3 text-xl"></i>
              konsultasi gratis
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Packages;