import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, ChevronRight, FileText } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <span className="text-[#111111]">{isPrivacy ? "Privacy Policy" : "Terms & Conditions"}</span>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LEGAL &amp; COMPLIANCE</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              {isPrivacy ? "Privacy Policy" : "Terms & Conditions of Website Use"}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Official policies governing data privacy, patient confidentiality, medical disclaimers, and terms of use for {businessConfig.website}.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Text Content */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="max-w-3xl mx-auto space-y-8 text-sm text-[#475569] leading-relaxed">
            
            {isPrivacy ? (
              <>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    1. Commitment to Patient Privacy
                  </h2>
                  <p>
                    Dr. Mazhar Rafique and his clinical practice at BNI - Bashir NeuroSpine Institute are committed to safeguarding your personal information and upholding medical confidentiality in accordance with Pakistani healthcare regulations and standard medical ethics.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    2. Information Collected
                  </h2>
                  <p>
                    When you contact our clinic via phone ({businessConfig.phone}) to arrange a consultation, we collect basic contact details (such as your name, phone number, and brief description of your symptoms) solely to facilitate clinical scheduling. We do not transmit or sell personal information to third-party commercial marketing platforms.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    3. Medical Records Confidentiality
                  </h2>
                  <p>
                    All diagnostic reports, radiographs, clinical examination notes, and surgical records generated during hospital and clinic visits are maintained under strict clinical security at BNI - Bashir NeuroSpine Institute and are accessible only to authorized healthcare staff.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    1. Educational Disclaimer
                  </h2>
                  <p>
                    The content on this website—including condition guides, surgical videos, FAQs, and self-assessment tools—is published for general educational and informational purposes only. It does not constitute formal medical diagnosis, treatment advice, or a doctor-patient relationship.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    2. Clinical Assessment Requirement
                  </h2>
                  <p>
                    Every orthopaedic condition requires an in-person physical examination by a licensed medical practitioner and correlation with appropriate diagnostic radiographs (such as weight-bearing X-rays or MRI) before determining any surgical or non-surgical therapy.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    3. Intellectual Property
                  </h2>
                  <p>
                    All authentic photographs of Dr. Mazhar Rafique, surgical media, text content, and educational monographs are protected by copyright. Reproduction without explicit written permission is prohibited.
                  </p>
                </div>
              </>
            )}

            <div className="p-4 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl text-xs space-y-1">
              <strong className="text-[#111111] block">Practice Location:</strong>
              <span>BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Shadman, Lahore 54000, Pakistan. Phone: {businessConfig.phone}</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
