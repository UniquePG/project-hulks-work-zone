import { motion } from "motion/react";
import { ShieldCheck, Zap, Flame, Trophy, TrendingUp, Info, Target, Dumbbell, Award } from "lucide-react";
import { Link } from "react-router-dom";

const programs = [
  {
    id: "power-elite",
    name: "Power Elite Program",
    objective: "District Level Strength",
    description: "Train under the direct supervision of Ajay Gurjar, district level powerlifting champion. Focus on the Big 3: Squat, Bench, and Deadlift.",
    features: ["Personalized programming", "Technique video analysis", "Peaking cycles for meets"],
    color: "from-hulk-green/20",
    icon: Trophy,
  },
  {
    id: "hulk-transformation",
    name: "Hulk Transformation",
    objective: "Physique & Conditioning",
    description: "The ultimate 12-week blueprint for fat loss and lean muscle mass. Includes a dedicated posing room sessions for athletes.",
    features: ["Nutrition coaching", "HIIT & Cardio protocols", "Body fat tracking"],
    color: "from-orange-500/20",
    icon: Flame,
  },
  {
    id: "pro-athlete",
    name: "Pro Athlete Prep",
    objective: "Competition Ready",
    description: "Get stage-ready with our advanced athletic prep. Utilizes our dedicated posing room and state-of-the-art equipment.",
    features: ["Stage presence coaching", "Peak week management", "Macro adjustment"],
    color: "from-blue-500/20",
    icon: Target,
  }
];

export default function TrainerChoice() {
  return (
    <div className="py-24" id="trainer-choice-page">
      {/* Hero */}
      <section className="relative py-24 mb-20 overflow-hidden bg-hulk-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hulk-green/10 border border-hulk-green/20 mb-8 mx-auto">
              <ShieldCheck size={16} className="text-hulk-green" />
              <span className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green">Certified Championship Coaching</span>
            </div>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase italic tracking-tighter mb-8 leading-none">
              Champion <br /> <span className="text-hulk-green text-hulk-glow">Blueprint</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl uppercase tracking-widest font-bold leading-relaxed mb-12">
              Don't just train. Train with purpose. Our programs are designed by winners to build winners. Experience Dabra's most technical coaching.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-hulk-surface/50 rounded-[3rem] p-10 border border-white/5 hover:border-hulk-green/40 transition-all duration-500 flex flex-col group overflow-hidden shadow-2xl`}
              id={`program-${program.id}`}
            >
              <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${program.color} to-transparent blur-[100px] -mr-40 -mt-40 opacity-50`} />
              
              <div className="flex items-center justify-between mb-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-hulk-green/10 flex items-center justify-center border border-hulk-green/20 transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                  <program.icon className="text-hulk-green" size={32} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green mb-1 italic">Objective</div>
                  <div className="text-sm font-black text-white uppercase italic">{program.objective}</div>
                </div>
              </div>

              <h2 className="font-display font-black text-4xl uppercase italic tracking-tighter mb-6 leading-none group-hover:text-hulk-green transition-colors relative z-10">
                {program.name}
              </h2>

              <p className="text-white/50 text-sm leading-relaxed mb-8 relative z-10 font-medium uppercase tracking-wider italic">
                {program.description}
              </p>

              <div className="flex-grow mb-10 relative z-10">
                <h4 className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-white/30 mb-6 italic">Core Modules:</h4>
                <ul className="flex flex-col gap-4">
                  {program.features.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-xs text-white/80 font-black uppercase tracking-widest italic">
                      <Zap size={14} className="text-hulk-green" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <Link 
                to="/contact" 
                className="mt-auto hulk-gradient w-full py-5 rounded-2xl font-display font-black text-black uppercase tracking-widest text-center hover:scale-[1.02] active:scale-95 transition-all relative z-10 shadow-xl"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Coach Highlight */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center bg-white/[0.02] border border-white/5 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-hulk-green/5 blur-[150px] rounded-full pointer-events-none" />
          
          <div className="space-y-8 relative z-10">
            <div className="flex items-center gap-3">
               <ShieldCheck className="text-hulk-green" size={24} />
               <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs italic">Meet Your Mentor</span>
            </div>
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-none">
              Ajay Gurjar <br /> <span className="text-hulk-green">Pachoura</span>
            </h2>
            <p className="text-white/40 text-xl font-light leading-relaxed uppercase tracking-widest italic">
              "My objective is to turn every member into a beast. I have spent a decade learning the mechanics of power and physique. Now, I am giving that knowledge to you."
            </p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-hulk-green/10 flex items-center justify-center">
                    <Trophy className="text-hulk-green" size={20} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] italic">District Level Powerlifting Champion</span>
               </div>
               <div className="flex items-center gap-4 text-white/80">
                  <div className="w-10 h-10 rounded-full bg-hulk-green/10 flex items-center justify-center">
                    <Award className="text-hulk-green" size={20} />
                  </div>
                  <span className="text-sm font-black uppercase tracking-[0.2em] italic">Certified Pro Fitness Coach</span>
               </div>
            </div>
          </div>
          
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="aspect-square w-64 md:w-80 rounded-full hulk-gradient p-2 animate-[spin_30s_linear_infinite]">
                 <div className="w-full h-full bg-hulk-dark rounded-full flex items-center justify-center border-4 border-dashed border-hulk-green/30" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Dumbbell className="text-hulk-green group-hover:scale-125 group-hover:rotate-12 transition-all duration-700" size={100} />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-hulk-green text-black px-6 py-2 rounded-full font-display font-black text-[10px] uppercase tracking-[0.4em] shadow-xl whitespace-nowrap italic">
                OWNER & HEAD COACH
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
