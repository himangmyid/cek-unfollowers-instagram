import { motion } from "framer-motion";
import {
  InfoIcon,
  AlertTriangle,
  Shield,
  ArrowLeft,
  Zap,
  Users,
} from "lucide-react";
import Image from "next/image";

interface PanduanProps {
  setCurrentPage: (page: "Base" | "Panduan") => void;
}

export default function Panduan({ setCurrentPage }: PanduanProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stepIconColors = [
    "from-blue-500 to-purple-500",
    "from-pink-500 to-orange-500",
    "from-green-500 to-teal-500",
  ];

  return (
    <div className="p-4 md:p-12 bg-gray-900">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center text-gray-400">
          Panduan Lengkap
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-300 text-center">
          Ikuti langkah-langkah berikut untuk mendapatkan data Instagram dan
          mengetahui siapa yang tidak followback Anda.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 md:space-y-12 mt-8 b"
        >
          {/* Step 1 */}
          <motion.div variants={cardVariants} className="group border border-gray-700 rounded-2xl">
            
              <div className="p-4 md:p-8">
                <div className="flex flex-col">
                  <div className="flex md:items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-white bg-sky-500 font-bold relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div className="relative flex flex-col items-center">
                          <span className="text-xl md:text-2xl">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                          Minta Data Instagram Anda
                        </span>
                      </h3>
                    </div>
                  </div>
             
                    <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-gray-300">
                      <li className="pb-1 md:pb-2">
                        Buka aplikasi Instagram di ponsel Anda
                      </li>
                      <li className="pb-1 md:pb-2">
                        Buka profil Anda dan ketuk menu hamburger (≡) di kanan atas
                      </li>
                      <li className="pb-1 md:pb-2">
                        Pilih <strong>Pusat Akun</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/1.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li className="pb-1 md:pb-2">
                        Tap <strong>Informasi dan izin Anda</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/2.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li className="pb-1 md:pb-2">
                        Pilih <strong>Unduh informasi Anda</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/3.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li className="pb-1 md:pb-2">
                        Pilih{" "}
                        <strong>Mengunduh atau mentransfer informasi</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/4.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li className="pb-1 md:pb-2">
                        Centang akun Anda Instagram dan pilih berikutnya{" "}
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/4.4.png"
                            alt="Instagram"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li>
                        Pilih <strong>Beberapa informasi Anda Scroll keabawah cari</strong> dan
                        centang <strong>Pengikut dan mengikuti</strong>
                        <div className="mt-2 justify-center items-center gap-2 flex flex-col ">
                          <Image
                            src="/5.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                          <Image
                            src="/6.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>
                      <li>
                        Pilih <strong>Unduh ke perangkat</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/7.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                                                    <Image
                            src="/8.8.png"
                            alt="Json"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>


                      <li>
                        Dan terakhir tap <strong>Buat File</strong>
                      </li>
                      <li>
                        Tunggu beberapa jam sampai{" "}
                        <strong> diterima oleh instagram</strong>, nanti ada tombol{" "}
                        <strong>download</strong>
                        <div className="mt-2 justify-center flex">
                          <Image
                            src="/9.png"
                            alt="Pilih Pusat Akun"
                            width={270}
                            height={150}
                            className="rounded-lg lg:w-96"
                          />
                        </div>
                      </li>

                    </ol>
               
               
               
               
                  





























                  <div className="flex md:ml-20 items-start gap-4 p-4 md:p-6 rounded-xl transform transition-all duration-300 bg-blue-500 border border-blue-100 hover:bg-blue-500/80 hover:border-blue-200">
                    <div className="flex-shrink-0 p-2 md:p-3 rounded-full bg-blue-100">
                      <InfoIcon size={18} className="text-blue-500" />
                    </div>
                    <p className="text-sm md:text-base">
                      Instagram akan memproses permintaan Anda dalam beberapa
                      hari (kalau saya sih sehari 😁). Anda akan mendapatkan
                      notifikasi dan email saat data siap untuk diunduh.
                    </p>
                  </div>
                </div>
              






            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div variants={cardVariants} className="group">
            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-gray-800 shadow-lg hover:shadow-pink-300/20">
              <div
                className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${stepIconColors[1]}`}
              ></div>
              <div className="p-4 md:p-8">
                <div className="flex flex-col">
                  <div className="flex md:items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-white font-bold relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stepIconColors[1]}`}
                        ></div>
                        <div className="relative flex flex-col items-center">
                          <span className="text-xl md:text-2xl">2</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">
                          Unduh Data Anda
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl mb-4 md:mb-6 md:ml-20 transform transition-all duration-300 bg-gray-700 hover:bg-gray-600">
                    <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-gray-300">
                      <li className="pb-1 md:pb-2">
                        Setelah menerima notifikasi, buka kembali menu{" "}
                        <strong>Unduh informasi Anda</strong>
                      </li>
                      <li className="pb-1 md:pb-2">
                        Anda akan melihat file ZIP yang siap diunduh
                      </li>
                      <li className="pb-1 md:pb-2">
                        Klik tombol <strong>Unduh</strong>
                      </li>
                      <li>File akan tersimpan di perangkat Anda</li>
                    </ol>
                  </div>
                </div>
                <div className="flex md:ml-20 items-start gap-4 p-4 md:p-6 rounded-xl transform transition-all duration-300 bg-yellow-500 border border-yellow-100 hover:bg-yellow-500/80 hover:border-yellow-200">
                  <div className="flex-shrink-0 p-2 md:p-3 rounded-full bg-yellow-100">
                    <AlertTriangle size={18} className="text-yellow-500" />
                  </div>
                  <p className="text-red-500 text-sm md:text-base">
                    Pastikan Anda mengunduh file dalam format{" "}
                    <strong>JSON</strong>. Format HTML tidak akan berfungsi
                    dengan aplikasi ini.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div variants={cardVariants} className="group">
            <div className="relative rounded-2xl overflow-hidden transition-all duration-300 bg-gray-800 shadow-lg hover:shadow-green-300/20">
              <div
                className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${stepIconColors[2]}`}
              ></div>
              <div className="p-4 md:p-8">
                <div className="flex flex-col">
                  <div className="flex md:items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center text-white font-bold relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${stepIconColors[2]}`}
                        ></div>
                        <div className="relative flex flex-col items-center">
                          <span className="text-xl md:text-2xl">3</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 flex items-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
                          Upload File ke Impostorgram
                        </span>
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:ml-20 mb-4 md:mb-6 transform transition-all duration-300 bg-gray-700 hover:bg-gray-600">
                    <ol className="list-decimal list-inside space-y-2 md:space-y-3 text-gray-300">
                      <li className="pb-1 md:pb-2">
                        Kembali ke halaman utama Impostorgram
                      </li>
                      <li className="pb-1 md:pb-2">
                        Klik area upload atau drag-and-drop file ZIP Instagram
                        Anda
                      </li>
                      <li className="pb-1 md:pb-2">
                        Klik tombol <strong>Analisis Sekarang</strong>
                      </li>
                      <li>Tunggu proses analisis selesai</li>
                    </ol>
                  </div>
                  <div className="flex items-start gap-4 md:ml-20 p-4 md:p-6 rounded-xl transform transition-all duration-300 bg-green-500 border border-green-100 hover:bg-green-500/80 hover:border-green-200">
                    <div className="flex-shrink-0 p-2 md:p-3 rounded-full bg-green-100">
                      <Shield size={18} className="text-green-500" />
                    </div>
                    <p className="text-gray-100 text-sm md:text-base">
                      Data Anda 100% aman. Semua proses analisis dilakukan di
                      perangkat Anda dan tidak ada data yang dikirim ke server.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={cardVariants}>
            <div className="rounded-2xl overflow-hidden transition-all duration-300 bg-gray-800 border border-gray-700">
              <div className="p-4 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  Pertanyaan Umum
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      question: "Apakah aplikasi ini aman?",
                      answer:
                        "Ya, 100% aman. Semua analisis dilakukan di browser Anda (client-side). Kami tidak menyimpan data Anda di server kami dan tidak ada data yang dikirim keluar.",
                      icon: <Shield size={20} className="text-purple-500" />,
                      gradient: "from-purple-400 to-pink-400",
                    },
                    {
                      question: "Berapa lama proses analisis?",
                      answer:
                        "Proses analisis biasanya hanya membutuhkan waktu beberapa detik, tergantung pada ukuran file dan jumlah following/followers Anda.",
                      icon: <Zap size={20} className="text-blue-500" />,
                      gradient: "from-blue-400 to-indigo-400",
                    },
                    {
                      question: "Apakah saya perlu login Instagram?",
                      answer:
                        "Tidak. Aplikasi ini hanya membutuhkan file data yang Anda unduh dari Instagram, bukan akses langsung ke akun Anda.",
                      icon: <Users size={20} className="text-green-500" />,
                      gradient: "from-green-400 to-teal-400",
                    },
                    {
                      question: "Format file apa yang didukung?",
                      answer:
                        "Hanya format ZIP dari data Instagram dalam format JSON yang didukung. File HTML tidak akan berfungsi dengan aplikasi ini.",
                      icon: <InfoIcon size={20} className="text-orange-500" />,
                      gradient: "from-orange-400 to-red-400",
                    },
                    {
                      question: "Informasi apa yang bisa saya lihat?",
                      answer:
                        "Anda bisa melihat daftar akun yang Anda follow tetapi tidak nge-follow balik Anda (tidak followback).",
                      icon: (
                        <AlertTriangle size={20} className="text-yellow-500" />
                      ),
                      gradient: "from-yellow-400 to-amber-400",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="p-4 md:p-6 rounded-xl border overflow-hidden relative group border-gray-700 bg-gray-700 hover:bg-gray-600"
                    >
                      <div
                        className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${item.gradient}`}
                      ></div>
                      <div className="flex gap-4 mb-3">
                        <div className="p-2 rounded-lg bg-gray-600">
                          {item.icon}
                        </div>
                        <h4 className="font-bold text-lg mt-1 text-gray-300">
                          {item.question}
                        </h4>
                      </div>
                      <p className="text-gray-300 pl-12">{item.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Return to Home Button */}
          <motion.div
            variants={cardVariants}
            className="flex justify-center mt-8 md:mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage("Base")}
              className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold flex items-center space-x-3 shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Analisis</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}