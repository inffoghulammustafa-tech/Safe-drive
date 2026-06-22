import React from "react";
import { ShieldCheck, CalendarRange, MapPin, Award, Users, Star, Car } from "lucide-react";

interface HeroProps {
  onActionClick: (section: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden bg-[#060913]">
      {/* Dynamic Cosmic Spotlights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge Indicator */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-6 uppercase">
          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
          Faisalabad's First Smart Digital Driving School
        </span>

        {/* Core Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Learn to Drive with <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-rose-400 bg-clip-text text-transparent">
            Confidence & Absolute Safety
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-10 leading-relaxed">
          Professional certified male & female traffic coaches tailored to help you excel at official Punjab DLIMS tests. Train in modern dual-control safety vehicles with comfortable, custom doorstep pick & drop.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={() => onActionClick("configurator")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-teal-400 to-rose-500 text-white font-bold shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            Design Custom Program
          </button>
          <button
            onClick={() => onActionClick("quiz")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Practice Punjab Sign Quiz
          </button>
        </div>

        {/* User's stats card completion with gorgeous visual cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 bg-slate-900/40 rounded-2xl border border-gray-800/80 backdrop-blur-md flex flex-col justify-center items-center hover:border-cyan-500/30 transition-all duration-300 hover:translate-y-[-4px]">
            <Users className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="text-3xl sm:text-4xl font-black text-cyan-400 mb-1">15+</h3>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Certified Coaches</p>
            <p className="text-[10px] text-gray-500 mt-1">Male &amp; Female Experts</p>
          </div>

          <div className="p-6 bg-slate-900/40 rounded-2xl border border-gray-800/80 backdrop-blur-md flex flex-col justify-center items-center hover:border-rose-500/30 transition-all duration-300 hover:translate-y-[-4px]">
            <Award className="w-8 h-8 text-rose-400 mb-3" />
            <h3 className="text-3xl sm:text-4xl font-black text-rose-400 mb-1">2k+</h3>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Licensed Grads</p>
            <p className="text-[10px] text-gray-500 mt-1">Cleared DLIMS tests directly</p>
          </div>

          <div className="p-6 bg-slate-900/40 rounded-2xl border border-gray-800/80 backdrop-blur-md flex flex-col justify-center items-center hover:border-teal-400/30 transition-all duration-300 hover:translate-y-[-4px]">
            <Car className="w-8 h-8 text-teal-400 mb-3" />
            <h3 className="text-3xl sm:text-4xl font-black text-teal-400 mb-1">100%</h3>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Dual Control Cars</p>
            <p className="text-[10px] text-gray-500 mt-1">Safety backup brakes built-in</p>
          </div>

          <div className="p-6 bg-slate-900/40 rounded-2xl border border-gray-800/80 backdrop-blur-md flex flex-col justify-center items-center hover:border-amber-400/30 transition-all duration-300 hover:translate-y-[-4px]">
            <ShieldCheck className="w-8 h-8 text-amber-400 mb-3" />
            <h3 className="text-3xl sm:text-4xl font-black text-amber-400 mb-1">99%</h3>
            <p className="text-xs text-gray-400 uppercase font-bold tracking-wider">Pass Ratio</p>
            <p className="text-[10px] text-gray-500 mt-1">At Faisalabad police track</p>
          </div>
        </div>
      </div>
    </section>
  );
};
