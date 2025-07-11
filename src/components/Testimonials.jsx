import React from 'react';
import { motion } from 'framer-motion';

// Mock data, in a real app this would come from a database via the admin dashboard
const testimonialsData = [
  {
    id: 1,
    title: 'Website Toko Baju Online',
    description: 'Toko online dengan desain modern, fitur lengkap, dan sangat mudah digunakan. Penjualan meningkat drastis setelah launching!',
    price: 'Rp500.000',
    status: 'Selesai',
    author: 'Wanzofc',
    image: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Landing Page Event Musik',
    description: 'Landing page interaktif dengan animasi GSAP yang memukau. Informasi event tersampaikan dengan sangat baik dan menarik.',
    price: 'Rp100.000',
    status: 'Selesai',
    author: 'Wanzofc',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  },
  {
    id: 3,
    title: 'Company Profile Startup Tech',
    description: 'Website company profile yang clean dan profesional. Mencerminkan visi dan misi perusahaan dengan sempurna.',
    price: 'Rp250.000',
    status: 'DP',
    author: 'Wanzofc',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
  },
];

const TestimonialCard = ({ testimonial }) => {
  const handleBuyClick = () => {
    const message = `halo wanzofc tech! 🚀\n\nsaya tertarik dengan project *${testimonial.title}*.\n\nbisa jelaskan lebih lanjut? terima kasih! 😊`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6288801074059?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden group shadow-lg"
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative">
        <img 
          alt={testimonial.title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
         src={testimonial.image} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white lowercase">{testimonial.title}</h3>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full ${testimonial.status === 'Selesai' ? 'bg-green-500' : 'bg-yellow-500'} text-white lowercase`}>
            {testimonial.status}
          </span>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-4 h-20 overflow-hidden lowercase">{testimonial.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold text-white">{testimonial.price}</div>
          <div className="text-gray-400 text-sm">by {testimonial.author}</div>
        </div>
        <motion.button
          onClick={handleBuyClick}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 lowercase"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <i className="fab fa-whatsapp mr-2"></i>
          pesan mirip ini
        </motion.button>
      </div>
    </motion.div>
  );
};


const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState([]);

  React.useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials'));
    setTestimonials((storedTestimonials && storedTestimonials.length > 0) ? storedTestimonials : testimonialsData);
  }, []);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-black dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 lowercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            portofolio
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {" "}karya kami
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-cyan-300 max-w-3xl mx-auto lowercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            lihat beberapa proyek luar biasa yang telah kami selesaikan untuk klien kami.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;