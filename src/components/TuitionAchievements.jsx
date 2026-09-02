export default function TuitionAchievements() {
  const achievements = [
    {
      number: "500+",
      title: "Students Guided",
    },
    {
      number: "100+",
      title: "Academic Achievers",
    },
    {
      number: "50+",
      title: "Weekly Tests Conducted",
    },
    {
      number: "100%",
      title: "Dedicated Support",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Our Achievements
          </h2>

          <p className="text-gray-400 mt-4">
            Excellence Through Consistent Learning
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-yellow-400">
                {item.number}
              </h3>

              <p className="text-gray-300 mt-4">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}