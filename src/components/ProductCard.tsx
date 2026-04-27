import { motion } from "motion/react";
import { ShoppingCart, Star, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
  isTrainerChoice?: boolean;
  key?: string | number | null;
}

export default function ProductCard({ id, name, price, image, category, isTrainerChoice }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-hulk-surface/40 hover:bg-hulk-surface transition-all duration-500 rounded-[2rem] overflow-hidden border border-white/5 hover:border-hulk-green/30"
      id={`product-${id}`}
    >
      <div className="relative aspect-square overflow-hidden bg-hulk-dark/20">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
        {isTrainerChoice && (
          <div className="absolute top-4 left-4 hulk-gradient px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-[0_0_15px_rgba(191,255,0,0.4)]">
            <ShieldCheck size={14} className="text-black" />
            <span className="text-[10px] font-display font-black text-black uppercase tracking-wider italic">Expert Pick</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-hulk-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
          <button className="hulk-gradient w-full py-4 rounded-xl font-display font-black text-black uppercase tracking-widest flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <ShoppingCart size={20} />
            Add to Pack
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-display font-black text-hulk-green uppercase tracking-[0.3em] italic">{category}</span>
          <div className="flex items-center gap-1.5 text-hulk-green">
            <Star size={12} fill="currentColor" />
            <span className="text-xs font-black text-white uppercase tracking-widest">4.9</span>
          </div>
        </div>
        <h3 className="font-display font-black text-xl mb-6 group-hover:text-hulk-green transition-colors leading-[1.1] uppercase italic tracking-tighter">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-display font-black italic tracking-tighter text-white">
            ₹{price}
          </span>
          <Link 
            to={`/shop`} 
            className="text-[10px] font-display font-black uppercase tracking-[0.2em] text-white/30 hover:text-hulk-green transition-colors italic border-b border-white/10"
          >
            Full Specs
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
