import React, { useState, useEffect } from "react";
import { StudentBooking } from "../types";
import { Sparkles, Calendar, UserCheck, ShieldAlert, CheckSquare, Clock, GraduationCap, MapPin, Gauge } from "lucide-react";

interface MyBookingsProps {
  renewTrigger: number;
}

export const MyBookings: React.FC<MyBookingsProps> = ({ renewTrigger }) => {
  const [bookings, setBookings] = useState<StudentBooking[]>([]);

  // Sample tasks or lesson syllabus checklist
  const initialSyllabus = [
    { title: "Syllabus 1: Steering Mechanics & Pedal Coordination", done: true },
    { title: "Syllabus 2: Gear Shift Logic (Manual) / Automatic Drive Mechanics", done: true },
    { title: "Syllabus 3: Parallel Cones Parking Strategy", done: false },
    { title: "Syllabus 4: L-Track Reversing Execution Check", done: false },
    { title: "Syllabus 5: Public Corridor Overtaking Trial (Canal Rd Fsd)", done: false },
    { title: "Syllabus 6: Signboards & Speed Zone Mock Trial Exams", done: false },
  ];

  const [syllabusState, setSyllabusState] = useState(initialSyllabus);

  // Sync active local storage logs
  useEffect(() => {
    const cached = localStorage.getItem("godriveify_bookings");
    if (cached) {
      setBookings(JSON.parse(cached));
    } else {
      // Define pre-seeded guest demo logging if none constructed to avoid empty states
      const seedBooking: StudentBooking = {
        bookingId: "GD-PRE9028",
        name: "Guest Student",
        phone: "0301-4455883",
        email: "guest@example.com",
        programId: "beginner-pack",
        programName: "Beginner's Foundation Pack",
        instructorGender: "female",
        transmission: "automatic",
        pickup: "doorstep",
        timing: "morning",
        price: 16200,
        instructorName: "Madam Sadia",
        scheduledStart: new Date(Date.now()).toLocaleDateString(),
        progress: 35,
        status: "In Progress",
      };
      setBookings([seedBooking]);
      localStorage.setItem("godriveify_bookings", JSON.stringify([seedBooking]));
    }
  }, [renewTrigger]);

  const handleToggleSyllabus = (idx: number) => {
    const updated = [...syllabusState];
    updated[idx].done = !updated[idx].done;
    setSyllabusState(updated);

    // Recalculate dynamic progress indicator for first booking
    const completedCount = updated.filter((s) => s.done).length;
    const computedPercentage = Math.round((completedCount / updated.length) * 100);

    if (bookings.length > 0) {
      const updatedBookings = [...bookings];
      updatedBookings[0].progress = computedPercentage;
      if (computedPercentage === 100) {
        updatedBookings[0].status = "Completed";
      } else {
        updatedBookings[0].status = "In Progress";
      }
      setBookings(updatedBookings);
      localStorage.setItem("godriveify_bookings", JSON.stringify(updatedBookings));
    }
  };

  const handleClearBookings = () => {
    if (window.confirm("Aap apni booking history clear krna chahte hain?")) {
      localStorage.removeItem("godriveify_bookings");
      setBookings([]);
    }
  };

  return (
    <section id="bookings" className="py-24 bg-[#060913] border-t border-white/[0.04] relative">
      <div className="absolute top-1/2 left-1/3 w-82 h-82 bg-rose-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <span className="text-rose-500 uppercase font-extrabold tracking-widest text-xs">Student Portal</span>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-neutral-105 to-gray-400 bg-clip-text text-transparent mt-1 mb-2">
              My Class Schedule &amp; Log
            </h2>
            <p className="text-gray-450 text-xs sm:text-sm max-w-xl">
              Track your daily driving checklist, check off completed classes, and log estimated training outcomes directly.
            </p>
          </div>
          {bookings.length > 0 && (
            <button
              onClick={handleClearBookings}
              className="text-xs text-rose-400 hover:text-rose-300 font-semibold underline underline-offset-4 cursor-pointer self-start"
            >
              Reset Schedule History
            </button>
          )}
        </div>

        {bookings.length === 0 ? (
          <div className="p-12 text-center bg-[#0b1122]/40 rounded-3xl border border-white/5 max-w-lg mx-auto space-y-4">
            <ShieldAlert className="w-12 h-12 text-rose-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">No Bookings Yet</h3>
            <p className="text-xs text-gray-400">
              Aap ne abhi tak koi driving package select ya book nahi kia. GoDriveify key programs check krein or custom fee calculate krein!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Saved bookings summaries */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">
                Active Enrolment ({bookings.length})
              </span>

              {bookings.map((b) => (
                <div
                  key={b.bookingId}
                  className="bg-[#0b1122]/80 p-5 rounded-2xl border border-white/[0.08] text-xs space-y-4 relative overflow-hidden shadow-xl"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-cyan-400/5 to-transparent rounded-bl-3xl"></div>
                  
                  {/* Badge Row */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-teal-400 font-bold tracking-wider">{b.bookingId}</span>
                    <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                      b.status === "Completed" ? "bg-emerald-500/15 text-emerald-400" :
                      b.status === "In Progress" ? "bg-cyan-500/15 text-cyan-400 animate-pulse" :
                      "bg-amber-500/15 text-amber-400"
                    }`}>
                      {b.status}
                    </span>
                  </div>

                  {/* Program Title */}
                  <div>
                    <h4 className="text-sm font-black text-white">{b.programName}</h4>
                    <p className="text-[10px] text-gray-400">Student: {b.name}</p>
                  </div>

                  {/* Core config properties table */}
                  <div className="grid grid-cols-2 gap-y-2.5 text-[11px] text-gray-400 border-t border-white/[0.04] pt-3.5">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="capitalize">{b.timing} Session</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="capitalize">{b.instructorName}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="capitalize">{b.pickup === "doorstep" ? "Doorstep Pick" : "Hub Meetup"}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="capitalize">{b.transmission} car</span>
                    </div>
                  </div>

                  {/* Progress Indicator */}
                  <div className="space-y-1.5 border-t border-white/[0.04] pt-3">
                    <div className="flex items-center justify-between font-bold text-[10px]">
                      <span className="text-gray-400 uppercase">Class Progress Meter</span>
                      <span className="text-cyan-400">{b.progress}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-400" style={{ width: `${b.progress}%` }}></div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[10px] text-gray-500">
                    <span>Started: {b.scheduledStart}</span>
                    <span className="text-white font-bold">Total PKR {b.price.toLocaleString()} Paid</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Selected Booking syllabus logs */}
            <div className="lg:col-span-8 bg-[#0b1122]/40 rounded-3xl border border-white/[0.06] p-6 sm:p-8 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckSquare className="w-5 h-5 text-cyan-400" />
                  Syllabus Progress &amp; Practice Trials Checklist
                </h3>
                <span className="text-xs text-teal-400 font-semibold bg-teal-500/10 px-2.5 py-1 rounded">
                  {syllabusState.filter(s => s.done).length} / {syllabusState.length} Cleared
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Click coordinates below to toggle class completion. Your dynamic progress percentage and licence status on the left will update in real time.
              </p>

              <div className="grid grid-cols-1 gap-3">
                {syllabusState.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => handleToggleSyllabus(index)}
                    className={`p-4 rounded-xl text-left border cursor-pointer flex items-center justify-between transition-all duration-250 ${
                      chapter.done
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-300 decoration-line-through decoration-emerald-500/30 font-medium"
                        : "bg-white/[0.01] border-white/5 text-gray-300 hover:border-white/10 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 border ${
                        chapter.done ? "bg-emerald-500/20 border-emerald-500 text-emerald-400" : "border-white/20"
                      }`}>
                        {chapter.done && "✓"}
                      </div>
                      <span className="text-xs sm:text-sm">{chapter.title}</span>
                    </div>

                    <span className={`text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded shrink-0 ${
                      chapter.done ? "bg-emerald-500/15 text-emerald-400" : "bg-white/5 text-gray-500"
                    }`}>
                      {chapter.done ? "COMPLETED" : "UPCOMING"}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
