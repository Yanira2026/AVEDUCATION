export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-yellow-400 font-semibold uppercase tracking-[0.3em]">
            About Us
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-bold mt-4">
            YAG Education: A Legacy of Learning
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed text-lg">
            YAG Education is a trusted educational
            institution and school that nurtures students from early childhood learning
            to advanced professional education through our three specialized
            institutions.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <p>✅ Expert Faculty Members</p>
            <p>✅ Modern Learning Environment</p>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-6">



          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-yellow-400 text-4xl font-bold">3</h3>
            <p className="text-white mt-2">
              Institutions
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-yellow-400 text-4xl font-bold">100%</h3>
            <p className="text-white mt-2">
              Dedication
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}