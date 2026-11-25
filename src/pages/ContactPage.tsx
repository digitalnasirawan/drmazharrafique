import React from 'react';
import { 
  Phone, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ShieldCheck, 
  Building2, 
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { ContactCard } from '../components/cta/ContactCard';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              <span>PRACTICE &amp; CLINIC CONTACT</span>
            </div>
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Contact &amp; Clinic Location
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Arrange an orthopaedic consultation with Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute in Shadman 1, Lahore.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact & Location Content */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Contact Card & Preparation */}
            <div className="lg:col-span-5 space-y-6">
              <ContactCard />

              <div className="p-5 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl space-y-3 text-xs text-[#475569]">
                <strong className="text-sm font-bold text-[#111111] block">Before Your Visit:</strong>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Bring your recent X-rays, MRI scans, or CT discs.</li>
                  <li>Have a list of your current daily medications ready.</li>
                  <li>Bring any prior hospital discharge slips or surgical records.</li>
                  <li>Wear comfortable clothing allowing easy knee or joint examination.</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Facility Overview & Map Info */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#BE8C1D]">
                  <Building2 className="w-4 h-4" />
                  <span>HEALTHCARE FACILITY</span>
                </div>
                <h2 
                  className="h2-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  BNI - Bashir NeuroSpine Institute
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  The clinic is situated on Jail Road, Shadman 1, Lahore. The institute provides modern diagnostic infrastructure, dedicated orthopaedic consulting suites, digital radiograph capabilities, and outpatient trauma care.
                </p>
              </div>

              {/* Clinic Photo */}
              <div className="rounded-xl overflow-hidden border border-[#E8E5DE] shadow-sm">
                <img 
                  src="/images/doctor/bni-clinic-exterior.jpg" 
                  alt="BNI - Bashir NeuroSpine Institute, 18 Jail Road, Shadman 1, Lahore" 
                  className="w-full h-auto object-cover aspect-[16/10]"
                />
                <div className="p-3 bg-white text-xs text-[#475569] flex justify-between items-center">
                  <span>Main Entrance &amp; Patient Parking</span>
                  <a 
                    href={businessConfig.directionsUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Appointment Policies Notice */}
              <div className="p-5 border border-[#E8E5DE] rounded-xl bg-white space-y-3">
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Appointment &amp; Inquiry Guidelines
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  To ensure quality time is dedicated to each clinical evaluation, patients are seen by prior appointment. Message our reception desk on WhatsApp for the fastest booking confirmation or call directly.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a 
                    href={businessConfig.whatsappUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center gap-2 text-sm shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Appointment</span>
                  </a>
                  <a href={businessConfig.callUrl} className="btn-secondary text-sm">
                    <Phone className="w-4 h-4 text-[#BE8C1D]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
