import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#home", label: "Beranda" },
    { href: "#skills", label: "Keahlian" },
    { href: "#portfolio", label: "Portofolio" },
    { href: "#cv", label: "CV" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="text-white font-semibold tracking-tight text-lg">
              Muhammad At Thoriq Syaputra
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-slate-200/80 hover:text-white transition-colors text-sm">
                  {l.label}
                </a>
              ))}
              <a
                href="#cv"
                className="inline-flex items-center rounded-xl bg-blue-500/90 hover:bg-blue-500 text-white px-4 py-2 transition shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              >
                Download CV
              </a>
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden text-white">
              <Menu size={22} />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-3 pt-3">
                {links.map((l) => (
                  <a key={l.href} href={l.href} className="text-slate-200/90 hover:text-white transition-colors" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a href="#cv" className="text-white bg-blue-500/90 hover:bg-blue-500 rounded-xl px-4 py-2 text-center" onClick={() => setOpen(false)}>
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
