import { motion } from "motion/react";
import { Users, History, Award, CheckCircle2, Trophy, MapPin, Star, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="py-24" id="about-page">
      {/* Intro Header */}
      <section className="relative py-24 mb-20 overflow-hidden bg-hulk-surface/30">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[100%] bg-hulk-green rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-hulk-green font-display font-black uppercase tracking-[0.5em] text-xs mb-6 block italic">Our DNA</span>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase italic tracking-tighter mb-10 leading-[0.8] text-hulk-glow">
               The Hulk <br /> <span className="text-white">Philosophy</span>
            </h1>
            <p className="text-white/40 max-w-4xl mx-auto text-lg md:text-2xl leading-relaxed uppercase tracking-wider font-light italic">
              Established in Dabra, <span className="text-white font-bold">Hulks Work Zone</span> is more than a gym. It is a brotherhood of strength, dedicated to pushing the human body beyond its perceived limits.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Core Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="relative group">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                 alt="Hulks Work Zone Training"
                 className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
               />
             </div>
             <div className="absolute -bottom-10 -right-10 hulk-gradient p-12 rounded-[2.5rem] shadow-[0_0_50px_rgba(191,255,0,0.3)] flex flex-col items-center">
               <Award className="text-black mb-4" size={48} />
               <div className="font-display font-black text-5xl text-black leading-none">GOLD</div>
               <div className="text-[10px] font-black uppercase tracking-widest text-black/60 mt-1">Standard Training</div>
             </div>
          </div>
          
          <div className="flex flex-col gap-10">
            <div className="space-y-4">
              <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs">Legacy</span>
              <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter leading-[0.9]">
                Best Gym <br /> In <span className="text-hulk-green">Dabra</span>
              </h2>
            </div>
            
            <p className="text-white/50 text-xl leading-relaxed font-light">
              Founded by <span className="text-white font-bold italic">Ajay Gurjar Pachoura</span>, a District Level Powerlifting Champion, Hulks Work Zone was born out of a passion for raw strength and physical transformation. We have built the most spacious and well-equipped facility in town, featuring dedicated sections for Cardio, Strength, and Crossfit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Trophy, title: "10+ Years", desc: "Coaching Excellence" },
                { icon: Users, title: "1000+", desc: "Transformations" },
                { icon: ShieldCheck, title: "Certified", desc: "Pro Trainers" },
                { icon: MapPin, title: "Jawahar Ganj", desc: "Heart of Dabra" },
              ].map((item, i) => (
                <div key={item.title} className="flex flex-col gap-4 p-8 rounded-[2rem] bg-hulk-surface border border-white/5 hover:border-hulk-green/30 transition-all duration-500">
                  <item.icon className="text-hulk-green" size={28} />
                  <div>
                    <h4 className="font-display font-black uppercase tracking-widest text-sm italic text-white">{item.title}</h4>
                    <p className="text-xs text-white/40 uppercase font-bold tracking-widest mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Man Behind The Zone */}
        <section className="py-24 border-t border-white/5 mb-40">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
            <div className="md:col-span-1">
              <div className="relative">
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden border-2 border-hulk-green p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=1974&auto=format&fit=crop" 
                    className="w-full h-full object-cover rounded-[2rem] grayscale"
                    alt="Ajay Gurjar Pachoura"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-hulk-green rounded-full flex items-center justify-center -rotate-12">
                   <Star className="text-black fill-black" size={32} />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-10">
              <div className="space-y-4">
                <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs">The Visionary</span>
                <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-none">
                  Ajay Gurjar <br /> <span className="text-hulk-green">Pachoura</span>
                </h2>
                <div className="flex flex-wrap gap-4 pt-2">
                  <span className="px-4 py-2 bg-hulk-green/10 border border-hulk-green/20 rounded-full text-[10px] font-black uppercase tracking-widest text-hulk-green">District Level Champion</span>
                  <span className="px-4 py-2 bg-hulk-green/10 border border-hulk-green/20 rounded-full text-[10px] font-black uppercase tracking-widest text-hulk-green">Certified Pro Trainer</span>
                </div>
              </div>

              <p className="text-lg md:text-xl text-white/60 leading-relaxed italic font-medium">
                "Training is not just about the weights; it's about the discipline you build when nobody is watching. At Hulks Work Zone, we don't just sell memberships; we sell results. If you have the heart to struggle, we have the science to help you succeed."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6">
                {[
                  { label: "District Title", val: "Powerlifting" },
                  { label: "Experience", val: "12+ Years" },
                  { label: "Athletes Trained", val: "500+" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-[10px] text-white/30 uppercase font-black tracking-widest">{stat.label}</div>
                    <div className="text-2xl font-display font-black text-hulk-green uppercase italic">{stat.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialities */}
        <section className="mb-40">
          <div className="text-center mb-20">
            <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter mb-4">
              Our <span className="text-hulk-green">Specialities</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Spacious Gym", desc: "Most spacious gym in town with modern layout." },
              { title: "Steam Bath", desc: "Relax and recover with our premium steam facilities." },
              { title: "Dedicated Posing", desc: "Dedicated posing room for bodybuilding prep." },
              { title: "Safe Environment", desc: "Safe and secure environment for women & kids." },
              { title: "Cardio Section", desc: "State of the art cardio floor for endurance." },
              { title: "Crossfit", desc: "Industrial grade crossfit area for high intensity." }
            ].map((feature, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-hulk-surface border border-white/5 hover:border-hulk-green transition-all duration-300">
                <h3 className="font-display font-black text-xl uppercase italic tracking-widest text-hulk-green mb-4">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed uppercase tracking-widest font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Callout */}
        <section className="py-20 rounded-[3rem] bg-hulk-green relative overflow-hidden mb-20 shadow-[0_0_60px_rgba(191,255,0,0.2)]">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <Dumbbell className="text-black" size={300} />
           </div>
           <div className="relative z-10 px-12 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-4 text-center md:text-left">
                <h3 className="font-display font-black text-4xl md:text-6xl text-black uppercase italic tracking-tighter leading-none">
                  Visit The Zone <br /> In Dabra
                </h3>
                <p className="text-black/60 font-bold uppercase tracking-widest text-sm max-w-sm">
                  In front of veterinary hospital, Jawahar Ganj, Dabra. Open 5:00 AM - 10:00 PM.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Hulks+Work+Zone+Dabra" 
                target="_blank" 
                rel="noreferrer"
                className="bg-black text-white px-12 py-6 rounded-2xl font-display font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-2xl inline-block"
              >
                Get Directions
              </a>
           </div>
        </section>
      </div>
    </div>
  );
}

const Dumbbell = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    className={className} 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M6.5 6.5h11" />
    <path d="M6.5 17.5h11" />
    <path d="m3 21 18-18" />
    <path d="M3 10h4v4H3z" />
    <path d="M17 10h4v4h-4z" />
    <path d="M10 3h4v4h-4z" />
    <path d="M10 17h4v4h-4z" />
  </svg>
);
