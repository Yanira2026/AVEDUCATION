import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    
    <section
      id="contact"
      className="relative bg-slate-950 py-24 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-yellow-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Get In Touch
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Let's Start Your Learning Journey
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have questions about admissions, courses or programs?
            Reach out to us and our team will be happy to help.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10"
          >

            <h3 className="text-white text-2xl font-bold">
              Contact Information
            </h3>

            <p className="text-gray-400 mt-3">
              Connect with Annai Valarmathi School of Education.
            </p>

            {/* Phone */}
            <div className="flex items-start gap-5 mt-10">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                <FaPhoneAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Phone
                </p>

                <p className="text-white font-semibold mt-1">
                  +91 8667060497
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5 mt-7">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                <FaEnvelope />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <p className="text-white font-semibold mt-1">
                  info@aveducation.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5 mt-7">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400">
                <FaMapMarkerAlt />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Address
                </p>

                <p className="text-white font-semibold mt-1 leading-relaxed">
                  No. 10, Main Road,
                  <br />
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918667060497"
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 px-7 py-4 rounded-full bg-green-500 text-white font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </a>

          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 md:p-10"
          >

            <h3 className="text-white text-2xl font-bold">
              Send an Enquiry
            </h3>

            <p className="text-gray-400 mt-3">
              Fill in your details and we'll get back to you.
            </p>

            <form className="mt-8 space-y-5">

              {/* Name */}
              <div>
                <label className="text-gray-400 text-sm">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-yellow-400 transition"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-gray-400 text-sm">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-yellow-400 transition"
                />
              </div>

              {/* Institution */}
              <div>
                <label className="text-gray-400 text-sm">
                  Interested In
                </label>

                <select
                  className="w-full mt-2 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-yellow-400 transition"
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">
                    Select Institution
                  </option>

                  <option className="text-black">
                    Annai Valarmathi Tuition Center
                  </option>

                  <option className="text-black">
                    Yanira Computer Education
                  </option>

                  <option className="text-black">
                    Golden Miracle Play School
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-400 text-sm">
                  Message
                </label>

                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full mt-2 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-yellow-400 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold hover:scale-[1.02] active:scale-[0.98] transition duration-300 shadow-xl"
              >
                Send Enquiry →
              </button>

            </form>

          </motion.div>

        </div>
      </div>
    </section>
  );
}