import React from 'react';
import { Link } from 'react-router-dom';
import { Video, ChevronRight, Play, GraduationCap } from 'lucide-react';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const SurgeryVideosPage: React.FC = () => {
  const surgicalVideos = [
    {
      id: 1,
      title: "Medial Parapatellar Approach for Total Knee Arthroplasty",
      desc: "Detailed demonstration of surgical approach, capsulotomy, eversion of patella, and balancing the flexion-extension gaps.",
      duration: "12 mins",
      thumbnail: "/images/doctor/dr-mazhar-rafique-surgery-knee.jpg"
    },
    {
      id: 2,
      title: "Anteromedial and Anterolateral Portals in Knee Arthroscopy",
      desc: "Safe portal placement avoiding infrapatellar nerve branches and establishing triangulation for meniscus debridement.",
      duration: "8 mins",
      thumbnail: "/images/doctor/dr-mazhar-arthroscopy.jpg"
    },
    {
      id: 3,
      title: "Open Reduction and Internal Fixation (ORIF) of Bimalleolar Ankle Fracture",
      desc: "Restoration of fibular length, syndesmotic testing, and lag screw fixation with neutralization plating.",
      duration: "15 mins",
      thumbnail: "/images/doctor/dr-mazhar-operating-theatre.jpg"
    },
    {
      id: 4,
      title: "Arthroscopic Subacromial Decompression & Rotator Cuff Inspection",
      desc: "Subacromial bursectomy, acromioplasty, and visualization of supraspinatus footprint tear margins.",
      duration: "10 mins",
      thumbnail: "/images/doctor/dr-mazhar-arthroscopy-tech.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-white border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/medical-education/" className="hover:text-[#111111]">Medical Education</Link>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>OPERATIVE VIDEO DEMONSTRATIONS</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Orthopaedic Surgery Videos &amp; Operative Steps
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Intra-operative surgical recordings detailing surgical anatomy, soft-tissue handling, implant orientation, and arthroscopic portal triangulation for surgical trainees.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {surgicalVideos.map(vid => (
              <div 
                key={vid.id}
                className="bg-white border border-[#E8E5DE] rounded-xl overflow-hidden hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-300"
                    />
                    <div className="absolute w-14 h-14 rounded-full bg-[#BE8C1D] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-1 fill-black" />
                    </div>
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-0.5 rounded font-mono">
                      {vid.duration}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h2 
                      className="text-lg font-bold text-[#111111] group-hover:text-[#936A12] transition-colors"
                      style={{ fontFamily: "'Maven Pro', sans-serif" }}
                    >
                      {vid.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                      {vid.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-xs font-semibold text-[#BE8C1D]">
                  Operative Teaching Module &rarr;
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Consultation CTA */}
      <ConsultationCTA 
        eyebrow="PATIENT CONSULTATIONS IN LAHORE"
        heading="Discuss Your Joint or Trauma Condition With Dr. Mazhar Rafique"
        description="Book a consultation at BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore. WhatsApp appointments or direct clinic phone call."
      />

    </div>
  );
};
