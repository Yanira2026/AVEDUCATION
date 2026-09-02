export default function TuitionWhyChoose() {
  const features = [
    "Experienced Teachers",
    "Individual Attention",
    "Weekly Tests",
    "Doubt Clarification",
    "Parent Interaction",
    "Exam Preparation",
  ];

  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Why Choose Us
          </h2>

          <p className="text-gray-400 mt-4">
            Helping Students Reach Their Full Potential
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition duration-300"
            >
              <div className="text-yellow-400 text-3xl mb-4">
                ✓
              </div>

              <h3 className="text-white text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}