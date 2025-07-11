import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

// Mock data, in a real app this would come from a database
const initialTestimonials = [
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
];

const AdminDashboard = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    title: '',
    description: '',
    price: '',
    status: 'selesai',
    author: 'wanzofc',
    image: ''
  });
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const storedTestimonials = JSON.parse(localStorage.getItem('testimonials'));
    if (storedTestimonials && storedTestimonials.length > 0) {
      setTestimonials(storedTestimonials);
    } else {
      localStorage.setItem('testimonials', JSON.stringify(initialTestimonials));
      setTestimonials(initialTestimonials);
    }
  }, []);

  const handleInputChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (!newTestimonial.title || !newTestimonial.description || !newTestimonial.price) {
      toast({
        title: "gagal menambahkan",
        description: "harap isi semua field yang diperlukan.",
        variant: "destructive"
      });
      return;
    }

    const newEntry = {
      id: Date.now(), // Use timestamp for unique ID
      ...newTestimonial,
      image: newTestimonial.image || `https://source.unsplash.com/random/800x600?tech,website&sig=${Date.now()}`
    };
    const updatedTestimonials = [...testimonials, newEntry];
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    setNewTestimonial({ title: '', description: '', price: '', status: 'selesai', author: 'wanzofc', image: '' });
    toast({
      title: "berhasil!",
      description: "portofolio baru telah ditambahkan.",
    });
  };

  const handleDeleteTestimonial = (id) => {
    const updatedTestimonials = testimonials.filter(t => t.id !== id);
    setTestimonials(updatedTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    toast({
      title: "berhasil!",
      description: "portofolio telah dihapus.",
      variant: "destructive"
    });
  };
  
  const handleLogout = () => {
    logout();
    navigate('/');
    toast({
      title: "logout berhasil!",
      description: "anda telah keluar dari dashboard admin.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 lowercase">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">admin dashboard</h1>
          <Button onClick={handleLogout} variant="destructive">
            <i className="fas fa-sign-out-alt mr-2"></i> logout
          </Button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold mb-4">tambah portofolio baru</h2>
          <form onSubmit={handleAddTestimonial} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" value={newTestimonial.title} onChange={handleInputChange} placeholder="judul proyek" className="bg-gray-700 p-3 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none" required />
            <input type="text" name="price" value={newTestimonial.price} onChange={handleInputChange} placeholder="harga (e.g., rp500.000)" className="bg-gray-700 p-3 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none" required />
            <textarea name="description" value={newTestimonial.description} onChange={handleInputChange} placeholder="deskripsi proyek" className="md:col-span-2 bg-gray-700 p-3 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none" rows="3" required></textarea>
            <input type="text" name="image" value={newTestimonial.image} onChange={handleInputChange} placeholder="url gambar (opsional)" className="bg-gray-700 p-3 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none" />
            <select name="status" value={newTestimonial.status} onChange={handleInputChange} className="bg-gray-700 p-3 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none">
              <option value="selesai">selesai</option>
              <option value="dp">dp</option>
            </select>
            <Button type="submit" className="md:col-span-2 bg-cyan-600 hover:bg-cyan-700">tambah portofolio</Button>
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">daftar portofolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <img src={testimonial.image} alt={testimonial.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{testimonial.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{testimonial.price} - {testimonial.status}</p>
                  <p className="text-sm text-gray-300 h-16 overflow-auto">{testimonial.description}</p>
                  <Button onClick={() => handleDeleteTestimonial(testimonial.id)} variant="destructive" size="sm" className="w-full mt-4">hapus</Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminDashboard;