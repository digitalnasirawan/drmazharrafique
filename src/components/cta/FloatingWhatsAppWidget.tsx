import React, { useState, useEffect } from 'react';
import { Phone, X, ShieldCheck, ArrowRight, Send, MapPin, Clock, ChevronUp } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FloatingWhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickPrompts = [
    { label: "WhatsApp Appointment", msg: "Hello Dr. Mazhar Rafique Clinic, I would like to book a consultation appointment." },
    { label: "Knee / Joint Pain Inquiry", msg: "Hello, I am experiencing knee joint pain and would like to consult Dr. Mazhar Rafique." },
    { label: "Share X-Ray / Second Opinion", msg: "Hello, I have recent X-ray/MRI reports and would like an orthopaedic opinion." },
    { label: "BNI Clinic Timings & Location", msg: "Hello, please share Dr. Mazhar Rafique's consultation timings and location at BNI Lahore." }
  ];

  const handleLaunch = (msg?: string) => {
    const textToSend = msg || userMsg.trim() || undefined;
    const url = businessConfig.getWhatsAppUrl(textToSend);
    window.open(url, '_blank', 'noopener,noreferrer');
    setUserMsg('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLaunch();
  };

  return (
    <div className="hidden sm:flex fixed bottom-6 right-6 z-50 flex-col items-end">
      
      {/* Popover Card */}
      {isOpen && (
        <div 
          className="mb-3 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-3xl shadow-2xl border border-[#E8E5DE] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="dialog"
          aria-label="WhatsApp Quick Connect"
        >
          {/* Header */}
          <div className="bg-[#111111] text-white p-4 sm:p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                  alt="Dr. Mazhar Rafique" 
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#BE8C1D]"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#BE8C1D] border-2 border-[#111111]"></span>
              </div>
              <div>
                <strong className="text-sm font-bold block text-white" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  {businessConfig.doctorName}
                </strong>
                <span className="text-[11px] text-[#BE8C1D] font-semibold block flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-[#BE8C1D] animate-pulse"></span>
                  Primary Appointment Desk &bull; Online
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Close WhatsApp chat card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-5 space-y-3.5 bg-[#FAF8F2] text-xs">
            <div className="bg-white p-3.5 rounded-2xl border border-[#E8E5DE] text-[#475569] shadow-2xs leading-relaxed">
              👋 <strong>Welcome to Dr. Mazhar Rafique&apos;s Clinic Desk.</strong> WhatsApp is our <strong>primary channel</strong> for appointments, surgical second opinions, and MRI reviews at BNI Lahore.
            </div>

            {/* Quick Action Prompts */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#111111] block">
                Quick 1-Tap Inquiries:
              </span>
              {quickPrompts.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleLaunch(q.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white border border-[#E8E5DE] hover:border-[#BE8C1D] hover:bg-white text-[#111111] font-medium transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="truncate pr-1 text-[11px] sm:text-xs">{q.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#BE8C1D] group-hover:translate-x-0.5 transition-transform shrink-0" />
                </button>
              ))}
            </div>

            {/* Direct Input Field */}
            <form onSubmit={handleFormSubmit} className="pt-1">
              <div className="relative">
                <input
                  type="text"
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Type custom message to clinic..."
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-[#E8E5DE] bg-white text-xs text-[#111111] focus:border-[#BE8C1D] outline-hidden transition-all shadow-2xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-[#BE8C1D] hover:bg-[#936A12] text-[#111111] flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Send to WhatsApp"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            {/* 1st Main CTA: WhatsApp Button with Official Color Scheme */}
            <button
              type="button"
              onClick={() => handleLaunch()}
              className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp Appointment</span>
            </button>

            {/* 2nd Main CTA: Call Appointment */}
            <div className="pt-1 text-center border-t border-[#E8E5DE]/80">
              <a 
                href={businessConfig.callUrl}
                className="text-[11px] font-semibold text-[#475569] hover:text-[#111111] flex items-center justify-center gap-1.5 py-1"
              >
                <Phone className="w-3 h-3 text-[#BE8C1D]" />
                <span>Call Appointment: {businessConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Buttons Dock (Back to Top + Official WhatsApp Icon) */}
      <div className="flex flex-col items-center gap-2.5">
        
        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white text-[#111111] hover:text-[#BE8C1D] hover:border-[#BE8C1D] border border-[#E8E5DE] shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer animate-in fade-in zoom-in-75 duration-200"
            aria-label="Back to top"
            title="Back to top"
          >
            <ChevronUp className="w-5 h-5 text-[#111111]" />
          </button>
        )}

        {/* WhatsApp Button: ONLY WhatsApp icon with official color */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-emerald-400/30"
          aria-expanded={isOpen}
          aria-label="Connect with Dr. Mazhar Rafique on WhatsApp"
          title="Connect on WhatsApp"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30 pointer-events-none"></span>
          <WhatsAppIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white fill-current relative z-10" />
        </button>

      </div>

    </div>
  );
};
