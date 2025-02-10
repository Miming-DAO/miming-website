"use client";

export function MainNav() {
  const scrollToSection = (section: string) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="flex items-center gap-4 text-sm sm:text-md">
      <li>
        <a
          href="#"
          className="font-bold underline uppercase"
          onClick={() => scrollToSection("our-story")}
        >
          Our Story
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold underline uppercase"
          onClick={() => scrollToSection("tokenomics")}
        >
          Tokenomics
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold underline uppercase"
          onClick={() => scrollToSection("utility")}
        >
          Utility
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-bold underline uppercase"
          onClick={() => scrollToSection("roadmap")}
        >
          Roadmap
        </a>
      </li>
    </ul>
  );
}
