import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Shield, 
  Phone, 
  Mail, 
  MapPin 
} from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#050811] text-slate-300 overflow-hidden pt-16 pb-12 font-sans border-t border-slate-900">
      {/* Top Border Glow Animation (Sweeping Laser Beam) */}
      <style>{`
        @keyframes line-glow-flow {
          0% { left: -50%; }
          100% { left: 150%; }
        }
        .footer-glow-line {
          position: absolute;
          top: 0;
          height: 2px;
          width: 300px;
          background: linear-gradient(90deg, transparent, rgba(234,88,12,0.3), #ea580c, #fff, #ea580c, rgba(234,88,12,0.3), transparent);
          animation: line-glow-flow 10s linear infinite;
          filter: drop-shadow(0 0 4px #ea580c);
        }
      `}</style>
      
      {/* Dynamic Laser Line & Underglow */}
      <div className="footer-glow-line" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[100px] bg-[#ea580c]/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 border-b border-slate-900/60">
        
        {/* Brand Column (Left) - span 4 */}
        <div className="md:col-span-4 space-y-6">
          {/* Logo */}
          <div className="text-3xl font-black tracking-wider text-white">
            <span className="text-[#ea580c]">Go</span>Driveify
          </div>
          
          {/* Description */}
          <p className="text-[15px] text-slate-300 leading-relaxed max-w-sm font-light">
            Transforming raw beginners into defensive, fully certified champions across Punjab since 2018. Over 4500+ licensed graduates.
          </p>
          
          {/* NHA criteria badge */}
          <div className="bg-[#090e1a] border border-slate-900 rounded-2xl p-4 flex items-center gap-4 max-w-[300px] shadow-inner">
            <div className="bg-[#ea580c]/10 p-2.5 rounded-xl text-[#ea580c] shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-widest text-white">NHA CRITERIA APPROVED</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Government standard vehicle tracks</div>
            </div>
          </div>
          
          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Instagram, href: "#" },
              { icon: Youtube, href: "#" }
            ].map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                className="w-11 h-11 rounded-full border border-slate-800/80 bg-[#080d19]/80 hover:bg-[#ea580c] hover:border-[#ea580c] hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-[#ea580c]/20"
              >
                <social.icon className="w-4.5 h-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Academy Courses Column (Middle 1) - span 2 */}
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] shadow-[0_0_10px_#ea580c]" />
            <h4 className="text-[13px] font-black text-white uppercase tracking-widest">ACADEMY COURSES</h4>
          </div>
          <ul className="space-y-4 text-[15px] font-medium">
            {[
              "Basic Driving Course",
              "Standard Driving Course",
              "Premium Driving Course",
              "Manual Transmission Mastery",
              "Automatic Sedan Training"
            ].map((course, idx) => (
              <li key={idx}>
                <a href="#programs" className="group flex items-center gap-2.5 text-slate-400 hover:text-[#ea580c] transition-colors duration-200">
                  <span className="text-[#ea580c] text-[16px] font-bold opacity-80 group-hover:translate-x-1.5 transition-transform duration-250">→</span>
                  <span>{course}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Academy Links Column (Middle 2) - span 3 */}
        <div className="md:col-span-3 space-y-6 md:pl-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] shadow-[0_0_10px_#ea580c]" />
            <h4 className="text-[13px] font-black text-white uppercase tracking-widest">ACADEMY LINKS</h4>
          </div>
          <ul className="space-y-4 text-[15px] font-medium">
            {[
              "About Our Academy",
              "Course Packages & Fees",
              "Our Premium Services",
              "Rental Car Marketplace",
              "Defensive Driving Blog",
              "FAQ Guidance"
            ].map((link, idx) => (
              <li key={idx}>
                <a href="#configurator" className="group flex items-center gap-2.5 text-slate-400 hover:text-[#ea580c] transition-colors duration-200">
                  <span className="text-[#ea580c] text-[16px] font-bold opacity-80 group-hover:translate-x-1.5 transition-transform duration-250">→</span>
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Active Operations Column (Right) - span 3 */}
        <div className="md:col-span-3 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] shadow-[0_0_10px_#ea580c]" />
            <h4 className="text-[13px] font-black text-white uppercase tracking-widest">ACTIVE OPERATIONS</h4>
          </div>
          
          <div className="space-y-5">
            {/* Helpline */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#080d19] border border-slate-800/80 flex items-center justify-center text-[#ea580c] shadow-sm shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">HELPLINE SUPPORT</div>
                <div className="text-[16px] font-extrabold text-white tracking-wide mt-0.5">03897666928</div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#080d19] border border-slate-800/80 flex items-center justify-center text-[#ea580c] shadow-sm shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">CORPORATE EMAIL</div>
                <div className="text-[15px] font-extrabold text-white tracking-wide mt-0.5">
                  <a 
                    href="https://godriveify.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-[#ea580c] transition-colors duration-200 underline decoration-[#ea580c]/30 underline-offset-4"
                  >
                    info@godriveify.com
                  </a>
                </div>
              </div>
            </div>

            {/* Primary Campus */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#080d19] border border-slate-800/80 flex items-center justify-center text-[#ea580c] shadow-sm shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider">PRIMARY CAMPUS</div>
                <div className="text-[13px] font-bold text-slate-300 leading-tight mt-0.5">Millat Road, Millat Town, Faisalabad</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1280px] mx-auto px-6 pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-[12px] text-slate-500">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <span>&copy; 2026 GoDriveify. All rights reserved.</span>
          <span className="hidden sm:inline text-slate-800">|</span>
          <div className="flex items-center gap-1.5 bg-[#080d19] border border-slate-800/80 px-3 py-1 rounded-full text-[10px] text-slate-400 font-bold">
            <Shield className="w-3 h-3 text-[#ea580c]" />
            <span>Accredited Driving Academy</span>
          </div>
        </div>
        
        <div className="flex items-center bg-[#080d19] border border-slate-800/80 px-3 py-1 rounded-full text-[10px] text-slate-400 font-bold tracking-wider">
          <span className="uppercase text-slate-500 mr-1.5">ADMIN PORTAL</span>
          <span className="text-slate-700 mr-1.5">|</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse shadow-[0_0_6px_#10b981]" />
          <span className="text-emerald-500">SYS_V1.2.0</span>
        </div>
      </div>
    </footer>
  );
};
