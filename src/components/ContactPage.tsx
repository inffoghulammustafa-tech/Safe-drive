import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, CheckCircle2, X } from "lucide-react";

interface ContactPageProps {
  onContactUs?: () => void;
}

export function ContactPage({ onContactUs }: ContactPageProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Complete Driving Course",
    message: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) {
      setFormData(prev => ({ ...prev, name: "Student" }));
    }
    setIsSubmitted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  return (
    <div className="bg-[#fcfdff] min-h-screen pt-[112px]">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-24 right-4 z-50 animate-in slide-in-from-top-5 fade-in duration-300">
          <div className="bg-[#121824] border-l-4 border-[#00a843] rounded-xl shadow-2xl p-4 flex gap-4 w-full max-w-sm">
            <CheckCircle2 className="w-5 h-5 text-[#00a843] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Inquiry Submitted</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Session reservation registered for {formData.course}. Our support team will connect with you shortly!
              </p>
            </div>
            <button onClick={() => setShowToast(false)} className="text-slate-500 hover:text-white transition-colors absolute top-4 right-4">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div 
        className="relative py-24 md:py-32 overflow-hidden bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(15, 20, 30, 0.7), rgba(15, 20, 30, 0.9)), url('https://i.pinimg.com/736x/dc/09/8c/dc098c821055c575f70150629fbdf937.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block border border-[#ff6a00]/30 bg-[#ff6a00]/5 text-[#ff6a00] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            <span className="opacity-80">★</span> HIGH PRECISION SUPPORT
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            GET IN <span className="text-[#ff6a00]">TOUCH</span>
          </h1>
          <p className="text-[#8e98a8] text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Connect with Faisalabad's high-performance driving network. Book personalized premium training modules, consult female trainers, or track schedules instantly.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1280px] mx-auto px-4 py-16 md:py-24 relative z-20">
        <div className="bg-white rounded-[32px] shadow-[0_8px_40px_rgb(0,0,0,0.08)] flex flex-col md:flex-row p-4 md:p-6 gap-6 md:gap-10 border border-slate-100 items-stretch">
          
          {/* Left Side - Contact Info Box */}
          <div className="w-full md:w-[400px] p-8 md:p-12 relative overflow-hidden flex-shrink-0 text-white flex flex-col justify-between rounded-[24px] shadow-xl group">
            <div className="absolute inset-0 bg-center bg-cover transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://i.pinimg.com/1200x/49/df/a0/49dfa090834d0e52f14a4af6683c3598.jpg')" }}></div>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            
            <div className="relative z-10 mb-12">
              <div className="text-[10px] text-[#ea580c] font-bold tracking-[0.2em] uppercase mb-2">REACH OUT</div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-sm text-slate-400 leading-relaxed">
                Have questions? We are here to help you navigate your journey.
              </p>
            </div>

            <div className="relative z-10 space-y-8 mt-auto bg-white rounded-2xl p-6 text-slate-800 shadow-xl border border-slate-100">
              <div className="flex items-start gap-4">
                <div className="bg-[#ea580c]/10 p-2.5 rounded-xl shrink-0 text-[#ea580c]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">DIRECT HOTLINE</div>
                  <div className="font-bold text-[15px]">03897666928</div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[#ea580c]/10 p-2.5 rounded-xl shrink-0 text-[#ea580c]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">CORPORATE EMAIL</div>
                  <div className="font-bold text-[14px]">info@godriveify.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#ea580c]/10 p-2.5 rounded-xl shrink-0 text-[#ea580c]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">ACADEMY CAMPUS</div>
                  <div className="font-bold text-[13px] leading-relaxed">Millat Road, Millat Town, Faisalabad, PK.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="flex-1 p-4 md:p-8 flex flex-col justify-center min-h-[500px]">
            {!isSubmitted ? (
              <>
                <div className="mb-8">
                  <div className="text-[10px] text-[#ea580c] font-bold tracking-[0.2em] uppercase mb-2">CONNECT INSTANTLY</div>
                  <h3 className="text-2xl font-bold text-[#0f141e] mb-2">Send Us A Message</h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                    Fill out the quick session form below and start your premium driving experience today.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">YOUR FULL NAME</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Muhammad Ali" className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">ACTIVE PHONE NUMBER</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="0300-1234567" className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">EMAIL ADDRESS</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="student@gmail.com" className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">SELECT COURSE PROGRAM</label>
                    <select value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full px-4 py-3 rounded-full border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm appearance-none bg-white font-medium text-slate-800 cursor-pointer">
                      <option>Complete Driving Course</option>
                      <option>Corporate Fleet Training</option>
                      <option>License Test Preparation</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-extrabold uppercase tracking-widest text-slate-500">YOUR MESSAGE</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Write down any requests such as pick/drop timings, manual or automatic transmissions..." className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 resize-none font-medium text-slate-800"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#ea580c] hover:bg-[#dc2626] text-white font-bold text-[11px] tracking-widest uppercase py-3.5 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> BOOK FREE CALL RESERVATION
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center animate-in fade-in zoom-in duration-500 flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 bg-[#00a843]/10 rounded-full flex items-center justify-center mb-6 animate-bounce">
                  <CheckCircle2 className="w-10 h-10 text-[#00a843]" />
                </div>
                <h3 className="text-3xl font-bold text-[#0f141e] mb-4">Booking Confirmed!</h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-md">
                  Thank you, <strong className="text-[#ea580c]">{formData.name}</strong>. Your reservation inquiry for <strong className="text-[#0f141e]">{formData.course}</strong> has been saved safely into our queue. Our Faisalabad representative team will contact you in the next 2 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-[11px] tracking-widest uppercase px-8 py-3.5 rounded-full transition-colors duration-300"
                >
                  PROCESS ANOTHER BOOKING
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-[1280px] mx-auto px-4 mt-16 md:mt-28 pb-24 md:pb-32">
        <div className="border border-slate-200 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center bg-white shadow-[0_8px_40px_rgb(0,0,0,0.06)]">
          <div className="flex-1">
            <div className="text-[10px] text-[#ea580c] font-bold tracking-[0.2em] uppercase mb-4">VISIT THE CAMPUS</div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#0f141e] mb-4">Easy to Locate Campus Center</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-8 max-w-md">
              Our main office and safety parking arena are situated at Millat Town on Millat Road, Faisalabad. We feature spacious driving ground templates and theoretical class facilities designed for professional training.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center text-sm font-bold shrink-0">1</div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-800 mb-1">Main Office</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">Visit us to process registration paper works and permit documentations.</p>
                </div>
              </div>
              <div className="bg-[#f8fafc] border border-slate-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center text-sm font-bold shrink-0">2</div>
                <div>
                  <h4 className="text-[14px] font-bold text-slate-800 mb-1">Practice Tracks</h4>
                  <p className="text-[12px] text-slate-500 leading-relaxed">Practice reverse parallel layout parking and gear shifts safely inside our yard.</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps?q=Millat+Road,+Millat+Town,+Faisalabad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 hover:border-[#ea580c] hover:bg-[#fff7f2] text-slate-700 hover:text-[#ea580c] px-6 py-3 rounded-2xl text-[11px] font-bold uppercase tracking-widest transition-all bg-[#f8fafc] shadow-sm"
            >
              GET GOOGLE MAPS ROUTE ↗
            </a>
          </div>

          <div className="flex-1 w-full bg-slate-100 rounded-[24px] h-[450px] border border-slate-200 overflow-hidden relative shadow-sm">
            {/* Fake Map Illustration */}
            <div className="absolute inset-0 opacity-50" style={{
              backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlNGRlNGMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')"
            }} />
            
            {/* Map UI Elements */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[10px] font-bold px-3 py-1.5 rounded-md border border-slate-200 shadow-sm">
              Faisalabad Campus Yard<br/><span className="text-[8px] text-slate-400 font-normal">Millat Road Center</span>
            </div>
            
            <div className="absolute top-4 right-4 bg-[#ff6a00]/10 text-[#ff6a00] text-[8px] font-bold px-2 py-1 rounded-md border border-[#ff6a00]/20 uppercase tracking-widest">
              Registered Academy
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-12 h-12 bg-[#ff6a00]/20 rounded-full animate-ping absolute" />
              <div className="relative z-10 w-8 h-8 bg-[#ff6a00] rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="bg-white mt-2 text-[9px] font-bold px-3 py-1.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a843]" />
                GODRIVEIFY HQ
              </div>
            </div>

            {/* Fake Roads */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path d="M 0 150 Q 200 150 400 100 T 800 120" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
              <path d="M 0 150 Q 200 150 400 100 T 800 120" fill="none" stroke="#e2e8f0" strokeWidth="16" className="-z-10" />
              
              <path d="M 250 0 L 250 300" fill="none" stroke="#ffffff" strokeWidth="8" />
              <path d="M 250 0 L 250 300" fill="none" stroke="#e2e8f0" strokeWidth="12" className="-z-10" />
            </svg>

            <div className="absolute bottom-4 left-4 text-[8px] text-slate-400 font-medium">Millat Road, Millat Town, FSD</div>
            <div className="absolute bottom-4 right-4 text-[8px] text-slate-400 font-medium tracking-widest uppercase">GD3_FEAT_06</div>
          </div>
        </div>
      </div>
      {/* Bottom CTA */}
      <div className="bg-[#0b0f17] py-16 md:py-24 px-4 overflow-hidden relative">
        <style>{`
          @keyframes spin-border-contact {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}</style>
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="relative rounded-[24px] overflow-hidden p-[2px] group cursor-pointer">
            <div
              className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_97.5%,rgba(234,88,12,0.4)_98.5%,rgba(255,255,255,1)_99.5%,rgba(234,88,12,0.4)_100%)] opacity-100 blur-[2px]"
              style={{ animation: "spin-border-contact 18s linear infinite", transformOrigin: "center" }}
            />

            <div className="bg-[#10141d] rounded-[23px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14 relative overflow-hidden shadow-2xl z-10 h-full transition-colors duration-300 group-hover:bg-[#121824]">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1a2230]/40 to-transparent opacity-50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

              <div className="flex-1 relative z-10 w-full text-center md:text-left">
                <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 border border-[#ea580c]/20 bg-transparent text-[#ea580c] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors duration-300 group-hover:bg-[#ea580c]/10">
                  <span className="opacity-80">★</span> START DRIVING SAFELY TODAY
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                  Ready to Master the Driver's Seat?
                </h2>
                <p className="text-[#8e98a8] text-sm md:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
                  Book a custom driving lesson package with professional certified male and female trainers in Faisalabad.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto shrink-0 relative z-10">
                <button className="w-full sm:w-auto px-8 py-4 bg-[#ea580c] hover:bg-[#dc2626] text-white font-bold text-[13px] tracking-widest uppercase rounded-xl transition-all duration-300 whitespace-nowrap shadow-md hover:shadow-lg">
                  Apply Now
                </button>
                <button className="w-full sm:w-auto px-8 py-4 bg-[#1a2230]/80 border border-[#2a3441] hover:bg-[#1e2736] hover:border-[#3b475c] text-white font-bold text-[13px] tracking-widest uppercase rounded-xl transition-all duration-300 whitespace-nowrap">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
