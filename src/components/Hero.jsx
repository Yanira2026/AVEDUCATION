import heroVideo from "../assets/videos/hero.mp4";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
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
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full">

          <div className="max-w-5xl">

            {/* Welcome */}
            <h5 className="text-green-500 font-[Poppins] font-extrabold 
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl 
              leading-[1.1] tracking-tight">
              Welcome to YAG Education
            </h5>

            {/* Yanira + Training & Placement */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-6">

              {/* Yanira */}
              <span className="text-pink-400 font-[Poppins] font-extrabold
                text-3xl sm:text-4xl md:text-6xl lg:text-7xl
                leading-[1.1] tracking-tight">
                • YANIRA COMPUTER EDUCATION
              </span>

              {/* Training & Placement */}
              <span className="text-white text-xs sm:text-sm
                font-semibold tracking-wide whitespace-nowrap
                animate-pulse">
                Training & Placement
              </span>

            </div>

            {/* Annai Valarmathi */}
            <div className="text-white font-[Poppins] font-extrabold
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              leading-[1.1] tracking-tight mt-5">
              • ANNAI VALARMATHI TUITION CENTER
            </div>

            {/* Golden Miracle */}
            <div className="text-yellow-400 font-[Poppins] font-extrabold
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
              leading-[1.1] tracking-tight mt-4">
              • GOLDEN MIRACLE PLAY SCHOOL
            </div>

            {/* Buttons / Actions */}
            <div className="flex flex-wrap gap-4 mt-10">
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40
        bg-gradient-to-t from-slate-950 to-transparent">
      </div>
    </section>
  );
}