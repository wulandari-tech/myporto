import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const products = [
    {
      name: 'free portfolio template',
      price: 'gratis',
      description: 'template portofolio dasar untuk memulai karir anda. responsif dan mudah dikustomisasi.',
      tags: ['html', 'css', 'js'],
      file: '/files/free-portfolio.zip',
      color: 'from-green-400 to-emerald-500',
      icon: 'fa-gift',
    },
    {
      name: 'kode toko online premium',
      price: 'rp 50.000',
      description: 'source code lengkap toko online dengan react & tailwindcss. siap pakai!',
      tags: ['react', 'tailwind', 'shop'],
      file: '/files/premium-shop.zip',
      color: 'from-purple-400 to-pink-500',
      icon: 'fa-shopping-cart',
    },
    {
      name: 'script vps auto-install',
      price: 'rp 75.000',
      description: 'script bash untuk instalasi otomatis server vps (lemp stack). hemat waktu setup.',
      tags: ['vps', 'bash', 'server'],
      file: '/files/vps-script.zip',
      color: 'from-blue-400 to-cyan-500',
      icon: 'fa-server',
    },
    {
      name: 'panel pterodactyl modifikasi',
      price: 'rp 150.000',
      description: 'panel pterodactyl dengan tema custom dan fitur tambahan untuk hosting game.',
      tags: ['pterodactyl', 'panel', 'game'],
      file: '/files/ptero-panel.zip',
      color: 'from-orange-400 to-red-500',
      icon: 'fa-gamepad',
    },
];

const ProductCard = ({ product, onBuy }) => {
    return (
        <motion.div
            className={`relative p-8 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-md border border-white/20`}
            whileHover={{ y: -10 }}
        >
            <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${product.color} rounded-t-2xl`}></div>
            <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`fas ${product.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-cyan-300 mb-4 h-16">{product.description}</p>
                <div className="text-3xl font-bold text-white mb-2">{product.price}</div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {product.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white">{tag}</span>
                ))}
            </div>
            <motion.button
                onClick={() => onBuy(product)}
                className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 bg-gradient-to-r ${product.color}`}
                whileHover={{ scale: 1.02, filter: 'brightness(1.2)' }}
                whileTap={{ scale: 0.98 }}
            >
                <i className={`fas ${product.price === 'gratis' ? 'fa-download' : 'fa-credit-card'} mr-2`}></i>
                {product.price === 'gratis' ? 'download sekarang' : 'beli sekarang'}
            </motion.button>
        </motion.div>
    );
};

const PaymentModal = ({ product, isOpen, setIsOpen, onConfirm }) => {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };

    const handleConfirm = () => {
        if (!file) {
            alert('silakan unggah bukti transfer anda.');
            return;
        }
        onConfirm(file);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="bg-gray-900/80 backdrop-blur-md border-gray-700 text-white lowercase">
                <DialogHeader>
                    <DialogTitle className="text-2xl text-cyan-400">konfirmasi pembayaran</DialogTitle>
                    <DialogDescription>
                        untuk membeli "{product?.name}" seharga {product?.price}
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4 space-y-6">
                    <div>
                        <p className="mb-2">1. lakukan pembayaran ke qris di bawah ini:</p>
                        <img 
                            src="https://files.catbox.moe/k6lyq7.jpeg"
                            alt="qris code" 
                            className="rounded-lg mx-auto w-48 h-48 border-4 border-cyan-500"
                        />
                    </div>
                    <div>
                        <p className="mb-2">2. unggah bukti transfer anda:</p>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
                        />
                        {preview && <img-replace src={preview} alt="preview bukti transfer" className="mt-4 rounded-lg max-h-48 mx-auto" />}
                    </div>
                    <Button onClick={handleConfirm} className="w-full bg-cyan-600 hover:bg-cyan-700">
                        <i className="fas fa-paper-plane mr-2"></i>
                        kirim bukti & dapatkan file
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};


const DigitalProductsPage = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { toast } = useToast();

    const handleBuy = (product) => {
        if (product.price === 'gratis') {
            toast({
                title: 'download dimulai!',
                description: `file ${product.name} akan segera diunduh.`,
            });
            // Simulate download
            const link = document.createElement('a');
            link.href = product.file;
            link.setAttribute('download', product.file.split('/').pop());
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } else {
            setSelectedProduct(product);
            setIsModalOpen(true);
        }
    };

    const handlePaymentConfirm = async (file) => {
        toast({ title: 'mengirim bukti...', description: 'mohon tunggu sebentar.' });
        setIsModalOpen(false);

        const botToken = "7377371355:AAFEtwthhXAepvrDbgLDOZAQeBjHVWDbDsI";
        const adminChatId = "7774371395";
        const caption = `pembelian baru untuk: *${selectedProduct.name}*\n\nharga: *${selectedProduct.price}*`;

        const formData = new FormData();
        formData.append('chat_id', adminChatId);
        formData.append('photo', file);
        formData.append('caption', caption);

        try {
            const response = await fetch(`https://api.telegram.org/bot${botToken}/sendPhoto`, {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (result.ok) {
                toast({
                    title: 'pembayaran terkirim! 🎉',
                    description: 'bukti transfer berhasil dikirim ke admin. file akan dikirim via bot setelah diverifikasi.',
                });
                // Simulate sending file link via bot
                setTimeout(() => {
                     toast({
                        title: 'file terkirim! 🚀',
                        description: `cek bot telegram anda untuk link download file ${selectedProduct.name}.`,
                    });
                }, 3000);
            } else {
                throw new Error(result.description);
            }
        } catch (error) {
            toast({
                title: 'gagal mengirim bukti! 🚨',
                description: 'terjadi kesalahan. silakan hubungi admin via whatsapp.',
                variant: 'destructive',
            });
            console.error(error);
        }
    };


    return (
        <section id="digital-products" className="py-20 pt-32 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-black dark:via-purple-900 dark:to-indigo-900 lowercase">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        produk 
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                          {" "}digital siap pakai
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-cyan-300 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        dapatkan source code, template, dan script berkualitas untuk mempercepat proyek anda.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <ProductCard product={product} onBuy={handleBuy} />
                        </motion.div>
                    ))}
                </div>
            </div>
            {selectedProduct && <PaymentModal product={selectedProduct} isOpen={isModalOpen} setIsOpen={setIsModalOpen} onConfirm={handlePaymentConfirm} />}
        </section>
    );
};

export default DigitalProductsPage;