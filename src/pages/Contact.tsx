import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Facebook, Send, User, MessageSquare, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="py-24" id="contact-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="mb-24 text-center">
            <span className="text-hulk-green font-display font-black uppercase tracking-[0.5em] text-xs mb-6 block italic">Join The Zone</span>
            <h1 className="font-display font-black text-6xl md:text-9xl uppercase italic tracking-tighter mb-8 leading-none">
              Get <span className="text-hulk-green text-hulk-glow">In Touch</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-lg md:text-xl uppercase tracking-widest font-bold">
              Dabra's finest coaching and training facility. Ready to start your transformation? Reach out to us.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-hulk-surface border border-white/5 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-hulk-green/5 blur-[100px] pointer-events-none" />
              <h3 className="font-display font-black text-3xl uppercase italic mb-10 text-white tracking-widest">Connect</h3>
              <div className="flex flex-col gap-10">
                <a href="tel:+918770506113" className="flex items-start gap-6 group/item">
                  <div className="w-14 h-14 rounded-2xl bg-hulk-green/10 flex items-center justify-center border border-hulk-green/20 group-hover/item:bg-hulk-green group-hover/item:text-black transition-all shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green mb-2 italic underline underline-offset-4">Direct Call</div>
                    <div className="text-xl font-black text-white tracking-widest">+91 8770506113</div>
                    <div className="text-xl font-black text-white tracking-widest">+91 7415157538</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-hulk-green/10 flex items-center justify-center border border-hulk-green/20 shrink-0">
                    <MapPin size={28} className="text-hulk-green" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green mb-2 italic underline underline-offset-4">Location</div>
                    <div className="text-lg font-black text-white uppercase italic leading-tight tracking-wider">
                      In front of veterinary hospital, Jawahar Ganj, Dabra 475110
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-hulk-green/10 flex items-center justify-center border border-hulk-green/20 shrink-0">
                    <Clock size={28} className="text-hulk-green" />
                  </div>
                  <div>
                    <div className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green mb-2 italic underline underline-offset-4">Working Hours</div>
                    <div className="text-lg font-black text-white uppercase italic tracking-wider">
                      5:00 AM - 10:00 PM <br />
                      <span className="text-white/40 text-xs">Closed on National Holidays</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-hulk-surface p-10 rounded-[3rem] border border-white/5">
              <h3 className="font-display font-black text-xl uppercase italic mb-8 text-hulk-green tracking-[0.3em]">Owner Info</h3>
              <div className="flex items-center gap-6">
                 <div className="w-20 h-20 rounded-2xl hulk-gradient p-1">
                    <div className="w-full h-full bg-hulk-dark rounded-[14px] flex items-center justify-center font-black text-2xl italic">AG</div>
                 </div>
                 <div>
                    <div className="font-display font-black text-2xl uppercase italic tracking-tighter text-white leading-none">Ajay Gurjar</div>
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-hulk-green mt-1">Head Coach & Founder</div>
                 </div>
              </div>
            </div>

            <div className="aspect-video w-full rounded-[3rem] overflow-hidden grayscale border border-white/5 relative group">
              <div className="absolute inset-0 bg-hulk-green/10 group-hover:opacity-0 transition-opacity z-10 pointer-events-none" />
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114674.8016462446!2d78.33120199023438!3d25.889600100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39773b06c888c3a9%3A0xe7f9f095af2f6e9b!2sDabra%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1714152000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                id="maps-iframe"
                title="Hulks Work Zone Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-hulk-surface/40 p-10 md:p-16 rounded-[4rem] border border-white/5 shadow-2xl relative overflow-hidden"
              id="contact-form"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Dumbbell className="text-white" size={150} />
              </div>

              <h2 className="font-display font-black text-5xl md:text-7xl uppercase italic tracking-tighter mb-12 leading-none relative z-10">
                Be The <br /><span className="text-hulk-green">Beast</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green ml-4 italic">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                    <input 
                      type="text" 
                      placeholder="YOUR NAME" 
                      className="w-full bg-hulk-dark/50 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-hulk-green transition-all hover:border-white/20 text-white font-bold uppercase tracking-widest"
                      id="name-input"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green ml-4 italic">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                    <input 
                      type="tel" 
                      placeholder="YOUR NUMBER" 
                      className="w-full bg-hulk-dark/50 border border-white/10 rounded-2xl py-5 pl-16 pr-6 focus:outline-none focus:border-hulk-green transition-all hover:border-white/20 text-white font-bold uppercase tracking-widest"
                      id="phone-input"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-8 relative z-10">
                <label className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green ml-4 italic">Enquiry Type</label>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
                  <select 
                    className="w-full bg-hulk-dark/50 border border-white/10 rounded-2xl py-5 pl-16 pr-10 focus:outline-none focus:border-hulk-green transition-all hover:border-white/20 appearance-none text-white font-bold uppercase tracking-widest"
                    id="subject-select"
                  >
                    <option className="bg-hulk-dark">General Membership</option>
                    <option className="bg-hulk-dark">Powerlifting Prep</option>
                    <option className="bg-hulk-dark">Personal Transformation</option>
                    <option className="bg-hulk-dark">Nutri Zone Query</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-3 mb-10 relative z-10">
                <label className="text-[10px] font-display font-black uppercase tracking-[0.3em] text-hulk-green ml-4 italic">Your Message</label>
                <textarea 
                  rows={6} 
                  placeholder="WHATS YOUR FITNESS GOAL?" 
                  className="w-full bg-hulk-dark/50 border border-white/10 rounded-[2.5rem] py-6 px-8 focus:outline-none focus:border-hulk-green transition-all hover:border-white/20 resize-none text-white font-bold uppercase tracking-widest italic"
                  id="message-textarea"
                />
              </div>

              <button 
                type="submit" 
                className="w-full hulk-gradient py-6 rounded-2xl font-display font-black text-black uppercase tracking-[0.4em] flex items-center justify-center gap-4 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_40px_rgba(191,255,0,0.3)] relative z-10"
              >
                Send Message <Send size={24} />
              </button>

              <div className="mt-10 text-center relative z-10">
                 <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.4em] italic">
                   Expert Coaches Will Respond Within 24H
                 </p>
              </div>
            </motion.form>
          </div>
        </div>
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
