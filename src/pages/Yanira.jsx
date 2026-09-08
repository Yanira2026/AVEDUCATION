import yaniraLogo from "../assets/logos/yanira-logo.png";
import YaniraCourses from "../components/YaniraCourses";
import YaniraGallery from "../components/YaniraGallery";
import YaniraAbout from "../components/YaniraAbout";
import WhyYanira from "../components/WhyYanira";
import YaniraContact from "../components/YaniraContact";
import YaniraMap from "../components/YaniraMap";
import YaniraFooter from "../components/YaniraFooter";
export default function Yanira() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <p className="text-pink-400 uppercase tracking-[0.3em] font-semibold">
              Yanira Computer Education
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight">
              Learn Skills
              <br />
              Build Career
            </h1>

            <p className="text-gray-300 mt-6 text-lg">
              Professional IT Training Institute with
              3k+ Years Experience and 500+ Students.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              

            </div>

          </div>

          {/* Right */}
          <div className="flex justify-center">

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <img
                src={yaniraLogo}
                alt="Yanira"
                className="w-72 h-72 object-contain"
              />
            </div>

          </div>

        </div>

      </section>

      {/* Courses Section */}
      <YaniraAbout />
      <YaniraCourses />
      <YaniraGallery />
      <WhyYanira />
      <YaniraContact />
      <YaniraMap />
      <YaniraFooter />

    </div>
  );
}