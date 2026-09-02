import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Institutions", href: "#institutions" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="backdrop-blur-xl bg-black/30 border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo / Brand */}
          <div>
            <h1 className="text-white font-bold text-xl">
              AV Education
            </h1>

            <p className="text-yellow-400 text-xs">
              Learning Today, Leading Tomorrow
            </p>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition duration-300"
              >
                {link.name}
              </a>
            ))}

          </nav>


          {/* Desktop Admission Button */}
          <a
            href="#contact"
            className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg"
          >
            Admission Open
          </a>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10">

          <div className="flex flex-col p-6 gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-400 transition"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}


            {/* Mobile Admission Button */}
            <a
              href="#contact"
              className="mt-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold text-center hover:scale-105 transition duration-300"
              onClick={() => setOpen(false)}
            >
              Admission Open
            </a>

          </div>
        </div>
      )}

    </header>
  );
}