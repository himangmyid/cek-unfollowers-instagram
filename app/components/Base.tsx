"use client";

import { AnimationControls, motion } from "framer-motion";
import {
    Shield,
    Globe,
    Clock,
    FileJson,
    Download,
    InfoIcon,
    ChevronRight,
    Sparkles,
    UserX,
    Instagram,
} from "lucide-react";

interface BaseProps {
    file: File | null;
    fileName: string;
    isProcessing: boolean;
    processingStep: number;
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDragLeave: (e: React.DragEvent<HTMLDivElement>) => void;
    handleDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    processZip: () => void;
    setCurrentPage: (page: "Base" | "Panduan") => void;
    fileInputRef: React.RefObject<HTMLInputElement | null>;
    controls: AnimationControls;
    setFile: (file: File | null) => void;
    setFileName: (fileName: string) => void;
}

export default function Base({
    file,
    fileName,
    isProcessing,
    processingStep,
    handleFileChange,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    processZip,
    setCurrentPage,
    fileInputRef,
    controls,
    setFile,
    setFileName,
}: BaseProps) {
    const processingSteps = [
        "Membuka file dulu...",
        "Membaca followers...",
        "Membaca following...",
        "Menganalisis data...",
    ];

    const progressPercentage = isProcessing
        ? ((processingStep + 1) / processingSteps.length) * 100
        : 0;

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const shimmerEffect = {
        hidden: { backgroundPosition: "0% 0%" },
        visible: {
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            transition: {
                repeat: Infinity,
                duration: 3,
                ease: "linear",
            },
        },
    };

    return (
        <motion.div
            key="base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center relative z-10"
        >
            {/* Hero Section */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full text-center mb-12 relative"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-32 h-32 rounded-full blur-3xl bg-gradient-to-r from-blue-300/30 to-purple-300/30"
                />

                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 mb-4"
                >
                    <div className="p-2 rounded-full bg-blue-500/10">
                        <Instagram size={20} className="text-blue-500" />
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                        Analisis Instagram
                    </span>
                </motion.div>

                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
                >
                    <motion.span
                        variants={shimmerEffect}
                        animate="visible"
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-size-200"
                    >
                        Siapa yah yang tidak followback?
                    </motion.span>{" "}
                    <span className="text-gray-400">
                        di Instagram<span className="text-pink-500">.</span>
                    </span>
                </motion.h2>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400"
                >
                    &quot;Cek siapa saja yang tidak nge-follow balik akun Instagram
                    kamu&quot;
                </motion.p>

                <motion.div
                    variants={itemVariants}
                    className="mt-8 flex flex-wrap justify-center gap-3 lg:gap-4"
                >
                    {[
                        { icon: <Shield size={20} />, text: "100% Aman & Privat" },
                        { icon: <Globe size={20} />, text: "Analisis Lokal" },
                        { icon: <Clock size={20} />, text: "Proses Cepat" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5, scale: 1.05 }}
                            whileTap={{ y: 0, scale: 0.95 }}
                            className="flex items-center text-sm lg:text-base px-2 py-1.5 lg:px-5 lg:py-2.5 rounded-full shadow-sm bg-sky/80 border border-gray-100 hover:bg-gray-800"
                        >
                            <span className="mr-2 text-blue-500">{item.icon}</span>
                            <span className="font-medium">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Main Card with Glass Effect */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-full max-w-2xl rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl bg-gray-900/20 border border-gray-100 shadow-gray-300/30"
            >
                <div className="p-8">
                    {/* File Upload Section */}
                    <motion.div
                        className={`relative mb-8 border-2 border-dashed rounded-2xl transition-all duration-300
            ${file
                                ? "border-blue-400 bg-sky-900/100 shadow-lg shadow-blue-300/10"
                                : "border-blue-800 hover:border-blue-700"
                            }`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        animate={controls}
                    >
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".zip"
                            onChange={handleFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            disabled={isProcessing}
                        />

                        <div className="flex flex-col items-center text-center p-8">
                            <motion.div
                                className={`w-24 h-24 flex items-center justify-center rounded-2xl mb-6 shadow-md
                ${file
                                        ? "bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200"
                                        : "bg-gray-100 border border-gray-200"
                                    }`}
                                initial={{ rotate: 0 }}
                                animate={
                                    file ? { rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] } : {}
                                }
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                {file ? (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1, rotate: [0, 360] }}
                                        transition={{ type: "spring", duration: 0.7 }}
                                    >
                                        <FileJson size={40} className="text-blue-500" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                    >
                                        <Download
                                            size={40}
                                            className="text-gray-500"
                                        />
                                    </motion.div>
                                )}
                            </motion.div>

                            <motion.h3
                                className="text-2xl font-bold mb-3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {file ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Sparkles size={18} className="text-yellow-500" />
                                        File Siap Dianalisis
                                        <Sparkles size={18} className="text-yellow-500" />
                                    </span>
                                ) : (
                                    "Upload File Instagram"
                                )}
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-sm mb-4 text-sky-500"
                            >
                                {fileName
                                    ? fileName
                                    : "Drag & drop file ZIP Instagram atau klik untuk memilih"}
                            </motion.p>

                            {!file && (
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xs text-gray-400"
                                >
                                    Format: .zip dari data Instagram yang diunduh
                                </motion.p>
                            )}

                            {file && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setFile(null);
                                        setFileName("");
                                        if (fileInputRef.current) {
                                            fileInputRef.current.value = "";
                                        }
                                    }}
                                    className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-sky-700 hover:bg-gray-200 border border-gray-200"
                                >
                                    Ganti File
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    {/* Tip Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-4 p-5 rounded-2xl mb-8 bg-gray-900/10 border border-blue-200"
                    >
                        <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center shadow-sm bg-blue-100 border border-blue-200">
                            <InfoIcon className="text-blue-500" size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-lg">
                                Tidak tahu cara mendapatkan data?
                            </h4>
                            <p className="text-sm text-gray-200">
                                Lihat panduan lengkap untuk mendapatkan file ZIP data Instagram
                                Anda di halaman
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setCurrentPage("Panduan")}
                                    className="ml-1 font-medium text-sky-400 hover:underline inline-flex items-center"
                                >
                                    Panduan
                                    <ChevronRight size={16} className="ml-1" />
                                </motion.button>
                            </p>
                        </div>
                    </motion.div>

                    {/* Action Button */}
                    <motion.div className="relative">
                        <motion.button
                            whileHover={file && !isProcessing ? { scale: 1.02, y: -2 } : {}}
                            whileTap={file && !isProcessing ? { scale: 0.98 } : {}}
                            onClick={processZip}
                            disabled={!file || isProcessing}
                            className={`w-full py-4 px-6 rounded-xl font-bold text-white flex items-center justify-center relative overflow-hidden transition-all duration-300
                ${file && !isProcessing
                                    ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40"
                                    : "bg-gray-500 bg-opacity-20 cursor-not-allowed"
                                }
              `}
                        >
                            {isProcessing ? (
                                <div className="flex flex-col items-center">
                                    <div className="flex items-center mb-2">
                                        <svg
                                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            ></path>
                                        </svg>
                                        <span>{processingSteps[processingStep]}</span>
                                    </div>
                                    {/* Progress bar */}
                                    <div className="w-full bg-blue-900/30 rounded-full h-1.5 mt-1">
                                        <motion.div
                                            className="bg-blue-300 h-1.5 rounded-full"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${progressPercentage}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <span className="relative z-10 flex items-center">
                                        {file ? (
                                            <>
                                                <UserX size={18} className="mr-2" />
                                                Analisis Sekarang
                                            </>
                                        ) : (
                                            "Pilih File Terlebih Dahulu"
                                        )}
                                    </span>
                                    {file && (
                                        <>
                                            {/* Button highlight effect */}
                                            <motion.span
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5 }}
                                                className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"
                                            />
                                            <motion.span
                                                animate={{
                                                    x: [0, 100, 0],
                                                    opacity: [0, 0.15, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                }}
                                                className="absolute top-0 bottom-0 left-0 w-20 bg-white/10 skew-x-12 z-0"
                                            />
                                        </>
                                    )}
                                </>
                            )}
                        </motion.button>

                        {/* Decorative elements */}
                        {file && !isProcessing && (
                            <>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -right-3 -top-3 w-6 h-6 rounded-full bg-blue-500/30 blur-sm"
                                />
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -left-2 -bottom-2 w-4 h-4 rounded-full bg-purple-500/30 blur-sm"
                                />
                            </>
                        )}
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}