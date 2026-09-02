export default function YaniraCourses() {

  const courses = [
    "MS Office",
    "Tallyprime with GST",
    "Advanced Excel",
    "SAP",
    "Zoho Books",
    "Basic Python",
    "Advanced Python",
    "Full Stack Python",
    "Java Basics",
    "Full Stack Java",
    "Basic PHP",
    "Full Stack PHP",
    "Full Stack MERN",
    "Data Analytics",
    "Power BI",
    "Tableau",
    "AI",
    "AI & Machine Learning",
    "AI & Master Data Science",
    "Robotics",
    "Spoken English",
    "Hindi classes",
  ];

  return (
    <section className="py-24 px-6 bg-black">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-white text-center text-5xl font-bold">
          Our Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 text-2xl font-bold">
  {course}
</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}