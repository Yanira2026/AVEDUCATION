export default function WhyYanira() {
  const reasons = [
    "3+ Years Experience",
    "500+ Students Trained",
    "Industry-Oriented Courses",
    "Practical Training",
    "Experienced Trainers",
    "Certification Support",
  ];

  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-5xl font-bold">
          Why Choose Yanira?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-pink-400 text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}