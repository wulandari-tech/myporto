import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Paket Cuan Lite (Rp30.000)',
    'Paket UMKM (Rp40.000)', 
    'Paket Landing Pro (Rp100.000)',
    'Paket Startup Boost (Rp250.000)',
    'Paket Sultan (Rp500.000)',
    'Paket Ultimate Wanz (Rp1.000.000)',
    'Konsultasi Custom'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Oops! 😅",
        description: "Mohon lengkapi semua field yang wajib diisi ya!",
        variant: "destructive"
      });
      return;
    }

    const message = `Halo WanzoFC Tech! 🚀

Saya ingin konsultasi untuk pembuatan website:

👤 *Nama:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🎯 *Layanan:* ${formData.service}

💬 *Pesan:*
${formData.message || 'Saya tertarik dengan layanan Anda dan ingin diskusi lebih lanjut.'}

Terima kasih! 😊`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6288801074059?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Berhasil! 🎉",
      description: "Anda akan diarahkan ke WhatsApp untuk melanjutkan konsultasi.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      value: '+62 888-0107-4059',
      link: 'https://wa.me/6288801074059',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'wanzofc.tech@gmail.com',
      link: 'mailto:wanzofc.tech@gmail.com',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: 'fas fa-clock',
      title: 'Jam Operasional',
      value: '24/7 Support',
      link: null,
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Lokasi',
      value: 'Indonesia',
      link: null,
      color: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
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
            Hubungi 
            <span className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent">
              {" "}Kami
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Siap memulai proyek website impian Anda? Tim kami siap membantu 24/7!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              <i className="fas fa-paper-plane text-cyan-500 mr-3"></i>
              Konsultasi Gratis
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Masukkan nama Anda"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Pilih Layanan *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    required
                  >
                    <option value="">Pilih paket...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                  Pesan (Opsional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Ceritakan kebutuhan website Anda..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg text-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp mr-3"></i>
                Kirim via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              <i className="fas fa-phone text-cyan-500 mr-3"></i>
              Info Kontak
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${info.icon} text-white text-xl`}></i>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 mt-8">
              <motion.a
                href="https://wa.me/6288801074059?text=Halo%20WanzoFC%20Tech!%20Saya%20ingin%20konsultasi%20gratis%20untuk%20pembuatan%20website."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i>
                Chat WhatsApp Sekarang
              </motion.a>

              <motion.a
                href="mailto:wanzofc.tech@gmail.com"
                className="flex items-center justify-center w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <i className="fas fa-envelope mr-3 text-xl"></i>
                Kirim Email
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            <i className="fas fa-question-circle text-cyan-500 mr-3"></i>
            Pertanyaan Sering Diajukan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Berapa lama proses pembuatan website?",
                a: "Tergantung paket: Paket Lite 1-2 hari, UMKM 3-5 hari, hingga Ultimate 2-4 minggu."
              },
              {
                q: "Apakah ada garansi?",
                a: "Ya! Semua paket termasuk garansi bug fix dan support gratis sesuai ketentuan."
              },
              {
                q: "Bisa request custom design?",
                a: "Tentu! Kami menerima custom design sesuai kebutuhan dan budget Anda."
              },
              {
                q: "Pembayaran bagaimana?",
                a: "Fleksibel! Bisa DP 50% atau full payment. Transfer bank atau e-wallet."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">{faq.q}</h4>
                <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;