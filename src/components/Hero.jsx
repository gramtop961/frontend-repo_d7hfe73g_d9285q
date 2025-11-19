import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-3xl p-8 md:p-10">
              <p className="text-blue-300/80 text-sm uppercase tracking-[0.25em] mb-3">3D Animator • Blender</p>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Muhammad At Thoriq Syaputra
              </h1>
              <p className="mt-4 text-slate-200/90 text-lg">
                Menciptakan animasi 3D yang hidup dan bercerita. Fokus pada motion yang halus, lighting sinematik, dan storytelling visual.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#portfolio" className="rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-5 py-3 transition">
                  Lihat Portofolio
                </a>
                <a href="#cv" className="rounded-xl bg-white/10 hover:bg-white/20 text-white px-5 py-3 transition">
                  Download CV
                </a>
              </div>
            </div>

            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900" />
    </section>
  );
}
