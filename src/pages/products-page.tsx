import { useState } from 'react';
import { Search, ChevronDown, Globe, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants/data';
import { Product } from '../types';

export const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = ['All Categories', 'Industrial Chemicals', 'Laboratory Chemicals', 'Equipment'];

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
                <img src={p.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={p.name} referrerPolicy="no-referrer" />
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
                <img src={selectedProduct.image} className="w-full h-full object-cover" alt={selectedProduct.name} referrerPolicy="no-referrer" />
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

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
