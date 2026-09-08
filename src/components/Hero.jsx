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

            

            <h5 className="text-white font-[Poppins] font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
  Welcome to YAG Education
  <br />
  <span className="text-pink-400">• YANIRA COMPUTER EDUCATION</span>
  <br />
  <span className="text-[#001F3F]">• ANNAI VALARMATHI TUITION CENTER</span>
  <br />
  <span className="text-yellow-400">• GOLDEN MIRACLE PLAY SCHOOL</span>
</h5>


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