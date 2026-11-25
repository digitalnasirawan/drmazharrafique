import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Image, ChevronRight, ShieldCheck, Activity, Award, Maximize2, Phone } from 'lucide-react';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';
import { GalleryLightboxModal, GalleryItem } from '../components/interactive/GalleryLightboxModal';
import { businessConfig } from '../data/businessConfig';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const GalleryPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'clinical' | 'surgery' | 'academic' | 'facility'>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Consultant Orthopaedic Office",
      category: "clinical",
      image: "/images/doctor/dr-mazhar-rafique-portrait.jpg",
      caption: "Dr. Mazhar Rafique in his clinical consultation office at BNI - Bashir NeuroSpine Institute, Lahore."
    },
    {
      id: 2,
      title: "Minimally Invasive Arthroscopy",
      category: "surgery",
      image: "/images/doctor/dr-mazhar-arthroscopy-tech.jpg",
      caption: "In the operating theater with advanced Smith & Nephew high-definition arthroscopic video camera tower."
    },
    {
      id: 3,
      title: "Bedside Clinical Consultation",
      category: "clinical",
      image: "/images/doctor/dr-mazhar-consultation.jpg",
      caption: "Reviewing patient case files, laboratory values, and diagnostic radiographs during clinical hours."
    },
    {
      id: 4,
      title: "Knee Joint Arthroplasty Procedure",
      category: "surgery",
      image: "/images/doctor/dr-mazhar-rafique-surgery-knee.jpg",
      caption: "Performing knee joint pulsed irrigation and anatomical joint surface reconstruction in operating theater."
    },
    {
      id: 5,
      title: "Resident Education & X-Ray Review",
      category: "academic",
      image: "/images/doctor/dr-mazhar-teaching-xray.jpg",
      caption: "Teaching radiographic evaluation, joint line analysis, and fracture classification to medical trainees."
    },
    {
      id: 6,
      title: "BNI - Bashir NeuroSpine Institute",
      category: "facility",
      image: "/images/doctor/bni-clinic-exterior.jpg",
      caption: "Exterior view of the clinical facility located at 18 Jail Road, Shadman 1, Lahore, Pakistan."
    },
    {
      id: 7,
      title: "Hands-on Physical Examination",
      category: "clinical",
      image: "/images/doctor/dr-mazhar-physical-exam.jpg",
      caption: "Evaluating joint alignment, ligament stability (Lachman / Pivot-Shift), and range-of-motion in clinic."
    },
    {
      id: 8,
      title: "Surgical Team Arthroscopy",
      category: "surgery",
      image: "/images/doctor/dr-mazhar-arthroscopy.jpg",
      caption: "Surgical team executing camera-guided joint debridement and ligament stabilization."
    },
    {
      id: 9,
      title: "Institutional Degrees & Credentials",
      category: "academic",
      image: "/images/doctor/dr-mazhar-credentials.jpg",
      caption: "Consultation suite displaying verified medical fellowships, FCPS certification, and surgical qualifications."
    },
    {
      id: 10,
      title: "Diagnostic Imaging Interpretation",
      category: "clinical",
      image: "/images/doctor/dr-mazhar-reviewing-xray.jpg",
      caption: "Careful diagnostic review of bone density, joint space narrowing, and trauma radiographs prior to planning."
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  const openLightbox = (indexInFiltered: number) => {
    const selectedItem = filteredItems[indexInFiltered];
    const originalIndex = galleryItems.findIndex(item => item.id === selectedItem.id);
    setCurrentIndex(originalIndex >= 0 ? originalIndex : 0);
    setLightboxOpen(true);
  };

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
              <Image className="w-3.5 h-3.5" />
              <span>AUTHENTIC PHOTOGRAPHIC DOCUMENTATION</span>
            </div>

            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Gallery &amp; Clinical Facilities
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Authentic photographic records of Dr. Mazhar Rafique in clinical practice, operating theater procedures, academic resident teaching, and the BNI Lahore facility.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filter & Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E8E5DE]">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'clinical', label: 'Clinical Practice' },
              { id: 'surgery', label: 'Operating Theatre & Surgery' },
              { id: 'academic', label: 'Academic & Teaching' },
              { id: 'facility', label: 'Clinic Facility' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#BE8C1D] text-[#111111] shadow-2xs font-bold'
                    : 'bg-[#FAF8F2] text-[#475569] border border-[#E8E5DE] hover:text-[#111111]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-2xl overflow-hidden shadow-2xs hover:shadow-xl hover:border-[#BE8C1D] transition-all flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2">
                      <Maximize2 className="w-6 h-6" />
                      <span className="text-xs font-bold uppercase tracking-wider">Click to Enlarge</span>
                    </div>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-1">
                    <h3 className="text-base font-bold text-[#111111] group-hover:text-[#936A12] transition-colors" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 flex items-center justify-between text-xs border-t border-[#FAF8F2] mt-2">
                  <span className="text-[11px] font-semibold text-[#BE8C1D] uppercase tracking-wider">
                    Verified Authentic
                  </span>
                  <span className="text-[11px] font-semibold text-[#BE8C1D] flex items-center gap-1">
                    <WhatsAppIcon className="w-3 h-3 text-[#BE8C1D]" />
                    <span>Inquire</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Fullscreen Lightbox Modal */}
      <GalleryLightboxModal 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={galleryItems}
        currentIndex={currentIndex}
        onSelectIndex={(idx) => setCurrentIndex(idx)}
      />

      {/* Global CTA */}
      <ConsultationCTA 
        eyebrow="SCHEDULE AN APPOINTMENT"
        heading="Consult Dr. Mazhar Rafique in Lahore"
        description="Book your orthopaedic consultation directly on WhatsApp (Primary) or call BNI reception."
      />

    </div>
  );
};
