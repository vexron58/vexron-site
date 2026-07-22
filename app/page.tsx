import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        
       
       <video
  src="/logo.mp4.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-80 mb-4 drop-shadow-[0_0_20px_#CBA135]"
/>

        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mt-6">
          <span className="text-yellow-400 font-semibold text-2xl">
            Nowoczesne rozwiązania dla firm i twórców
          </span>
          <br /><br />
          VEXRON to marka stworzona dla biznesów, które chcą wyróżnić się w sieci.
          Tworzę profesjonalne strony internetowe, prowadzę social media, projektuję reklamy
          oraz buduję widoczność firm w Google.
          <br /><br />
          Każdy projekt dopasowuję do stylu klienta — od eleganckiego minimalizmu
          po dynamiczne, nowoczesne realizacje.
          <br /><br />

          <span className="text-yellow-400 font-semibold">Co robię:</span>
          <br />
          • strony internetowe dopasowane do marki<br />
          • grafika i filmy <br />
          • prowadzenie social mediów<br />
          • reklamy Facebook / Instagram / Google<br />
          • wizytówki Google i SEO lokalne
          <br /><br />

          <span className="text-yellow-400 font-semibold">Dlaczego VEXRON?</span>
          <br />
          Techniczny styl, szybka realizacja, profesjonalne materiały i podejście
          nastawione na realne wyniki.  
          Jeśli chcesz zbudować mocną obecność swojej firmy w internecie — jesteś w dobrym miejscu.
        </p>

      </main>
    </>
  );
}