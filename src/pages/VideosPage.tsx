import React from 'react';
import { Link } from 'react-router-dom';
import { Video, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const VideosPage: React.FC = () => {
  const patientVideos = [
    {
      id: 1,
      title: "How Knee Osteoarthritis Develops Over Time",
      desc: "An educational visual explainer detailing the loss of joint cartilage and modern options for joint preservation and replacement.",
      duration: "4 mins",
      thumbnail: "/images/doctor/dr-mazhar-rafique-surgery-knee.jpg"
    },
    {
      id: 2,
      title: "ACL Tear: Anatomy, Symptoms & Arthroscopic Surgery",
      desc: "Understanding how anterior cruciate ligament tears occur during sports and how arthroscopic reconstruction restores joint stability.",
      duration: "5 mins",
      thumbnail: "/images/doctor/dr-mazhar-arthroscopy.jpg"
    },
    {
      id: 3,
      title: "What to Expect on the Day of Joint Replacement Surgery",
      desc: "Walking patients through admission at BNI Lahore, anesthesia preparation, surgery duration, and early post-operative mobilization.",
      duration: "6 mins",
      thumbnail: "/images/doctor/dr-mazhar-consultation.jpg"
    },
    {
      id: 4,
      title: "Essential Home Exercises Following Knee Surgery",
      desc: "Guided demonstrations of gentle quadriceps sets, ankle pumps, and heel slides recommended during early rehabilitation.",
      duration: "4 mins",
      thumbnail: "/images/doctor/dr-mazhar-physical-exam.jpg"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <nav className="flex items-center gap-1.5 text-xs text-[#475569] mb-2">
              <Link to="/" className="hover:text-[#111111]">Home</Link>
              <ChevronRight className="w-3 h-3 text-[#BE8C1D]" />
              <Link to="/patient-education/" className="hover:text-[#111111]">Patient Education</Link>
            </nav>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Video className="w-3.5 h-3.5" />
              <span>PATIENT VIDEO LIBRARY</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Videos
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Visual explainers and educational walkthroughs to help patients and families clearly understand joint anatomy, surgical procedures, and home rehabilitation.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {patientVideos.map(vid => (
              <div 
                key={vid.id}
                className="bg-white border border-[#E8E5DE] rounded-xl overflow-hidden hover:border-[#BE8C1D] hover:shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-900 flex items-center justify-center">
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

                <div className="p-5 pt-0">
                  <div className="text-xs font-semibold text-[#BE8C1D] flex items-center gap-1">
                    <span>Clinical Video Explainer</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA />

    </div>
  );
};
