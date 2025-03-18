"use client";
import Link from "next/link";
import { useAnalysis } from "../context/AnalysisContext";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  Instagram,
  ChevronRight,
  UserX,
  UserCheck,
} from "lucide-react";

export default function ResultPage() {
  const { notFollowback, mutualFollowers, totalData } = useAnalysis();

  return (
    <div className="flex flex-col min-h-screen p-4 md:p-8 container mx-auto">
      {/* Card Informasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Followers */}
        <div className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30">
          <h3 className="text-lg font-semibold text-blue-400">Total Followers</h3>
          <p className="text-2xl font-bold text-white">{totalData.totalFollowers}</p>
        </div>

        {/* Total Following */}
        <div className="p-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30">
          <h3 className="text-lg font-semibold text-purple-400">Total Following</h3>
          <p className="text-2xl font-bold text-white">{totalData.totalFollowing}</p>
        </div>

        {/* Tidak Follow Back */}
        <div className="p-6 bg-gradient-to-br from-yellow-500/20 to-red-500/20 rounded-2xl border border-yellow-500/30">
          <h3 className="text-lg font-semibold text-yellow-400">Tidak Follow Back</h3>
          <p className="text-2xl font-bold text-white">{totalData.notFollowback}</p>
        </div>

        {/* Saling Follow */}
        <div className="p-6 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl border border-green-500/30">
          <h3 className="text-lg font-semibold text-green-400">Saling Follow</h3>
          <p className="text-2xl font-bold text-white">{totalData.mutualFollowers}</p>
        </div>
      </div>

      {/* Not Followback & Mutual Followers Section */}
      <AnimatePresence>
        {notFollowback.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Not Followback Section */}
            <div className="w-full md:w-1/2">
              <div className="p-4 md:p-8 bg-gray-900/70 rounded-2xl border border-gray-800">
                <motion.div className="mb-6 flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-md bg-gradient-to-br from-yellow-500/20 to-red-500/20 border border-yellow-500/30">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <AlertTriangle className="text-yellow-500" size={28} />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                      Impostor Ditemukan!
                    </h3>
                    <p className="text-sm text-gray-400">
                      Daftar akun yang tidak followback Anda
                    </p>
                  </div>
                  <motion.span className="ml-auto px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 bg-gradient-to-r from-yellow-500/20 to-red-500/20 text-yellow-300 border border-yellow-500/30">
                    <UserX size={14} />
                    {notFollowback.length}
                  </motion.span>
                </motion.div>

                <motion.div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900/70 border border-gray-800">
                  <div className="px-5 py-4 bg-gray-800 flex items-center justify-between">
                    <div className="flex items-center">
                      <Instagram size={18} className="mr-2 text-blue-500" />
                      <span className="font-medium">Instagram Username</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                      Klik untuk lihat profil
                    </span>
                  </div>

                  <div className="overflow-y-auto max-h-96 p-3">
                    {notFollowback.map((user, index) => (
                      <motion.a
                        key={index}
                        href={`https://instagram.com/${user}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          backgroundColor: "rgba(59, 130, 246, 0.1)",
                        }}
                        className="flex items-center p-4 mb-2 rounded-xl transition-all duration-200 hover:bg-blue-900/20 border border-gray-800 hover:border-blue-800/30"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl mr-4 shadow-sm bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-gray-700">
                          <Instagram size={20} className="text-blue-500" />
                        </div>
                        <span className="flex-grow font-medium">{user}</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-400"
                        >
                          <span>Lihat</span>
                          <ChevronRight size={14} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    {notFollowback.length} akun tidak follow-back Anda
                  </div>
                </div>
              </div>
            </div>

            {/* Mutual Followers Section */}
            <div className="w-full md:w-1/2">
              <div className="p-4 md:p-8 bg-gray-900/70 rounded-2xl border border-gray-800">
                <motion.div className="mb-6 flex items-center">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-md bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30">
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                      }}
                    >
                      <UserCheck className="text-green-500" size={28} />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
                      Saling Follow!
                    </h3>
                    <p className="text-sm text-gray-400">
                      Daftar akun yang saling terhubung dengan Anda
                    </p>
                  </div>
                  <motion.span className="ml-auto px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-300 border border-green-500/30">
                    <UserCheck size={14} />
                    {mutualFollowers.length}
                  </motion.span>
                </motion.div>

                <motion.div className="rounded-2xl overflow-hidden shadow-lg bg-gray-900/70 border border-gray-800">
                  <div className="px-5 py-4 bg-gray-800 flex items-center justify-between">
                    <div className="flex items-center">
                      <Instagram size={18} className="mr-2 text-green-500" />
                      <span className="font-medium">Instagram Username</span>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-700 text-gray-300">
                      Klik untuk lihat profil
                    </span>
                  </div>

                  <div className="overflow-y-auto max-h-96 p-3">
                    {mutualFollowers.map((user, index) => (
                      <motion.a
                        key={index}
                        href={`https://instagram.com/${user}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                        whileHover={{
                          scale: 1.02,
                          x: 5,
                          backgroundColor: "rgba(74, 222, 128, 0.1)",
                        }}
                        className="flex items-center p-4 mb-2 rounded-xl transition-all duration-200 hover:bg-green-900/20 border border-gray-800 hover:border-green-800/30"
                      >
                        <div className="w-12 h-12 flex items-center justify-center rounded-xl mr-4 shadow-sm bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-gray-700">
                          <Instagram size={20} className="text-green-500" />
                        </div>
                        <span className="flex-grow font-medium">{user}</span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-gray-800 text-gray-400"
                        >
                          <span>Lihat</span>
                          <ChevronRight size={14} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="text-xs text-gray-500">
                    {mutualFollowers.length} akun saling follow dengan Anda
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Kembali */}
      <div className="flex justify-center mt-8 md:mt-12">
        <Link
          href="/"
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Kembali ke Analisis
        </Link>
      </div>
    </div>
  );
}