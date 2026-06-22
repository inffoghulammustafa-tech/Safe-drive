import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Programs } from "./components/Programs";
import { CourseConfigurator } from "./components/CourseConfigurator";
import { SignQuiz } from "./components/SignQuiz";
import { AiAssistant } from "./components/AiAssistant";
import { MyBookings } from "./components/MyBookings";
import { Footer } from "./components/Footer";
import { StudentBooking } from "./types";
import { AlertCircle, HelpCircle, ArrowUp } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedProgramId, setSelectedProgramId] = useState("");
  const [bookingTrigger, setBookingTrigger] = useState(0);

  // Scroll smoothly to any specific target segment
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        // Also offset slightly if needed, or scroll into view perfectly
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleSelectProgram = (programId: string) => {
    setSelectedProgramId(programId);
    handleNavClick("configurator");
  };

  const handleBookingSuccess = (booking: StudentBooking) => {
    setBookingTrigger((prev) => prev + 1);
    // Smooth scroll specifically to My Bookings dashboard so student discovers their scheduled classes
    setTimeout(() => {
      handleNavClick("bookings");
    }, 1500);
  };

  return (
    <div className="bg-[#060913] text-gray-100 font-sans min-h-screen selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic Floating Glow Element */}
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyan-500/[0.04] to-transparent pointer-events-none z-[1]" />
      
      {/* 1. Header Navigation */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* 2. Main Content Container */}
      <main className="relative z-10">
        
        {/* SECTION: HOME (Hero & stats dashboard) */}
        <div id="home">
          <Hero onActionClick={handleNavClick} />
        </div>

        {/* SECTION: PROGRAMS (Course catalog selections) */}
        <div id="programs">
          <Programs onSelectProgram={handleSelectProgram} />
        </div>

        {/* SECTION: CALCULATOR CONFIGURATOR (Cost estimate & registration bookings slotting) */}
        <div id="configurator">
          <CourseConfigurator
            selectedProgramId={selectedProgramId}
            onBookingSuccess={handleBookingSuccess}
          />
        </div>

        {/* SECTION: EXAM SIGN QUIZ (Traffic signs interactive theory test practice) */}
        <div id="quiz">
          <SignQuiz />
        </div>

        {/* SECTION: AI ROAD ADVISOR CHAT (Knowledge query proxy desk) */}
        <div id="ai-advisor">
          <AiAssistant />
        </div>

        {/* SECTION: MY BOOKINGS (Schedule list syllabus checklist records logs) */}
        <div id="bookings">
          <MyBookings renewTrigger={bookingTrigger} />
        </div>

      </main>

      {/* QUICK FLOATING FAQ BAR helper */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          onClick={() => handleNavClick("ai-advisor")}
          className="p-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-rose-500 text-white shadow-2xl hover:shadow-cyan-400/20 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          title="Ask AI Advisor"
        >
          <HelpCircle className="w-5 h-5" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 text-xs font-bold transition-all duration-350 shrink-0 whitespace-nowrap">
            Ask DLIMS Advisor
          </span>
        </button>
      </div>

      {/* 3. Footer Segment */}
      <Footer />
    </div>
  );
}
