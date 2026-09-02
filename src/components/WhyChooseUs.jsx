import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUserTie,
  FaLightbulb,
  FaLaptopCode,
  FaHeart,
  FaTrophy,
} from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGraduationCap />,
      title: "Quality Education",
      desc: "Focused learning with structured programs designed for every stage.",
    },
    {
      icon: <FaUserTie />,
      title: "Experienced Mentors",
      desc: "Learn with guidance from experienced and dedicated educators.",
    },
    {
      icon: <FaLightbulb />,
      title: "Practical Learning",
      desc: "We believe in learning by doing with real-world activities and practice.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Future Ready Skills",
      desc: "Technology-focused education to prepare students for tomorrow.",
    },
    {
      icon: <FaHeart />,
      title: "Student Focused",
      desc: "Every learner gets attention, encouragement and a supportive environment.",
    },
    {
      icon: <FaTrophy />,
      title: "Excellence Driven",
      desc: "Our goal is to build confidence, knowledge and long-term success.",
    },
  ];

  return (
    <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

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
            Why Choose Us
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-3">
            Building Better Futures
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            From academic excellence to future-ready technology skills,
            we create an environment where every learner can grow.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 hover:border-yellow-400/30 transition-all duration-300"
            >

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

              <div className="relative z-10">

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-slate-950 text-xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-bold mt-6">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}