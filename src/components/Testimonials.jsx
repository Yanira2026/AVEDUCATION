export default function Testimonials() {
  const reviews = [
    {
      name: "Divakar",
      role: "Yanira Computer Education Student",
      review:
        "I had a great learning experience in this computer class. The teaching was clear, practical, and easy to understand. I learned important topics like HTML, forms, tables, styling, and basic web development. The instructors were supportive and always ready to help with doubts. This class improved my computer skills and boosted my confidence in coding. I highly recommend it to students who want to build a strong foundation in computers and technology.",
    },
    {
      name: "Asha harani",
      role: "Yanira Computer Education Student",
      review:
        "We are good teaching for computer class very clear course explanation mam thank you so much mam 🙏🥰🥰🥰💞",
    },
    {
      name: "Nirosha",
      role: "Yanira Computer Education Student",
      review:
        "I had a great learning experience at this Computer Education Center. The trainers are knowledgeable, supportive, and explain concepts clearly. The practical sessions helped me gain hands-on experience and improve my computer skills. The learning environment is friendly and well-organized. I highly recommend this institute to anyone looking to enhance their computer knowledge.",
    },
    {
       name: "Kanishka mohan",
      role: "Annai Valarmathi Tuition Center Student",
      review:
        "Excellent coaching with trained teachers.Highly recommendable for 10th to 12th students.",
    },
    {
       name: "Pradeep Anbazhagan",
      role: "Annai Valarmathi Tuition Center Student",
      review:
        "The Excellent coaching center in Thiruverkadu. They provide various courses and tuition classes, kids pre school. Safe environment and great and experienced faculties.",
    },
    {
       name: "Vijay",
      role: "Annai Valarmathi Tuition Center Student",
      review:
        "One of the best Tution in Thiruverkadu , well qualified & experienced faculty staffs, personal mentors ,peaceful study environment for each boards, the founder of Annai valarmathi Sigamani sir thankyou for giving the knowledge.",
    },
    {
      name: "Divya",
      role: "Parent(Golden Miracle Play School)",
      review:
        "Well education and activities It is very secured place for our lovable kids. And also the teachers are very friendly and supportive. My kid is very happy to go to school everyday. Thank you for giving a good education and activities for our kids and also thank for you are lovable teachers 🫰🤩.",
    },
    {
      name: "Srikanth Sri",
      role: "Parent(Golden Miracle Play School)",
      review:
        "Activity based teaching friendly approach by the teachers all are good",
    },
    {
      name: "Mohanalakshmi",
      role: "Parent(Golden Miracle Play School)",
      review:
        "Well education, It is very secured place for our lovable kids❤❤❤❤❤❤❤I recommend this school for learning discipline activities",
    },
  ];

  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-[0.3em] text-sm">
            Testimonials
          </p>

          <h2 className="text-white text-5xl font-bold mt-3">
            What People Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8"
            >
              <p className="text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <h3 className="text-white font-bold mt-6">
                {item.name}
              </h3>

              <p className="text-yellow-400 text-sm">
                {item.role}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}