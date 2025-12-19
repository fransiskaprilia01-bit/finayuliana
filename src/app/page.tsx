'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShoppingBasket, Clock, Users, Award } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/logo.png"
                  alt="FINA YULIANA Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">FINA YULIANA</h1>
                <p className="text-sm text-green-600 font-medium">Toko Kelontong Terpercaya</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privasi</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Syarat & Ketentuan</Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
                <div className="w-6 h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <Link href="/" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Privasi</Link>
              <Link href="/terms" className="block py-2 text-gray-700 hover:text-green-600 transition-colors">Syarat & Ketentuan</Link>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center mx-auto mb-8 overflow-hidden">
              <img
                src="/logo.png"
                alt="FINA YULIANA Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">FINA YULIANA</h2>
            <p className="text-xl text-green-600 font-semibold mb-6">Toko Kelontong Terpercaya di Way Kanan</p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Menyediakan berbagai kebutuhan pokok dan barang kelontong berkualitas dengan harga terjangkau. 
              Pelayanan terbaik untuk memenuhi kebutuhan sehari-hari Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Buka Setiap Hari</h3>
              <p className="text-gray-600">Melayani kebutuhan Anda setiap hari dengan jam operasional fleksibel</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pelayanan Ramah</h3>
              <p className="text-gray-600">Kami selalu siap melayani dengan senyuman dan sikap yang ramah</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Kualitas Terjamin</h3>
              <p className="text-gray-600">Produk berkualitas dengan harga yang bersaing dan terjangkau</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Hubungi Kami</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Alamat</p>
                      <p className="text-gray-600">Kampung Karang Umpu, Desa/Kelurahan Karang Umpu, Kec. Blambangan Umpu, Kab. Way Kanan, Provinsi Lampung</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Telepon</p>
                      <p className="text-gray-600">085285704297</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">fina.yuliana@email.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-lg shadow-lg text-white">
                <h3 className="text-xl font-semibold mb-6">Jam Operasional</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>07:00 - 21:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>07:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>08:00 - 20:00</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm">Kami siap melayani kebutuhan pokok dan barang kelontong Anda dengan sepenuh hati</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">FINA YULIANA</h3>
            <p className="text-gray-400">Toko Kelontong Terpercaya di Way Kanan</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/privacy" className="hover:text-green-400 transition-colors">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-green-400 transition-colors">Syarat & Ketentuan</Link>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">&copy; 2024 FINA YULIANA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}