/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Search, 
  Filter,
  ArrowRight,
  CheckCircle2,
  Users,
  Globe,
  ShieldCheck,
  Zap,
  Menu,
  X,
  Star,
  MessageSquare,
  Facebook,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---

interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  origin: string;
  description?: string;
  specifications?: Record<string, string>;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

// --- Mock Data ---

const PRODUCTS: Product[] = [
  { id: '1', name: 'Butyl Glycol', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical1/800/800', origin: 'India', description: 'Butyl Glycol, also known as 2-butoxyethanol, is a colorless liquid with a mild ether-like odor. It serves as a solvent in paints, coatings, inks, and cleaning products due to its ability to dissolve both water-soluble and oil-based substances.' },
  { id: '2', name: 'CAPB', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical2/800/800', origin: 'India' },
  { id: '3', name: 'Calcium Hypochlorite', category: 'Water Treatment', image: 'https://picsum.photos/seed/chemical3/800/800', origin: 'India' },
  { id: '4', name: 'Caustic Soda 99%', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical4/800/800', origin: 'UAE' },
  { id: '5', name: 'CDEA', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical5/800/800', origin: 'Indonesia' },
  { id: '6', name: 'Ceramic and Other Floor Cleaner', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical6/800/800', origin: 'China' },
  { id: '7', name: 'Citric Acid', category: 'Food & Beverage', image: 'https://picsum.photos/seed/chemical7/800/800', origin: 'China' },
  { id: '8', name: 'CMC', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical8/800/800', origin: 'China' },
  { id: '9', name: 'Coco Diethyl Amide', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical9/800/800', origin: 'India' },
  { id: '10', name: 'Color Additives', category: 'Paints & Solvents', image: 'https://picsum.photos/seed/chemical10/800/800', origin: 'Global' },
  { id: '11', name: 'Dolomite', category: 'Industrial', image: 'https://picsum.photos/seed/chemical11/800/800', origin: 'Global' },
  { id: '12', name: 'EDTA', category: 'Detergents & Cosmetics', image: 'https://picsum.photos/seed/chemical12/800/800', origin: 'China' },
];

const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Abel Hailemariam', role: 'Business Owner', content: 'Good quality products and they know what they\'re doing. Fair prices every time.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=abel' },
  { id: '2', name: 'Selam Tesfaye', role: 'Production Manager', content: 'Professional packaging and handling. Had one small issue last year and they fixed it immediately.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=selam' },
  { id: '3', name: 'Yared Mengistu', role: 'Logistics Manager', content: 'Fast delivery, even for urgent orders. They\'ve saved us from production delays more than once.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=yared' },
  { id: '4', name: 'Hanna Tsegaye', role: 'Quality Control', content: 'Their team actually understands our needs and gives good technical advice. It\'s not just about making a sale.', rating: 5, avatar: 'https://i.pravatar.cc/150?u=hanna' },
];

const FAQS = [
  { question: 'What types of chemicals do you supply?', answer: 'We supply a wide range of industrial, laboratory, and specialty chemicals across various sectors including detergents, cosmetics, food & beverage, water treatment, and more.' },
  { question: 'Do you import directly from manufacturers?', answer: 'Yes, we source our products directly from reputable global manufacturers to ensure quality and competitive pricing.' },
  { question: 'Are your products certified and compliant with local regulations?', answer: 'Absolutely. All our products meet international quality standards and are fully compliant with Ethiopian regulatory requirements.' },
  { question: 'What industries do you serve?', answer: 'We serve a diverse range of industries including manufacturing, agriculture, healthcare, and research institutions.' },
  { question: 'Do you provide technical support and expertise?', answer: 'Yes, our team of experts provides technical guidance and support to help you choose the right chemicals for your specific applications.' },
];

// --- Components ---

const Navbar = ({ activePage, setActivePage, theme, toggleTheme }: { 
  activePage: string, 
  setActivePage: (page: string) => void,
  theme: string,
  toggleTheme: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Products', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActivePage('Home')}>
          <div className="w-10 h-10 bg-primary rounded-xs flex items-center justify-center">
            <span className="text-2xl font-bold text-white">J</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tighter">JEMACHEM</span>
            <span className="text-[10px] tracking-widest text-primary font-semibold">TRADING PLC</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActivePage(item)}
              className={`text-sm font-medium transition-colors hover:text-primary ${activePage === item ? 'text-primary' : 'text-text/80'}`}
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => setActivePage('Contact')}
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2 rounded-xs text-sm font-semibold transition-all"
          >
            Get Brochure
          </button>
          
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-xs flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <div className="flex items-center gap-3 ml-4 border-l border-border pl-6">
            <Send size={16} className="text-text/60 hover:text-text cursor-pointer" />
            <Instagram size={16} className="text-text/60 hover:text-text cursor-pointer" />
            <Facebook size={16} className="text-text/60 hover:text-text cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 glass rounded-xs flex items-center justify-center"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="text-text" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full glass p-6 flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActivePage(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-medium ${activePage === item ? 'text-primary' : 'text-text'}`}
              >
                {item}
              </button>
            ))}
            <button className="bg-primary text-white py-3 rounded-xs font-semibold">Get Brochure</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <footer className="bg-secondary pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary rounded-xs flex items-center justify-center">
              <span className="text-2xl font-bold text-white">J</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tighter">JEMACHEM</span>
              <span className="text-[10px] tracking-widest text-primary font-semibold">TRADING PLC</span>
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
            <li className="hover:text-primary cursor-pointer transition-colors">Detergents & Cosmetics</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Food & Beverage</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Paints & Solvents</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Plastics & Foam</li>
          </ul>
        </div>

        <div>
          <h4 className="text-text font-bold mb-6">More Categories</h4>
          <ul className="space-y-3 text-text-muted text-sm">
            <li className="hover:text-primary cursor-pointer transition-colors">Water Treatment</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Leather & Footwear</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Textiles</li>
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
        <p className="text-text/40 text-xs">© 2026 JemaChem Trading. All rights reserved.</p>
        <div className="flex gap-6 text-text/40 text-xs">
          <span className="hover:text-text cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-text cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const TEAM = [
  { name: 'Jemal Ahmed', role: 'Founder & CEO', image: 'https://i.pravatar.cc/150?u=jemal' },
  { name: 'Amare Tadesse', role: 'Operations Manager', image: 'https://i.pravatar.cc/150?u=amare' },
  { name: 'Lidya Girma', role: 'Sales Head', image: 'https://i.pravatar.cc/150?u=lidya' },
  { name: 'Dawit Solomon', role: 'Logistics Coordinator', image: 'https://i.pravatar.cc/150?u=dawit' },
];

const LOGOS = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1024px-Slack_Technologies_Logo.svg.png',
];

const HomePage = ({ setActivePage }: { setActivePage: (page: string) => void }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1532187875605-1ef6c237dd1d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30"
            alt="Laboratory"
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

      {/* Trusted By Section */}
      <section className="py-12 border-y border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-text/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Trusted by Ethiopia's Leading Sectors</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all">
            {LOGOS.map((logo, i) => (
              <img key={i} src={logo} className="h-6 md:h-8 object-contain" alt="Partner Logo" />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Clients Served', value: '200+' },
              { label: 'Industries Covered', value: '15+' },
              { label: 'On-time Deliveries', value: '100%' },
              { label: 'Years of Experience', value: '5+' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tighter">{stat.value}</h3>
                <p className="text-text/40 text-xs font-medium uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Products</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Core Chemical Solutions</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Discover our comprehensive chemical solutions for diverse industries—we import and distribute quality chemicals that power your business success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Detergent & Cosmetics', img: 'https://picsum.photos/seed/det/800/600', desc: 'Ingredients for soaps and detergent.' },
              { title: 'Tannery & Footwear', img: 'https://picsum.photos/seed/tan/800/600', desc: 'Chemicals for leather and shoes.' },
              { title: 'Food & Beverage', img: 'https://picsum.photos/seed/food/800/600', desc: 'Additives and cleaners for food and drinks.' },
              { title: 'Paints & Solvents', img: 'https://picsum.photos/seed/paint/800/600', desc: 'Paint colors and solvents.' },
              { title: 'Textile', img: 'https://picsum.photos/seed/tex/800/600', desc: 'Dyes and finishes for fabrics.' },
              { title: 'Water Treatment', img: 'https://picsum.photos/seed/water/800/600', desc: 'Chemicals to clean and treat water.' },
            ].map((item, i) => (
              <div key={i} className="group relative h-80 rounded-xs overflow-hidden cursor-pointer" onClick={() => setActivePage('Products')}>
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
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

      {/* Testimonials */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-1 mb-4">
              <Star size={16} className="text-primary fill-primary" />
              <Star size={16} className="text-primary fill-primary" />
              <Star size={16} className="text-primary fill-primary" />
              <Star size={16} className="text-primary fill-primary" />
              <Star size={16} className="text-primary fill-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Meet our happy clients</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass p-8 rounded-xs">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} className="w-12 h-12 rounded-full object-cover" alt={t.name} />
                  <div>
                    <h4 className="font-bold text-sm">{t.name}</h4>
                    <p className="text-text/40 text-[10px] uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-text-muted text-sm leading-relaxed italic">"{t.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* CTA */}
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
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-32">
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">About Us</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Powering Ethiopia's Growth One Chemical at a Time.</h1>
          <p className="text-text-muted max-w-3xl mx-auto text-lg leading-relaxed">
            Jemachem Trading is a premier chemical importer company with a proven track record of sourcing and distributing high-quality chemicals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>At Jemachem Trading, we understand the importance of delivering top-notch products and services to our clients. Our team is dedicated to providing best-in-class chemicals and ensuring that our customers receive their orders in a timely and efficient manner.</p>
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
            <img src="https://picsum.photos/seed/about1/600/800" className="rounded-xs w-full h-80 object-cover" alt="Warehouse" />
            <img src="https://picsum.photos/seed/about2/600/800" className="rounded-xs w-full h-80 object-cover mt-12" alt="Chemicals" />
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

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Team Behind Our Success</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="glass rounded-xs overflow-hidden group">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={member.name} />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg">{member.name}</h4>
                  <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All Categories', 'Detergents & Cosmetics', 'Food & Beverage', 'Water Treatment', 'Paints & Solvents', 'Industrial'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Products</span>
          <h1 className="text-5xl font-bold tracking-tight mb-6">Chemical Products Gallery</h1>
          <p className="text-text-muted max-w-2xl mx-auto">Discover our comprehensive range of industrial chemicals, agrochemicals, and laboratory reagents.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text/40" size={18} />
            <input 
              type="text" 
              placeholder="Search products, brands, or countries..." 
              className="w-full glass rounded-xs py-4 pl-12 pr-4 focus:outline-none focus:border-primary transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative min-w-[200px]">
            <select 
              className="w-full glass rounded-xs py-4 px-4 appearance-none focus:outline-none focus:border-primary transition-colors cursor-pointer"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(c => <option key={c} value={c} className="bg-secondary">{c}</option>)}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-text/40 pointer-events-none" size={18} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              key={p.id} 
              className="group glass rounded-xs overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              <div className="aspect-square overflow-hidden relative">
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={p.name} />
                <div className="absolute top-4 right-4 glass px-2 py-1 rounded-xs text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                  <Globe size={10} /> {p.origin}
                </div>
              </div>
              <div className="p-6">
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1 block">{p.category}</span>
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text/40">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-secondary/90 backdrop-blur-sm" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl glass rounded-xs overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-full md:w-1/2 aspect-square md:aspect-auto">
                <img src={selectedProduct.image} className="w-full h-full object-cover" alt={selectedProduct.name} />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-2 block">{selectedProduct.category}</span>
                <h2 className="text-3xl font-bold mb-6">{selectedProduct.name}</h2>
                
                <div className="flex items-center gap-2 mb-8">
                  <Globe size={16} className="text-text/40" />
                  <span className="text-sm text-text-muted">Origin: <strong>{selectedProduct.origin}</strong></span>
                </div>

                <div className="space-y-6 mb-10">
                  <h4 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">Description</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {selectedProduct.description || "High-quality chemical solution sourced from trusted global manufacturers. Suitable for various industrial applications within its category."}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-widest border-b border-border pb-2">Specifications</h4>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div className="text-text/40">Purity</div>
                    <div className="text-text/80 font-bold">99.5% Min</div>
                    <div className="text-text/40">Appearance</div>
                    <div className="text-text/80 font-bold">Clear Liquid</div>
                    <div className="text-text/40">Packaging</div>
                    <div className="text-text/80 font-bold">200kg Drum</div>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xs font-bold transition-all mt-10">
                  Request Quote
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-primary text-xs font-bold uppercase tracking-widest mb-4 block">Contact Us</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Get in touch with us</h1>
          <p className="text-text-muted max-w-2xl mx-auto">Ready to source quality chemicals for your business? Our team is here to help you find the right solutions. Let's discuss your chemical supply needs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {[
            { title: 'Sales', desc: 'Interested in our chemical products? Contact our sales team for pricing and availability.', icon: <Zap className="text-primary" /> },
            { title: 'Support', desc: 'Need technical specifications, product information, or assistance with your order? Our experts are here to help.', icon: <MessageSquare className="text-primary" /> },
            { title: 'General Inquiries', desc: 'For partnerships, bulk orders, or general questions, reach out to us.', icon: <Globe className="text-primary" /> },
          ].map((item, i) => (
            <div key={i} className="glass p-10 rounded-xs text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="glass p-8 rounded-xs">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Email</p>
                    <p className="font-medium">jemachemtrading@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Phone</p>
                    <p className="font-medium">+251 913 119 689</p>
                    <p className="font-medium">+251 975 818 880</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Office</p>
                    <p className="font-medium">Aynalem Beze Bldg, 2nd Fl, Office No. 216</p>
                    <p className="font-medium">Bulgaria Mazoria, Kirkos Sub-City</p>
                    <p className="font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 glass rounded-xs flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-text/40 mb-1">Hours</p>
                    <p className="font-medium">Mon-Fri, 8:30AM-5:30PM EAT</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-xs">
            <h3 className="text-2xl font-bold mb-8">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text/40">First Name *</label>
                  <input type="text" className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text/40">Last Name *</label>
                  <input type="text" className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Email Address *</label>
                <input type="email" className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Phone Number *</label>
                <input type="tel" className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text/40">Message *</label>
                <textarea rows={4} className="w-full glass rounded-xs py-3 px-4 focus:outline-none focus:border-primary resize-none"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xs font-bold transition-all">
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activePage === 'Home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'About' && <AboutPage />}
            {activePage === 'Products' && <ProductsPage />}
            {activePage === 'Contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
