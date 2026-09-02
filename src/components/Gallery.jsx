
export default function Gallery() {
  return (
    
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-center text-white text-5xl font-bold">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-16">

          <div className="h-64 rounded-3xl bg-white/10"></div>
          <div className="h-64 rounded-3xl bg-white/10"></div>
          <div className="h-64 rounded-3xl bg-white/10"></div>

        </div>

      </div>
    </section>
  );
}