import {
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold">
              YAG Education
            </h2>

            <p className="text-gray-400 mt-4">
              Learning Today, Leading Tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <a
                href="#home"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Home
              </a>

              <a
                href="#institutions"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Institutions
              </a>

              <a
                href="#gallery"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Gallery
              </a>

              <a
                href="#contact"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                Contact
              </a>

            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 Annai Valarmathi School of Education. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}