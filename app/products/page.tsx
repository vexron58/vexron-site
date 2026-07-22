"use client";

import { useState } from "react";

export default function ProductsPage() {
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
    setLoading(true);
    window.location.href = "https://buy.stripe.com/eVqaEX6Us1TL3hv5SY0kE00";
  };

  return (
    <main className="min-h-screen pt-32 px-8 text-gray-200 bg-black">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-[0_0_10px_#FFD700]">
        Moje Produkty
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-neutral-900 p-6 rounded-xl shadow-lg max-w-3xl">
        
        {/* 📘 Okładka eBooka */}
        <img
          src="/okladkagrafika.jpg"
          alt="Okładka eBooka Grafika i Filmy AI"
          className="w-48 h-auto rounded-lg shadow-[0_0_20px_#FFD700]"
        />

        {/* 📖 Opis produktu */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">
            Grafika i Filmy AI — poradnik 2026
          </h2>

          <p className="text-gray-300 mb-4">
            Kompletny przewodnik po tworzeniu grafik i filmów AI — 180 stron
            praktycznej wiedzy.
          </p>

          {/* 💰 Cena */}
          <p className="text-2xl font-bold text-yellow-500 mb-4">39,99 zł</p>

          <button
            onClick={handleBuy}
            disabled={loading}
            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
          >
            {loading ? "Ładowanie..." : "Kup teraz →"}
          </button>
        </div>
      </div>
    </main>
  );
}