import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle, 
  Image, 
  Video, 
  FileText,
  HeartHandshake
} from 'lucide-react';
import { patientEducationDropdownData } from '../data/navigationConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const PatientEducationHubPage: React.FC = () => {
  const patientHubCards = [
    {
      id: 'P47',
      label: 'FAQs',
      path: '/faqs/',
      icon: HelpCircle,
      description: 'Direct answers to frequent questions regarding consultation booking, joint replacement procedures, recovery periods, and BNI clinic appointments in Lahore.'
    },
    {
      id: 'P48',
      label: 'Gallery',
      path: '/gallery/',
      icon: Image,
      description: 'Authentic clinical photo documentation of Dr. Mazhar Rafique in clinic, surgical theater procedures, patient interactions, and hospital facilities.'
    },
    {
      id: 'P49',
      label: 'Videos',
      path: '/videos/',
      icon: Video,
      description: 'Doctor-guided video explainers covering knee arthritis exercises, arthroscopic interventions, fracture healing principles, and joint preservation.'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PATIENT RESOURCES</span>
            </div>
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Patient Education &amp; Orthopaedic Awareness
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Clear, doctor-curated educational guides to help patients and families understand orthopaedic symptoms, treatment alternatives, surgical preparation, and recovery milestones.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Cards Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientHubCards.map((res) => {
              const IconComp = res.icon;
              return (
                <div 
                  key={res.id}
                  className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl p-6 hover:border-[#BE8C1D] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FAF8F2] border border-[#E8E5DE] flex items-center justify-center text-[#BE8C1D]">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h2 
                      className="text-xl font-bold text-[#111111]"
                      style={{ fontFamily: "'Maven Pro', sans-serif" }}
                    >
                      {res.label}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {res.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#FAF8F2]">
                    <Link 
                      to={res.path}
                      className="btn-secondary w-full text-center text-xs py-2.5 font-bold"
                    >
                      <span>Explore {res.label}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA 
        heading="Have Questions About Your Joint Symptoms?"
        description="Our patient guides provide foundational awareness. For personalized assessment and clinical diagnosis, contact our Lahore clinic desk."
      />

    </div>
  );
};
