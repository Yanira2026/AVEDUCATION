export default function YaniraAbout() {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-5xl font-bold">
          About Yanira
        </h2>

        <p className="text-center text-gray-300 mt-6 max-w-3xl mx-auto text-lg">
          Yanira Computer Education is a leading training institute
          offering industry-focused courses in Full Stack Development,
          Artificial Intelligence, Data Science, SAP, Robotics and more.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          <div className="bg-white/5 rounded-3xl p-8 text-center">
            <h3 className="text-pink-400 text-4xl font-bold">9+</h3>
            <p className="text-white mt-3">Years Experience</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 text-center">
            <h3 className="text-pink-400 text-4xl font-bold">2000+</h3>
            <p className="text-white mt-3">Students</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 text-center">
            <h3 className="text-pink-400 text-4xl font-bold">50+</h3>
            <p className="text-white mt-3">Courses</p>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 text-center">
            <h3 className="text-pink-400 text-4xl font-bold">100%</h3>
            <p className="text-white mt-3">Support</p>
          </div>

        </div>

      </div>
    </section>
  );
}