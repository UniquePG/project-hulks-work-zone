import { Link } from "react-router-dom";
import { Dumbbell, Instagram, Facebook, Youtube, Phone, Mail, MapPin, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-hulk-dark border-t border-white/5 pt-24 pb-12 overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 relative">
          {/* Shadow Background Effect */}
          <div className="absolute top-0 -left-20 w-64 h-64 bg-hulk-green/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 hulk-gradient rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(191,255,0,0.2)]">
                <Dumbbell className="text-black" size={26} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter uppercase leading-none italic">
                  Hulks
                </span>
                <span className="font-display font-bold text-lg tracking-tighter uppercase leading-none text-hulk-green italic">
                  Work Zone
                </span>
              </div>
            </Link>
            <p className="text-white/40 leading-relaxed text-sm max-w-xs uppercase tracking-wider font-light">
              Premium fitness destination in Dabra. Home of District Level Powerlifting Champions and elite transformations. Train strong, live fit.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/ajaygurjar_pachoura_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-hulk-green hover:text-black hover:border-hulk-green transition-all group">
                <Instagram size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-hulk-green hover:text-black hover:border-hulk-green transition-all group">
                <Facebook size={22} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-hulk-green hover:text-black hover:border-hulk-green transition-all group">
                <Youtube size={22} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-hulk-green mb-8 italic">Training Plan</h4>
            <ul className="flex flex-col gap-5 text-sm uppercase tracking-[0.2em] font-medium text-white/50">
              <li><Link to="/trainer-choice" className="hover:text-hulk-green transition-all">Strength Training</Link></li>
              <li><Link to="/trainer-choice" className="hover:text-hulk-green transition-all">Conditioning</Link></li>
              <li><Link to="/trainer-choice" className="hover:text-hulk-green transition-all">Transformation</Link></li>
              <li><Link to="/trainer-choice" className="hover:text-hulk-green transition-all">Powerlifting Elite</Link></li>
              <li><Link to="/shop" className="hover:text-hulk-green transition-all">Nutri Zone</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-hulk-green mb-8 italic">Contact</h4>
            <ul className="flex flex-col gap-6 text-sm text-white/60">
              <li className="flex items-start gap-4">
                <Phone size={20} className="text-hulk-green shrink-0 mt-1" />
                <div className="flex flex-col gap-1 tracking-widest font-bold">
                  <span>+91 8770506113</span>
                  <span>+91 7415157538</span>
                </div>
              </li>
              <li className="flex items-start gap-4 uppercase italic">
                <MapPin size={20} className="text-hulk-green shrink-0 mt-1" />
                <span className="leading-relaxed tracking-wider font-medium">
                  In front of veterinary hospital, Jawahar Ganj, Dabra 475110
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-black uppercase tracking-widest text-hulk-green mb-8 italic">Awards</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Award size={20} className="text-hulk-green" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">District Powerlifting Champion</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                <Award size={20} className="text-hulk-green" />
                <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Certified Pro Trainer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">
          <p>© {new Date().getFullYear()} HULKS WORK ZONE. BEST GYM IN DABRA.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-hulk-green transition-colors">Privacy</a>
            <a href="#" className="hover:text-hulk-green transition-colors">Terms</a>
            <span className="text-hulk-green/50">Owned by Ajay Gurjar Pachoura</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
