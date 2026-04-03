import { Send, Instagram, Facebook } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: string) => void;
}

export const Footer = ({ setActivePage }: FooterProps) => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xs flex items-center justify-center">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tighter uppercase">Sida</span>
              <span className="text-[10px] tracking-widest text-primary font-semibold uppercase">General Trading</span>
            </div>
          </div>
          <p className="text-text-muted text-sm leading-relaxed mb-6">
            We import and supply high-quality industrial and laboratory chemicals across Ethiopia, supporting key industries with trusted solutions.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Send size={14} />
            </div>
            <div className="w-8 h-8 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Instagram size={14} />
            </div>
            <div className="w-8 h-8 rounded-xs glass flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
              <Facebook size={14} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-text font-bold mb-6">Product Categories</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li className="hover:text-primary cursor-pointer transition-colors">Industrial Chemicals</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Laboratory Chemicals</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Equipment</li>
          </ul>
        </div>

        <div>
          <h4 className="text-text font-bold mb-6">Pages</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li onClick={() => setActivePage('Home')} className="hover:text-primary cursor-pointer transition-colors">Home</li>
            <li onClick={() => setActivePage('About')} className="hover:text-primary cursor-pointer transition-colors">About</li>
            <li onClick={() => setActivePage('Products')} className="hover:text-primary cursor-pointer transition-colors">Products</li>
            <li onClick={() => setActivePage('Contact')} className="hover:text-primary cursor-pointer transition-colors">Contact</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-text/40 text-xs">© 2026 Sida General Trading. All rights reserved.</p>
        <div className="flex gap-6 text-text/40 text-xs">
          <span className="hover:text-text cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-text cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};
