import { motion } from 'motion/react';
import { Zap, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  setActivePage: (page: string) => void;
}

export const HeroSection = ({ setActivePage }: HeroSectionProps) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1532187875605-1ef6c237dd1d?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30"
          alt="Laboratory"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-secondary/40 to-secondary" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-8"
        >
          <Zap size={14} className="text-primary" />
          <span className="text-[10px] font-bold tracking-widest uppercase text-text/80">High Quality, Fair Price</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          Your <span className="text-primary italic">trusted</span> Chemical Import Partner in Ethiopia.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-text-muted mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Delivering high-quality chemicals for industry and laboratories with unmatched reliability and expert care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => setActivePage('Products')}
            className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xs font-bold transition-all flex items-center justify-center gap-2"
          >
            Explore Products <ArrowRight size={18} />
          </button>
          <button
            onClick={() => setActivePage('Contact')}
            className="w-full md:w-auto glass hover:bg-white/10 text-text px-8 py-4 rounded-xs font-bold transition-all"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};
