export default function TuitionClasses() {
  const classes = [
    "1st standard",
    "2nd Standard",
    "3rd Standard",
    "4th Standard",
    "5th Standard",     
    "6th Standard",
    "7th Standard",
    "8th Standard",
    "9th Standard",
    "10th Standard",
    "11th Standard",
    "12th Standard",
  ];

  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-white">
            Classes Offered for both CBSE & Matric Students
          </h2>

          <p className="text-gray-400 mt-4">
            Coaching for School Students
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {classes.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:scale-105 transition"
            >
              <h3 className="text-yellow-400 text-2xl font-bold">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}