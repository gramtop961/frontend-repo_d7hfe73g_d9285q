import { Download } from "lucide-react";

export default function CTA() {
  return (
    <section id="cv" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-600/30 via-indigo-600/30 to-cyan-500/20">
          <div className="p-8 md:p-12 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-white text-2xl md:text-3xl font-semibold">Unduh CV Saya</h3>
              <p className="text-slate-100/80 mt-2">Lihat pengalaman, proyek, dan kemampuan lengkap saya dalam bentuk CV.</p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 font-medium px-6 py-3 hover:scale-[1.02] active:scale-[0.99] transition"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
