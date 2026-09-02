import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function YaniraContact() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Contact Yanira
          </h2>

          <p className="text-gray-400 mt-4">
            Get in touch with us for admissions and course details.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Phone */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <FaPhoneAlt className="text-pink-500 text-4xl mx-auto" />

            <h3 className="text-white text-xl font-bold mt-4">
              Phone
            </h3>

            <p className="text-gray-300 mt-2">
              +91 98945 70497
            </p>
          </div>

          {/* Instagram */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <FaInstagram className="text-pink-500 text-4xl mx-auto" />

            <h3 className="text-white text-xl font-bold mt-4">
              Instagram
            </h3>

            <a
              href="https://www.instagram.com/yaniracomputereducation"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:text-pink-300"
            >
              @yaniracomputereducation
            </a>
          </div>

          {/* Address */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
            <FaMapMarkerAlt className="text-pink-500 text-4xl mx-auto" />

            <h3 className="text-white text-xl font-bold mt-4">
              Address
            </h3>

            <p className="text-gray-300 mt-2">
              No.1, 8th Street,<br />
              Devi Nagar,<br />
              Thiruverkadu,<br />
              Chennai - 600077,<br />
              Tamil Nadu, India
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}