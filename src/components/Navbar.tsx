import React, { useState, useEffect } from "react";
import { BookOpen, Plus, Menu, X } from "lucide-react";
import { BrandLogo } from "./BrandLogo";
import { RentCarModal, SaleCarModal, BlogUpdatesModal } from "./HeaderModals";

interface NavbarProps {
  onNavClick: (section: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rentOpen, setRentOpen] = useState(false);
  const [saleOpen, setSaleOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  // Map our target DOM sections based on the requested image design labels
  const getSectionId = (label: string): string => {
    switch (label) {
      case "SERVICES":
        return "programs";
      case "STUDENTS QUIZ":
        return "quiz";
      case "ABOUT":
        return "home";
      case "CONTACT":
        return "bookings";
      default:
        return "home";
    }
  };

  const navItems = [
    { label: "SERVICES", type: "scroll" },
    { label: "RENT CAR", type: "modal_rent" },
    { label: "SALE CAR", type: "modal_sale" },
    { label: "STUDENTS QUIZ", type: "scroll" },
    { label: "ABOUT", type: "scroll" },
    { label: "CONTACT", type: "scroll" },
  ];

  const handleItemClick = (item: { label: string; type: string }) => {
    setMobileMenuOpen(false);
    if (item.type === "scroll") {
      const targetId = getSectionId(item.label);
      onNavClick(targetId);
    } else if (item.type === "modal_rent") {
      setRentOpen(true);
    } else if (item.type === "modal_sale") {
      setSaleOpen(true);
    }
  };

  // Helper inside loop to check if section is currently active based on matching categories
  const isItemActive = (label: string): boolean => {
    if (label === "SERVICES" && activeSection === "programs") return true;
    if (label === "STUDENTS QUIZ" && activeSection === "quiz") return true;
    if (label === "ABOUT" && activeSection === "home") return true;
    if (label === "CONTACT" && (activeSection === "bookings" || activeSection === "footer")) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200/80 shadow-md py-3.5 font-sans transition-all duration-200">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between mx-auto">
        
        {/* Brand Logo & Title according to image */}
        <button
          onClick={() => {
            onNavClick("home");
            setMobileMenuOpen(false);
          }}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#ff6a00]/20 rounded-xl"
        >
          <BrandLogo />
        </button>

        {/* Central Core Nav Pages list - same as image */}
        <nav className="hidden xl:flex items-center gap-7 text-[13px] font-extrabold tracking-wide text-slate-800">
          {navItems.map((item, idx) => {
            const active = isItemActive(item.label);
            return (
              <button
                key={idx}
                onClick={() => handleItemClick(item)}
                className={`relative py-2.5 px-1 uppercase transition-all duration-200 cursor-pointer focus:outline-none ${
                  active 
                    ? "text-[#ff6a00] font-black" 
                    : "text-slate-700 hover:text-[#ff6a00]"
                }`}
              >
                {item.label}
                {/* Same orange underline styling as shown in image active state */}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ff6a00] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Same Dual capsule/pill buttons as shown in image */}
        <div className="hidden lg:flex items-center gap-3.5 shrink-0 animate-fade-in">
          {/* BLOG UPDATES Button (Navy blue pill with book icon) */}
          <button
            onClick={() => setBlogOpen(true)}
            className="px-5 py-3 rounded-2xl bg-[#0a2561] hover:bg-[#0c2f7c] text-white font-extrabold text-[12px] tracking-wider uppercase shadow-md hover:shadow-[#0a2561]/25 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
          >
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>BLOG UPDATES</span>
          </button>

          {/* APPLY NOW Button (Orange pill with plus icon) */}
          <button
            onClick={() => onNavClick("configurator")}
            className="px-5 py-3 rounded-2xl bg-[#ff6a00] hover:bg-[#ff7b1c] text-white font-extrabold text-[12px] tracking-wider uppercase shadow-md hover:shadow-[#ff6a00]/25 active:scale-95 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4 stroke-[3px] shrink-0" />
            <span>APPLY NOW</span>
          </button>
        </div>

        {/* Responsive Mobile Hamburger slider */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-1.5 rounded-xl text-slate-700 hover:bg-slate-100 hover:text-slate-900 focus:outline-none text-2xl transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 px-6 py-6 space-y-4 shadow-2xl animate-fade-in flex flex-col">
          {navItems.map((item, idx) => {
            const active = isItemActive(item.label);
            return (
              <button
                key={idx}
                onClick={() => handleItemClick(item)}
                className={`block w-full text-left py-2 px-1 uppercase text-sm font-extrabold transition-colors ${
                  active 
                    ? "text-[#ff6a00] font-black border-l-4 border-[#ff6a00] pl-3" 
                    : "text-slate-700 hover:text-[#ff6a00] pl-3"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="pt-4 border-t border-gray-100 space-y-3">
            <button
              onClick={() => {
                setBlogOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-3 rounded-xl bg-[#0a2561] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              BLOG UPDATES
            </button>
            <button
              onClick={() => {
                onNavClick("configurator");
                setMobileMenuOpen(false);
              }}
              className="w-full text-[#ff6a00] border border-[#ff6a00] hover:bg-[#ff6a00]/5 text-center px-4 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4 stroke-[3px]" />
              APPLY NOW
            </button>
          </div>
        </div>
      )}

      {/* Render the core responsive modals so the tabs are fully interactive */}
      <RentCarModal isOpen={rentOpen} onClose={() => setRentOpen(false)} />
      <SaleCarModal isOpen={saleOpen} onClose={() => setSaleOpen(false)} />
      <BlogUpdatesModal isOpen={blogOpen} onClose={() => setBlogOpen(false)} />
    </header>
  );
};
