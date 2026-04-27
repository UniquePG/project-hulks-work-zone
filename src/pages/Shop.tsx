import { useState } from "react";
import { motion } from "motion/react";
import { Search, Grid, List as ListIcon, ShieldCheck } from "lucide-react";
import ProductCard from "../components/ProductCard";

const allProducts = [
  { id: "1", name: "Massive Whey Isolate", price: "4,899", category: "Proteins", image: "https://images.unsplash.com/photo-1593095191071-8806300f284c?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "2", name: "Gamma Blast Pre-Workout", price: "2,499", category: "Performance", image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "3", name: "Pure Micronized Creatine", price: "1,299", category: "Core", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "4", name: "BCAAs Rocket Fuel", price: "1,299", category: "Recovery", image: "https://images.unsplash.com/photo-1610970882739-44936d6d494a?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "5", name: "Vegan Hulk Protein", price: "3,499", category: "Proteins", image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "6", name: "Night Fury Casein", price: "3,999", category: "Recovery", image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
  { id: "7", name: "Alpha Multivitamin", price: "999", category: "Health", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: true },
  { id: "8", name: "Iron Grip Fat Burner", price: "1,799", category: "Performance", image: "https://images.unsplash.com/photo-1471864190281-ad5fe9ac5924?q=80&w=2070&auto=format&fit=crop", isTrainerChoice: false },
];

const categories = ["All", "Proteins", "Performance", "Recovery", "Core", "Health"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-24" id="shop-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center lg:text-left pt-20">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Nutri Zone</span>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase italic tracking-tighter mb-6 leading-none">
              The <span className="text-hulk-green">Armoury</span>
            </h1>
            <p className="text-white/40 max-w-2xl text-lg uppercase tracking-widest font-bold leading-relaxed">
              Certified authentic supplements curated by championship athletes. Fuel your transformation with the best in Dabra.
            </p>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={24} />
            <input 
              type="text" 
              placeholder="Search supplements..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-hulk-surface border border-white/5 rounded-[2rem] py-6 pl-16 pr-6 focus:outline-none focus:border-hulk-green transition-all text-xl uppercase tracking-widest font-black italic shadow-2xl"
              id="shop-search"
            />
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 lg:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-8 py-6 rounded-[2rem] font-display font-black uppercase tracking-[0.2em] text-xs whitespace-nowrap transition-all border ${
                  selectedCategory === cat 
                    ? "hulk-gradient text-black border-transparent shadow-[0_0_20px_rgba(191,255,0,0.3)]" 
                    : "bg-hulk-surface border-white/5 text-white/40 hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-hulk-green" size={20} />
            <p className="text-sm font-display font-black text-white uppercase tracking-[0.3em] italic">
              Showing {filteredProducts.length} Authenticated Batches
            </p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button className="w-12 h-12 flex items-center justify-center bg-hulk-green text-black rounded-xl"><Grid size={22} /></button>
            <button className="w-12 h-12 flex items-center justify-center bg-white/5 text-white/30 rounded-xl hover:text-white transition-all"><ListIcon size={22} /></button>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                isTrainerChoice={product.isTrainerChoice}
              />
            ))}
          </div>
        ) : (
          <div className="py-40 text-center bg-hulk-surface/30 rounded-[3rem] border border-dashed border-white/10">
            <div className="text-hulk-green/20 mb-8 flex justify-center">
              <Search size={100} />
            </div>
            <h3 className="font-display font-black text-4xl uppercase italic tracking-tighter text-white mb-4">No results found</h3>
            <p className="text-white/30 uppercase tracking-widest font-bold">The scout couldn't find matches for "{searchQuery}"</p>
          </div>
        )}

        {/* Banner */}
        <div className="mt-32 p-12 md:p-20 rounded-[3rem] bg-hulk-surface border border-hulk-green/20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-hulk-green/5 blur-[120px] scale-0 group-hover:scale-100 transition-transform duration-1000" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
               <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter leading-none mb-6">
                 Expert <span className="text-hulk-green">Assistance</span> For Your Goal
               </h2>
               <p className="text-white/50 text-xl font-light leading-relaxed uppercase tracking-widest">
                 Confused about which supplement fits your training block? Our certified coaches in Dabra provide free consultations for Nutri Zone customers.
               </p>
               <button className="hulk-gradient px-12 py-5 rounded-2xl font-display font-black text-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl">
                 Chat with Coach
               </button>
            </div>
            <div className="hidden lg:block relative">
               <img 
                 src="https://images.unsplash.com/photo-1593095191071-8806300f284c?q=80&w=2070&auto=format&fit=crop" 
                 className="rounded-3xl rotate-3 shadow-2xl grayscale hover:rotate-0 transition-transform duration-700"
                 alt="Supplement Pro"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
