import heroVideo from "../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-3xl">

            <h6 className="text-yellow-400 uppercase tracking-[0.3em] font-semibold mb-4">
               YAG EDUCATION
            </h6>

            <h4 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl leading-tight">
              Welcome to YAG Education
              <br />
              • Yanira Computer Education 
              <br />
              • Annai Valarmathi Tuition Center 
              <br />
              • Golden Miracle Play School
            </h4>


            <div className="flex flex-wrap gap-4 mt-10">


            </div>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </section>
  );
}