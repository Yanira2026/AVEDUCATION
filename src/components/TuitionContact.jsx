import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function TuitionContact() {
  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Contact Us
          </h2>

          <p className="text-gray-400 mt-4">
            Get in Touch With Us
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

            <div className="flex items-center gap-4 mb-6">
              <FaPhoneAlt className="text-yellow-400 text-2xl" />
              <div>
                <p className="text-white font-semibold">
                  Call Us
                </p>
                <p className="text-gray-400">
                  86670 60497
                </p>
                <p className="text-gray-400">
                  96000 81726
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <FaInstagram className="text-yellow-400 text-2xl" />
              <div>
                <p className="text-white font-semibold">
                  Instagram
                </p>
                <p className="text-gray-400">
                  @annai_valarmathi_tuition
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMapMarkerAlt className="text-yellow-400 text-2xl mt-1" />

              <div>
                <p className="text-white font-semibold">
                  Branch 1
                </p>

                <p className="text-gray-400 mb-4">
                  No.78, Devi Nagar,
                  4th Street,
                  Thiruverkadu,
                  Chennai
                </p>

                <p className="text-white font-semibold">
                  Branch 2
                </p>

                <p className="text-gray-400">
                  No.1, Devi Nagar,
                  8th Street,
                  Thiruverkadu,
                  Chennai
                </p>
              </div>

            </div>

          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl p-10 flex items-center justify-center">

            <div className="text-center text-black">

              <h3 className="text-4xl font-bold">
                Admissions Open
              </h3>

              <p className="mt-4 text-lg">
                Join Today & Start Your Success Journey
              </p>

              <button className="mt-8 px-8 py-4 rounded-full bg-black text-white font-semibold hover:scale-105 transition">
                Contact Now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}