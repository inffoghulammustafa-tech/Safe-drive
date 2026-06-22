import React from "react";
import { DRIVING_PROGRAMS } from "../data";
import { DrivingProgram } from "../types";
import { Calendar, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";

interface ProgramsProps {
  onSelectProgram: (programId: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectProgram }) => {
  return (
    <section id="programs" className="py-24 bg-[#080d1a] border-y border-white/[0.04] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-500 uppercase font-extrabold tracking-widest text-xs">Our Courses</span>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mt-2 mb-4">
            Specialized Driving Programs
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Har kism ke drivers ke liye perfect options. Chahe aap pehli dafa steering pakar rahe hon ya official Punjab DLIMS driving license test clear krنا chahein.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DRIVING_PROGRAMS.map((prog: DrivingProgram) => (
            <div
              key={prog.id}
              className="flex flex-col bg-[#0b1122]/60 rounded-2xl border border-white/[0.06] hover:border-cyan-500/40 hover:bg-[#0c142a] transition-all duration-300 shadow-xl overflow-hidden group"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Header Tag / Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${
                    prog.difficulty === 'Beginner' ? 'bg-emerald-500/15 text-emerald-400' :
                    prog.difficulty === 'Intermediate' ? 'bg-cyan-500/15 text-cyan-400' :
                    prog.difficulty === 'Advanced' ? 'bg-rose-500/15 text-rose-400' :
                    'bg-amber-500/15 text-amber-400'
                  }`}>
                    {prog.difficulty}
                  </span>
                  
                  <span className="flex items-center gap-1 text-xs text-cyan-400 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {prog.duration.split(" ")[0]} {prog.duration.split(" ")[1]}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 mb-2">
                  {prog.name}
                </h3>

                {/* Roman Urdu short subtitle */}
                <p className="text-xs text-teal-400 italic font-medium mb-3">
                  "{prog.urduDescription}"
                </p>

                {/* Description */}
                <p className="text-xs text-gray-400 line-clamp-4 leading-relaxed mb-6">
                  {prog.description}
                </p>

                {/* Separation line */}
                <div className="w-full h-px bg-white/[0.04] my-auto mb-4"></div>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {prog.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Price & Button Layer */}
              <div className="p-6 bg-white/[0.012] border-t border-white/[0.03] flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase font-semibold">Total Fee</span>
                  <span className="text-xl font-black text-white">
                    PKR {prog.basePrice.toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => onSelectProgram(prog.id)}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-rose-500 group-hover:text-white font-bold text-xs transition-all duration-300 flex items-center gap-1 cursor-pointer hover:scale-105 active:scale-95"
                >
                  Configure
                  <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 bg-gradient-to-br from-[#0c142b]/60 to-[#0a1020]/40 p-8 rounded-3xl border border-white/5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Doorstep Convenience</span>
            <h3 className="text-2xl font-bold text-white mt-1 mb-4">
              100% Guarded Training & Easy Transit
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
                  <span className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xs shrink-0 font-bold mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-xs text-gray-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#060913] rounded-2xl p-6 border border-white/[0.04] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-500/15 flex items-center justify-center text-rose-400 mb-4 font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Exclusive Female Coach Division</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                We respect our female drivers' cultural and comfort values. Our dedicated crew of certified female coaches operates modern automatic and manual cars.
              </p>
              <p className="text-xs text-amber-300 font-medium bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
                ⭐ 100% Safe and comfortable environment guaranteed with no supervisor interference.
              </p>
            </div>

            <div className="w-full h-px bg-white/[0.04] my-6"></div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-400 font-medium">Interested in safe learning?</p>
                <p className="text-[10px] text-gray-500">Pick any program and toggle "Female Coach" in bookings.</p>
              </div>
              <button
                onClick={() => onSelectProgram("beginner-pack")}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold text-xs transition-all cursor-pointer"
              >
                Launch Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
