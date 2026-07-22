export default function OfertaPage() {
  return (
    <main className="min-h-screen pt-32 px-8 text-gray-200 bg-black">
      <h1 className="text-4xl font-bold mb-8 drop-shadow-[0_0_10px_#FFD700] text-center">
        Oferta
      </h1>

      <section className="max-w-3xl mx-auto space-y-10">

        <p className="text-gray-300 leading-relaxed text-center">
          VEXRON oferuje kompleksowe rozwiązania dla firm, które potrzebują nowoczesnej obecności w sieci.
          Tworzę strony internetowe, prowadzę social media, projektuję reklamy oraz buduję widoczność firm w Google.
          <br /><br />
          <span className="text-yellow-400 font-semibold">
            Każdy projekt dopasowuję do stylu, charakteru i potrzeb klienta — od minimalistycznych realizacji
            po dynamiczne, nowoczesne kampanie.
          </span>
        </p>

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">1. Tworzenie stron internetowych</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>strony firmowe, portfolio, landing page</li>
            <li>projekt dopasowany do branży i stylu klienta</li>
            <li>responsywność na telefon, tablet i komputer</li>
            <li>integracje: formularze, mapy, rezerwacje, płatności</li>
            <li>optymalizacja SEO i szybkości ładowania</li>
            <li>pełna konfiguracja domeny i hostingu</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">2. Reklamy dla firm</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>reklamy graficzne i wideo</li>
            <li>kampanie Facebook Ads / Instagram Ads</li>
            <li>Google Ads (wyszukiwarka + display)</li>
            <li>materiały promocyjne pod social media</li>
            <li>analiza wyników i optymalizacja kampanii</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">3. Prowadzenie social mediów</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>prowadzenie profili firmowych (Facebook, Instagram, TikTok)</li>
            <li>tworzenie grafik, postów, rolek i filmów</li>
            <li>planowanie publikacji i strategii</li>
            <li>spójny wizerunek marki dopasowany do klienta</li>
            <li>zwiększanie zasięgów i zaangażowania</li>
          </ul>
        </div>

<div>
  <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">4. Projektowanie logo</h2>
  <ul className="list-disc pl-6 text-gray-300 space-y-1">
    <li>tworzenie nowoczesnych, minimalistycznych logotypów</li>
    <li>projekt dopasowany do charakteru marki i branży</li>
    <li>wersje do druku, stron internetowych i social mediów</li>
    <li>animowane logo pod filmy i reklamy</li>
  </ul>
</div>

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3 text-center">5. Wizytówka Google</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-1">
            <li>zakładanie i konfiguracja wizytówki</li>
            <li>dodawanie zdjęć, opisów, usług, godzin otwarcia</li>
            <li>optymalizacja pod lokalne wyszukiwania</li>
            <li>pozycjonowanie lokalne (SEO lokalne)</li>
            <li>zwiększanie liczby opinii i widoczności</li>
          </ul>
        </div>
{/* CTA – Skontaktuj się */}
<div className="text-center mt-16">
  <h2 className="text-3xl font-bold text-yellow-400 mb-4 drop-shadow-[0_0_10px_#FFD700]">
    Skontaktuj się
  </h2>

  <p className="text-gray-300 max-w-xl mx-auto mb-6 leading-relaxed">
    Masz pytania? Chcesz wycenić projekt lub rozpocząć współpracę?
    Napisz do mnie — przygotuję rozwiązanie dopasowane do Twojej firmy,
    stylu i celów. Szybka odpowiedź, jasne zasady, profesjonalne podejście.
  </p>

  <a
    href="/kontakt"
    className="inline-block bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg
               hover:bg-yellow-400 transition-all drop-shadow-[0_0_10px_#FFD700]"
  >
    Przejdź do kontaktu →
  </a>
</div>
      </section>
    </main>
  );
}