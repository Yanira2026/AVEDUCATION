 export default function TuitionGallery() {
  const images = [
    "/tuition/tuition1.jpg",
    "/tuition/tuition2.jpg",
    "/tuition/tuition3.jpg",
    "/tuition/tuition4.jpg",
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-5xl font-bold text-white">
          Our Students & Classes
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Learning • Growth • Success
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}