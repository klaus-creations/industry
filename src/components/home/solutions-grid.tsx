import { ArrowRight } from 'lucide-react';

interface SolutionsGridProps {
  setActivePage: (page: string) => void;
}

export const SolutionsGrid = ({ setActivePage }: SolutionsGridProps) => {
  const solutions = [
    { title: 'Industrial Chemicals', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800', desc: 'High-purity acids and bases for industrial use.' },
    { title: 'Laboratory Chemicals', img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=800', desc: 'Specialized culture media and reagents.' },
    { title: 'Equipment', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=800', desc: 'Precision laboratory instruments and glasswares.' },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Products</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Core Chemical Solutions</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Discover our comprehensive chemical solutions for diverse industries—we import and distribute quality chemicals that power your business success.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <div key={i} className="group relative h-80 rounded-xs overflow-hidden cursor-pointer" onClick={() => setActivePage('Products')}>
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">{item.title}</span>
                <h3 className="text-xl font-bold mb-2">{item.desc}</h3>
                <div className="flex items-center gap-2 text-xs text-text-muted group-hover:text-primary transition-colors">
                  Explore all products <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
