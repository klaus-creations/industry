import { ChevronDown } from 'lucide-react';
import { FAQS } from '../../constants/data';

export const FAQSection = () => {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">FAQs</span>
          <h2 className="text-4xl font-bold tracking-tight">Frequently asked questions</h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-border pb-4">
              <button className="w-full flex justify-between items-center text-left py-4 hover:text-primary transition-colors">
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown size={20} />
              </button>
              <div className="text-text-muted text-sm pb-4 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
