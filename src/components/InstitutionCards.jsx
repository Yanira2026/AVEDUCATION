import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

import avLogo from "../assets/logos/av-logo.png";
import yaniraLogo from "../assets/logos/yanira-logo.png";
import goldenLogo from "../assets/logos/golden-logo.png";

export default function InstitutionCards() {
  const institutions = [
      {
      title: "Yanira Computer Education",
      desc: "Full Stack Java, Python, PHP, AI, SAP, Data Science & Robotics.",
      color: "from-pink-600 to-purple-900",
      btn: "Explore Yanira",
      logo: yaniraLogo,
      link: "/yanira",
    },
    {
      title: "Annai Valarmathi Tuition Center",
      desc: "CBSE & Matric Coaching for Academic Excellence.",
      color: "from-blue-900 to-yellow-500",
      btn: "Explore Tuition",
      logo: avLogo,
      link: "/tuition-center",
    },

    

    {
      title: "Golden Miracle Play School",
      desc: "Fun, Safe and Activity Based Learning.",
      color: "from-yellow-400 to-green-500",
      btn: "Explore Play School",
      logo: goldenLogo,
      link: "/play-school",
    },
  ];

  return (
    <section
      id="institutions"
      className="relative bg-slate-950 py-32 px-6 overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center">

          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Explore Our World
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold mt-4">
            Our Institutions
          </h2>

          <p className="text-gray-400 mt-5 text-lg">
            Three Institutions • One Vision
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {institutions.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1200}
              scale={1.05}
              transitionSpeed={1500}
              glareEnable={true}
              glareMaxOpacity={0.15}
              className="h-full"
            >

              <motion.div
                whileHover={{
                  y: -15,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-xl
                  p-8
                  h-full
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_80px_rgba(255,255,255,0.12)]
                "
              >

                {/* Hover Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                  "
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`}
                  />
                </div>

                {/* Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-3xl group-hover:opacity-50 transition duration-500`}
                />

                <div
                  className={`absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-3xl`}
                />

                {/* Content */}
                <div className="relative z-10">

                  {/* Logo */}
                  <div className="w-32 h-32 rounded-3xl bg-white flex items-center justify-center shadow-2xl mb-8 mx-auto">

                    <img
                      src={item.logo}
                      alt={item.title}
                      className="
                        w-24
                        h-24
                        object-contain
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:rotate-6
                      "
                    />

                  </div>

                  {/* Number */}
                  <span className="text-gray-500 text-sm font-semibold">
                    0{index + 1}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      text-white
                      text-2xl
                      font-bold
                      mt-3
                      leading-tight
                      transition-all
                      duration-500
                      group-hover:text-yellow-400
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 mt-5 leading-relaxed min-h-[80px]">
                    {item.desc}
                  </p>

                  {/* Button */}
                  <Link
                    to={item.link}
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      mt-8
                      px-6
                      py-3
                      rounded-full
                      bg-gradient-to-r ${item.color}
                      text-white
                      font-semibold
                      shadow-lg
                      hover:scale-110
                      active:scale-95
                      transition-all
                      duration-300
                    `}
                  >
                    {item.btn}
                    <span className="ml-2">→</span>
                  </Link>

                </div>

              </motion.div>

            </Tilt>
          ))}

        </div>

      </div>

    </section>
  );
}
