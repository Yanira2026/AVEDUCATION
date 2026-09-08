import {
  FaPhoneAlt,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function TuitionFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

        {/* Logo / About */}
        <div>

          <h2 className="text-3xl font-bold text-yellow-400">
            Annai Valarmathi
          </h2>

          <p className="text-white text-lg mt-2">
            Tuition Center
          </p>

          <p className="text-gray-400 mt-5 leading-relaxed">
            Providing quality education, individual attention
            and academic excellence for school students.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-6">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-400">

            <li>
              <a href="#about" className="hover:text-yellow-400">
                About
              </a>
            </li>

            <li>
              <a href="#classes" className="hover:text-yellow-400">
                Classes
              </a>
            </li>

            <li>
              <a href="#subjects" className="hover:text-yellow-400">
                Subjects
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-yellow-400">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="text-white text-xl font-semibold mb-6">
            Contact Info
          </h3>

          <div className="space-y-4 text-gray-400">

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              86670 60497
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-yellow-400" />
              96000 81726
            </p>


            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              No.78, Devi Nagar,
              4th Street,
              Thiruverkadu,
              Chennai - 600077
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-yellow-400 mt-1" />
              No.1, Devi Nagar,
              8th Street,
              Thiruverkadu,
              Chennai - 600077
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center">

        <p className="text-gray-500">
          © 2026 Annai Valarmathi Tuition Center.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}