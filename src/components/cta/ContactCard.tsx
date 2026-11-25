import React from 'react';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const ContactCard: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-left">
      <div className="border-b border-[#E8E5DE] pb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D] block mb-1">
          Clinic Location &amp; Contact Desk
        </span>
        <h3 
          className="text-xl font-bold text-[#111111]"
          style={{ fontFamily: "'Maven Pro', sans-serif" }}
        >
          {businessConfig.clinicName}
        </h3>
        <p className="text-xs text-[#475569] mt-0.5">
          {businessConfig.doctorName} &bull; {businessConfig.designation}
        </p>
      </div>

      <div className="space-y-4 text-sm text-[#475569]">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#111111] block mb-0.5">Clinic Address:</strong>
            <span>{businessConfig.fullAddress}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5 text-[#BE8C1D]">
            <WhatsAppIcon className="w-4 h-4 text-[#BE8C1D]" />
          </div>
          <div>
            <strong className="text-[#111111] block mb-0.5">WhatsApp Appointment &amp; Messages:</strong>
            <span className="font-bold text-[#111111] text-base">{businessConfig.whatsappDisplay}</span>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#111111] block mb-0.5">Call for Appointment:</strong>
            <a 
              href={businessConfig.callUrl} 
              className="font-bold text-[#111111] hover:text-[#936A12] text-base block"
            >
              {businessConfig.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Dual CTA: WhatsApp Primary + Call 2nd */}
      <div className="space-y-2.5 pt-2">
        <a 
          href={businessConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md"
        >
          <WhatsAppIcon className="w-4 h-4 text-white" />
          <span>WhatsApp Appointment</span>
        </a>

        <div className="grid grid-cols-2 gap-2">
          <a 
            href={businessConfig.callUrl}
            className="py-2.5 px-3 rounded-xl font-bold border border-[#E8E5DE] bg-[#FAF8F2] hover:bg-white text-[#111111] text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
            <span>Call Now</span>
          </a>

          <a 
            href={businessConfig.directionsUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl font-semibold border border-[#E8E5DE] bg-white text-[#475569] hover:text-[#111111] text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <span>Directions</span>
            <ExternalLink className="w-3 h-3 text-[#475569]" />
          </a>
        </div>
      </div>

      <div className="text-xs text-[#475569] bg-[#FAF8F2] p-3 rounded-xl border border-[#E8E5DE]">
        <strong>Consultation Notice:</strong> Consultations are conducted by appointment at BNI Lahore. Message the clinic desk on WhatsApp for the earliest available consultation date.
      </div>
    </div>
  );
};
