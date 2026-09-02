export default function TuitionSubjects() {
  const subjects = [
    "Mathematics",
    "Science",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "Tamil",
    "Social Science",
    "Computer Science",
    "Accountancy",
    "Commerce",
    "Economics",
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Subjects We Teach
          </h2>

          <p className="text-gray-400 mt-4">
            Comprehensive Academic Support
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:scale-105 transition duration-300"
            >
              <h3 className="text-yellow-400 text-xl font-bold">
                {subject}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}