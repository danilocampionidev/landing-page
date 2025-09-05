"use client";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-6 bg-gray-950 text-center">
      <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Vamos conversar?</h2>
      <p className="text-gray-300 mb-6">Entre em contato e descubra como posso ajudar a transformar sua ideia em realidade.</p>
      <a href="https://wa.me/5519981752199" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 text-white font-semibold rounded-full hover:bg-cyan-600 transition">
        <FaWhatsapp size={20} /> Fale comigo
      </a>
    </section>
  );
}
