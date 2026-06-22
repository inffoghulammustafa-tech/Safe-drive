import React, { useState } from "react";
import { ShieldCheck, CalendarRange, MapPin, Award, Users, Star, Car, Phone, Sparkles, Bookmark, Search, FileText, Settings, Upload, Lock, ThumbsUp, Check, Info } from "lucide-react";
import { RentCarModal, SaleCarModal } from "./HeaderModals";

interface HeroProps {
  onActionClick: (section: string) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onActionClick, activeTab, setActiveTab }) => {
  const [rentOpen, setRentOpen] = useState(false);
  const [saleOpen, setSaleOpen] = useState(false);

  // Search and Filter states for Rent A Car option
  const [rentSearchQuery, setRentSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedSector, setSelectedSector] = useState("All Hubs");
  const [rateFilter, setRateFilter] = useState("any");
  const [sysFilter, setSysFilter] = useState("ALL");
  const [pilotFilter, setPilotFilter] = useState("ANY");

  // Form states for Car Request (Reverse Directory)
  const [fullName, setFullName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [model, setModel] = useState("");
  const [budget, setBudget] = useState("");
  const [transmission, setTransmission] = useState("Any Transmission");
  const [city, setCity] = useState("Faisalabad");
  const [area, setArea] = useState("");
  const [scope, setScope] = useState("Within City (Local)");
  const [fuel, setFuel] = useState("Any Fuel");
  const [distance, setDistance] = useState("Under 500 KM");
  const [urgency, setUrgency] = useState("Standard");
  const [duration, setDuration] = useState("");
  const [driver, setDriver] = useState("No (Self-Drive)");

  // Uploaded mock labels
  const [cnicFile, setCnicFile] = useState<string | null>(null);
  const [licenseFile, setLicenseFile] = useState<string | null>(null);

  const [submittedRequests, setSubmittedRequests] = useState<any[]>([]);
  const [showFormSuccess, setShowFormSuccess] = useState(false);

  const allRentCars = [
    {
      id: 1,
      name: "Honda Civic Pro (VTEC)",
      city: "Faisalabad",
      location: "Faisalabad",
      status: "AVAILABLE",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=500&q=80",
      specs: ["AUTOMATIC", "PETROL", "VERIFIED OWNER"],
      partner: "GoDriveify Official",
      rating: "4.9",
      desc: "Pristine, fully loaded automatic sedan.",
      rate: 12000,
      transmission: "AUTOMATIC",
      pilot: "SELF-DRIVE"
    },
    {
      id: 2,
      name: "Toyota Yaris Ativ",
      city: "Lahore",
      location: "Lahore",
      status: "AVAILABLE",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=500&q=80",
      specs: ["AUTOMATIC", "PETROL", "VERIFIED OWNER"],
      partner: "Mian Fawad",
      rating: "4.8",
      desc: "Clean compact sedan with phenomenal fuel average.",
      rate: 6500,
      transmission: "AUTOMATIC",
      pilot: "SELF-DRIVE"
    },
    {
      id: 3,
      name: "Toyota Corolla Altis",
      city: "Islamabad",
      location: "Islamabad",
      status: "BOOKED",
      image: "https://images.unsplash.com/photo-1549399542-7ea3de060a44?auto=format&fit=crop&w=500&q=80",
      specs: ["MANUAL", "PETROL", "STANDARD LISTING"],
      partner: "Chaudhary Bilal",
      rating: "4.7",
      desc: "Highly comfortable luxury cruiser.",
      rate: 7500,
      transmission: "MANUAL",
      pilot: "WITH DRIVER"
    },
    {
      id: 4,
      name: "Suzuki Alto VXL Auto",
      city: "Faisalabad",
      location: "Faisalabad",
      status: "AVAILABLE",
      image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=500&q=80",
      specs: ["AUTOMATIC", "PETROL", "VERIFIED OWNER"],
      partner: "GoDriveify Official",
      rating: "4.8",
      desc: "Super fuel efficient hatchback, dual brakes available.",
      rate: 2500,
      transmission: "AUTOMATIC",
      pilot: "SELF-DRIVE"
    },
    {
      id: 5,
      name: "Suzuki Mehran VX Euro II",
      city: "Faisalabad",
      location: "Faisalabad",
      status: "AVAILABLE",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=500&q=80",
      specs: ["MANUAL", "PETROL", "STANDARD LISTING"],
      partner: "Instructor Akram",
      rating: "4.6",
      desc: "Perfect pocket-friendly learner car.",
      rate: 1800,
      transmission: "MANUAL",
      pilot: "SELF-DRIVE"
    }
  ];

  const filteredRentCars = allRentCars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(rentSearchQuery.toLowerCase()) || 
                          car.partner.toLowerCase().includes(rentSearchQuery.toLowerCase());
    const matchesCity = selectedCity === "All Cities" || car.city === selectedCity;
    const matchesSys = sysFilter === "ALL" || car.transmission === sysFilter;
    const matchesPilot = pilotFilter === "ANY" || 
                         (pilotFilter === "SELF-DRIVE" && car.pilot === "SELF-DRIVE") ||
                         (pilotFilter === "WITH DRIVER" && car.pilot === "WITH DRIVER");
    
    let matchesRate = true;
    if (rateFilter === "low") {
      matchesRate = car.rate < 8000;
    } else if (rateFilter === "high") {
      matchesRate = car.rate >= 8000;
    }
    
    return matchesSearch && matchesCity && matchesSys && matchesPilot && matchesRate;
  });

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !whatsapp || !model || !budget) {
      alert("Please fill in all required (*) fields.");
      return;
    }
    const newReq = {
      fullName,
      whatsapp,
      model,
      budget,
      transmission,
      city,
      area,
      scope,
      fuel,
      distance,
      urgency,
      duration,
      driver,
      cnicFile: cnicFile || "cnic_document.png",
      licenseFile: licenseFile || "license_document.png",
      date: new Date().toLocaleDateString(),
    };
    setSubmittedRequests([newReq, ...submittedRequests]);
    setShowFormSuccess(true);
    setFullName("");
    setWhatsapp("");
    setModel("");
    setBudget("");
    setArea("");
    setDuration("");
    setCnicFile(null);
    setLicenseFile(null);
    setTimeout(() => {
      setShowFormSuccess(false);
    }, 5000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background Video Element with loop & autoplay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-30 scale-[1.03] transition-opacity duration-1000"
        >
          {/* High speed POV highway driving clip at night - highly aesthetic & premium */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-car-driving-on-a-highway-at-night-40488-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fast-driving-on-a-highway-at-night-40487-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/403843516.sd.mp4?s=484218b61cffc29bde5fc87de5b11d9539f72782&profile_id=139&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Soft elegant white overlay so the video is perfectly visible while keeping text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white z-[1]"></div>
        <div className="absolute inset-0 bg-white/10 z-[2]"></div>
      </div>

      {/* Dynamic Warm Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px] pointer-events-none z-[1]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-[1]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20 w-full">
        {/* Badge Indicator */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-orange-500/10 text-orange-600 border border-orange-500/20 mb-6 uppercase">
          <MapPin className="w-3.5 h-3.5 text-orange-500" />
          Faisalabad's First Smart Digital Driving School
        </span>

        {/* Core Heading on White background with Black & Orange text colors */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 mb-6 leading-tight">
          Master the Road <br />
          <span className="bg-gradient-to-r from-orange-600 via-[#ff6a00] to-amber-600 bg-clip-text text-transparent">
            With Confidence
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-700 mb-10 leading-relaxed font-medium">
          Learn from professional, certified instructors with years of road training expertise. We provide customized manual & automatic classes for safe, lifelong driving habits.
        </p>

        {/* CTAs with beautiful Sleek Greyscale buttons */}
        <div className="flex flex-col items-center justify-center gap-4 mb-20">
          <a
            href="tel:+923007663242"
            className="w-full sm:w-auto px-12 py-4 rounded-full bg-neutral-800 hover:bg-neutral-900 text-white font-black tracking-widest text-lg flex items-center justify-center gap-3 shadow-xl shadow-neutral-300 hover:scale-[1.03] active:scale-95 transition-all duration-300 cursor-pointer border-none uppercase"
          >
            CALL US NOW
            <Phone className="w-5 h-5 text-white" />
          </a>

          {/* Rated indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base text-neutral-600 mt-2">
            <div className="flex gap-0.5 text-orange-500">
              <Star className="w-4 h-4 fill-current animate-pulse" />
              <Star className="w-4 h-4 fill-current animate-pulse delay-75" />
              <Star className="w-4 h-4 fill-current animate-pulse delay-100" />
              <Star className="w-4 h-4 fill-current animate-pulse delay-150" />
              <Star className="w-4 h-4 fill-current animate-pulse delay-200" />
            </div>
            <span className="font-semibold text-neutral-700">
              Rated <span className="text-orange-600 font-extrabold">4.9/5</span> by 380+ Confident Students
            </span>
          </div>
        </div>

        {/* GoDriveify Hub Capsule Section (replaces stats cards) */}
        <div id="godriveify-hub" className="mt-14 sm:mt-16 bg-white border border-neutral-200 rounded-[32px] p-4 sm:py-5 sm:px-6 md:py-6 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-md hover:shadow-lg transition-shadow duration-300 max-w-6xl mx-auto text-left relative z-25">
          {/* Brand & Left description tag */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left select-none shrink-0">
            <div className="flex items-center gap-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight flex items-center gap-1.5">
                GoDriveify Hub
              </h3>
              <Sparkles className="w-5 h-5 text-orange-500 shrink-0 fill-orange-500/30 animate-pulse" />
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-1">
              Choose a portal to start your journey
            </p>
          </div>

          {/* Core horizontal navigation capsule */}
          <div className="border border-neutral-200 bg-neutral-50/50 p-1.5 rounded-2xl sm:rounded-full flex flex-col sm:flex-row items-center gap-1 w-full lg:w-auto shadow-inner">
            {/* 1. LEARN DRIVING Button */}
            <button
              onClick={() => {
                setActiveTab("learn");
              }}
              className={`px-6 py-3.5 rounded-xl sm:rounded-full text-[13px] font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer w-full sm:w-auto ${
                activeTab === "learn"
                  ? "bg-[#ff6a00] hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                  : "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              <Bookmark className="w-4 h-4 shrink-0" />
              <span>LEARN DRIVING</span>
            </button>

            {/* 2. RENT A CAR Button */}
            <button
              onClick={() => {
                setActiveTab("rent");
              }}
              className={`px-6 py-3.5 rounded-xl sm:rounded-full text-[13px] font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer w-full sm:w-auto ${
                activeTab === "rent"
                  ? "bg-[#ff6a00] hover:bg-orange-600 text-white shadow-md shadow-orange-550/30 scale-[1.02]"
                  : "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>RENT A CAR</span>
            </button>

            {/* 3. CAR REQUESTS Button */}
            <button
              onClick={() => {
                setActiveTab("requests");
              }}
              className={`px-6 py-3.5 rounded-xl sm:rounded-full text-[13px] font-extrabold tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer w-full sm:w-auto ${
                activeTab === "requests"
                  ? "bg-[#ff6a00] hover:bg-orange-600 text-white shadow-md shadow-orange-500/30 scale-[1.02]"
                  : "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              <span>CAR REQUESTS</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DYNAMIC UNDER-COVERS SECTION ACCORDING TO ACTIVE SELECTED TAB */}
        {/* ========================================================= */}
        <div className="mt-14 sm:mt-16 text-left max-w-6xl mx-auto w-full relative z-20">
          
          {/* TAB 1: LEARN DRIVING */}
          {activeTab === "learn" && (
            <div className="space-y-16 animate-fade-in">
              {/* Grid of 3 custom boxes */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Box 1 */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <FileText className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 leading-tight">
                      Experienced & Certified Instructors
                    </h3>
                    <div className="w-8 h-[3px] bg-[#ff6a00] mt-3 mb-2 rounded-full"></div>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                      Our professional trainers provide hands-on learning with dual control safety cars.
                    </p>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <Settings className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 leading-tight">
                      Customized Learning Programs
                    </h3>
                    <div className="w-8 h-[3px] bg-transparent mt-3 mb-2 rounded-full"></div>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                      We offer flexible courses designed for beginners, intermediates, and advanced drivers.
                    </p>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <ShieldCheck className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base sm:text-lg text-neutral-900 leading-tight">
                      Traffic Rules Training
                    </h3>
                    <div className="w-8 h-[3px] bg-transparent mt-3 mb-2 rounded-full"></div>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                      We emphasize defensive driving, road signs boards, and Punjab traffic rules awareness.
                    </p>
                  </div>
                </div>
              </div>

              {/* About Us section block with precise 2 images overlapping with margins, bg-black version */}
              <div className="bg-neutral-950 rounded-[40px] p-6 sm:p-10 md:p-12 border border-neutral-900 shadow-2xl relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-14">
                  {/* Left column - Overlapping Images with margin styling according to image */}
                  <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[360px] md:min-h-[420px]">
                    {/* Background Overlapping Image Card */}
                    <div className="absolute left-0 top-4 w-[75%] h-[75%] rounded-3xl overflow-hidden shadow-lg border-4 border-neutral-800 z-10 transition-transform duration-500 hover:scale-[1.02]">
                      <img
                        src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=600&q=80"
                        alt="Student driving behind steering wheel"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Foreground Overlapping Image Card with margin applied perfectly in proportion */}
                    <div className="absolute right-0 bottom-4 w-[70%] h-[70%] rounded-3xl overflow-hidden shadow-xl border-8 border-neutral-900 z-20 transition-transform duration-500 hover:scale-[1.03]">
                      <img
                        src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=600&q=80"
                        alt="Car maneuvering through training cones"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Right column - About Us text content & checkmarks */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                    <div>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#ff6a00]">ABOUT US</span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1 mb-4 leading-tight">
                        We are your reliable, all-in-one platform for experienced and professional driving solutions.
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans">
                      Welcome to <strong>GoDriveify Driving School</strong>. Learning to drive is no longer just a basic skill; it is an essential part of independent and responsible living. This is why choosing a professional driving school plays a vital role in developing safe and confident drivers. A high-quality driving school offers structured training that covers traffic laws, road discipline, vehicle control, and defensive driving techniques designed for real road conditions.
                    </p>

                    {/* 2x2 grid of check points with descriptive subtags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
                      {/* Tick item 1 */}
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-[#ff6a00] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-neutral-100">Beginner Driving Course</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-sans">
                            Learn the basics of driving, road signs, and traffic rules with step-by-step guidance.
                          </p>
                        </div>
                      </div>

                      {/* Tick item 2 */}
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-[#ff6a00] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-neutral-100">Defensive Driving Training</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-sans">
                            Develop skills to drive safely in all conditions, avoiding potential hazards on the road.
                          </p>
                        </div>
                      </div>

                      {/* Tick item 3 */}
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-[#ff6a00] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-neutral-100">License Preparation Course</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-sans">
                            Get expert training to pass your official DLIMS Punjab driving license track exam.
                          </p>
                        </div>
                      </div>

                      {/* Tick item 4 */}
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-orange-500/10 flex items-center justify-center text-[#ff6a00] mt-0.5 shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-sm text-neutral-100">Refresher Course</h4>
                          <p className="text-[11px] text-neutral-400 mt-0.5 leading-relaxed font-sans">
                            Already know how to drive? Revitalize your road confidence inside heavy traffic lanes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: RENT A CAR */}
          {activeTab === "rent" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest bg-orange-50 text-orange-600 uppercase border border-orange-200">
                  Local Peer-To-Peer Marketplace
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                  Rent Vehicles From Certified Owners
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans leading-relaxed">
                  Browse verified available rides from our trusted local fleet partners and registered private owners. Lock in direct WhatsApp coordination without any hidden agents.
                </p>
              </div>

              {/* Filter Row Block */}
              <div className="bg-neutral-50 border border-neutral-205 rounded-[24px] p-4 shadow-inner max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-3">
                {/* Search */}
                <div className="relative w-full flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter brand or model..."
                    value={rentSearchQuery}
                    onChange={(e) => setRentSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-sm"
                  />
                </div>

                {/* City select dropdown */}
                <div className="w-full md:w-48 relative">
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none cursor-pointer text-xs sm:text-sm font-sans appearance-none text-neutral-800 shadow-sm"
                  >
                    <option value="All Cities">📍 All Cities</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                  </select>
                </div>

                {/* Hub/Sector dropdown */}
                <div className="w-full md:w-48 relative">
                  <select
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-neutral-200 rounded-xl focus:outline-none cursor-pointer text-xs sm:text-sm font-sans appearance-none text-neutral-800 shadow-sm"
                  >
                    <option value="All Hubs">🏢 All Hubs</option>
                    <option value="Susan Road Hub">Susan Road Hub</option>
                    <option value="Canal Road Hub">Canal Road Hub</option>
                    <option value="Sargodha Road Hub">Sargodha Road Hub</option>
                  </select>
                </div>

                {/* Scan fleet action button */}
                <button
                  onClick={() => {
                    alert(`Scanning ${filteredRentCars.length} options matching query in ${selectedCity}...`);
                  }}
                  className="w-full md:w-auto px-6 py-3.5 bg-neutral-950 hover:bg-neutral-900 text-white rounded-xl text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-95 shadow"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>SCAN FLEET</span>
                </button>
              </div>

              {/* Sub filters pill buttons identical to screenshot */}
              <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-100 pt-5 pb-2 text-xs text-neutral-500">
                <div className="flex flex-wrap items-center gap-3">
                  {/* Select Rate Limit */}
                  <select
                    value={rateFilter}
                    onChange={(e) => setRateFilter(e.target.value)}
                    className="px-3.5 py-1.5 bg-white border border-neutral-200 rounded-full text-[11px] font-bold text-neutral-700 outline-none cursor-pointer shadow-sm"
                  >
                    <option value="any">Rate: ANY</option>
                    <option value="low">Under 8,000 PKR</option>
                    <option value="high">Over 8,000 PKR</option>
                  </select>

                  {/* System selection pills */}
                  <div className="flex items-center bg-neutral-100 p-0.5 rounded-full border border-neutral-200 shadow-sm">
                    {["ALL", "AUTOMATIC", "MANUAL"].map((sys) => (
                      <button
                        key={sys}
                        onClick={() => setSysFilter(sys)}
                        className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase transition-all whitespace-nowrap cursor-pointer ${
                          sysFilter === sys
                            ? "bg-neutral-950 text-white shadow-sm"
                            : "text-neutral-500 hover:text-neutral-800"
                        }`}
                      >
                        {sys === "ALL" ? "SYS: ALL" : sys}
                      </button>
                    ))}
                  </div>

                  {/* Pilot style pills */}
                  <div className="flex items-center bg-neutral-100 p-0.5 rounded-full border border-neutral-200 shadow-sm">
                    {["ANY", "SELF-DRIVE", "WITH DRIVER"].map((pilot) => (
                      <button
                        key={pilot}
                        onClick={() => setPilotFilter(pilot)}
                        className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase transition-all whitespace-nowrap cursor-pointer ${
                          pilotFilter === pilot
                            ? "bg-neutral-950 text-white shadow-sm"
                            : "text-neutral-500 hover:text-neutral-800"
                        }`}
                      >
                        {pilot === "ANY" ? "PILOT: ANY" : pilot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats badge */}
                <span className="font-mono text-[10px] text-neutral-500 font-extrabold uppercase tracking-wider bg-neutral-50 px-3 py-1.5 rounded-full border border-neutral-200/80 shadow-inner">
                  [ {filteredRentCars.length} ASSETS DETECTED ]
                </span>
              </div>

              {/* Rent Cars Products List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {filteredRentCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:border-orange-500/40 hover:shadow-md transition-all duration-300 flex flex-col group"
                  >
                    {/* Image Area with Badge overlays */}
                    <div className="relative h-48 overflow-hidden bg-neutral-100">
                      <img
                        src={car.image}
                        alt={car.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Status pill Overlay */}
                      <div className="absolute top-3 left-3 flex gap-1.5">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider text-white shadow-sm ${
                          car.status === "AVAILABLE" ? "bg-emerald-500" : "bg-amber-600"
                        }`}>
                          {car.status}
                        </span>
                      </div>
                      {/* Location Overlay */}
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[10px] text-white font-mono flex items-center gap-1 font-bold">
                        <MapPin className="w-2.5 h-2.5 text-orange-400" />
                        {car.location}
                      </span>
                    </div>

                    {/* Information Area */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Name */}
                        <h3 className="font-black text-neutral-900 group-hover:text-[#ff6a00] transition-colors leading-snug text-base sm:text-lg mb-2">
                          {car.name}
                        </h3>

                        {/* Specs badges layout */}
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {car.specs.map((sp, idx) => (
                            <span
                              key={idx}
                              className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${
                                sp === "VERIFIED OWNER"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                  : "bg-neutral-100 text-neutral-600"
                              }`}
                            >
                              {sp}
                            </span>
                          ))}
                        </div>

                        {/* Top Partner Tag */}
                        <div className="bg-orange-50 px-2.5 py-1.5 rounded-xl border border-orange-200/[0.15] flex items-center justify-between text-[11px] text-neutral-700 mb-3 font-semibold">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                            TOP PARTNER
                          </span>
                          <span className="text-neutral-500 text-[10px]">
                            {car.partner} • ⭐ {car.rating}
                          </span>
                        </div>

                        {/* Description text */}
                        <p className="text-xs text-neutral-500 leading-relaxed font-sans mb-4">
                          {car.desc}
                        </p>
                      </div>

                      {/* Footer Cost & WhatsApp CTA */}
                      <div className="border-t border-neutral-100 pt-4 flex items-center justify-between gap-2">
                        <div>
                          <span className="block text-[9px] text-[#ff6a00] uppercase font-black tracking-widest">Rate</span>
                          <span className="text-sm font-black text-neutral-900">
                            PKR <span className="text-lg">{car.rate.toLocaleString()}</span>
                            <span className="text-[10px] text-neutral-500 font-normal"> / Day</span>
                          </span>
                        </div>

                        {car.status === "AVAILABLE" ? (
                          <a
                            href={`https://wa.me/923007663242?text=Assalam%20o%20Alaikum%20GoDriveify,%20I%20am%20interested%20in%20renting%20the%20${encodeURIComponent(car.name)}%20for%20PKR%20${car.rate}%20per%20day.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] hover:bg-emerald-600 text-white px-4 py-2 rounded-xl text-xs font-bold tracking-tight uppercase flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-emerald-500/10 active:scale-95"
                          >
                            <Phone className="w-3.5 h-3.5 fill-white stroke-none" />
                            <span>WHATSAPP</span>
                          </a>
                        ) : (
                          <button
                            disabled
                            className="bg-neutral-100 border border-neutral-200 text-neutral-400 px-4 py-2 rounded-xl text-xs font-black tracking-tight uppercase"
                          >
                            UNAVAILABLE TODAY
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: CAR REQUESTS (REVERSE DIRECTORY FORM) */}
          {activeTab === "requests" && (
            <div className="space-y-8 animate-fade-in">
              <div className="text-center max-w-3xl mx-auto space-y-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest bg-indigo-50 text-indigo-700 uppercase border border-indigo-200">
                  ⚡ Reverse Directory
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-neutral-950 tracking-tight leading-tight">
                  Request a Car
                </h2>
                <p className="text-neutral-500 text-xs sm:text-sm font-sans leading-relaxed">
                  Post your requirements. Verified car owners will reach out directly with their best quotes on WhatsApp.
                </p>
              </div>

              {/* Form card wrapped layout identical to screenshot */}
              <div className="bg-white border border-neutral-200 rounded-[32px] p-6 sm:p-10 shadow-lg max-w-3xl mx-auto">
                {showFormSuccess ? (
                  <div className="py-12 flex flex-col items-center text-center space-y-4 animate-scale-up">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <ThumbsUp className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-neutral-900">Request Posted Successfully!</h3>
                    <p className="text-neutral-500 text-xs sm:text-sm font-sans max-w-md">
                      Excellent! Your requirement has been live on our dealer matching reverse directory. Nearby car owners will ping you soon on your registered WhatsApp.
                    </p>
                    <button
                      onClick={() => setShowFormSuccess(false)}
                      className="mt-4 px-6 py-2.5 bg-neutral-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                    >
                      Post Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRequestSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Asad Malik"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner"
                        />
                      </div>

                      {/* Whatsapp number */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 03001234567"
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Preferred Model */}
                    <div>
                      <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                        PREFERRED CAR MODEL / TYPE *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Honda Civic, Corolla, or Any SUV"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Max budget */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          MAX BUDGET (PKR / DAY) *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 font-mono text-xs font-bold">
                            PKR
                          </span>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 6000"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full pl-14 pr-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner font-mono"
                          />
                        </div>
                      </div>

                      {/* Transmission preferred */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          TRANSMISSION PREFERRED
                        </label>
                        <select
                          value={transmission}
                          onChange={(e) => setTransmission(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>Any Transmission</option>
                          <option>Automatic Only</option>
                          <option>Manual Only</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* City value */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          CITY *
                        </label>
                        <select
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>Faisalabad</option>
                          <option>Lahore</option>
                          <option>Islamabad</option>
                        </select>
                      </div>

                      {/* Specific Area */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          SPECIFIC AREA/PHASE
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. DHA Phase 2, Millat Town"
                          value={area}
                          onChange={(e) => setArea(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      {/* Travel scope */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          TRAVEL SCOPE
                        </label>
                        <select
                          value={scope}
                          onChange={(e) => setScope(e.target.value)}
                          className="w-full px-3 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>Within City (Local)</option>
                          <option>Out of City (Intercity)</option>
                        </select>
                      </div>

                      {/* Fuel preference */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          FUEL PREFERENCE
                        </label>
                        <select
                          value={fuel}
                          onChange={(e) => setFuel(e.target.value)}
                          className="w-full px-3 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>Any Fuel</option>
                          <option>Petrol Only</option>
                          <option>Hybrid Only</option>
                          <option>Diesel Only</option>
                        </select>
                      </div>

                      {/* Est distance */}
                      <div>
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          EST. DISTANCE
                        </label>
                        <select
                          value={distance}
                          onChange={(e) => setDistance(e.target.value)}
                          className="w-full px-3 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>Under 500 KM</option>
                          <option>Over 500 KM</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                      {/* Duration Timings */}
                      <div className="sm:col-span-8">
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          DURATION / TIMINGS (مدت - مثال: 3 دن یا تاریخیں)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 5 Days, or Oct 10th to Oct 15th"
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 focus:outline-none focus:border-orange-500 rounded-xl text-xs sm:text-sm font-sans text-neutral-800 shadow-inner"
                        />
                      </div>

                      {/* Driver required */}
                      <div className="sm:col-span-4">
                        <label className="block text-[10px] font-black uppercase text-neutral-700 tracking-wider mb-2">
                          DRIVER REQUIRED?
                        </label>
                        <select
                          value={driver}
                          onChange={(e) => setDriver(e.target.value)}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none text-xs sm:text-sm font-sans text-neutral-800 shadow-inner cursor-pointer"
                        >
                          <option>No (Self-Drive)</option>
                          <option>Yes (With Driver)</option>
                        </select>
                      </div>
                    </div>

                    {/* CNIC and License Upload design elements exactly matching screenshot */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                      {/* CNIC block */}
                      <div className="relative bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-3xl p-5 hover:bg-neutral-100/50 transition-colors duration-200">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setCnicFile(e.target.files[0].name);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                            <Upload className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-xs font-extrabold text-neutral-900 uppercase">
                              {cnicFile ? `Uploaded: ${cnicFile}` : "Upload CNIC (Front & Back) *"}
                            </p>
                            <p className="text-[10px] text-neutral-500 font-sans mt-0.5 max-w-[200px] mx-auto leading-tight">
                              Click to upload CNIC. Secure Identity Lockbox.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* License block */}
                      <div className="relative bg-neutral-50 border-2 border-dashed border-neutral-200 rounded-3xl p-5 hover:bg-neutral-100/50 transition-colors duration-200">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setLicenseFile(e.target.files[0].name);
                            }
                          }}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />
                        <div className="flex flex-col items-center text-center space-y-2">
                          <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                            <Car className="w-5 h-5 text-orange-650" />
                          </div>
                          <div>
                            <p className="text-xs font-extrabold text-neutral-900 uppercase">
                              {licenseFile ? `Uploaded : ${licenseFile}` : "Upload Driving License *"}
                            </p>
                            <p className="text-[10px] text-neutral-500 font-sans mt-0.5 max-w-[200px] mx-auto leading-tight">
                              Click to upload License. Required for Self-Drive.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit request button */}
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-[#ff6a00] hover:bg-orange-600 text-white font-black tracking-widest text-sm uppercase transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98 shadow-md shadow-orange-500/20"
                    >
                      <span>SUBMIT REVERSE REQUEST</span>
                      <Sparkles className="w-4 h-4 fill-white/20 animate-pulse" />
                    </button>
                  </form>
                )}
              </div>

              {/* Dynamic list of live community reverse requests matching the visual look */}
              {submittedRequests.length > 0 && (
                <div className="max-w-3xl mx-auto space-y-4 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <h3 className="font-extrabold text-sm uppercase text-neutral-900 tracking-wider">
                      Live Reverse Directory Active Requests ({submittedRequests.length})
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {submittedRequests.map((req, ridx) => (
                      <div key={ridx} className="p-4 bg-[#fcfcfc] border border-neutral-200 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-extrabold text-sm text-neutral-900">{req.fullName}</h4>
                            <span className="text-[9px] bg-emerald-100 text-emerald-800 font-extrabold px-2 py-0.5 rounded-full uppercase">
                              Live Matching
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 font-semibold mt-1">
                            Seeking {req.model} • Budget: {req.budget} PKR/Day • City: {req.city} ({req.area || "Any Area"})
                          </p>
                          <p className="text-[10px] text-neutral-400 font-sans mt-1">
                            Transmission: {req.transmission} | Fuel: {req.fuel} | Driver: {req.driver} | Requested {req.date}
                          </p>
                        </div>

                        <a
                          href={`https://wa.me/${req.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap shadow-sm shadow-emerald-500/10 cursor-pointer"
                        >
                          WhatsApp User
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal containers as back-compatible overlays for navigation hooks */}
        <RentCarModal isOpen={rentOpen} onClose={() => { setRentOpen(false); }} />
        <SaleCarModal isOpen={saleOpen} onClose={() => { setSaleOpen(false); }} />
      </div>
    </section>
  );
};
