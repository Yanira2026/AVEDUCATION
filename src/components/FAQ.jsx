export default function FAQ() {
  const faqs = [
    {
      q: "What courses are available?",
      a: "We offer tuition, computer education, AI, Full Stack Development, Tally and more.",
    },
    {
      q: "How can I enroll?",
      a: "Contact us through phone, WhatsApp or visit our center.",
    },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-center text-white text-5xl font-bold">
          Frequently Asked Questions
        </h2>

        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
            >
              <h3 className="text-white text-xl font-semibold">
                {faq.q}
              </h3>

              <p className="text-gray-400 mt-3">
                {faq.a}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}