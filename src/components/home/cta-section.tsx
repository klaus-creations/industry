import { Send, Instagram, Facebook } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-xs text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[120px] -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">Connect With Us</h2>
          <p className="text-text-muted mb-12 max-w-xl mx-auto">Stay informed, ask questions, and get updates on our latest chemical solutions.</p>
          <div className="flex justify-center gap-6">
            <div className="w-12 h-12 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Send size={20} />
            </div>
            <div className="w-12 h-12 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Instagram size={20} />
            </div>
            <div className="w-12 h-12 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Facebook size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
