export default function YaniraGallery() {
  const images = [
    "/Yanira/gallery/student1.jpg",
    "/Yanira/gallery/student2.jpg",
    "/Yanira/gallery/student3.jpg",
    "/Yanira/gallery/student4.jpg",
    "/Yanira/gallery/student5.jpg",
    "/Yanira/gallery/student6.jpg",
    "/Yanira/gallery/student7.jpg",
    "/Yanira/gallery/student8.jpg",
    "/Yanira/gallery/student9.jpg",
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white">
          Student Achievements
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Certificates • Training • Success Stories
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={img}
                alt=""
                className="w-full h-80 object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}