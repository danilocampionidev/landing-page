"use client";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contato"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-6 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center flex flex-col items-center justify-center"
    >
      <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
        Vamos <span className="text-cyan-400">conversar?</span>
      </h2>
      <p className="text-gray-400 max-w-xl mb-10">
        Entre em contato e descubra como posso ajudar a transformar sua ideia em realidade.
      </p>

      <motion.a
        href="https://wa.me/5519981752199"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
          boxShadow: "0 0 12px rgba(37, 211, 102, 0.7)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: [
            "0 0 4px rgba(37, 211, 102, 0.3)",
            "0 0 10px rgba(37, 211, 102, 0.6)",
            "0 0 4px rgba(37, 211, 102, 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white text-2xl cursor-pointer select-none shadow-md"
        aria-label="Falar comigo no WhatsApp"
      >
        <FaWhatsapp />
      </motion.a>
    </motion.section>
  );
}
