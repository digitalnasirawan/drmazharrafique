import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { QuickAppointmentModal } from './QuickAppointmentModal';

interface ConsultationCTAProps {
  eyebrow?: string;
  heading?: string;
  description?: string;
  bgAlt?: boolean;
}

export const ConsultationCTA: React.FC<ConsultationCTAProps> = ({
  eyebrow = 'ORTHOPAEDIC CONSULTATION IN LAHORE',
  heading = 'Need Advice About an Orthopaedic Problem?',
  description = 'Book a direct consultation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute. Discuss your symptoms, review radiographs, and evaluate surgical vs non-surgical care.',
  bgAlt = false
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="section-padding border-y border-[#E8E5DE] bg-[#FFFFFF]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-bold text-[#BE8C1D] uppercase tracking-wider shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div>

            <h2 
              className="h2-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              {heading}
            </h2>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            {/* DUAL CTA: WHATSAPP PRIMARY + CALL SECONDARY */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="py-3 px-6 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg text-sm sm:text-base cursor-pointer hover:scale-[1.01]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Appointment</span>
              </button>

              <a 
                href={businessConfig.callUrl} 
                className="btn-secondary text-sm sm:text-base"
                aria-label={`Call Dr. Mazhar Rafique clinic at ${businessConfig.phone}`}
              >
                <Phone className="w-4 h-4 text-[#BE8C1D]" />
                <span>Call: {businessConfig.phone}</span>
              </a>

              <Link 
                to="/contact/" 
                className="text-xs font-semibold text-[#111111] hover:text-[#936A12] underline py-2 px-3"
              >
                Clinic Location &rarr;
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#475569]">
              <MapPin className="w-3.5 h-3.5 text-[#BE8C1D]" />
              <span>{businessConfig.clinicName} &bull; 18 Jail Rd, Shadman 1, Lahore</span>
            </div>

          </div>
        </div>
      </section>

      <QuickAppointmentModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
};
