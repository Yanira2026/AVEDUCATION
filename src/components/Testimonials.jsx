export default function Testimonials() {
  const reviews = [
    {
      name: "Priya",
      role: "Parent",
      review:
        "Excellent teaching and personal attention. My child improved significantly in academics.",
    },
    {
      name: "Karthik",
      role: "Student",
      review:
        "Yanira helped me learn Full Stack Development and gain confidence for interviews.",
    },
    {
      name: "Meena",
      role: "Parent",
      review:
        "Golden Miracle Play School provides a safe and joyful learning environment.",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
            Testimonials
          </p>

          <h2 className="text-white text-5xl font-bold mt-3">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <h3 className="text-white font-bold mt-6">
                {item.name}
              </h3>

              <p className="text-yellow-400 text-sm">
                {item.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}