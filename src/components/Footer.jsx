import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-white text-2xl font-bold">
              AV Education
            </h2>

            <p className="text-gray-400 mt-4">
              Learning Today, Leading Tomorrow.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">
              <a href="#home" className="text-gray-400 hover:text-yellow-400">
                Home
              </a>

              <a href="#institutions" className="text-gray-400 hover:text-yellow-400">
                Institutions
              </a>

              <a href="#gallery" className="text-gray-400 hover:text-yellow-400">
                Gallery
              </a>

              <a href="#contact" className="text-gray-400 hover:text-yellow-400">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition">
                <FaFacebookF />
              </button>

              <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition">
                <FaInstagram />
              </button>

              <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition">
                <FaWhatsapp />
              </button>

              <button className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition">
                <FaYoutube />
              </button>

            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 Annai Valarmathi School of Education. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}