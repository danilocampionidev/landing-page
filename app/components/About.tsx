"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image src="/images/minha-foto.png" alt="Minha foto" width={300} height={300} className="rounded-2xl shadow-lg border-4 border-cyan-500 object-cover" />
        </div>
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">Quem sou eu</h2>
          <p className="text-gray-300 mb-4">Sou um desenvolvedor apaixonado por tecnologia e soluções criativas. Crio sites, sistemas e automações que transformam ideias em realidade digital.</p>
          <p className="text-gray-300">Meu foco é entregar projetos com alta qualidade, performance e design moderno, sempre atento aos detalhes e necessidades de cada cliente.</p>
        </div>
      </div>
    </section>
  );
}
