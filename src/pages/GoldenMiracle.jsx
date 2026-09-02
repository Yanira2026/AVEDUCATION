import goldenLogo from "../assets/logos/golden-logo.png";

export default function GoldenMiracle() {
  const activities = [
    "Story Telling",
    "Drawing & Coloring",
    "Rhymes & Music",
    "Dance Activities",
    "Indoor Games",
    "Outdoor Play",
    "Creative Learning",
    "Fun Workshops",
    "Social Skills",
  ];

  const programs = [
    "Pre KG",
    "LKG",
    "UKG",
    "Day Care",
  ];

  const gallery = [
    "/goldenmiracle/play1.jpg",
    "/goldenmiracle/play2.jpg",
    "/goldenmiracle/play3.jpg",
    "/goldenmiracle/play4.jpg",
    "/goldenmiracle/play5.jpg",
    "/goldenmiracle/play6.jpg",
    "/goldenmiracle/play7.jpg",
    "/goldenmiracle/play8.jpg",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-white to-green-50">

      {/* Hero */}
      <section className="relative overflow-hidden">

        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300 blur-[120px] opacity-40"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 blur-[120px] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-green-600 uppercase tracking-[0.3em] text-sm font-semibold">
                Early Childhood Education
              </p>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mt-4">
                Golden Miracle
                <br />
                Play School
              </h1>

              <p className="text-2xl text-gray-600 mt-3">
                Play • Learn • Grow
              </p>

              <div className="flex gap-8 mt-8">

                <div>
                  <h2 className="text-4xl font-bold text-green-600">
                    Safe
                  </h2>
                  <p className="text-gray-500">
                    Environment
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-green-600">
                    Fun
                  </h2>
                  <p className="text-gray-500">
                    Learning
                  </p>
                </div>

              </div>

              <button className="mt-10 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-green-500 text-white font-semibold shadow-lg hover:scale-105 transition">
                Admission Open
              </button>

            </div>

            <div className="flex justify-center">

              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <img
                  src={goldenLogo}
                  alt="Golden Miracle"
                  className="w-72 h-72 object-contain"
                />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* About */}

      <section className="py-20 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            About Us
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-4xl mx-auto">
            Golden Miracle Play School provides a safe, caring and
            activity-based learning environment where children learn
            through fun, creativity and exploration. We focus on
            communication skills, confidence, social interaction and
            overall child development.
          </p>

        </div>

      </section>

      {/* Programs */}

      <section className="bg-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold text-gray-800">
            Our Programs
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-100 to-green-100 rounded-3xl p-8 text-center shadow-lg hover:-translate-y-2 transition"
              >
                <h3 className="text-2xl font-bold text-green-700">
                  {program}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Activities */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-center text-4xl font-bold text-gray-800">
          Activities
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {activity}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Gallery */}

      <section className="bg-white py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold text-gray-800">
            Gallery
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-4xl font-bold text-gray-800">
            Why Parents Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            <div className="bg-yellow-100 rounded-3xl p-6 text-center">
              <h3 className="font-bold text-lg">
                Safe Environment
              </h3>
            </div>

            <div className="bg-green-100 rounded-3xl p-6 text-center">
              <h3 className="font-bold text-lg">
                Qualified Teachers
              </h3>
            </div>

            <div className="bg-yellow-100 rounded-3xl p-6 text-center">
              <h3 className="font-bold text-lg">
                Activity Based Learning
              </h3>
            </div>

            <div className="bg-green-100 rounded-3xl p-6 text-center">
              <h3 className="font-bold text-lg">
                Individual Care
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section className="bg-white py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-gray-800">
            Contact Us
          </h2>

          <p className="text-gray-600 mt-6">
            📍 Add Play School Address
          </p>

          <p className="text-gray-600 mt-2">
            📞 Add Phone Number
          </p>

          <p className="text-gray-600 mt-2">
            📸 @goldenmiracleplayschool
          </p>

        </div>

      </section>

      {/* Footer */}

      <footer className="bg-green-700 text-white py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-3xl font-bold">
            Golden Miracle Play School
          </h3>

          <p className="mt-3">
            Play • Learn • Grow
          </p>

          <p className="mt-6 text-sm">
            © 2026 Golden Miracle Play School.
            All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}

