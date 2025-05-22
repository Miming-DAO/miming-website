"use client";

export function MainNav() {
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex items-center gap-4 sm:gap-10 text-sm text-darumadrop sm:text-xl text-white">
      <li>
        <a href="#" className="font-bold underline uppercase" onClick={() => scrollToSection("our-story")}>
          Our Story
        </a>
      </li>
      <li>
        <a href="#" className="font-bold underline uppercase" onClick={() => scrollToSection("tokenomics")}>
          Tokenomics
        </a>
      </li>
      <li>
        <a href="#" className="font-bold underline uppercase" onClick={() => scrollToSection("utility")}>
          Utility
        </a>
      </li>
      <li>
        <a href="#" className="font-bold underline uppercase" onClick={() => scrollToSection("roadmap")}>
          Roadmap
        </a>
      </li>
      <li>
        <button
          onClick={() => window.open("https://dapp.miming.net", "_blank")}
          className="bg-gradient-to-r from-pink-600 via-pink-700 to-pink-800 text-white font-bold pt-2 pb-3 px-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out uppercase"
        >
          Launch App
        </button>
      </li>
    </ul>
  );
}
