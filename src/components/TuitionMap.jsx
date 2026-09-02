export default function TuitionMap() {
  return (
    <section className="bg-black py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Our Locations
          </h2>

          <p className="text-gray-400 mt-4">
            Visit Our Centers
          </p>

        </div>

        {/* Maps */}
        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Annai Valarmathi */}
          <div>

            <h3 className="text-yellow-400 text-2xl font-bold mb-6">
              Annai Valarmathi Tuition Center
            </h3>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.3796609590563!2d80.12496597484324!3d13.075107987249929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526189bfd25a19%3A0xe6d2b2c88b6120b4!2sRaghu%20R%20Jothylakshmi%20Illam%2C%2078%2C%20Devi%20Nagar%2C%20Thiruverkadu%2C%20Chennai%2C%20Thiruverkadu%2C%20Tamil%20Nadu%20600077!5e0!3m2!1sen!2sin!4v1786880889464!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Annai Valarmathi Tuition Center"
              ></iframe>

            </div>

            <p className="text-gray-400 mt-4">
              No.78, Devi Nagar, 4th Street,
              Thiruverkadu, Chennai - 600077
            </p>

          </div>

          {/* Yanira */}
          <div>

            <h3 className="text-yellow-400 text-2xl font-bold mb-6">
            Annai Valarmathi Tuition Center
            </h3>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.3572060888227!2d80.1250381!3d13.0765333!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52618a0a736bc1%3A0x61cda87f5fcdaa5b!2sRAMALAYA%20KALYANA%20MANDAPAM!5e0!3m2!1sen!2sin!4v1786878855050!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Annai Valarmathi Tuition Center"
              ></iframe>

            </div>

            <p className="text-gray-400 mt-4">
              No.1, 8th Street,
              Devi Nagar,
              Thiruverkadu,
              Chennai - 600077
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}