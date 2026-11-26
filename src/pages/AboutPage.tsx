import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  GraduationCap, 
  ShieldCheck, 
  ArrowRight,
  Stethoscope,
  Clock
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Stethoscope className="w-3.5 h-3.5" />
              <span>CONSULTANT PROFILE</span>
            </div>
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              About Dr. Mazhar Rafique
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Consultant Orthopaedic Surgeon in Lahore with over 10 years of clinical and operative expertise in joint reconstruction, arthroscopy, and orthopaedic trauma care.
            </p>
          </div>
        </div>
      </section>

      {/* Main Profile Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Photo & Credentials Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-xl overflow-hidden border border-[#E8E5DE] bg-white shadow-sm">
                <img 
                  src="/images/doctor/dr-mazhar-headshot-portrait.jpg" 
                  alt="Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="p-4 bg-white border-t border-[#E8E5DE] space-y-1">
                  <span className="text-lg font-bold text-[#111111] block" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    {businessConfig.doctorName}
                  </span>
                  <span className="text-xs text-[#475569] block font-medium">
                    {businessConfig.designation}
                  </span>
                  <span className="text-xs text-[#BE8C1D] block font-semibold pt-1">
                    {businessConfig.experienceYearsText}
                  </span>
                </div>
              </div>

              {/* Clinic Location Card */}
              <div className="p-5 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl space-y-3 text-xs text-[#475569]">
                <strong className="text-sm font-bold text-[#111111] block">Consultation Practice</strong>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                  <span>{businessConfig.clinicName}<br />{businessConfig.fullAddress}</span>
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <Phone className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                  <a href={businessConfig.callUrl} className="font-bold text-[#111111] hover:text-[#936A12] text-sm">
                    {businessConfig.phone}
                  </a>
                </div>

                {/* Dual Main CTAs */}
                <div className="pt-2 space-y-2">
                  <a
                    href={businessConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-xs shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                    <span>WhatsApp Appointment</span>
                  </a>
                  <a
                    href={businessConfig.callUrl}
                    className="w-full py-2 px-3 rounded-xl font-semibold border border-[#E8E5DE] bg-white text-[#111111] hover:bg-[#FAF8F2] transition-colors flex items-center justify-center gap-2 text-xs text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Detailed Bio & Clinical Experience */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              <div className="space-y-4">
                <h2 
                  className="h2-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Professional Background &amp; Philosophy
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique is a respected Consultant Orthopaedic Surgeon based in Lahore, Pakistan. Over a clinical career spanning more than a decade, he has managed diverse orthopaedic conditions ranging from complex poly-trauma and fragility fractures to degenerated arthritic joints and athletic ligament injuries.
                </p>
                <p className="text-base text-[#475569] leading-relaxed">
                  His surgical philosophy is deeply rooted in patient safety, anatomical restoration, and preserving native joint biology whenever possible. He believes that surgery should only be recommended after exhaustive clinical assessment and when conservative modalities fail to maintain an active, independent quality of life.
                </p>
              </div>

              {/* Verified Qualifications List */}
              <div className="space-y-4">
                <h3 
                  className="h3-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Verified Medical Qualifications
                </h3>
                <div className="space-y-2.5">
                  {businessConfig.qualifications.map((qual, idx) => (
                    <div key={idx} className="p-3.5 bg-[#FAF8F2] border border-[#E8E5DE] rounded-lg flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-sm text-[#111111] block">{qual}</strong>
                        <span className="text-xs text-[#475569]">Verified Medical Certification &amp; Fellowship Credential</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Interests */}
              <div className="space-y-4">
                <h3 
                  className="h3-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Key Clinical Interests
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {businessConfig.clinicalInterests.map((interest, idx) => (
                    <div key={idx} className="p-3 bg-white border border-[#E8E5DE] rounded-lg flex items-center gap-2.5 text-xs font-semibold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="pt-4 flex flex-wrap gap-3">
                <a 
                  href={businessConfig.whatsappUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-xl font-bold text-[#111111] bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center gap-2 text-sm shadow-md"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
                  <span>Book Appointment</span>
                </a>
                <a href={businessConfig.callUrl} className="btn-secondary text-sm">
                  <Phone className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Call: {businessConfig.phone}</span>
                </a>
                <Link to="/services/" className="btn-secondary text-sm">
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Academic & Surgical Evidence */}
      <section className="section-padding bg-white border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
                SURGICAL TRAINING &amp; EDUCATION
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Commitment to Surgical Excellence
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                In addition to routine clinical practice, Dr. Mazhar Rafique actively engages in training medical students and surgical residents in Lahore. His contributions include structured bedside clinical examination workshops, radiographic interpretation rounds, and OSPE preparation sessions for trainee surgeons.
              </p>
              <div className="pt-2">
                <Link to="/medical-education/" className="btn-secondary text-xs">
                  <span>View Medical Education Platform</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E8E5DE] bg-white shadow-sm">
              <img 
                src="/images/doctor/dr-mazhar-credentials.jpg" 
                alt="Dr. Mazhar Rafique with colleague in consultation office with framed credentials" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="p-3 text-xs text-[#475569]">
                Professional collaboration, institutional credentials, and surgical peer engagement.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA />

    </div>
  );
};
