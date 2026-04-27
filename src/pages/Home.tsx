import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Trophy, Target, Shield, Award, Users, ChevronRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from(".hero-title", {
        opacity: 0,
        y: 100,
        skewY: 7,
        duration: 1.2,
        ease: "power4.out",
        stagger: 0.1
      });

      gsap.from(".hero-p", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });

      gsap.from(".hero-btn", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        stagger: 0.1
      });

      // Stats Counters
      const stats = gsap.utils.toArray(".stat-item");
      stats.forEach((stat: any) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "back.out(1.7)"
        });
      });

      // Section Titles
      const titles = gsap.utils.toArray(".section-title");
      titles.forEach((title: any) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out"
        });
      });

      // Cards Reveal
      gsap.from(".reveal-card", {
        scrollTrigger: {
          trigger: ".cards-grid",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="overflow-hidden" ref={heroRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale opacity-30"
            alt="Gym interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hulk-dark via-hulk-dark/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-hulk-dark to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="overflow-hidden mb-6">
              <div className="hero-title inline-flex items-center gap-3 px-4 py-2 rounded-full bg-hulk-green/10 border border-hulk-green/20">
                <div className="w-2 h-2 rounded-full bg-hulk-green animate-pulse" />
                <span className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green">Best Gym in Dabra</span>
              </div>
            </div>
            
            <h1 className="hero-title font-display font-black text-6xl md:text-9xl tracking-tighter uppercase italic leading-[0.8] mb-8">
              Smashed <br />
              <span className="text-hulk-green text-hulk-glow leading-none">The Limits</span>
            </h1>

            <p className="hero-p text-lg md:text-xl text-white/50 mb-12 leading-relaxed max-w-xl uppercase tracking-wider font-light">
              Experience the power of <span className="text-white font-bold italic">Hulks Work Zone</span>. From District Level powerlifting coaching to elite physique transformation, we build legends.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="hero-btn hulk-gradient px-12 py-5 rounded-2xl font-display font-black text-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(191,255,0,0.25)]">
                Start Training <ArrowRight size={22} />
              </Link>
              <Link to="/about" className="hero-btn bg-white/5 border border-white/10 px-12 py-5 rounded-2xl font-display font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all">
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Vertical Rail Text */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none">
          <div className="font-display font-black text-[200px] text-white/[0.02] tracking-tighter uppercase italic leading-none rotate-90 origin-center whitespace-nowrap">
            WORK ZONE
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-hulk-surface/50" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24">
            {[
              { value: "500+", label: "Active Members", icon: Users },
              { value: "12+", label: "Elite Coaches", icon: Target },
              { value: "15+", label: "Championships", icon: Trophy },
              { value: "100%", label: "Result Guaranteed", icon: Shield },
            ].map((stat, i) => (
              <div key={i} className="stat-item group">
                <div className="w-14 h-14 rounded-2xl bg-hulk-green/10 border border-hulk-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <stat.icon className="text-hulk-green" size={28} />
                </div>
                <div className="font-display font-black text-5xl md:text-6xl italic tracking-tighter text-white mb-2 leading-none uppercase">
                  {stat.value}
                </div>
                <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-white/40 italic">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <div className="section-title">
              <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Wall of Fame</span>
              <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-[0.9]">
                Championship <br /> <span className="text-hulk-green">Mindset</span>
              </h2>
            </div>
            <p className="max-w-md text-white/40 uppercase tracking-widest text-xs font-bold mb-4 leading-loose">
              Led by District Level Powerlifting Champions, we provide the environment and expertise needed to compete at the highest level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 cards-grid">
            {/* Achievement Card 1 */}
            <div className="reveal-card group relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt="Powerlifting"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hulk-dark via-hulk-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-hulk-green" size={24} />
                  <span className="text-xs font-display font-black uppercase tracking-[0.3em] text-hulk-green">District Elite</span>
                </div>
                <h3 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-4 leading-none">District Level Powerlifting Champion</h3>
                <p className="text-sm text-white/60 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-wider font-medium">
                  Our training methods are proven at the podium. We coach technique, program loading, and peak performance for national standards.
                </p>
                <div className="w-12 h-12 rounded-full border border-hulk-green flex items-center justify-center text-hulk-green group-hover:bg-hulk-green group-hover:text-black transition-all duration-500">
                  <ChevronRight size={24} />
                </div>
              </div>
            </div>

            {/* Achievement Card 2 */}
            <div className="reveal-card group relative h-[500px] rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1541534741688-6078c64b5ec5?q=80&w=2069&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" 
                alt="Transformation"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hulk-dark via-hulk-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 w-full translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="text-hulk-green" size={24} />
                  <span className="text-xs font-display font-black uppercase tracking-[0.3em] text-hulk-green">Certified Experts</span>
                </div>
                <h3 className="text-3xl font-display font-black uppercase italic tracking-tighter mb-4 leading-none">Elite Transformation Center</h3>
                <p className="text-sm text-white/60 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-wider font-medium">
                  Over 1000+ personal success stories. Whether its fat loss or lean muscle mass, we provide the blueprint for your best self.
                </p>
                <div className="w-12 h-12 rounded-full border border-hulk-green flex items-center justify-center text-hulk-green group-hover:bg-hulk-green group-hover:text-black transition-all duration-500">
                  <ChevronRight size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Marquee */}
      <section className="py-20 border-y border-white/5 bg-hulk-green overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="font-display font-black text-6xl text-black uppercase italic tracking-tighter">STATE OF THE ART EQUIPMENT</span>
              <Zap className="text-black fill-black" size={40} />
              <span className="font-display font-black text-6xl text-black uppercase italic tracking-tighter">CERTIFIED TRAINERS</span>
              <Zap className="text-black fill-black" size={40} />
              <span className="font-display font-black text-6xl text-black uppercase italic tracking-tighter">POWERLIFTING HUB</span>
              <Zap className="text-black fill-black" size={40} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative bg-hulk-surface/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24 section-title">
            <span className="text-hulk-green font-display font-black uppercase tracking-[0.4em] text-xs mb-4 block italic">Testimonials</span>
            <h2 className="font-display font-black text-5xl md:text-8xl uppercase italic tracking-tighter leading-none">
              Client <span className="text-hulk-green">Stories</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "The best gym environment in Dabra. Coaches are genuinely invested in your progress. Fixed my deadlift form in a week!",
                author: "Rahul Pachoura",
                rank: "Powerlifter"
              },
              {
                text: "Lost 15kg in 4 months under Ajay's guidance. The Hulk-themed atmosphere keeps your energy at maximum level every session.",
                author: "Vikram Singh",
                rank: "Elite Member"
              },
              {
                text: "Unbeatable equipment and professional vibe. Truly the certified destination for anyone serious about bodybuilding.",
                author: "Deepak Bajpai",
                rank: "Physique Athlete"
              }
            ].map((t, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative group hover:border-hulk-green/30 transition-all duration-500 flex flex-col justify-between">
                <div className="text-5xl font-serif text-hulk-green/20 absolute top-6 right-10">""</div>
                <p className="text-lg text-white/70 italic leading-relaxed mb-8 relative z-10 font-medium">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full hulk-gradient p-[2px]">
                    <div className="w-full h-full rounded-full bg-hulk-dark flex items-center justify-center font-black text-xs">WP</div>
                  </div>
                  <div>
                    <h4 className="font-display font-black uppercase tracking-widest text-sm italic">{t.author}</h4>
                    <span className="text-[10px] text-hulk-green uppercase font-bold tracking-[0.2em]">{t.rank}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative group">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-hulk-green/20 blur-[150px] scale-0 group-hover:scale-100 transition-transform duration-1000 rounded-full" />
          
          <div className="bg-hulk-green p-12 md:p-24 rounded-[3rem] text-center relative z-10 border border-white/10 shadow-[0_0_50px_rgba(191,255,0,0.2)]">
            <h2 className="font-display font-black text-5xl md:text-8xl lg:text-9xl text-black uppercase italic tracking-tighter leading-[0.8] mb-12">
              Join The <br /> Working Zone
            </h2>
            <p className="text-black/70 font-bold uppercase tracking-widest text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              Dabra's finest training facility is waiting for you. Get your free assessment with a certified coach today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-black text-white px-12 py-6 rounded-2xl font-display font-black uppercase tracking-widest text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl">
                Start Today
              </Link>
              <Link to="/about" className="bg-black/10 border border-black/20 text-black px-12 py-6 rounded-2xl font-display font-black uppercase tracking-widest text-lg hover:bg-black/20 transition-all">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Hidden for Accessibility/Bots */}
      <div className="sr-only">
        <h2>Best Gym in Dabra - Hulks Work Zone</h2>
        <p>Hulks Work Zone is the premier fitness center in Dabra, Madhya Pradesh. Specializing in Powerlifting, Bodybuilding, and Physical Transformation. Owned by District Level Powerlifting Champion Ajay Gurjar Pachoura.</p>
        <ul>
          <li>Expert Fitness Coaches Dabra</li>
          <li>Powerlifting Training Dabra</li>
          <li>Body Transformation Specialist</li>
          <li>Certified Gym Instructors</li>
        </ul>
      </div>
    </div>
  );
}
