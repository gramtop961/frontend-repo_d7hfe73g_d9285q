import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skills = [
  { name: "Blender 3D", level: 95, color: "from-blue-500 to-cyan-400" },
  { name: "After Effects", level: 80, color: "from-purple-500 to-pink-400" },
  { name: "CapCut", level: 85, color: "from-emerald-500 to-lime-400" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="text-blue-400" size={20} />
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Aplikasi yang dikuasai</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl p-6 bg-slate-800/50 border border-white/10 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium">{s.name}</p>
                <p className="text-blue-300/80 text-sm">{s.level}%</p>
              </div>
              <div className="h-3 rounded-full bg-slate-700 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className={`h-3 bg-gradient-to-r ${s.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
