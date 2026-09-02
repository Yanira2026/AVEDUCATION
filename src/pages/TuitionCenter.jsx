import avLogo from "../assets/logos/av-logo.png";
import TuitionAbout from "../components/TuitionAbout";
import TuitionClasses from "../components/TuitionClasses";
import TuitionSubjects from "../components/TuitionSubjects";
import TuitionWhyChoose from "../components/TuitionWhyChoose";
import TuitionGallery from "../components/TuitionGallery";
import TuitionAchievements from "../components/TuitionAchievements";
import TuitionContact from "../components/TuitionContact";
import TuitionMap from "../components/TuitionMap";
import TuitionFooter from "../components/TuitionFooter";

export default function TuitionCenter() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-yellow-400 uppercase tracking-[0.3em] font-semibold">
              Annai Valarmathi Tuition Center
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Learn
              <br />
              Achieve Success
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              CBSE & Matric Coaching for Academic Excellence.
            </p>

          </div>

          <div className="flex justify-center">

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <img
                src={avLogo}
                alt="AV Tuition"
                className="w-72 h-72 object-contain"
              />
            </div>

          </div>

        </div>

      </section>

      <TuitionAbout />
      <TuitionClasses />
      <TuitionSubjects />
      <TuitionWhyChoose />
      <TuitionGallery />
      <TuitionAchievements />
      <TuitionContact />
      <TuitionMap />
      <TuitionFooter />
    </div>
  );
}