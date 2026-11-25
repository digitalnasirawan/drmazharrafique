import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ChevronRight, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';
import { VueComponentWrapper } from '../components/VueComponentWrapper';
import OspeQuizModule from '../vue-components/OspeQuizModule.vue';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const OspePrepPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/medical-education/" className="hover:text-[#111111]">Medical Education</Link>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>OSPE CLINICAL STATIONS</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              OSPE Preparation for Orthopaedic Surgery Exams
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Standardized Objective Structured Practical Examination (OSPE) stations, clinical examination rubrics, instruments viva spotters, and radiographic questions for FCPS &amp; MBBS examinees.
            </p>
          </div>
        </div>
      </section>

      {/* Main OSPE Module: Interactive Vue.js Station + Station Checklists */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            
            {/* Interactive Vue.js OSPE Module */}
            <div className="lg:col-span-8">
              <VueComponentWrapper component={OspeQuizModule} />
            </div>

            {/* Side Exam Checklists */}
            <div className="lg:col-span-4 space-y-5">
              <div className="p-5 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl space-y-3">
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                  EXAM PREPARATION GUIDE
                </span>
                <h3 className="text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  High-Yield Examination Stations
                </h3>
                <ul className="text-xs text-[#475569] space-y-2 list-disc list-inside">
                  <li><strong>Knee Joint:</strong> Lachman test, pivot shift, posterior sag, McMurray and Apley tests.</li>
                  <li><strong>Hip Joint:</strong> Trendelenburg sign, Thomas test for fixed flexion deformity, Galeazzi test.</li>
                  <li><strong>Shoulder:</strong> Neer &amp; Hawkins impingement, Empty Can (Jobe) test, Hornblower sign.</li>
                  <li><strong>Spine:</strong> Straight Leg Raise (SLR), femoral stretch, dermatome and reflex mapping.</li>
                  <li><strong>X-Ray Spotters:</strong> AO fracture classification, bone tumors (Codman triangle, sunburst).</li>
                </ul>
              </div>

              <div className="p-4 border border-[#E8E5DE] rounded-xl bg-white text-xs text-[#475569] space-y-2">
                <strong className="text-[#111111] block">Scoring Rubrics:</strong>
                <p>
                  Marks in FCPS OSPE are awarded for introduction, patient consent, systemic exposure, step-wise inspection, palpation, active/passive movements, and concise synthesis.
                </p>
              </div>
            </div>

          </div>

          {/* Core Viva Station Topics */}
          <div className="border-t border-[#E8E5DE] pt-10">
            <h2 className="text-xl font-bold text-[#111111] mb-6" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Common Viva Instrument &amp; Implant Spotters
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 border border-[#E8E5DE] rounded-lg bg-white">
                <strong className="text-sm font-bold text-[#111111] block mb-1">Dynamic Hip Screw (DHS)</strong>
                <p className="text-xs text-[#475569]">Indications: Stable intertrochanteric fractures, 135-degree barrel plate, lag screw tip-apex distance (TAD &lt; 25mm).</p>
              </div>

              <div className="p-4 border border-[#E8E5DE] rounded-lg bg-white">
                <strong className="text-sm font-bold text-[#111111] block mb-1">Intramedullary Interlocking Nail</strong>
                <p className="text-xs text-[#475569]">Indications: Diaphyseal tibial and femoral shaft fractures, load sharing, preserving fracture hematoma.</p>
              </div>

              <div className="p-4 border border-[#E8E5DE] rounded-lg bg-white">
                <strong className="text-sm font-bold text-[#111111] block mb-1">Smith &amp; Nephew Arthroscopy Tower</strong>
                <p className="text-xs text-[#475569]">Light source, 30-degree lens, motorized shaver, fluid pump pressure parameters, radiofrequency ablation wand.</p>
              </div>

              <div className="p-4 border border-[#E8E5DE] rounded-lg bg-white">
                <strong className="text-sm font-bold text-[#111111] block mb-1">External Fixator (AO Ex-Fix)</strong>
                <p className="text-xs text-[#475569]">Damage control orthopaedics in polytrauma, open Gustilo-Anderson Grade III fractures, Schanz pin placement.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Global Consultation CTA */}
      <ConsultationCTA 
        eyebrow="PATIENT CARE &amp; CLINICAL VISITS"
        heading="Need Expert Orthopaedic Consultation with Dr. Mazhar Rafique?"
        description="Patients seeking clinical assessment for knee, hip, shoulder, trauma, or sports injuries can schedule an appointment at BNI Lahore via WhatsApp or phone."
      />

    </div>
  );
};
