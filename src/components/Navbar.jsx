import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Coaches", "Schedule", "Blog", "Contact"];

  return (
    <header className="bg-beastdark text-white">
      {}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-16 py-2 text-xs border-b border-white/10 text-gray-300">
        <p>Mon - Sat: 6:00am - 10:00pm</p>
        <div className="flex gap-4">
          <a href="#" aria-label="facebook">FB</a>
          <a href="#" aria-label="instagram">IG</a>
          <a href="#" aria-label="twitter">TW</a>
        </div>
      </div>

      {}
      <nav className="flex justify-between items-center px-6 lg:px-16 py-4">
        <a href="#" className="flex items-center gap-2 font-heading text-2xl font-bold">
          <span className="text-beastred">BEAST</span>
        </a>

        <ul className="hidden lg:flex gap-8 font-heading text-sm uppercase tracking-wide">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-beastred transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col gap-4 px-6 pb-6 font-heading uppercase text-sm">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
