import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const MobileStickyCallBar: React.FC = () => {
  return (
    <aside 
      className="fixed bottom-2.5 left-2.5 right-2.5 z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-[#E8E5DE] shadow-2xl p-2 sm:hidden"
      aria-label="Mobile Contact and Appointment Floating Dock"
    >
      <div className="flex items-center gap-2">
        
        {/* 1st MAIN CTA: Book Appointment */}
        <a 
          href={businessConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[2] py-2.5 px-2.5 rounded-xl font-bold text-white bg-[#BE8C1D] active:bg-[#936A12] text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
          aria-label="Book Appointment with Dr. Mazhar Rafique"
        >
          <WhatsAppIcon className="w-4 h-4 text-white shrink-0" />
          <span className="text-[12px] font-bold leading-none truncate">Book Appointment</span>
        </a>

        {/* 2nd MAIN CTA: Call button text only: Call */}
        <a 
          href={businessConfig.callUrl}
          className="flex-1 py-2.5 px-2 rounded-xl font-bold border border-[#BE8C1D]/40 bg-white active:bg-[#FAF8F2] text-[#111111] text-xs flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
          aria-label={`Call Dr. Mazhar Rafique Clinic at ${businessConfig.phone}`}
        >
          <Phone className="w-4 h-4 text-[#BE8C1D] shrink-0" />
          <span className="text-[12px] font-bold leading-none">Call</span>
        </a>

        {/* 3rd: Clinic Map Profile Link (Without text, only location icon) */}
        <a 
          href={businessConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl border border-[#E8E5DE] bg-white text-[#BE8C1D] hover:text-[#936A12] active:bg-[#FAF8F2] flex items-center justify-center shrink-0 shadow-2xs transition-colors"
          aria-label="Clinic Map Profile Location"
          title="Clinic Map Profile Location"
        >
          <MapPin className="w-5 h-5 text-[#BE8C1D]" />
        </a>

      </div>
    </aside>
  );
};
