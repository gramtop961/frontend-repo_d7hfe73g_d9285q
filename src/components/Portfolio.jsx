import { motion } from "framer-motion";

export default function Portfolio() {
  // You can replace with your own video links
  const videos = [
    {
      title: "Showreel 2024",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "Character Walk Cycle",
      src: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    },
  ];

  return (
    <section id="portfolio" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Portofolio Video</h2>
          <p className="text-slate-300/80 mt-2">Beberapa karya animasi 3D pilihan</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-slate-800/50 border border-white/10 backdrop-blur md:aspect-video"
            >
              <video controls className="w-full h-full object-cover">
                <source src={v.src} type="video/mp4" />
                Browser anda tidak mendukung video.
              </video>
              <div className="p-4 border-t border-white/10">
                <p className="text-white font-medium">{v.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
