import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Menu, X } from "lucide-react";
import { Righteous } from "next/font/google";

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
});

interface HeaderProps {
  currentPage: "Base" | "Panduan";
  setCurrentPage: (page: "Base" | "Panduan") => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  const handlePageChange = (page: "Base" | "Panduan") => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ${
        scrolled ? "py-2 shadow-lg" : "py-4"
      } bg-gray-900/90 backdrop-blur-lg border-b border-gray-200`}
    >
      <div className=" mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold flex items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => handlePageChange("Base")}
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mr-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
            >
              <Zap size={24} />
            </motion.div>
              
            <span className={righteous.className}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
               HIMANG
              </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage("Base")}
              className={`px-3 py-2 rounded-lg font-medium transition-all ${
                currentPage === "Base"
                  ? "bg-gray-700 shadow-lg shadow-blue-500/20 text-white"
                  : "hover:bg-opacity-20 hover:bg-sky-500 text-neutral-100"
              }`}
            >
              Base
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage("Panduan")}
              className={`px-3 py-2 rounded-lg font-medium transition-all ${
                currentPage === "Panduan"
                  ? "bg-gray-700 shadow-lg shadow-blue-500/20 text-white"
                  : "hover:bg-opacity-20 hover:bg-sky-500 text-neutral-100"
              }`}
            >
              Panduan
            </motion.button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-gray-100"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={isMenuOpen ? "open" : "closed"}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: isMenuOpen ? 90 : 0, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-gray-800/30"
          >
            <div className="container mx-auto px-4 py-3 space-y-2">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => handlePageChange("Base")}
                className={`w-full text-left px-3 py-3 rounded-lg font-medium ${
                  currentPage === "Base"
                    ? "bg-blue-500 text-white"
                    : "text-neutral-100 hover:bg-sky-500"
                }`}
              >
                Base
              </motion.button>

              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => handlePageChange("Panduan")}
                className={`w-full text-left px-3 py-3 rounded-lg font-medium ${
                  currentPage === "Panduan"
                    ? "bg-blue-500 text-white"
                    : "text-neutral-100 hover:bg-sky-500"
                }`}
              >
                Panduan
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}