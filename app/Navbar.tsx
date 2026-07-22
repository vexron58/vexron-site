export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-[#000000] fixed top-0 left-0 border-b border-[#1a1a1a]">
      
      <img 
        src="/logo.jpg" 
        alt="VEXRON Logo" 
        className="w-20 h-auto drop-shadow-[0_0_12px_#CBA135]"
      />

      <ul className="flex gap-8 text-gray-300 text-lg">
        <li>
          <a href="/" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            Home
          </a>
        </li>

        <li>
          <a href="/products" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            Produkty
          </a>
        </li>

        <li>
          <a href="/oferta" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            Oferta
          </a>
        </li>
<li>
          <a href="/cena" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            Cennik
          </a>
        </li>
        <li>
          <a href="/o-mnie" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            O mnie
          </a>
        </li>

        <li>
          <a href="/kontakt" className="text-gray-300 drop-shadow-[0_0_10px_#CBA135] hover:text-[#CBA135] transition-all">
            Kontakt
          </a>
        </li>
      </ul>

    </nav>
  );
}