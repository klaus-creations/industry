import { Clock, ShieldCheck, Zap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Powering Ethiopia's Growth One Chemical at a Time.</h1>
          <p className="text-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Sida General Trading is a premier chemical importer company with a proven track record of sourcing and distributing high-quality chemicals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>At Sida General Trading, we understand the importance of delivering top-notch products and services to our clients. Our team is dedicated to providing best-in-class chemicals and ensuring that our customers receive their orders in a timely and efficient manner.</p>
            <p>With our expertise in managing logistics and supply chain, we guarantee a seamless experience for our clients. We are not just importers. We're enablers of progress.</p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">8+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold">Chemical Categories</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">200+</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold">Chemical Products</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">100%</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold">Quality Assurance</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-primary mb-1">24/7</h4>
                <p className="text-[10px] uppercase tracking-widest font-bold">Technical Support</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" className="rounded-xs w-full h-80 object-cover" alt="Warehouse" referrerPolicy="no-referrer" />
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" className="rounded-xs w-full h-80 object-cover mt-12" alt="Chemicals" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Choose Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'On-Time Delivery', desc: 'Our coordinated logistics and supply chain partnerships ensure prompt delivery of your chemicals—every time, without exception.', icon: <Clock className="text-primary" /> },
              { title: 'Uncompromised Quality', desc: 'All products undergo rigorous quality control and meet international standards. We deliver consistent performance and purity you can trust.', icon: <ShieldCheck className="text-primary" /> },
              { title: 'Industry Leader', desc: 'With years of experience and deep industry knowledge, we lead the way in chemical sourcing, quality standards, and customer service excellence.', icon: <Zap className="text-primary" /> },
            ].map((item, i) => (
              <div key={i} className="glass p-10 rounded-xs">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
