export default function Timeline() {
  const timeline = [
    {
      year: "2017",
      title: "Annai Valarmathi Tuition Center",
    },
    {
      year: "2019",
      title: "Golden Miracle Play School",
    },
    {
      year: "2020",
      title: "Yanira Computer Education",
    },
    {
      year: "2026",
      title: "2000+ Students Milestone",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-white text-4xl font-bold">
          Our Journey
        </h2>

        <div className="mt-16 space-y-8">

          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6"
            >
              <div className="w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-black">
                {item.year}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1">
                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}