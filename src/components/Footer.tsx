import React from "react";
import { Compass, Heart, ShieldAlert, Navigation } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-12 text-neutral-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Brand Col */}
        <div className="space-y-4">
          <div className="text-xl font-black tracking-wider text-neutral-900 flex items-center gap-2">
            <Compass className="w-5 h-5 text-orange-600" />
            <span>GoDrive<span className="text-orange-600">ify</span></span>
          </div>
          <p className="text-xs text-neutral-500 leading-relaxed">
            Faisalabad’s premier digital-ready driving academy. Providing male & female traffic certified coaches, comfortable doorstep pickup, and flawless DLIMS support.
          </p>
        </div>

        {/* Location Col */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Our Head Center</h4>
          <div className="space-y-2 text-xs text-neutral-500 leading-relaxed">
            <p className="flex items-start gap-1.5 font-medium">
              <Navigation className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
              <span>
                Main Susan Road, <br />
                Adjacent to Kohinoor Plaza, <br />
                Faisalabad, Pakistan
              </span>
            </p>
            <p className="text-[10px] text-orange-600 italic font-bold">Open: Mon-Sat, 7:00 AM - 8:30 PM</p>
          </div>
        </div>

        {/* Legal Disclaimers */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Official Affiliations</h4>
          <p className="text-xs text-neutral-500 leading-relaxed">
            GoDriveify is an independent private driving academy in Punjab. All licenses are physically processed and issued exclusively by official Faisalabad Traffic Police licensing centers or Punjab DLIMS.
          </p>
        </div>

        {/* Helplines */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Quick Helplines</h4>
          <div className="space-y-1.5 text-xs">
            <p className="text-neutral-500 font-mono">Whatsapp: +92-300-1234567</p>
            <p className="text-neutral-500 font-mono">Email: support@godriveify.com</p>
            <p className="text-orange-850 text-[10px] flex items-center gap-1 font-semibold bg-orange-50 p-2 rounded border border-orange-200">
              <ShieldAlert className="w-3.5 h-3.5 shrink-0 text-orange-600" />
              <span>Learners valid for 6 months absolute limit.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div>
          &copy; {new Date().getFullYear()} GoDriveify Fsd Ltd. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1">
          Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for confident Faisalabad student drivers.
        </div>
      </div>
    </footer>
  );
};
