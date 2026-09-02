import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function YaniraFooter() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-pink-500">
            Yanira Computer Education
          </h2>

          <p className="text-gray-400 mt-4">
            Learn Skills • Build Career
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>About</li>
            <li>Courses</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-gray-400">

            <p className="flex items-center gap-3">
              <FaPhoneAlt />
              98945 70497
            </p>

            <p className="flex items-center gap-3">
              <FaInstagram />
              @yaniracomputereducation
            </p>

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt />
              No.1, 8th Street,
              Devi Nagar,
              Thiruverkadu,
              Chennai - 600077
            </p>

          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
        © 2026 Yanira Computer Education. All Rights Reserved.
      </div>

    </footer>
  );
}