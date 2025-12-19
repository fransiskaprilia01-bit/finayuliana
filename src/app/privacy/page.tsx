'use client';

import Link from 'next/link';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-4">
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
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-green-600 font-medium">Privasi</Link>
              <Link href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Syarat & Ketentuan</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Kebijakan Privasi</h1>
            <p className="text-lg text-gray-600">FINA YULIANA - Toko Kelontong Terpercaya</p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
          </div>

          {/* Privacy Policy Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-green-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di FINA YULIANA. Kami sangat peduli tentang privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda ketika Anda 
                menggunakan layanan toko kelontong kami.
              </p>
            </section>

            {/* Data Collection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-green-600 mr-3" />
                Pengumpulan Data
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Informasi yang Kami Kumpulkan:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Nama lengkap dan informasi kontak (nomor telepon, alamat email)</li>
                    <li>Alamat pengiriman dan tagihan</li>
                    <li>Informasi pembelian dan riwayat transaksi</li>
                    <li>Informasi preferensi produk</li>
                    <li>Data demografis (usia, jenis kelamin, jika diberikan)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Cara Kami Mengumpulkan Data:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Ketika Anda mendaftar sebagai pelanggan</li>
                    <li>Saat Anda melakukan pembelian di toko kami</li>
                    <li>Melalui komunikasi telepon atau email</li>
                    <li>Dari formulir pendaftaran atau survei</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Data Usage */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-green-600 mr-3" />
                Penggunaan Data
              </h2>
              <p className="text-gray-600 mb-4">Kami menggunakan informasi pribadi Anda untuk:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Menyediakan layanan pelanggan yang lebih baik</li>
                <li>Mengirimkan informasi tentang produk dan promosi</li>
                <li>Meningkatkan kualitas produk dan layanan kami</li>
                <li>Mengelola program loyalitas pelanggan</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Keamanan Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami melindungi data pribadi Anda dengan menggunakan langkah-langkah keamanan yang sesuai. 
                Informasi Anda disimpan dengan aman dan hanya dapat diakses oleh karyawan yang berwenang. 
                Kami menggunakan enkripsi dan teknologi keamanan lainnya untuk melindungi data Anda dari akses yang tidak sah.
              </p>
            </section>

            {/* Data Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berbagi Data</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, 
                kecuali jika diperlukan oleh hukum atau untuk melindungi hak-hak kami. Data Anda hanya akan dibagikan dengan:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Penyedia layanan pembayaran yang terpercaya</li>
                <li>Layanan pengiriman yang bekerja sama dengan kami</li>
                <li>Otoritas hukum jika diminta secara sah</li>
              </ul>
            </section>

            {/* Customer Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hak Pelanggan</h2>
              <p className="text-gray-600 leading-relaxed">
                Sebagai pelanggan, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Mengakses data pribadi yang kami simpan tentang Anda</li>
                <li>Memperbarui atau mengoreksi data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
                <li>Menolak pemasaran langsung dari kami</li>
                <li>Meminta salinan data pribadi Anda</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau bagaimana kami menangani data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">FINA YULIANA</p>
                <p className="text-gray-600">Kampung Karang Umpu, Desa/Kelurahan Karang Umpu</p>
                <p className="text-gray-600">Kec. Blambangan Umpu, Kab. Way Kanan, Provinsi Lampung</p>
                <p className="text-gray-600">Telepon: 085285704297</p>
                <p className="text-gray-600">Email: fina.yuliana@email.com</p>
              </div>
            </section>

            {/* Policy Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Kebijakan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui 
                pemberitahuan di toko kami atau melalui komunikasi langsung dengan pelanggan. Penggunaan layanan kami 
                setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
              </p>
            </section>
          </div>

          {/* Back to Home Button */}
          <div className="text-center mt-12">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 shadow-lg"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-2">FINA YULIANA</h3>
            <p className="text-gray-400">Toko Kelontong Terpercaya di Way Kanan</p>
          </div>
          <div className="flex justify-center space-x-6 mb-6">
            <Link href="/" className="hover:text-green-400 transition-colors">Beranda</Link>
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