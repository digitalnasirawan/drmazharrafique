import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  ChevronRight,
  Clock,
  Calendar,
  AlertCircle
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { getRouteByPath, getRouteById, routesRegistry } from '../data/routesRegistry';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const TreatmentPage: React.FC = () => {
  const location = useLocation();
  const currentRoute = getRouteByPath(location.pathname);
  const parentCategory = currentRoute?.parentPageId ? getRouteById(currentRoute.parentPageId) : null;
  const relatedRoutes = (currentRoute?.relatedPageIds || [])
    .map(id => getRouteById(id))
    .filter((r): r is NonNullable<typeof r> => r !== undefined);

  return (
    <div className="flex flex-col w-full">
      
      {/* Breadcrumb & Treatment Header */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/services/" className="hover:text-[#111111]">Services</Link>
              {parentCategory && (
                <>
                  <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
                  <Link to={parentCategory.canonicalPath} className="hover:text-[#111111]">
                    {parentCategory.pageName}
                  </Link>
                </>
              )}
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>ORTHOPAEDIC TREATMENT &amp; SURGERY</span>
            </div>
            
            {/* The single H1 for this treatment */}
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              {currentRoute?.pageName || "Orthopaedic Treatment in Lahore"}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {currentRoute?.shortDescription || "Clinical evaluation, indications, and operative management provided by Dr. Mazhar Rafique at BNI - Bashir NeuroSpine Institute in Lahore."}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-[#475569]">
              <span className="flex items-center gap-1 text-[#111111]">
                <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
                <span>Dr. Mazhar Rafique, Consultant Orthopaedic Surgeon</span>
              </span>
              <span>&bull;</span>
              <span>BNI Lahore</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Clinical Details & Architecture */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 8 Cols: Clinical Sections */}
            <div className="lg:col-span-8 space-y-8 text-left">
              
              {/* Content Status & Verification Note */}
              <div className="p-4 bg-[#FAF8F2] border border-[#BE8C1D]/40 rounded-xl text-xs text-[#475569] flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#111111] block mb-0.5">Clinical Protocol Architecture (B1–B6 Integration):</strong>
                  This procedure shell is mapped to approved canonical routing with structured fields ready for updated surgical protocols, case series, and patient rehabilitation data.
                </div>
              </div>

              {/* Clinical Indications Section */}
              <div className="space-y-4">
                <h2 
                  className="h2-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Clinical Overview &amp; Indications
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  {currentRoute?.pageName} is evaluated when patients present with persistent symptoms that significantly interfere with daily mobility, sleep, or occupation, and where prior non-operative treatments have not provided sufficient lasting relief.
                </p>
                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2.5 text-sm text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span>Comprehensive clinical examination of joint range, ligament stability, and weight-bearing alignment.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span>Correlation with high-resolution digital radiographs and MRI scans when necessary.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
                    <span>Clear discussion of conservative management (physiotherapy, medication, injections) versus surgical repair.</span>
                  </div>
                </div>
              </div>

              {/* Treatment Pathway */}
              <div className="space-y-4 pt-4 border-t border-[#E8E5DE]">
                <h3 
                  className="h3-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Surgical &amp; Non-Surgical Care Pathway
                </h3>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  Dr. Mazhar Rafique employs modern surgical techniques focused on minimal soft-tissue disruption, precise anatomical reconstruction, and rapid post-operative rehabilitation protocols designed to help patients regain pain-free function.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-white border border-[#E8E5DE] rounded-xl space-y-2">
                    <strong className="text-sm font-bold text-[#111111] block">Pre-Operative Planning</strong>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      Detailed clinical history, medical optimization, anesthesia clearance, and customized sizing of implants or arthroscopic instruments.
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-[#E8E5DE] rounded-xl space-y-2">
                    <strong className="text-sm font-bold text-[#111111] block">Post-Operative Recovery</strong>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      Structured physiotherapy protocols, early gentle mobilization, pain management, and routine follow-up consultations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Related Treatments in this Category */}
              {relatedRoutes.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-[#E8E5DE]">
                  <h3 
                    className="h3-title text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    Related Orthopaedic Procedures
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {relatedRoutes.map((rel) => (
                      <Link
                        key={rel.pageId}
                        to={rel.canonicalPath}
                        className="p-3.5 border border-[#E8E5DE] rounded-lg bg-white hover:border-[#BE8C1D] hover:bg-[#FAF8F2] transition-colors flex items-center justify-between text-xs"
                      >
                        <span className="font-semibold text-[#111111]">{rel.pageName}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Quick Appointment & Contact Box */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-6 bg-[#FAF8F2] border border-[#E8E5DE] rounded-2xl space-y-4">
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                  APPOINTMENT INQUIRIES
                </span>
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Consult Dr. Mazhar Rafique
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Book a consultation via WhatsApp for {currentRoute?.pageName} at BNI Lahore.
                </p>

                <div className="space-y-2 pt-1">
                  {/* 1st Main CTA: WhatsApp Appointment */}
                  <a 
                    href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I am seeking an appointment for ${currentRoute?.pageName}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-3 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-xs shadow-md"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>WhatsApp Appointment</span>
                  </a>

                  {/* 2nd Main CTA: Call Appointment */}
                  <a 
                    href={businessConfig.callUrl}
                    className="w-full py-2.5 px-3 rounded-xl font-bold border border-[#E8E5DE] bg-white text-[#111111] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 text-xs text-center"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>

                  <Link 
                    to="/contact/"
                    className="text-[11px] font-semibold text-[#475569] hover:text-[#111111] underline block text-center pt-1"
                  >
                    View Clinic Location &amp; Directions &rarr;
                  </Link>
                </div>
              </div>

              {/* Clinic Location Details */}
              <div className="p-5 border border-[#E8E5DE] rounded-xl bg-white space-y-2 text-xs text-[#475569]">
                <strong className="text-sm font-bold text-[#111111] block">Clinic Facility</strong>
                <p>
                  <strong>{businessConfig.clinicName}</strong><br />
                  {businessConfig.fullAddress}
                </p>
                <div className="pt-1 text-[#BE8C1D] font-semibold">
                  Phone: {businessConfig.phone}
                </div>
              </div>

              {/* Parent Category Link */}
              {parentCategory && (
                <div className="p-4 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl text-xs">
                  <span className="text-[#475569] block mb-1">Part of Category:</span>
                  <Link 
                    to={parentCategory.canonicalPath}
                    className="font-bold text-[#111111] hover:text-[#936A12] flex items-center gap-1"
                  >
                    <span>{parentCategory.pageName}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA 
        heading={`Need Advice Regarding ${currentRoute?.pageName || "Your Joint Condition"}?`}
      />

    </div>
  );
};
