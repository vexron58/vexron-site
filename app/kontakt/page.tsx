export default function KontaktPage() {
  return (
    <main className="min-h-screen pt-32 px-8 text-gray-200 bg-black">
      
      <h1 className="text-4xl font-bold mb-8 drop-shadow-[0_0_10px_#FFD700] text-center">
        Kontakt
      </h1>

      <section className="max-w-3xl mx-auto space-y-6 text-center">

        <p className="text-gray-300 leading-relaxed">
          Masz pytania, chcesz wycenić projekt lub rozpocząć współpracę?
          Napisz do mnie — odpowiadam szybko i konkretnie.
        </p>

        <div className="bg-neutral-900 p-8 rounded-xl shadow-lg space-y-8">

          {/* EMAIL */}
          <div>
            <p className="text-yellow-400 text-xl font-semibold mb-4">
              Email
            </p>
            <a
              href="mailto:vexron.contact@gmail.com"
              className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
            >
              vexron58@gmail.com
            </a>
          </div>

          {/* SOCIAL MEDIA */}
          <div>
            <p className="text-yellow-400 text-xl font-semibold mb-4">
              Social Media
            </p>

            <div className="flex flex-col gap-4 items-center">

              <a
                href="https://www.facebook.com/profile.php?id=61589296094974"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/vexron_58/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.tiktok.com/@vexron58?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-400 transition"
              >
                TikTok
              </a>

            </div>
          </div>

        </div>

        <p className="text-gray-400 text-sm mt-6">
          Odpowiadam zazwyczaj w ciągu kilku godzin.
        </p>

      </section>
    </main>
  );
}