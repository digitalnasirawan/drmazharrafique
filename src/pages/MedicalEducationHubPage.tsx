import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  ArrowRight, 
  Video, 
  FileCheck, 
  HelpCircle, 
  FileText, 
  BookOpen, 
  Award,
  CheckCircle2
} from 'lucide-react';
import { medicalEducationDropdownData } from '../data/navigationConfig';
import { businessConfig } from '../data/businessConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const MedicalEducationHubPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>ACADEMIC REPOSITORY</span>
            </div>
            
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Medical Education for Students &amp; Surgical Residents
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              A dedicated academic learning platform curated by Dr. Mazhar Rafique (MBBS, FCPS Orthopaedic Surgery) for medical students, FCPS trainees, and house officers in Pakistan.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#475569]">
              <span>Curated by:</span>
              <strong className="text-[#111111]">{businessConfig.doctorName}</strong>
              <span>&bull;</span>
              <span>FCPS Orthopaedic Trainee Resource</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trainee Learning Modules Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-[#E8E5DE] rounded-xl p-6 hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                  <Video className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Surgery Videos
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Operative video demonstrations, surgical steps, and high-definition keyhole arthroscopic surgical procedures.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#FAF8F2]">
                <Link to="/surgery-videos/" className="btn-secondary w-full text-center text-xs py-2">
                  <span>Watch Surgery Videos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#E8E5DE] rounded-xl p-6 hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  OSPE Preparation
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  High-yield clinical exam stations, physical examination checklists, and instrument identification viva prompts.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#FAF8F2]">
                <Link to="/ospe-preparation/" className="btn-secondary w-full text-center text-xs py-2">
                  <span>Access OSPE Stations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="bg-white border border-[#E8E5DE] rounded-xl p-6 hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Surgery MCQs
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Interactive single-best answer examination questions covering trauma classifications, arthroplasty, and pediatric orthopaedics.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#FAF8F2]">
                <Link to="/surgery-mcqs/" className="btn-secondary w-full text-center text-xs py-2">
                  <span>Practice MCQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Academic Teaching in Action */}
      <section className="section-padding bg-[#FAF8F2] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider block">
                BEDSIDE &amp; RADIOLOGICAL TRAINING
              </span>
              <h2 className="h2-title text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                Active Surgical Mentorship in Lahore
              </h2>
              <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                Orthopaedic training requires strong anatomical foundations, precise radiograph interpretation, and strict adherence to surgical indications. Trainees are encouraged to practice interactive OSPE stations, study intra-operative approaches, and master fracture classification systems.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link to="/ospe-preparation/" className="btn-primary text-xs py-2.5">
                  <span>Practice OSPE Stations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/surgery-mcqs/" className="btn-secondary text-xs py-2.5">
                  <span>Take MCQs Quiz</span>
                </Link>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E8E5DE] bg-white shadow-sm">
              <img 
                src="/images/doctor/dr-mazhar-teaching-xray.jpg" 
                alt="Dr. Mazhar Rafique holding up and teaching an X-ray to medical residents" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              <div className="p-3 text-xs text-[#475569]">
                Clinical interactive case discussions and radiograph reviews with surgical trainees.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Consultation CTA */}
      <ConsultationCTA 
        eyebrow="CLINICAL CONSULTATIONS IN LAHORE"
        heading="Seeking Clinical or Surgical Care from Dr. Mazhar Rafique?"
        description="Beyond medical education and academic mentorship, Dr. Mazhar Rafique provides patient consultations at BNI - Bashir NeuroSpine Institute in Shadman 1, Lahore."
      />

    </div>
  );
};
