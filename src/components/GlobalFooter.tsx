import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  Award
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { BrandLogo } from './common/BrandLogo';
import { WhatsAppIcon } from './common/WhatsAppIcon';

export const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#FFFFFF] border-t border-[#E8E5DE] text-[#111111]" aria-label="Site Footer">
      {/* Upper Main Footer Grid */}
      <div className="site-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* COLUMN 1: DOCTOR INFORMATION & BRANDING */}
          <div className="space-y-4">
            <BrandLogo variant="compact" />

            <p className="text-sm text-[#475569] leading-relaxed">
              Orthopaedic consultation and care in Lahore, with clinical interests in joint replacement, sports injuries, arthroscopy and trauma-related conditions.
            </p>

            {/* Qualifications highlights */}
            <div className="pt-1 flex items-start gap-2 text-xs text-[#475569]">
              <Award className="w-4 h-4 text-[#BE8C1D] shrink-0 mt-0.5" />
              <span>MBBS, FCPS (Orth), ATLS® Certified, Fellowship Arthroplasty</span>
            </div>

            {/* Social Media Row */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-[#111111] uppercase tracking-wider block mb-2.5">
                Verified Social Profiles
              </span>
              <div className="flex items-center gap-2">
                {/* Facebook */}
                <a 
                  href={businessConfig.socialLinks.facebookPage1}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-center justify-center text-[#111111] hover:text-[#BE8C1D] hover:border-[#BE8C1D] transition-colors"
                  aria-label="Dr. Mazhar Rafique on Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href={businessConfig.socialLinks.instagram}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-center justify-center text-[#111111] hover:text-[#BE8C1D] hover:border-[#BE8C1D] transition-colors"
                  aria-label="Dr. Mazhar Rafique on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a 
                  href={businessConfig.socialLinks.tiktok}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-9 h-9 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-center justify-center text-[#111111] hover:text-[#BE8C1D] hover:border-[#BE8C1D] transition-colors"
                  aria-label="Dr. Mazhar Rafique on TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.95-4.49V8.55a8.28 8.28 0 0 0 5.2 1.83V6.93a4.83 4.83 0 0 1-1.38-.24z"/>
                  </svg>
                </a>

                {/* oladoc */}
                <a 
                  href={businessConfig.socialLinks.oladoc}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 h-9 rounded-lg border border-[#E8E5DE] bg-[#FAF8F2] flex items-center justify-center text-xs font-semibold text-[#111111] hover:text-[#BE8C1D] hover:border-[#BE8C1D] transition-colors"
                  aria-label="Dr. Mazhar Rafique on oladoc verified doctor directory"
                >
                  oladoc
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="space-y-4">
            <h3 
              className="text-base font-bold text-[#111111] uppercase tracking-wider border-b border-[#FAF8F2] pb-2"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>About Doctor</span>
                </Link>
              </li>
              <li>
                <Link to="/services/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link to="/patient-education/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Patient Education</span>
                </Link>
              </li>
              <li>
                <Link to="/medical-education/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Medical Education</span>
                </Link>
              </li>
              <li>
                <Link to="/contact/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: FEATURED SERVICES (APPROVED LINKS) */}
          <div className="space-y-4">
            <h3 
              className="text-base font-bold text-[#111111] uppercase tracking-wider border-b border-[#FAF8F2] pb-2"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Orthopaedic Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/knee-replacement-surgery/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Knee Replacement Surgery</span>
                </Link>
              </li>
              <li>
                <Link to="/hip-replacement-surgery/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Hip Replacement Surgery</span>
                </Link>
              </li>
              <li>
                <Link to="/acl-reconstruction/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>ACL Reconstruction</span>
                </Link>
              </li>
              <li>
                <Link to="/shoulder-arthroscopy/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Shoulder Arthroscopy</span>
                </Link>
              </li>
              <li>
                <Link to="/fracture-treatment/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Fracture Treatment</span>
                </Link>
              </li>
              <li>
                <Link to="/sports-injury-treatment-lahore/" className="text-[#475569] hover:text-[#111111] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BE8C1D]" />
                  <span>Sports Injury Treatment</span>
                </Link>
              </li>
              <li className="pt-1">
                <Link to="/services/" className="text-xs font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1">
                  <span>View All 8 Categories &rarr;</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CLINIC & CONTACT */}
          <div className="space-y-4">
            <h3 
              className="text-base font-bold text-[#111111] uppercase tracking-wider border-b border-[#FAF8F2] pb-2"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Clinic &amp; Contact
            </h3>
            
            <div className="space-y-3 text-sm text-[#475569]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#BE8C1D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#111111] block">{businessConfig.clinicName}</strong>
                  <span>{businessConfig.fullAddress}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BE8C1D] shrink-0" />
                <a 
                  href={businessConfig.callUrl} 
                  className="font-bold text-[#111111] hover:text-[#936A12] text-base"
                >
                  {businessConfig.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp Primary + Call 2nd Buttons */}
            <div className="space-y-2 pt-2">
              <a 
                href={businessConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
                aria-label="WhatsApp Appointment with Dr. Mazhar Rafique Clinic"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>WhatsApp Appointment</span>
              </a>

              <a 
                href={businessConfig.callUrl}
                className="w-full py-2.5 text-center text-xs font-semibold text-[#111111] bg-[#FAF8F2] hover:bg-white border border-[#E8E5DE] rounded-xl flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>Call: {businessConfig.phone}</span>
              </a>

              <a 
                href={businessConfig.directionsUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2 text-center text-xs text-[#475569] hover:text-[#111111] flex items-center justify-center gap-1.5"
              >
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3 h-3 text-[#475569]" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Lower Footer Bottom Bar */}
      <div className="w-full bg-[#FAF8F2] border-t border-[#E8E5DE] py-4 text-xs text-[#475569]">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p>
              Copyright &copy; {currentYear} <a href="https://drmazharrafique.com/" className="font-semibold text-[#111111] hover:text-[#BE8C1D]">Dr. Mazhar Rafique</a>. All Rights Reserved. Design, Managed and Developed by <a href="https://digitalnasirawan.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#111111] hover:text-[#BE8C1D]">Digital Nasir Awan</a>.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy/" className="text-[#475569] hover:text-[#111111] hover:underline">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link to="/terms-and-conditions/" className="text-[#475569] hover:text-[#111111] hover:underline">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link to="/contact/" className="text-[#475569] hover:text-[#111111] hover:underline">
              Clinic Location
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
