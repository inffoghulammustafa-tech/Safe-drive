import React, { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Car,
  CheckSquare,
  FileEdit,
  Award,
  ArrowRight,
  Check,
  Sparkles,
} from "lucide-react";

interface PricingPageProps {
  onBackToHome: () => void;
  onContactUs: () => void;
}

export function PricingPage({ onBackToHome, onContactUs }: PricingPageProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      q: "1. How Long Does It Take To Complete A Driving Course?",
      a: "The duration of our courses depends on the package you choose. On average, beginners can complete their course in 2 to 4 weeks, while advanced or refresher courses may take 1 to 2 weeks. We offer flexible scheduling to fit your availability.",
    },
    {
      q: "2. Do I Need Any Documents To Start My Driving Lessons?",
      a: "Yes, you will need a valid Learner's Permit to start your practical driving lessons. You can apply for this at your local driving license office.",
    },
    {
      q: "3. Will You Help Me Prepare For The Driving License Test?",
      a: "Absolutely! Our courses include comprehensive preparation for both the theoretical (sign test) and practical driving tests.",
    },
  ];

  const row1Testimonials = [
    {
      text: "Great experience, learned defensive vehicle control and critical signboards. Fully satisfied with the trainers.",
      name: "Hassan Khan",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Faisalabad ka sab say behtreen academy hai. Female staff k liye nihayat mehfooz aur behtreen environment faraham kia.",
      name: "Ayesha Bibi",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Incredibly patient teachers. They explained complicated clutch limits in manual Civic so beautifully. Highly recommended!",
      name: "Zainab Rashid",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Well done sir g bhot hi acha work kr raha ga apka GoDriveify driving school Faisalabad. Dil khush ho gya seekh k.",
      name: "Abdul Majeed",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Highly recommended, passed my license exam on the very first attempt! All thanks to safe & expert guidelines.",
      name: "Fatima Naz",
      title: "FAISALABAD ALUMNUS",
    },
  ];

  const row2Testimonials = [
    {
      text: "Best driving school in Punjab. Excellent highway session training with dynamic road situations simulator.",
      name: "Sajid Ali",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Awesome experience, passed my driving test without any issues. Instructors are highly skilled and punctual.",
      name: "Maroof Shah",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Custom training track guidelines are extremely helpful. Specially steering control techniques and reverse parallel parking.",
      name: "Ali Raza",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Passed automatic Civic package lesson plans in just 10 days. The dual control safety systems are super comforting.",
      name: "Waleed Ahmed",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Sir good job ap buhat acha sikhaty hain Pure Faisalabad mai aesa driving school nahi dekha.",
      name: "Awais Iqbal",
      title: "FAISALABAD ALUMNUS",
    },
  ];

  const row3Testimonials = [
    {
      text: "Professional demeanor and extreme flexibilities in batch timings. Safest platform for beginners or license aspirants.",
      name: "Kashif Mahmood",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Great system for motorcycle and sport-bike configurations too. Very friendly training atmosphere.",
      name: "Saad Sheikh",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Best part is the mock exam setup. They prepare you exactly according to the strict traffic office guidelines.",
      name: "Muhammad Bilal",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Highly recommended for female drivers. Patient guidance by Ms Alina has bolstered my traffic confidence.",
      name: "Aqsa Noreen",
      title: "FAISALABAD ALUMNUS",
    },
    {
      text: "Mashallah Allah App logo ko kaimo daem rakhay aur apke staff k kaam my barkat daalay. Bohat hi shabash.",
      name: "Malik Orangzaib",
      title: "FAISALABAD ALUMNUS",
    },
  ];

  return (
    <div className="bg-[#fcfdff] min-h-screen text-[#1a2230] font-sans pb-24">
      {/* Header Banner */}
      <div
        className="bg-[#0f141e] text-white py-40 text-center relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(15, 20, 30, 0.4), rgba(15, 20, 30, 0.6)), url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=400&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Pricing
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm font-medium">
            <button
              onClick={onBackToHome}
              className="text-[#8e98a8] hover:text-white transition-colors"
            >
              Home
            </button>
            <span className="text-[#8e98a8]">/</span>
            <span className="text-[#ff6a00]">Pricing</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block border border-[#ff6a00]/30 bg-[#ff6a00]/5 text-[#ff6a00] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            PRICING PACKAGE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0f141e]">
            Choose A Package That Suits Your Needs
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            At GoDriveify, we offer a range of driving packages to suit your
            needs, skill level, and budget. Whether you're a beginner or looking
            to refine your driving skills, we've got the perfect package for
            you.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#ff6a00]/50 hover:shadow-[0_0_40px_-10px_rgba(255,106,0,0.5)] hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="h-60 overflow-hidden relative">
              <img
                src="https://i.pinimg.com/1200x/43/69/27/4369276d5b1427663e35128ef9bc5af1.jpg"
                alt="Basic Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">Basic Driving Course</h3>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                Excellent foundational course covering vital steering control,
                brake safety, and road aware max signals.
              </p>
              <div className="bg-[#b33600] text-white py-3 px-4 rounded-xl inline-flex items-end self-start mb-8 shadow-[0_4px_15px_rgba(179,54,0,0.2)]">
                <span className="text-2xl font-bold leading-none">15000/-</span>
                <span className="text-[10px] font-bold uppercase tracking-wider ml-1 mb-0.5 opacity-80 border-l border-white/20 pl-1">
                  PKR ONLY
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "10 Driving Classes Included",
                  "1,500 PKR Per Class Rate",
                  "35 Mins Practice Lesson",
                  "10 Days Training Duration",
                  "Essential Signboard Theory",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6a00] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-lg border-2 border-[#ff6a00] text-[#ff6a00] font-bold text-sm tracking-widest uppercase hover:bg-[#ff6a00] hover:text-white transition-colors duration-300">
                GET STARTED &rarr;
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#ff6a00]/50 hover:shadow-[0_0_40px_-10px_rgba(255,106,0,0.5)] hover:-translate-y-2 transition-all duration-300 flex flex-col group cursor-pointer">
            <div className="h-60 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&h=400&fit=crop"
                alt="Standard Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">
                Standard Driving Course
              </h3>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                Our most popular training track covering parallel parking,
                reverse controls, and highway driving confidence.
              </p>
              <div className="bg-[#b33600] text-white py-3 px-4 rounded-xl inline-flex items-end self-start mb-8 shadow-[0_4px_15px_rgba(179,54,0,0.2)]">
                <span className="text-2xl font-bold leading-none">20000/-</span>
                <span className="text-[10px] font-bold uppercase tracking-wider ml-1 mb-0.5 opacity-80 border-l border-white/20 pl-1">
                  PKR ONLY
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "15 Driving Classes Included",
                  "1,333 PKR Per Class Rate",
                  "35 Mins Practice Lesson",
                  "15 Days Training Duration",
                  "Highway Session & Parking Guide",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6a00] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-lg border-2 border-[#ff6a00] text-[#ff6a00] font-bold text-sm tracking-widest uppercase hover:bg-[#ff6a00] hover:text-white transition-colors duration-300">
                GET STARTED &rarr;
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#ff6a00]/50 hover:shadow-[0_0_40px_-10px_rgba(255,106,0,0.5)] hover:-translate-y-2 transition-all duration-300 flex flex-col group relative cursor-pointer">
            <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full z-10 shadow-sm">
              Popular
            </div>
            <div className="h-60 overflow-hidden relative">
              <img
                src="https://i.pinimg.com/736x/29/5d/ac/295dac9267e49eb69d32b38798543fd5.jpg"
                alt="Premium Course"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">Premium Driving Course</h3>
              <p className="text-slate-500 text-xs mb-6 leading-relaxed">
                Complete masterclass including city grid navigation, night
                driving safety, and expert-level license exam preparation.
              </p>
              <div className="bg-[#b33600] text-white py-3 px-4 rounded-xl inline-flex items-end self-start mb-8 shadow-[0_4px_15px_rgba(179,54,0,0.2)]">
                <span className="text-2xl font-bold leading-none">25000/-</span>
                <span className="text-[10px] font-bold uppercase tracking-wider ml-1 mb-0.5 opacity-80 border-l border-white/20 pl-1">
                  PKR ONLY
                </span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "20 Driving Classes Included",
                  "1,250 PKR Per Class Rate",
                  "35 Mins Practice Lesson",
                  "20 Days Complete Mastery Plan",
                  "Full License Test Preparation",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#ff6a00] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3.5 rounded-lg border-2 border-[#ff6a00] text-[#ff6a00] font-bold text-sm tracking-widest uppercase hover:bg-[#ff6a00] hover:text-white transition-colors duration-300">
                GET STARTED &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#0f141e]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm p-6 md:p-8 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer text-lg font-bold text-slate-800">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-6 h-6 text-slate-400 group-open:-rotate-180 transition-transform duration-300 shrink-0 ml-4" />
                </summary>
                <div className="text-slate-600 text-base leading-relaxed pt-4 border-t border-slate-100 mt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-block border border-[#ff6a00]/30 bg-[#ff6a00]/5 text-[#ff6a00] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              4.9/5 RATED FROM STUDENTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f141e]">
              What Our Students Say
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Discover why thousands of students across Faisalabad trust
              GoDriveify for safe, competent, and fully immersive driving
              education.
            </p>
          </div>

          <style>{`
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 12px)); }
            }
            @keyframes scroll-right {
              0% { transform: translateX(calc(-50% - 12px)); }
              100% { transform: translateX(0); }
            }
            .animate-scroll-1 { animation: scroll-left 45s linear infinite; }
            .animate-scroll-2 { animation: scroll-right 55s linear infinite; }
            .animate-scroll-3 { animation: scroll-left 50s linear infinite; }
            .animate-scroll-1:hover, .animate-scroll-2:hover, .animate-scroll-3:hover {
              animation-play-state: paused;
            }
            .fade-edges {
              -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
          `}</style>

          <div className="flex flex-col gap-6 overflow-hidden relative fade-edges py-4">
            {/* Row 1 */}
            <div className="flex gap-6 w-max animate-scroll-1 px-4 lg:px-0">
              {[
                ...row1Testimonials,
                ...row1Testimonials,
                ...row1Testimonials,
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 w-[380px] shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-0.5 text-[#ffb000]">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#8e98a8] tracking-wider uppercase">
                      G VERIFIED
                      <svg className="w-3.5 h-3.5" viewBox="0 0 48 48">
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#1a2230] font-medium text-[15px] leading-relaxed mb-8 italic relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.name}&backgroundColor=0f141e`}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f141e]">
                        {t.name}
                      </h4>
                      <p className="text-[#8e98a8] text-[9px] font-bold tracking-widest uppercase">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-6 w-max animate-scroll-2 px-4 lg:px-0">
              {[
                ...row2Testimonials,
                ...row2Testimonials,
                ...row2Testimonials,
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 w-[380px] shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-0.5 text-[#ffb000]">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#8e98a8] tracking-wider uppercase">
                      G VERIFIED
                      <svg className="w-3.5 h-3.5" viewBox="0 0 48 48">
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#1a2230] font-medium text-[15px] leading-relaxed mb-8 italic relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.name}&backgroundColor=0f141e`}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f141e]">
                        {t.name}
                      </h4>
                      <p className="text-[#8e98a8] text-[9px] font-bold tracking-widest uppercase">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3 */}
            <div className="flex gap-6 w-max animate-scroll-3 px-4 lg:px-0">
              {[
                ...row3Testimonials,
                ...row3Testimonials,
                ...row3Testimonials,
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 w-[380px] shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-0.5 text-[#ffb000]">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-extrabold text-[#8e98a8] tracking-wider uppercase">
                      G VERIFIED
                      <svg className="w-3.5 h-3.5" viewBox="0 0 48 48">
                        <path
                          fill="#EA4335"
                          d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                        />
                        <path
                          fill="#34A853"
                          d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-[#1a2230] font-medium text-[15px] leading-relaxed mb-8 italic relative z-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img
                        src={`https://api.dicebear.com/7.x/initials/svg?seed=${t.name}&backgroundColor=0f141e`}
                        alt={t.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0f141e]">
                        {t.name}
                      </h4>
                      <p className="text-[#8e98a8] text-[9px] font-bold tracking-widest uppercase">
                        {t.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <div className="bg-[#0f141e] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block border border-[#ff6a00]/30 bg-[#ff6a00]/5 text-[#ff6a00] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              OUR PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Earn Your Driving Licence With Us?
            </h2>
            <p className="text-[#8e98a8] text-sm md:text-base leading-relaxed">
              We simplify your license journey in Faisalabad with simple,
              structured, and certified steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {/* Step 1 */}
            <div className="bg-[#0f141e] border border-[#2a3441] rounded-[24px] p-8 md:p-10 flex flex-col items-start relative overflow-hidden group hover:border-[#ff6a00] transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1c2432] flex items-center justify-center mb-10">
                <FileEdit className="w-6 h-6 text-[#ff6a00]" strokeWidth={2} />
              </div>
              <div className="absolute top-8 right-8 text-[#1a2230] font-black text-6xl tracking-tighter opacity-80 group-hover:text-[#ff6a00]/10 transition-colors duration-300">
                01
              </div>
              <h3 className="text-xl font-bold mb-4 z-10 text-white leading-tight">
                Apply For Your Learner's Permit
              </h3>
              <p className="text-[#8e98a8] text-[15px] leading-relaxed mb-10 z-10">
                We'll guide you through the process of applying for your
                learner's permit, including the required documentation and
                paperwork.
              </p>
              <button className="text-[#ff6a00] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 mt-auto z-10 group/btn hover:text-white transition-colors duration-300">
                LEARN MORE{" "}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Step 2 */}
            <div className="bg-[#0f141e] border border-[#2a3441] rounded-[24px] p-8 md:p-10 flex flex-col items-start relative overflow-hidden group hover:border-[#ff6a00] transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1c2432] flex items-center justify-center mb-10">
                <Car className="w-6 h-6 text-[#ff6a00]" strokeWidth={2} />
              </div>
              <div className="absolute top-8 right-8 text-[#1a2230] font-black text-6xl tracking-tighter opacity-80 group-hover:text-[#ff6a00]/10 transition-colors duration-300">
                02
              </div>
              <h3 className="text-xl font-bold mb-4 z-10 text-white leading-tight">
                Practice, Practice, Practice
              </h3>
              <p className="text-[#8e98a8] text-[15px] leading-relaxed mb-10 z-10">
                With your learner's permit in hand, you'll gain real-world
                driving experience under the supervision of our instructors,
                building your confidence on the road.
              </p>
              <button className="text-[#ff6a00] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 mt-auto z-10 group/btn hover:text-white transition-colors duration-300">
                LEARN MORE{" "}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-[#0f141e] border border-[#2a3441] rounded-[24px] p-8 md:p-10 flex flex-col items-start relative overflow-hidden group hover:border-[#ff6a00] transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#1c2432] flex items-center justify-center mb-10">
                <Award className="w-6 h-6 text-[#ff6a00]" strokeWidth={2} />
              </div>
              <div className="absolute top-8 right-8 text-[#1a2230] font-black text-6xl tracking-tighter opacity-80 group-hover:text-[#ff6a00]/10 transition-colors duration-300">
                03
              </div>
              <h3 className="text-xl font-bold mb-4 z-10 text-white leading-tight">
                Pass The Driving Test With Confidence
              </h3>
              <p className="text-[#8e98a8] text-[15px] leading-relaxed mb-10 z-10">
                With thorough preparation, you'll be ready to ace both the
                written and practical tests. Our students have a high success
                rate, thanks to our comprehensive training approach.
              </p>
              <button className="text-[#ff6a00] font-bold text-[13px] tracking-widest uppercase flex items-center gap-2 mt-auto z-10 group/btn hover:text-white transition-colors duration-300">
                LEARN MORE{" "}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Corporate Inquiry Section */}
      <div className="py-24 bg-[#fcfdff] relative">
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 border border-[#ff6a00]/30 bg-white text-[#ff6a00] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              <FileEdit className="w-3 h-3" /> CORPORATE INQUIRY DESK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0f141e]">
              Select Your Service Interest
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Fill in the form below. Our customer concierge matches your intent
              within 30 minutes to route you directly into our secure pipeline.
            </p>
          </div>

          <div className="bg-white rounded-[24px] shadow-[0_8px_40px_rgb(0,0,0,0.06)] border border-slate-100 border-t-[6px] border-t-[#ea580c] p-6 md:p-10 relative overflow-hidden">
            {!isSubmitted ? (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Raza"
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                      Father's Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Malik Muhammad Ilyas"
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 03897666928"
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 font-medium text-slate-800"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                    Inquiry Type *
                  </label>
                  <div className="relative">
                    <select
                      required
                      className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm appearance-none bg-white font-medium text-slate-800 cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="learn">
                        Learn Driving / Course Inquiry
                      </option>
                      <option value="corporate">
                        Corporate Fleet Training
                      </option>
                      <option value="license">
                        License Test Preparation Only
                      </option>
                    </select>
                    <ChevronDown className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-extrabold uppercase tracking-widest text-[#1a2230]">
                    Message / Special Queries *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#ea580c] focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-sm placeholder:text-slate-400 resize-none font-medium text-slate-800 leading-relaxed"
                  ></textarea>
                </div>

                <div className="bg-[#f8fafc] rounded-lg p-4 flex gap-3 items-start border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    By submitting or listing, you authorize GoDriveify support
                    to review your registered assets and reach out directly at
                    the WhatsApp number specified under Pakistani regulatory
                    biometrics checks.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-[13px] tracking-widest uppercase py-4 rounded-lg transition-colors duration-300 mt-2 shadow-md hover:shadow-lg"
                >
                  Submit Corporate Inquiry
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center py-8 px-4">
                <div className="w-16 h-16 bg-[#e9f8f0] rounded-full border border-[#bcebd3] flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-[#00a843]" strokeWidth={3} />
                </div>
                <h3 className="text-[28px] font-bold text-[#0f141e] mb-2">
                  Inquiry Registered Successfully!
                </h3>
                <p className="text-[#ea580c] text-xs font-black tracking-widest uppercase mb-6">
                  YOUR TICKET ID IS: GD310751
                </p>

                <div className="border border-[#1a2230] rounded-[16px] p-6 mb-8 max-w-[500px] w-full">
                  <p className="text-[#1a2230] text-[15px] font-semibold leading-relaxed">
                    We have logged your request under{" "}
                    <strong className="font-bold">
                      "Learn Driving / Course
                      <br />
                      Inquiry"
                    </strong>
                    . Our Faisalabad support agents are prepping
                    <br />
                    custom schedules or evaluations for you.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <button
                    type="button"
                    className="bg-[#00a843] hover:bg-[#00913a] text-white font-bold text-[13px] tracking-widest uppercase px-6 py-4 rounded-lg transition-colors duration-300 shadow-md"
                  >
                    RESUME ON WHATSAPP INSTANTLY
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#e2e8f0] hover:bg-[#cbd5e1] text-[#334155] font-bold text-[13px] tracking-widest uppercase px-6 py-4 rounded-lg transition-colors duration-300"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    {/* Bottom CTA */}
    <div className="bg-[#0b0f17] py-16 md:py-24 px-4 overflow-hidden relative">
      <style>{`
        @keyframes spin-border {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="relative rounded-[24px] overflow-hidden p-[2px] group cursor-pointer">
          {/* Animated Border Gradient (Single rotating glowing dot/circle) */}
          <div
            className="absolute top-1/2 left-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_97.5%,rgba(234,88,12,0.4)_98.5%,rgba(255,255,255,1)_99.5%,rgba(234,88,12,0.4)_100%)] opacity-100 blur-[2px]"
            style={{ animation: "spin-border 18s linear infinite", transformOrigin: "center" }}
          />

          <div className="bg-[#10141d] rounded-[23px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14 relative overflow-hidden shadow-2xl z-10 h-full transition-colors duration-300 group-hover:bg-[#121824]">
            {/* Decorative gradient blob */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1a2230]/40 to-transparent opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ea580c]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50" />

            <div className="flex-1 relative z-10 w-full text-center md:text-left">
              <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 border border-[#ea580c]/20 bg-transparent text-[#ea580c] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 transition-colors duration-300 group-hover:bg-[#ea580c]/10">
                <Sparkles className="w-3 h-3" /> START DRIVING SAFELY TODAY
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
              <button onClick={onContactUs} className="w-full sm:w-auto px-8 py-4 bg-[#1a2230]/80 border border-[#2a3441] hover:bg-[#1e2736] hover:border-[#3b475c] text-white font-bold text-[13px] tracking-widest uppercase rounded-xl transition-all duration-300 whitespace-nowrap">
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
