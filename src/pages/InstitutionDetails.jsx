import { motion } from "framer-motion";

export default function InstitutionDetails() {
  const features = [
    {
      icon: "👨‍🏫",
      title: "Experienced Trainers",
      description: "Learn from experienced and supportive trainers.",
    },
    {
      icon: "💻",
      title: "Practical Training",
      description: "Gain hands-on experience through practical sessions.",
    },
    {
      icon: "📝",
      title: "Projects & Assignments",
      description: "Build real-world projects and improve your skills.",
    },
    {
      icon: "🎯",
      title: "Placement Support",
      description: "Get guidance and support for your career journey.",
    },
    {
      icon: "🏆",
      title: "Certification",
      description: "Receive course completion certification.",
    },
    {
      icon: "🌐",
      title: "Online & Offline Classes",
      description: "Choose flexible learning modes according to your needs.",
    },
  ];

  const facilities = [
    {
      title: "Computer Lab",
      image: "/images/computer-lab.jpg",
    },
    {
      title: "Learning Environment",
      image: "/images/learning.jpg",
    },
    {
      title: "Practical Sessions",
      image: "/images/practical.jpg",
    },
    {
      title: "Classroom Training",
      image: "/images/classroom.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-blue-400 font-semibold mb-4">
            WELCOME TO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold">
            Yanira Computer Education
          </h1>

          <p className="mt-5 text-gray-400 text-lg">
            Empowering Skills. Building Careers.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-400 mt-3">
          Learn with the right guidance and practical experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">

          {features.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateY: 8,
                rotateX: 5,
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center cursor-pointer"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Facilities
        </h2>

        <p className="text-center text-gray-400 mt-3">
          A better environment for better learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">

          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              whileHover={{
                rotateY: 8,
                rotateX: 4,
                scale: 1.04,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >

              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <h3 className="absolute bottom-5 left-5 text-xl font-semibold">
                {facility.title}
              </h3>

            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
}