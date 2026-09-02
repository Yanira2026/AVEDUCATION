export default function YaniraMap() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-5xl font-bold">
          Find Us
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Visit Our Training Center
        </p>

        <div className="mt-12 rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.3572060888227!2d80.1250381!3d13.0765333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52618a0a736bc1%3A0x61cda87f5fcdaa5b!2sRAMALAYA%20KALYANA%20MANDAPAM!5e0!3m2!1sen!2sin!4v1786878855050!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>

        </div>

      </div>
    </section>
  );
}