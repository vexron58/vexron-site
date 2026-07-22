export default function SuccessPage() {
  return (
    <main className="min-h-screen pt-32 px-8 text-gray-200">
      <h1 className="text-4xl font-bold mb-6 drop-shadow-[0_0_12px_#CBA135]">
        Dziękujemy za zakup!
      </h1>

      <p className="text-gray-400 mb-8">
        Twój plik jest gotowy do pobrania.
      </p>

      <a
        href="/Grafika_i_Filmy_AI_ebook.pdf"
        download
        className="text-[#CBA135] hover:drop-shadow-[0_0_10px_#CBA135] transition-all"
      >
        Pobierz eBook →
      </a>
    </main>
  );
}