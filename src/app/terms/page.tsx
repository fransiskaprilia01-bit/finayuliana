'use client';

import Link from 'next/link';
import { FileText, ShoppingCart, AlertCircle, CheckCircle } from 'lucide-react';

export default function Terms() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privasi</Link>
              <Link href="/terms" className="text-green-600 font-medium">Syarat & Ketentuan</Link>
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Syarat & Ketentuan</h1>
            <p className="text-lg text-gray-600">FINA YULIANA - Toko Kelontong Terpercaya</p>
            <p className="text-sm text-gray-500 mt-2">Terakhir diperbarui: 1 Januari 2024</p>
          </div>

          {/* Terms Content */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-green-600 mr-3" />
                Pendahuluan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Selamat datang di FINA YULIANA. Syarat & Ketentuan ini mengatur penggunaan layanan toko kelontong kami. 
                Dengan menggunakan layanan kami, Anda setuju untuk mematuhi syarat dan ketentuan yang tercantum di bawah ini.
              </p>
            </section>

            {/* Store Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <ShoppingCart className="w-6 h-6 text-green-600 mr-3" />
                Layanan Toko
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Produk yang Tersedia:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Sembako (beras, minyak goreng, gula, dll)</li>
                    <li>Makanan dan minuman kemasan</li>
                    <li>Perlengkapan rumah tangga</li>
                    <li>Produk kebersihan</li>
                    <li>Rokok dan tembakau (sesuai peraturan)</li>
                    <li>Pulsa dan token listrik</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Jam Operasional:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Senin - Jumat: 07:00 - 21:00 WIB</li>
                    <li>Sabtu: 07:00 - 22:00 WIB</li>
                    <li>Minggu: 08:00 - 20:00 WIB</li>
                    <li>Jam operasional dapat berubah sesuai kebijakan toko</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Syarat Pembayaran</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Metode Pembayaran:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Tunai (Cash)</li>
                    <li>Transfer Bank</li>
                    <li>E-Wallet (jika tersedia)</li>
                    <li>Pembayaran tempo (untuk pelanggan terdaftar)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Ketentuan Pembayaran:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Pembayaran harus dilunaskan saat transaksi (kecuali tempo)</li>
                    <li>Harga yang tertera adalah harga akhir</li>
                    <li>Kami berhak menolak uang palsu atau rusak</li>
                    <li>Pembayaran tempo maksimal 30 hari</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Product Quality */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                Kualitas Produk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Kami berkomitmen untuk menyediakan produk berkualitas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Produk yang dijual memiliki tanggal kadaluarsa yang valid</li>
                <li>Kemasan produk dalam kondisi baik</li>
                <li>Produk disimpan dengan cara yang benar dan higienis</li>
                <li>Kami menerima pengembalian produk yang rusak atau tidak sesuai</li>
                <li>Pengembalian dapat dilakukan maksimal 3 hari setelah pembelian</li>
              </ul>
            </section>

            {/* Customer Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kewajiban Pelanggan</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sebagai pelanggan, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memperlakukan produk dan staf dengan sopan</li>
                <li>Mematuhi peraturan yang berlaku di toko</li>
                <li>Tidak melakukan pencurian atau kerusakan</li>
                <li>Melaporkan masalah atau keluhan dengan cara yang sopan</li>
                <li>Membayar semua pembelian sesuai harga yang ditentukan</li>
              </ul>
            </section>

            {/* Delivery Service */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Layanan Pengiriman</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Area Pengiriman:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Kecamatan Blambangan Umpu dan sekitarnya</li>
                    <li>Maksimal radius 10 km dari toko</li>
                    <li>Pengiriman luar area dikenakan biaya tambahan</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Syarat Pengiriman:</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Minimum pembelian Rp 50.000 untuk pengiriman gratis</li>
                    <li>Biaya pengiriman Rp 5.000 - Rp 15.000 tergantung jarak</li>
                    <li>Pengiriman dilakukan pada jam operasional</li>
                    <li>Pelanggan harus menerima barang dalam kondisi baik</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-gray-600 leading-relaxed">
                FINA YULIANA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mt-4">
                <li>Kerugian yang disebabkan oleh penggunaan produk yang tidak sesuai</li>
                <li>Alergi atau reaksi terhadap produk tertentu</li>
                <li>Keterlambatan pengiriman karena faktor di luar kendali kami</li>
                <li>Kerusakan produk setelah meninggalkan toko</li>
                <li>Kehilangan barang setelah transaksi selesai</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hak Kekayaan Intelektual</h2>
              <p className="text-gray-600 leading-relaxed">
                Nama "FINA YULIANA", logo, dan semua konten terkait adalah hak milik eksklusif dari pemilik toko. 
                Penggunaan tanpa izin dilarang keras dan akan ditindak sesuai hukum yang berlaku.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Perubahan Syarat & Ketentuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Kami berhak mengubah syarat dan ketentuan ini kapan saja. Perubahan akan diberitahukan melalui 
                pemberitahuan di toko atau komunikasi langsung dengan pelanggan. Penggunaan layanan kami setelah 
                perubahan berarti Anda menerima syarat dan ketentuan yang diperbarui.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hubungi Kami</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-medium text-gray-800">FINA YULIANA</p>
                <p className="text-gray-600">Kampung Karang Umpu, Desa/Kelurahan Karang Umpu</p>
                <p className="text-gray-600">Kec. Blambangan Umpu, Kab. Way Kanan, Provinsi Lampung</p>
                <p className="text-gray-600">Telepon: 085285704297</p>
                <p className="text-gray-600">Email: fina.yuliana@email.com</p>
              </div>
            </section>

            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Persetujuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan FINA YULIANA, Anda menyatakan bahwa telah membaca, memahami, 
                dan setuju untuk terikat oleh Syarat & Ketentuan ini. Jika Anda tidak setuju dengan 
                bagian mana pun dari syarat ini, harap jangan menggunakan layanan kami.
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