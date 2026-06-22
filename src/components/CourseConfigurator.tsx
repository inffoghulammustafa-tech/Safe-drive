import React, { useState, useEffect } from "react";
import { DRIVING_PROGRAMS } from "../data";
import { StudentBooking } from "../types";
import { Calculator, CheckCircle2, CreditCard, ShieldCheck, UserCheck, Sparkles, Building, MapPin, Loader2 } from "lucide-react";

interface CourseConfiguratorProps {
  selectedProgramId: string;
  onBookingSuccess: (newBooking: StudentBooking) => void;
}

export const CourseConfigurator: React.FC<CourseConfiguratorProps> = ({
  selectedProgramId,
  onBookingSuccess,
}) => {
  // Configurator states
  const [programId, setProgramId] = useState(selectedProgramId || DRIVING_PROGRAMS[0].id);
  const [instructorGender, setInstructorGender] = useState<"male" | "female">("male");
  const [transmission, setTransmission] = useState<"manual" | "automatic">("manual");
  const [pickup, setPickup] = useState<"doorstep" | "hub">("doorstep");
  const [timing, setTiming] = useState<"morning" | "afternoon" | "evening">("morning");

  // User input states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResponseData, setSuccessResponseData] = useState<{
    bookingId: string;
    instructorName: string;
    message: string;
    scheduledStart: string;
  } | null>(null);

  // Sync selected program id from parent props
  useEffect(() => {
    if (selectedProgramId) {
      setProgramId(selectedProgramId);
    }
  }, [selectedProgramId]);

  const activeProgram = DRIVING_PROGRAMS.find((p) => p.id === programId) || DRIVING_PROGRAMS[0];

  // Dynamic Live Fee Calculation
  // Base Fee + Adjustments
  const baseFee = activeProgram.basePrice;
  const femaleCoachCharge = instructorGender === "female" ? 1500 : 0;
  const automaticTransCharge = transmission === "automatic" ? 1200 : 0;
  const doorstepPickupCharge = pickup === "doorstep" ? 2500 : 0;
  const totalFee = baseFee + femaleCoachCharge + automaticTransCharge + doorstepPickupCharge;

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Aapka Naam aur Mobile Number zaroori hain!");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          courseType: activeProgram.name,
          instructorGender,
          transmission,
          pickup,
          timing,
          notes: additionalNotes,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        const newBookingRecord: StudentBooking = {
          bookingId: data.bookingId,
          name,
          phone,
          email,
          programId: activeProgram.id,
          programName: activeProgram.name,
          instructorGender,
          transmission,
          pickup,
          timing,
          price: totalFee,
          instructorName: data.instructorName,
          scheduledStart: data.scheduledStart,
          progress: 5,
          status: "Confirmed",
        };

        // Cache the newly created booking inside LocalStorage so the student can view their booking log
        const cached = localStorage.getItem("godriveify_bookings");
        const existingList = cached ? JSON.parse(cached) : [];
        existingList.unshift(newBookingRecord);
        localStorage.setItem("godriveify_bookings", JSON.stringify(existingList));

        setSuccessResponseData({
          bookingId: data.bookingId,
          instructorName: data.instructorName,
          message: data.message,
          scheduledStart: data.scheduledStart,
        });

        // Callback notifications to parent
        onBookingSuccess(newBookingRecord);

        // Reset user input states (excluding configuration)
        setName("");
        setPhone("");
        setEmail("");
        setAdditionalNotes("");
      } else {
        alert("Booking process krte waqt masla aya. Barahe karam dobara koshish krein.");
      }
    } catch (err) {
      console.error(err);
      alert("Error reaching the registration server. Registering locally instead.");
      
      // Fallback local booking simulation
      const mockId = "GD-LOCAL" + Math.floor(1000 + Math.random() * 9000);
      const guestInstructor = instructorGender === "female" ? "Madam Sadia" : "Sir Bilal";
      const fallbackBooking: StudentBooking = {
        bookingId: mockId,
        name,
        phone,
        email,
        programId: activeProgram.id,
        programName: activeProgram.name,
        instructorGender,
        transmission,
        pickup,
        timing,
        price: totalFee,
        instructorName: guestInstructor,
        scheduledStart: new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString(),
        progress: 10,
        status: "Confirmed",
      };

      const cached = localStorage.getItem("godriveify_bookings");
      const existingList = cached ? JSON.parse(cached) : [];
      existingList.unshift(fallbackBooking);
      localStorage.setItem("godriveify_bookings", JSON.stringify(existingList));

      setSuccessResponseData({
        bookingId: mockId,
        instructorName: guestInstructor,
        message: `Offline localized booking created successfully under registration code ${mockId}! ${guestInstructor} is scheduled to contact you.`,
        scheduledStart: fallbackBooking.scheduledStart,
      });

      onBookingSuccess(fallbackBooking);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="configurator" className="py-24 relative bg-white">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-extrabold tracking-widest text-xs uppercase">Interactive Tool</span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-950 mt-2 mb-4">
            Custom Fee Estimator & Slot Booking
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Select your preferred training configurations below to dynamically construct your custom school catalog and schedule. Zero hidden costs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT PANEL - CONFIGURATION CONTROLS */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-neutral-200 p-6 sm:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-orange-600" />
              Configure Your Training Specifications
            </h3>

            <div className="space-y-6">
              {/* Option 1: Choose Driving Program */}
              <div>
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-2.5">
                  1. Select Driving Program
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DRIVING_PROGRAMS.map((prog) => (
                    <button
                      key={prog.id}
                      onClick={() => setProgramId(prog.id)}
                      className={`p-4 rounded-xl text-left border cursor-pointer smooth-transition transition-all ${
                        programId === prog.id
                          ? "bg-orange-500/10 border-orange-500 ring-1 ring-orange-500/50"
                          : "bg-neutral-50/50 border-neutral-200 hover:border-neutral-350 hover:bg-neutral-100/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-neutral-900">{prog.name}</span>
                        {programId === prog.id && <span className="w-2 h-2 rounded-full bg-orange-600"></span>}
                      </div>
                      <span className="block text-[11px] text-neutral-500 mt-1">{prog.duration}</span>
                      <span className="block text-xs font-black text-orange-600 mt-2">PKR {prog.basePrice.toLocaleString()}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Options Row (Instructor, Transmission, Pickup) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Option 2: Coach Preference */}
                <div>
                  <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-2.5">
                    2. Coach Division
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
                    <button
                      type="button"
                      onClick={() => setInstructorGender("male")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer ${
                        instructorGender === "male"
                          ? "bg-white text-neutral-900 border border-neutral-200/80 shadow-sm"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Male Instructor
                    </button>
                    <button
                      type="button"
                      onClick={() => setInstructorGender("female")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 ${
                        instructorGender === "female"
                          ? "bg-orange-500/15 text-orange-700 border border-orange-500/30"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Female Coach
                      <span className="bg-orange-500/20 text-[9px] text-orange-700 px-1 py-0.5 rounded font-black scale-90">
                        +1.5K
                      </span>
                    </button>
                  </div>
                </div>

                {/* Option 3: Transmission */}
                <div>
                  <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-2.5">
                    3. Gear Transmission
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
                    <button
                      type="button"
                      onClick={() => setTransmission("manual")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer ${
                        transmission === "manual" ? "bg-white text-neutral-900 border border-neutral-200/80 shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Manual Gear
                    </button>
                    <button
                      type="button"
                      onClick={() => setTransmission("automatic")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-center gap-1 ${
                        transmission === "automatic"
                          ? "bg-[#4a5568] text-white"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Automatic
                      <span className="bg-neutral-850/20 text-[9px] text-white px-1 py-0.5 rounded font-black scale-90">
                        +1.2K
                      </span>
                    </button>
                  </div>
                </div>

                {/* Option 4: Pickup Location */}
                <div>
                  <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-2.5">
                    4. Pick & Drop Hub
                  </label>
                  <div className="grid grid-cols-2 gap-2 bg-neutral-100 p-1 rounded-xl border border-neutral-200">
                    <button
                      type="button"
                      onClick={() => setPickup("doorstep")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer flex items-center justify-center gap-1 ${
                        pickup === "doorstep"
                          ? "bg-[#4a5568] text-white"
                          : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Doorstep
                      <span className="bg-neutral-850/20 text-[9px] text-white px-1 py-0.5 rounded font-black scale-90">
                        +2.5K
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPickup("hub")}
                      className={`py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer ${
                        pickup === "hub" ? "bg-white text-neutral-900 border border-neutral-200/80 shadow-sm" : "text-neutral-600 hover:text-neutral-900"
                      }`}
                    >
                      Meet at Hub
                    </button>
                  </div>
                </div>
              </div>

              {/* Option 5: Timing Slots */}
              <div>
                <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-2.5">
                  5. Timing Slot Convenience
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "morning", label: "Morning Shift", time: "7:00 AM - 11:30 AM" },
                    { id: "afternoon", label: "Afternoon Shift", time: "12:00 PM - 4:00 PM" },
                    { id: "evening", label: "Evening Shift", time: "4:30 PM - 8:00 PM" },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      onClick={() => setTiming(slot.id as any)}
                      className={`p-3 rounded-xl text-center border cursor-pointer smooth-transition ${
                        timing === slot.id
                          ? "bg-orange-500/10 border-orange-500 text-orange-700 font-bold"
                          : "bg-neutral-50/50 border-neutral-200 text-neutral-700 hover:border-neutral-350 hover:bg-neutral-100"
                      }`}
                    >
                      <span className="block text-xs font-bold">{slot.label}</span>
                      <span className="block text-[10px] opacity-75 mt-0.5">{slot.time}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-neutral-200 my-6"></div>

              {/* Enrolment Form Body */}
              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                  Student Registration Information
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-neutral-700 font-bold mb-1">FullName / Aapka Naam *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ghulam Mustafa"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-neutral-700 font-bold mb-1">Mobile / Whatsapp Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0300-1234567"
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-700 font-bold mb-1">Email Address (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. name@example.com"
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-neutral-700 font-bold mb-1">Pickup Landmark or Requirements (Optional)</label>
                  <textarea
                    rows={2}
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    placeholder="e.g. Near Susan Road Jamil Sweets, Kohinoor Town."
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-xl p-4 text-sm text-neutral-900 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-4 rounded-xl text-white font-extrabold text-sm shadow-xl shadow-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  style={{ backgroundColor: "#525252" }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Registering with School Server...
                    </>
                  ) : (
                    <>
                      Confirm &amp; Book My Driving Slot
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT PANEL - LIVE INVOICE RECEIPT */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 text-neutral-800 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-400/5 rounded-full blur-2xl"></div>
              
              {/* Receipt Heading */}
              <div className="border-b border-neutral-200 pb-4 mb-4 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">Estimated Invoice</h4>
                  <p className="text-[10px] text-neutral-500">GoDriveify Faisalabad</p>
                </div>
                <CreditCard className="w-5 h-5 text-orange-600" />
              </div>

              {/* Course Selection Summary */}
              <div className="space-y-4 text-xs">
                <div>
                  <span className="block text-[10px] text-neutral-500 uppercase font-bold">Selected Pack</span>
                  <p className="text-neutral-900 font-bold">{activeProgram.name}</p>
                  <p className="text-[10px] text-orange-600">{activeProgram.duration}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-neutral-200 pt-3">
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase font-bold">Transmission</span>
                    <p className="text-neutral-950 font-bold capitalize">{transmission}</p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase font-bold">Coach Assigned</span>
                    <p className="text-neutral-950 font-bold capitalize">{instructorGender} Instructor</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 border-t border-neutral-200 pt-3">
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase font-bold">Pickup Hub</span>
                    <p className="text-neutral-950 font-bold capitalize">
                      {pickup === "doorstep" ? "Doorstep Pick" : "Fsd Training Hub"}
                    </p>
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 uppercase font-bold">Timings Selected</span>
                    <p className="text-neutral-950 font-bold capitalize">{timing} Shift</p>
                  </div>
                </div>

                {/* Pricing Details */}
                <div className="border-t border-neutral-200 pt-4 mt-6 space-y-2">
                  <div className="flex justify-between text-neutral-600">
                    <span>Base Course Fee:</span>
                    <span className="font-semibold text-neutral-900">PKR {baseFee.toLocaleString()}</span>
                  </div>

                  {femaleCoachCharge > 0 && (
                    <div className="flex justify-between text-orange-600">
                      <span>Female Instructor Premium:</span>
                      <span className="font-semibold">+PKR {femaleCoachCharge.toLocaleString()}</span>
                    </div>
                  )}

                  {automaticTransCharge > 0 && (
                    <div className="flex justify-between text-neutral-700">
                      <span>Automatic Gear Adjustment:</span>
                      <span className="font-semibold">+PKR {automaticTransCharge.toLocaleString()}</span>
                    </div>
                  )}

                  {doorstepPickupCharge > 0 && (
                    <div className="flex justify-between text-neutral-700">
                      <span>Doorstep Pick &amp; Drop:</span>
                      <span className="font-semibold">+PKR {doorstepPickupCharge.toLocaleString()}</span>
                    </div>
                  )}

                  <div className="border-t border-neutral-200 pt-3 mt-3 flex justify-between text-base font-black text-neutral-950">
                    <span>Estimated Total:</span>
                    <span className="text-orange-600">PKR {totalFee.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Gurantees */}
              <div className="mt-6 p-4 bg-white rounded-xl border border-neutral-200 space-y-2.5 shadow-sm">
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Dual control brakes for direct security bounds</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
                  <UserCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Licensed male & female instructors only</span>
                </div>
              </div>
            </div>

            {/* POPUP: SUCCESS MESSAGE */}
            {successResponseData && (
              <div className="p-6 bg-gradient-to-r from-emerald-950 to-[#0e1726] rounded-3xl border border-emerald-500/30 text-gray-100 shadow-xl space-y-3.5 animate-fade-in relative">
                <div className="absolute top-2 right-2 bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-2 py-0.5 rounded uppercase">
                  ACTIVE
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Booking Locked!</h4>
                    <p className="text-[10px] text-emerald-400 font-mono">{successResponseData.bookingId}</p>
                  </div>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {successResponseData.message}
                </p>

                <div className="bg-[#060913]/60 p-3 rounded-lg text-xs space-y-1">
                  <p className="text-[10px] uppercase text-gray-400 font-semibold">Faisalabad Schedule Details:</p>
                  <p className="text-white font-bold">Assigned Guide: {successResponseData.instructorName}</p>
                  <p className="text-teal-400 font-mono text-[11px]">Start Date: {successResponseData.scheduledStart}</p>
                </div>

                <div className="flex items-center gap-1.5 justify-end">
                  <button
                    onClick={() => setSuccessResponseData(null)}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-[11px] font-bold hover:bg-white/10 cursor-pointer"
                  >
                    Got it!
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
