import React from "react";
import { X, Car, Calendar, CheckSquare, Sparkles, BookOpen, Clock, Heart, ArrowRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RentCarModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const rentCars = [
    {
      name: "Suzuki Alto VXL Auto",
      specs: "660cc • Automatic • Super Fuel Efficient • Dual Brakes Optional",
      rate: "2,500 PKR / Day",
      features: ["Doorstep Delivery in Fsd", "Fully Insured", "Perfect for Learners"],
      badge: "Most Popular"
    },
    {
      name: "Toyota Corolla GLI Manual",
      specs: "1300cc • Manual Shift • High Ground Clearance • Dual Control Pre-Fitted",
      rate: "4,000 PKR / Day",
      features: ["Excellent Clutch Response", "Recommended for Manual Practice", "24/7 Helpline Support"],
      badge: "Classic Trainer"
    },
    {
      name: "Honda Civic Oriel Automatic",
      specs: "1800cc • Automatic • Premium Leather • Cruise Control",
      rate: "6,000 PKR / Day",
      features: ["Premium Highway Trainer", "Canal Road Speed Test ready", "Dual airbags & absolute guard"],
      badge: "Lux Premium"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-neutral-200 max-w-2xl w-full text-neutral-800 shadow-2xl overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="w-5 h-5 text-orange-650" />
            <div>
              <h3 className="font-extrabold text-lg text-neutral-900">GoDriveify Rent-A-Car</h3>
              <p className="text-xs text-neutral-500">Specially configured training/daily travel cars in Faisalabad</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 rounded-lg bg-neutral-100 text-neutral-500 hover:text-neutral-900 font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          <p className="text-xs text-neutral-600">
            Learn with confidence or ride in peace. We offer premium dual-brake modified cars for student practice, or normal fuel-efficient hatchbacks/sedans for domestic rent with/without drivers.
          </p>

          <div className="grid grid-cols-1 gap-4">
            {rentCars.map((car, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-orange-500/40 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="px-2 py-0.5 rounded text-[9px] bg-orange-100 text-orange-850 font-black uppercase tracking-wider">
                      {car.badge}
                    </span>
                    <h4 className="font-bold text-sm text-neutral-900 mt-1">{car.name}</h4>
                    <p className="text-[11px] text-neutral-500 font-mono mt-0.5">{car.specs}</p>
                  </div>
                  <div className="text-right">
                    <span className="block text-xs text-neutral-500">Daily Rent</span>
                    <span className="font-black text-sm text-orange-600">{car.rate}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-neutral-200">
                  {car.features.map((feat, fidx) => (
                    <span key={fidx} className="text-[10px] bg-white text-neutral-600 px-2 py-0.5 rounded border border-neutral-200">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
          <span>Need a driver too? Support available.</span>
          <button
            onClick={() => {
              alert("Shukriya! Our Rent-A-Car coordinator will contact you on your registered WhatsApp!");
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-white font-bold hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer"
          >
            Inquire on Rental Car
          </button>
        </div>
      </div>
    </div>
  );
};

export const SaleCarModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const saleCars = [
    {
      name: "Suzuki Mehran VX Euro II",
      year: "2018 Model",
      price: "1,150,000 PKR",
      desc: "Perfect pocket-friendly learner car. Equipped with optional dual brake mechanic kit (fully certified). Clean engine suspension.",
      badge: "Student Special"
    },
    {
      name: "Toyota Vitz F Automatic",
      year: "2016 Import",
      price: "2,650,000 PKR",
      desc: "Mint condition Japanese hatchback. Best for family and beginner lady drivers who seek simple parallel parking confidence on Susan Road lanes.",
      badge: "Easy Auto Hatchback"
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-neutral-200 max-w-2xl w-full text-neutral-800 shadow-2xl overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <div>
              <h3 className="font-extrabold text-lg text-neutral-900">GoDriveify Verified Pre-Owned</h3>
              <p className="text-xs text-neutral-500">Inspected certified student-friendly cars for sale in Punjab</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 rounded-lg bg-neutral-100 text-neutral-500 hover:text-neutral-905 font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          <p className="text-xs text-neutral-600">
            Just cleared your DLIMS Punjab license exam? Skip high dealership margins! Invest in pre-vetted learner-approved vehicles featuring excellent visibility, simple transmissions, and minor driving scratch resilience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {saleCars.map((car, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-orange-500/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="px-2 py-0.5 rounded text-[9px] bg-orange-100 text-orange-800 font-extrabold uppercase tracking-wider">
                    {car.badge}
                  </span>
                  <h4 className="font-bold text-sm text-neutral-900 mt-2">{car.name}</h4>
                  <p className="text-[10px] text-neutral-500">{car.year}</p>
                  <p className="text-xs text-neutral-600 mt-2 line-clamp-3 leading-relaxed">{car.desc}</p>
                </div>

                <div className="pt-4 border-t border-neutral-200 mt-4 flex justify-between items-center">
                  <div>
                    <span className="block text-[9px] text-neutral-400 uppercase font-semibold">Total Price</span>
                    <span className="font-black text-sm text-orange-605">{car.price}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert(`Inquiry received for ${car.name}! Our pre-inspected vehicles department will reach out on your Whatsapp.`);
                      onClose();
                    }}
                    className="px-3 py-1.5 rounded-lg bg-neutral-200 border border-neutral-300 hover:bg-neutral-300 text-neutral-800 font-bold text-[10px]"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-550">
          <span>All cars carry our 30-day powertrain warranty.</span>
          <button
            onClick={onClose}
            className="text-xs font-bold text-neutral-500 hover:text-neutral-900"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export const BlogUpdatesModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const logs = [
    {
      title: "Online Learner License Renewal System Active",
      date: "June 18, 2026",
      desc: "Punjab DLIMS is now allowing automated renewals for learner permits straight from home! Log in to the official portal with CNIC to renew domestic permits easily without physical bank queues.",
    },
    {
      title: "Computerized Sign Test Passing Rules Modified",
      date: "May 29, 2026",
      desc: "To discourage blind driving behavior, candidates must clear a minimum of 8 regulatory signboards (instead of 6) to proceed directly to practical tracks. Make sure to use our Sign Quiz simulation before your physical slot!",
    },
    {
      title: "Susan Road Center Expansion Announced",
      date: "April 12, 2026",
      desc: "GoDriveify installs two brand-new dual control automatic hatchbacks at the Susan Road Hub! Now offering accelerated 6-day refresher classes on Susan and Canal roads during tight rush-hours.",
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl border border-neutral-200 max-w-2xl w-full text-neutral-800 shadow-2xl overflow-hidden animate-scale-up">
        {/* Header */}
        <div className="px-6 py-5 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-600" />
            <div>
              <h3 className="font-extrabold text-lg text-neutral-900 font-sans uppercase tracking-wide">GoDriveify News &amp; Updates</h3>
              <p className="text-xs text-neutral-505">Official licensing news, traffic alerts, and school circulars</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 px-2.5 rounded-lg bg-neutral-105 text-neutral-500 hover:text-neutral-900 font-bold"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          {logs.map((log, index) => (
            <div key={index} className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 hover:border-orange-500/20 transition-all space-y-2">
              <div className="flex items-center justify-between gap-4">
                <h4 className="font-bold text-sm text-neutral-900">{log.title}</h4>
                <span className="text-[10px] text-neutral-500 shrink-0 font-mono">{log.date}</span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans">{log.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-600">
          <span className="text-neutral-400 font-mono text-[10px]">Updates synced weekly with Punjab DLIMS portal</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-neutral-600 hover:bg-neutral-700 text-white font-bold hover:scale-105 active:scale-95 transition-all text-xs cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
