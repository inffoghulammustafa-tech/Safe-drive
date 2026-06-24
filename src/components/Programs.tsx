import React, { useEffect, useRef } from "react";
import { DRIVING_PROGRAMS } from "../data";
import { DrivingProgram } from "../types";
import { Calendar, CheckCircle2, ChevronRight, GraduationCap, Award, Car, Users, Gauge, Shield, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
}

const AnimatedNumber = ({ value, duration = 3.5, delay = 0, suffix = "" }: { value: number, duration?: number, delay?: number, suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration, delay });
      return controls.stop;
    }
  }, [isInView, value, duration, delay, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <>
      <section className="w-full bg-[#0b101a] py-20 relative overflow-hidden">
        {/* Decorative subtle background wave line (approximate) */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-800/60 -translate-y-1/2 z-0 hidden md:block"></div>
        <div className="absolute top-1/2 left-0 w-full flex justify-between px-20 -translate-y-1/2 z-0 opacity-20 hidden md:flex">
             {/* Simple decorative wave curves */}
             <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" fill="none" stroke="currentColor" className="text-slate-600">
               <path d="M0,20 Q250,40 500,20 T1000,20" strokeWidth="2" />
             </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Stat Box 1 */}
            <div className="relative overflow-hidden rounded-[24px] p-[2px] bg-[#1a2230] group h-64 border border-slate-700/50 hover:border-transparent transition-colors duration-200">
              {/* Spinning glow: active only on hover */}
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] z-0">
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] blur-md z-0">
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>

              <div className="relative w-full h-full bg-[#0b101a] rounded-[22px] flex flex-col items-center justify-center text-center p-6 z-10 transition-colors duration-200 group-hover:bg-[#0b101a]/90">
                <Award className="w-10 h-10 text-[#ff6a00] mb-4 stroke-[1.5]" />
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight"><AnimatedNumber value={16} /></h3>
                <p className="text-[#8e98a8] text-xs font-bold tracking-widest uppercase mt-1">Years Experience</p>
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="relative overflow-hidden rounded-[24px] p-[2px] bg-[#1a2230] group h-64 border border-slate-700/50 hover:border-transparent transition-colors duration-200">
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] z-0" style={{ animationDelay: '-0.7s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] blur-md z-0" style={{ animationDelay: '-0.7s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>

              <div className="relative w-full h-full bg-[#0b101a] rounded-[22px] flex flex-col items-center justify-center text-center p-6 z-10 transition-colors duration-200 group-hover:bg-[#0b101a]/90">
                <Car className="w-10 h-10 text-[#ff6a00] mb-4 stroke-[1.5]" />
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight"><AnimatedNumber value={25} /></h3>
                <p className="text-[#8e98a8] text-xs font-bold tracking-widest uppercase mt-1">Professional Instructor</p>
              </div>
            </div>

            {/* Stat Box 3 */}
            <div className="relative overflow-hidden rounded-[24px] p-[2px] bg-[#1a2230] group h-64 border border-slate-700/50 hover:border-transparent transition-colors duration-200">
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] z-0" style={{ animationDelay: '-1.4s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] blur-md z-0" style={{ animationDelay: '-1.4s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>

              <div className="relative w-full h-full bg-[#0b101a] rounded-[22px] flex flex-col items-center justify-center text-center p-6 z-10 transition-colors duration-200 group-hover:bg-[#0b101a]/90">
                <Users className="w-10 h-10 text-[#ff6a00] mb-4 stroke-[1.5]" />
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight"><AnimatedNumber value={150} suffix="+" /></h3>
                <p className="text-[#8e98a8] text-xs font-bold tracking-widest uppercase mt-1">Happy Reviews</p>
              </div>
            </div>

            {/* Stat Box 4 */}
            <div className="relative overflow-hidden rounded-[24px] p-[2px] bg-[#1a2230] group h-64 border border-slate-700/50 hover:border-transparent transition-colors duration-200">
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] z-0" style={{ animationDelay: '-2.1s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 animate-[spin_3s_linear_infinite] blur-md z-0" style={{ animationDelay: '-2.1s' }}>
                <div className="w-full h-full bg-[conic-gradient(from_0deg,transparent_0_180deg,#ff6a00_360deg)]"></div>
              </div>

              <div className="relative w-full h-full bg-[#0b101a] rounded-[22px] flex flex-col items-center justify-center text-center p-6 z-10 transition-colors duration-200 group-hover:bg-[#0b101a]/90">
                <Gauge className="w-10 h-10 text-[#ff6a00] mb-4 stroke-[1.5]" />
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight"><AnimatedNumber value={125} suffix="+" /></h3>
                <p className="text-[#8e98a8] text-xs font-bold tracking-widest uppercase mt-1">Students Trained</p>
              </div>
            </div>
          </div>

          {/* New Section: Master the Road */}
          <div className="mt-32">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6">
                <Shield className="w-4 h-4 text-orange-500" />
                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em]">Certified Instructors</span>
              </div>
              <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1] max-w-4xl">
                Master the Road at Any Age.<br />
                Because It's Never Too Late to Take the Wheel.
              </h2>
              <p className="text-[#8e98a8] text-sm md:text-base max-w-3xl leading-relaxed">
                Flexible custom programs structured perfectly alongside patient, professional trainers to shape you into an extremely safe, completely confident lifelong driver.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div 
                onClick={() => onSelectProgram("pricing")}
                className="bg-[#151b26] rounded-2xl p-6 flex flex-col items-center text-center border border-[#2a3441] hover:border-orange-500/80 hover:shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all duration-75 group cursor-pointer"
              >
                <div className="bg-white rounded-[14px] w-full h-32 mb-6 overflow-hidden relative border border-slate-100 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80&w=600" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt="Beginner Driving"
                  />
                </div>
                <h3 className="text-[1.15rem] font-bold text-white group-hover:text-orange-500 transition-colors duration-75 mb-6 leading-tight">
                  Beginner Driving<br/>Course
                </h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectProgram("pricing"); }}
                  className="mt-auto w-full py-3 rounded-lg bg-[#222b3b] group-hover:bg-[#ff6a00] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-75"
                >
                  View Plans & Classes <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 2 */}
              <div
                onClick={() => onSelectProgram("pricing")}
                className="bg-[#151b26] rounded-2xl p-6 flex flex-col items-center text-center border border-[#2a3441] hover:border-orange-500/80 hover:shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all duration-75 group cursor-pointer"
              >
                <div className="bg-white rounded-[14px] w-full h-32 mb-6 overflow-hidden relative border border-slate-100 flex items-center justify-center">
                  <img 
                    src="https://i.pinimg.com/236x/e6/11/9d/e6119d1f14663d1a36b257d18f4a164e.jpg" 
                    onError={(e) => {
                      const fallbacks = [
                        "https://i.pinimg.com/originals/e6/11/9d/e6119d1f14663d1a36b257d18f4a164e.jpg",
                        "https://i.pinimg.com/736x/e6/11/9d/e6119d1f14663d1a36b257d18f4a164e.jpg",
                        "https://i.pinimg.com/564x/e6/11/9d/e6119d1f14663d1a36b257d18f4a164e.jpg"
                      ];
                      const currentSrc = e.currentTarget.src;
                      const nextIndex = fallbacks.indexOf(currentSrc) + 1;
                      if (nextIndex < fallbacks.length) {
                        e.currentTarget.src = fallbacks[nextIndex];
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt="Confidence Booster"
                  />
                </div>
                <h3 className="text-[1.15rem] font-bold text-white group-hover:text-orange-500 transition-colors duration-75 mb-6 leading-tight">
                  Confidence Booster<br/>Class
                </h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectProgram("pricing"); }}
                  className="mt-auto w-full py-3 rounded-lg bg-[#222b3b] group-hover:bg-[#ff6a00] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-75"
                >
                  View Plans & Classes <ArrowRight className="w-4 h-4" />
                </button>
              </div>

               {/* Card 3 */}
               <div
                onClick={() => onSelectProgram("pricing")}
                className="bg-[#151b26] rounded-2xl p-6 flex flex-col items-center text-center border border-[#2a3441] hover:border-orange-500/80 hover:shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all duration-75 group cursor-pointer"
               >
                <div className="bg-white rounded-[14px] w-full h-32 mb-6 overflow-hidden relative border border-slate-100 flex items-center justify-center">
                  <img 
                    src="https://i.pinimg.com/webp87/1200x/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.webp" 
                    onError={(e) => {
                      const fallbacks = [
                        "https://i.pinimg.com/originals/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.jpg",
                        "https://i.pinimg.com/736x/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.jpg",
                        "https://i.pinimg.com/1200x/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.jpg",
                        "https://i.pinimg.com/564x/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.jpg",
                        "https://i.pinimg.com/236x/9e/1e/7c/9e1e7c7983352dc78b81a3dd53fc4013.jpg"
                      ];
                      const currentSrc = e.currentTarget.src;
                      const nextIdx = fallbacks.indexOf(currentSrc) + 1;
                      if (nextIdx < fallbacks.length) {
                        e.currentTarget.src = fallbacks[nextIdx];
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt="Road Test Intensive"
                  />
                </div>
                <h3 className="text-[1.15rem] font-bold text-white group-hover:text-orange-500 transition-colors duration-75 mb-6 leading-tight">
                  Road Test Intensive<br/>Prep
                </h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectProgram("pricing"); }}
                  className="mt-auto w-full py-3 rounded-lg bg-[#222b3b] group-hover:bg-[#ff6a00] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-75"
                >
                  View Plans & Classes <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 4 */}
              <div
                onClick={() => onSelectProgram("pricing")}
                className="bg-[#151b26] rounded-2xl p-6 flex flex-col items-center text-center border border-[#2a3441] hover:border-orange-500/80 hover:shadow-[0_0_25px_-5px_rgba(255,106,0,0.5)] transition-all duration-75 group cursor-pointer"
              >
                <div className="bg-white rounded-[14px] w-full h-32 mb-6 overflow-hidden relative border border-slate-100 flex items-center justify-center">
                  <img 
                    src="https://i.pinimg.com/736x/88/5d/5c/885d5cfef7f27cf8ddaf7593671e9f3d.jpg" 
                    onError={(e) => {
                      const fallbacks = [
                        "https://i.pinimg.com/originals/88/5d/5c/885d5cfef7f27cf8ddaf7593671e9f3d.jpg",
                        "https://i.pinimg.com/736x/88/5d/5c/885d5cfef7f27cf8ddaf7593671e9f3d.jpg",
                        "https://i.pinimg.com/564x/88/5d/5c/885d5cfef7f27cf8ddaf7593671e9f3d.jpg"
                      ];
                      const currentSrc = e.currentTarget.src;
                      const nextIndex = fallbacks.indexOf(currentSrc) + 1;
                      if (nextIndex < fallbacks.length) {
                        e.currentTarget.src = fallbacks[nextIndex];
                      }
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt="Road Sign Test"
                  />
                </div>
                <h3 className="text-[1.15rem] font-bold text-[#ff6a00] group-hover:text-white transition-colors duration-75 mb-6 leading-tight">
                  Road Sign Test<br/>&nbsp;
                </h3>
                <button 
                  onClick={(e) => { e.stopPropagation(); onSelectProgram("pricing"); }}
                  className="mt-auto w-full py-3 rounded-lg bg-[#222b3b] group-hover:bg-[#ff6a00] text-white text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-75"
                >
                  View Plans & Classes <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-sm text-[#8e98a8]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#151b26] border border-[#2a3441] shadow-sm">
                <Award className="w-4 h-4 text-[#ff6a00]" />
                <span className="text-white font-medium text-xs sm:text-sm tracking-wide">Government Accredited & Approved Curriculum</span>
              </div>
              <span className="hidden sm:inline text-slate-700 font-bold">•</span>
              <p className="text-center text-xs sm:text-sm">
                Need custom timing? <a href="#" className="text-[#ff6a00] font-bold hover:underline">Contact Our Support</a> to design a personalized timeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-24 bg-white border-y border-neutral-100 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 uppercase font-extrabold tracking-widest text-xs">Our Courses</span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 mt-2 mb-4">
            Specialized Driving Programs
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
            Har kism ke drivers ke liye perfect options. Chahe aap pehli dafa steering pakar rahe hon ya official Punjab DLIMS driving license test clear krنا chahein.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVING_PROGRAMS.map((prog: DrivingProgram) => (
            <div
              key={prog.id}
              className="flex flex-col bg-white rounded-2xl border border-neutral-200 hover:border-orange-500/40 hover:bg-neutral-50 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden group"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Header Tag / Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${
                    prog.difficulty === 'Beginner' ? 'bg-emerald-500/15 text-emerald-700' :
                    prog.difficulty === 'Intermediate' ? 'bg-orange-500/15 text-orange-700' :
                    prog.difficulty === 'Advanced' ? 'bg-rose-500/15 text-rose-700' :
                    'bg-amber-500/15 text-amber-700'
                  }`}>
                    {prog.difficulty}
                  </span>
                  
                  <span className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {prog.duration.split(" ")[0]} {prog.duration.split(" ")[1]}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-orange-600 transition-colors duration-200 mb-2">
                  {prog.name}
                </h3>

                {/* Roman Urdu short subtitle */}
                <p className="text-xs text-orange-600 italic font-medium mb-3">
                  "{prog.urduDescription}"
                </p>

                {/* Description */}
                <p className="text-xs text-neutral-600 line-clamp-4 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Separation line */}
                <div className="w-full h-px bg-neutral-100 my-auto mb-4"></div>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {prog.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & Button Layer */}
              <div className="p-6 bg-neutral-50/50 border-t border-neutral-100 flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase font-semibold">Total Fee</span>
                  <span className="text-xl font-black text-neutral-950">
                    PKR {prog.basePrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onSelectProgram(prog.id)}
                  className="px-3.5 py-2 rounded-xl bg-neutral-600 text-white hover:bg-neutral-700 font-bold text-xs transition-all duration-300 flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95 shadow-sm"
                >
                  Configure
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 bg-neutral-50 p-8 rounded-3xl border border-neutral-250">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600">Doorstep Convenience</span>
            <h3 className="text-2xl font-bold text-neutral-900 mt-1 mb-4">
              100% Guarded Training & Easy Transit
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed mb-6">
              Hamara maqsad driving ko asan banana hai. Punjab safe-cities guidelines ke mutabiq certified coaches, double brake cars or complete safety backup provides kiya jaty hain.
            </p>
            <div className="space-y-3.5">
              {[
                "Authorized Dual Control braking pedals in every vehicle.",
                "Pick & Drop service from anywhere in Faisalabad (Kohinoor, Susan Rd, Jinnah Colony, Canal Road, etc.)",
                "Female instructors uniquely qualified for student safety & comfort.",
                "Simulated tracks modeling Faisalabad's DLIMS layout with cones & inclines."
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 text-xs shrink-0 font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm text-neutral-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4 font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Exclusive Female Coach Division</h4>
              <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                We respect our female drivers' cultural and comfort values. Our dedicated crew of certified female coaches operates modern automatic and manual cars.
              </p>
              <p className="text-xs text-neutral-800 font-semibold bg-orange-50 p-3 rounded-lg border border-orange-200/50">
                ⭐ 100% Safe and comfortable environment guaranteed with no supervisor interference.
              </p>
            </div>

            <div className="w-full h-px bg-neutral-100 my-6"></div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-neutral-700 font-bold">Interested in safe learning?</p>
                <p className="text-[10px] text-neutral-500">Pick any program and toggle "Female Coach" in bookings.</p>
              </div>
              <button
                onClick={() => onSelectProgram("beginner-pack")}
                className="px-4 py-2.5 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-white font-semibold text-xs transition-all cursor-pointer shadow-sm"
              >
                Launch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
