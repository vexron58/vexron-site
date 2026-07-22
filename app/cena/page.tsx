export default function CennikPage() {
  return (
    <main className="min-h-screen pt-32 px-8 text-gray-200 bg-black">
      
      <h1 className="text-4xl font-bold mb-12 drop-shadow-[0_0_10px_#FFD700] text-center">
        Cennik Usług
      </h1>

      <section className="max-w-5xl mx-auto space-y-16">

        {/* 1. STRONY INTERNETOWE */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Tworzenie stron internetowych
          </h2>

          <table className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Strona firmowa (3–5 podstron)</td>
                <td className="p-4 text-yellow-400 font-semibold">1500–2500 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Portfolio / strona osobista</td>
                <td className="p-4 text-yellow-400 font-semibold">1200–2000 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Landing page sprzedażowy</td>
                <td className="p-4 text-yellow-400 font-semibold">800–1500 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Sklep mini (do 10 produktów)</td>
                <td className="p-4 text-yellow-400 font-semibold">2000–3500 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Integracje (formularze, mapy, rezerwacje, płatności)</td>
                <td className="p-4 text-yellow-400 font-semibold">100–300 zł / integracja</td>
              </tr>
              <tr>
                <td className="p-4">Optymalizacja SEO + szybkość</td>
                <td className="p-4 text-yellow-400 font-semibold">200–500 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. REKLAMY */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Reklamy dla firm
          </h2>

          <table className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Reklama graficzna (1 projekt)</td>
                <td className="p-4 text-yellow-400 font-semibold">80–150 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Reklama wideo (5–15 s)</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Kampania Facebook/Instagram Ads (mies.)</td>
                <td className="p-4 text-yellow-400 font-semibold">300–700 zł + budżet</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Kampania Google Ads (mies.)</td>
                <td className="p-4 text-yellow-400 font-semibold">300–700 zł + budżet</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Materiały promocyjne pod social media</td>
                <td className="p-4 text-yellow-400 font-semibold">100–300 zł / zestaw</td>
              </tr>
              <tr>
                <td className="p-4">Analiza wyników + optymalizacja</td>
                <td className="p-4 text-yellow-400 font-semibold">150–400 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. SOCIAL MEDIA */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Prowadzenie social mediów
          </h2>

          <table className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Facebook/Instagram (8–12 postów/mies.)</td>
                <td className="p-4 text-yellow-400 font-semibold">400–800 zł / miesiąc</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">TikTok (4–8 filmów/mies.)</td>
                <td className="p-4 text-yellow-400 font-semibold">400–900 zł / miesiąc</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Grafika i posty</td>
                <td className="p-4 text-yellow-400 font-semibold">30–80 zł / sztuka</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Rolki / filmy</td>
                <td className="p-4 text-yellow-400 font-semibold">80–200 zł / sztuka</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Strategia publikacji</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr>
                <td className="p-4">Budowanie wizerunku marki</td>
                <td className="p-4 text-yellow-400 font-semibold">200–400 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 4. LOGO */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Projektowanie logo
          </h2>

          <table className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Logo minimalistyczne</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Logo premium / rozbudowane</td>
                <td className="p-4 text-yellow-400 font-semibold">300–600 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Księga znaku mini</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr>
                <td className="p-4">Animowane logo (intro)</td>
                <td className="p-4 text-yellow-400 font-semibold">150–350 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 5. GOOGLE BUSINESS */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-400 mb-6 text-center">
            Wizytówka Google (Google Business Profile)
          </h2>

          <table className="w-full text-left bg-neutral-900 rounded-xl overflow-hidden">
            <tbody>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Założenie i konfiguracja</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Dodawanie zdjęć, opisów, usług</td>
                <td className="p-4 text-yellow-400 font-semibold">50–150 zł</td>
              </tr>
              <tr className="border-b border-neutral-700">
                <td className="p-4">Optymalizacja lokalna</td>
                <td className="p-4 text-yellow-400 font-semibold">150–300 zł</td>
              </tr>
              <tr>
                <td className="p-4">SEO lokalne</td>
                <td className="p-4 text-yellow-400 font-semibold">200–500 zł</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* PAKIETY */}
        <div className="space-y-12">

          <h2 className="text-3xl font-semibold text-yellow-400 text-center">
            Pakiety — VEXRON
          </h2>

          {/* START */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Pakiet START — 1500 zł</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Strona 1–3 sekcje</li>
              <li>• 1 reklama graficzna</li>
              <li>• Formularz kontaktowy</li>
              <li>• Podstawowe SEO</li>
              <li>• Konfiguracja domeny i hostingu</li>
            </ul>
          </div>

          {/* BIZNES */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Pakiet BIZNES — 2500–3500 zł</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Strona firmowa (3–5 podstron)</li>
              <li>• 3 reklamy graficzne + 1 wideo</li>
              <li>• Integracje (mapy, formularze, rezerwacje)</li>
              <li>• SEO + optymalizacja szybkości</li>
              <li>• Podstawowa strategia social media</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div className="bg-neutral-900 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Pakiet PREMIUM — 4500–6000 zł</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Strona premium z animacjami</li>
              <li>• Sklep mini lub rozbudowana strona</li>
              <li>• 5 grafik + 2 reklamy wideo</li>
              <li>• Pełne SEO + optymalizacja treści</li>
              <li>• Strategia social media + 6 postów</li>
              <li>• Logo premium + animowane intro</li>
              <li>• Wizytówka Google + lokalne SEO</li>
            </ul>
                   </div>
        </div>
      </section>
    </main>
  );
}