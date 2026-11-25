import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight, 
  GraduationCap, 
  BookOpen, 
  Activity, 
  ArrowRight, 
  Search,
  MapPin,
  CalendarCheck,
  Phone
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { 
  servicesMegaMenuData, 
  medicalEducationDropdownData, 
  patientEducationDropdownData 
} from '../data/navigationConfig';
import { BrandLogo } from './common/BrandLogo';
import { WhatsAppIcon } from './common/WhatsAppIcon';
import { QuickAppointmentModal } from './cta/QuickAppointmentModal';
import { LiveSearchModal } from './interactive/LiveSearchModal';

export const GlobalHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [medicalEduOpen, setMedicalEduOpen] = useState(false);
  const [patientEduOpen, setPatientEduOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  // Mobile accordions state
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const [mobileMedOpen, setMobileMedOpen] = useState(false);
  const [mobilePatientOpen, setMobilePatientOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const medTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const patientTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setMedicalEduOpen(false);
    setPatientEduOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for search and Escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMedicalEduOpen(false);
        setPatientEduOpen(false);
        setMobileMenuOpen(false);
        setAppointmentModalOpen(false);
        setSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile drawer or modal is open
  useEffect(() => {
    if (mobileMenuOpen || appointmentModalOpen || searchModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, appointmentModalOpen, searchModalOpen]);

  const isPathActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isServicesActive = () => {
    if (location.pathname === '/services/') return true;
    return servicesMegaMenuData.some(cat => 
      location.pathname.startsWith(cat.categoryPath) ||
      cat.items.some(item => location.pathname === item.path)
    );
  };

  const isMedicalActive = () => {
    return medicalEducationDropdownData.some(item => location.pathname === item.path);
  };

  const isPatientActive = () => {
    return patientEducationDropdownData.some(item => location.pathname === item.path);
  };

  return (
    <>
      <header 
        className={`sticky top-0 z-40 w-full bg-white/98 backdrop-blur-md transition-all duration-200 border-b border-[#E8E5DE] ${
          isScrolled ? 'shadow-xs py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'
        }`}
      >
        <div className="site-container flex items-center justify-between gap-3 relative">
          
          {/* LEFT: DOCTOR BRANDING LOGO WITH ORTHOPEDIC EMBLEM */}
          <BrandLogo variant="header" />

          {/* CENTER: DESKTOP NAVIGATION */}
          <nav 
            className="hidden xl:flex items-center gap-1 text-[15px] font-medium" 
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-lg transition-colors relative ${
                location.pathname === '/' 
                  ? 'text-[#111111] font-bold after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-[#BE8C1D]' 
                  : 'text-[#111111] hover:text-[#936A12]'
              }`}
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              Home
            </Link>

            {/* 2. About */}
            <Link 
              to="/about/" 
              className={`px-3 py-2 rounded-lg transition-colors relative ${
                isPathActive('/about/') 
                  ? 'text-[#111111] font-bold after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-[#BE8C1D]' 
                  : 'text-[#111111] hover:text-[#936A12]'
              }`}
              aria-current={isPathActive('/about/') ? 'page' : undefined}
            >
              About
            </Link>

            {/* 3. Services (Mega Menu Trigger) */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                setServicesOpen(true);
                setMedicalEduOpen(false);
                setPatientEduOpen(false);
              }}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 250);
              }}
            >
              <div className="flex items-center">
                <Link 
                  to="/services/" 
                  className={`pl-3 pr-1 py-2 rounded-l-md transition-colors ${
                    isServicesActive() 
                      ? 'text-[#111111] font-bold' 
                      : 'text-[#111111] hover:text-[#936A12]'
                  }`}
                  aria-current={isServicesActive() ? 'page' : undefined}
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Services Mega Menu"
                  className="p-2 text-[#475569] hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-[#BE8C1D] rounded-r-md cursor-pointer"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                </button>
              </div>
            </div>

            {/* 4. Medical Education (Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (medTimeoutRef.current) clearTimeout(medTimeoutRef.current);
                setMedicalEduOpen(true);
                setServicesOpen(false);
                setPatientEduOpen(false);
              }}
              onMouseLeave={() => {
                medTimeoutRef.current = setTimeout(() => setMedicalEduOpen(false), 200);
              }}
            >
              <div className="flex items-center">
                <Link 
                  to="/medical-education/" 
                  className={`pl-3 pr-1 py-2 rounded-l-md transition-colors ${
                    isMedicalActive() 
                      ? 'text-[#111111] font-bold' 
                      : 'text-[#111111] hover:text-[#936A12]'
                  }`}
                  aria-current={isMedicalActive() ? 'page' : undefined}
                >
                  Medical Education
                </Link>
                <button
                  type="button"
                  onClick={() => setMedicalEduOpen(!medicalEduOpen)}
                  aria-expanded={medicalEduOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Medical Education Menu"
                  className="p-2 text-[#475569] hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-[#BE8C1D] rounded-r-md cursor-pointer"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${medicalEduOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                </button>
              </div>

              {medicalEduOpen && (
                <div 
                  className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8E5DE] p-2 z-50 animate-in fade-in zoom-in-98 duration-150"
                  role="region"
                  aria-label="Medical Education Resources"
                >
                  <div className="space-y-1">
                    {medicalEducationDropdownData.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'bg-[#FAF8F2] text-[#BE8C1D] font-bold border-l-2 border-[#BE8C1D]'
                            : 'text-[#475569] hover:bg-[#FAF8F2] hover:text-[#111111]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. Patient Education (Dropdown) */}
            <div 
              className="relative"
              onMouseEnter={() => {
                if (patientTimeoutRef.current) clearTimeout(patientTimeoutRef.current);
                setPatientEduOpen(true);
                setServicesOpen(false);
                setMedicalEduOpen(false);
              }}
              onMouseLeave={() => {
                patientTimeoutRef.current = setTimeout(() => setPatientEduOpen(false), 200);
              }}
            >
              <div className="flex items-center">
                <Link 
                  to="/patient-education/" 
                  className={`pl-3 pr-1 py-2 rounded-l-md transition-colors ${
                    isPatientActive() 
                      ? 'text-[#111111] font-bold' 
                      : 'text-[#111111] hover:text-[#936A12]'
                  }`}
                  aria-current={isPatientActive() ? 'page' : undefined}
                >
                  Patient Education
                </Link>
                <button
                  type="button"
                  onClick={() => setPatientEduOpen(!patientEduOpen)}
                  aria-expanded={patientEduOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Patient Education Menu"
                  className="p-2 text-[#475569] hover:text-[#111111] focus-visible:outline-2 focus-visible:outline-[#BE8C1D] rounded-r-md cursor-pointer"
                >
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${patientEduOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                </button>
              </div>

              {patientEduOpen && (
                <div 
                  className="absolute left-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E8E5DE] p-2 z-50 animate-in fade-in zoom-in-98 duration-150"
                  role="region"
                  aria-label="Patient Education Guides"
                >
                  <div className="space-y-1">
                    {patientEducationDropdownData.map((item) => (
                      <Link
                        key={item.id}
                        to={item.path}
                        className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                          location.pathname === item.path
                            ? 'bg-[#FAF8F2] text-[#BE8C1D] font-bold border-l-2 border-[#BE8C1D]'
                            : 'text-[#475569] hover:bg-[#FAF8F2] hover:text-[#111111]'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 6. Contact */}
            <Link 
              to="/contact/" 
              className={`px-3 py-2 rounded-lg transition-colors relative ${
                isPathActive('/contact/') 
                  ? 'text-[#111111] font-bold after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-[#BE8C1D]' 
                  : 'text-[#111111] hover:text-[#936A12]'
              }`}
              aria-current={isPathActive('/contact/') ? 'page' : undefined}
            >
              Contact
            </Link>
          </nav>

          {/* RIGHT: MAIN CTA (Book Appointment) & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* WHATSAPP CTA: BOOK APPOINTMENT (Desktop Only) */}
            <button
              type="button"
              onClick={() => setAppointmentModalOpen(true)}
              className="hidden xl:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-all text-xs lg:text-sm shadow-md hover:shadow-lg cursor-pointer"
              aria-label="Book Appointment with Dr. Mazhar Rafique"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-xl border border-[#E8E5DE] text-[#111111] hover:bg-[#FAF8F2] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* PROFESSIONAL FULL-WIDTH CONTAINER MEGA MENU (FIXED TO SCREEN BOUNDS) */}
        {servicesOpen && (
          <div 
            className="hidden xl:block absolute left-0 right-0 top-full w-full bg-transparent pt-1 z-50 animate-in fade-in zoom-in-98 duration-150"
            onMouseEnter={() => {
              if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 250);
            }}
          >
            <div className="site-container">
              <div className="w-full bg-white rounded-2xl shadow-2xl border border-[#E8E5DE] p-6 lg:p-7 overflow-hidden">
                
                {/* Mega Menu Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E8E5DE]">
                  <span className="text-xs font-bold text-[#111111] uppercase tracking-wider" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                    Orthopedic Services
                  </span>

                  <Link 
                    to="/services/" 
                    onClick={() => setServicesOpen(false)}
                    className="text-xs font-bold text-[#BE8C1D] hover:underline flex items-center gap-1 group py-1 px-2 rounded-lg hover:bg-[#FAF8F2]"
                  >
                    <span>View All Services Directory</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* 4-Column Responsive Grid Showing All 8 Service Categories */}
                <div className="grid grid-cols-4 gap-x-6 gap-y-5 max-h-[65vh] overflow-y-auto pr-1">
                  {servicesMegaMenuData.map((category) => (
                    <div key={category.id} className="space-y-2 group">
                      <Link 
                        to={category.categoryPath}
                        onClick={() => setServicesOpen(false)}
                        className="block text-sm font-bold text-[#111111] group-hover:text-[#936A12] border-b border-[#E8E5DE] pb-1.5 transition-colors"
                        style={{ fontFamily: "'Maven Pro', sans-serif" }}
                      >
                        <span className="text-[#BE8C1D] mr-1.5 font-bold">▪</span>
                        {category.categoryName}
                      </Link>

                      <ul className="space-y-1 pl-2 border-l-2 border-[#FAF8F2] group-hover:border-[#BE8C1D]/40 transition-colors">
                        {category.items.map((subItem) => (
                          <li key={subItem.id}>
                            <Link 
                              to={subItem.path}
                              onClick={() => setServicesOpen(false)}
                              className={`text-xs block py-0.5 leading-snug transition-colors ${
                                location.pathname === subItem.path
                                  ? 'text-[#BE8C1D] font-bold'
                                  : 'text-[#475569] hover:text-[#111111] hover:translate-x-0.5 transition-transform'
                              }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        )}
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 top-[60px] z-40 bg-white overflow-y-auto xl:hidden animate-in slide-in-from-top-2 duration-200 border-t border-[#E8E5DE]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div className="site-container py-5 space-y-4">
            {/* Navigation Links */}
            <nav className="divide-y divide-[#E8E5DE] border-y border-[#E8E5DE]">
              <Link 
                to="/" 
                className="block py-3 text-base font-bold text-[#111111]"
              >
                Home
              </Link>

              <Link 
                to="/about/" 
                className="block py-3 text-base font-bold text-[#111111]"
              >
                About Dr. Mazhar Rafique
              </Link>

              {/* Services Accordion */}
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <Link to="/services/" className="py-2 text-base font-bold text-[#111111]">
                    Services Overview
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2 text-[#475569]"
                    aria-expanded={mobileServicesOpen}
                    aria-label="Expand 8 Service Categories"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                </div>

                {mobileServicesOpen && (
                  <div className="pl-3 pr-1 py-2 space-y-3 bg-[#FAF8F2] rounded-xl mt-1 border border-[#E8E5DE]">
                    {servicesMegaMenuData.map((category) => (
                      <div key={category.id} className="border-b border-[#E8E5DE]/60 last:border-0 pb-2">
                        <div className="flex items-center justify-between">
                          <Link 
                            to={category.categoryPath}
                            className="text-xs font-bold text-[#111111]"
                          >
                            {category.categoryName}
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileCategoryOpen(mobileCategoryOpen === category.id ? null : category.id)}
                            className="p-1 text-xs text-[#BE8C1D]"
                            aria-label={`Toggle ${category.categoryName} sub-items`}
                          >
                            {mobileCategoryOpen === category.id ? '−' : '+'}
                          </button>
                        </div>

                        {mobileCategoryOpen === category.id && (
                          <ul className="mt-2 pl-3 space-y-1.5 border-l border-[#BE8C1D]/50 text-xs">
                            {category.items.map((subItem) => (
                              <li key={subItem.id}>
                                <Link 
                                  to={subItem.path}
                                  className="text-[#475569] hover:text-[#111111] block py-0.5"
                                >
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Medical Education Accordion */}
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <Link to="/medical-education/" className="py-2 text-base font-bold text-[#111111]">
                    Medical Education
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileMedOpen(!mobileMedOpen)}
                    className="p-2 text-[#475569]"
                    aria-expanded={mobileMedOpen}
                    aria-label="Expand Medical Education Links"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileMedOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                </div>

                {mobileMedOpen && (
                  <div className="pl-3 py-2 space-y-2 bg-[#FAF8F2] rounded-xl mt-1 border border-[#E8E5DE] text-xs">
                    {medicalEducationDropdownData.map((item) => (
                      <Link 
                        key={item.id}
                        to={item.path}
                        className="block py-1 text-[#475569] hover:text-[#111111]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Patient Education Accordion */}
              <div className="py-2">
                <div className="flex items-center justify-between">
                  <Link to="/patient-education/" className="py-2 text-base font-bold text-[#111111]">
                    Patient Education
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobilePatientOpen(!mobilePatientOpen)}
                    className="p-2 text-[#475569]"
                    aria-expanded={mobilePatientOpen}
                    aria-label="Expand Patient Education Links"
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobilePatientOpen ? 'rotate-180 text-[#BE8C1D]' : ''}`} />
                  </button>
                </div>

                {mobilePatientOpen && (
                  <div className="pl-3 py-2 space-y-2 bg-[#FAF8F2] rounded-xl mt-1 border border-[#E8E5DE] text-xs">
                    {patientEducationDropdownData.map((item) => (
                      <Link 
                        key={item.id}
                        to={item.path}
                        className="block py-1 text-[#475569] hover:text-[#111111]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/gallery/" 
                className="block py-3 text-base font-bold text-[#111111]"
              >
                Gallery &amp; Facilities
              </Link>

              <Link 
                to="/contact/" 
                className="block py-3 text-base font-bold text-[#111111]"
              >
                Contact &amp; Clinic Location
              </Link>
            </nav>

            {/* Mobile Drawer CTAs: Book Appointment, Call, and Clinic Map Profile Link */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAppointmentModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Book Appointment</span>
              </button>

              <div className="flex items-center gap-2">
                <a 
                  href={businessConfig.callUrl}
                  className="flex-1 py-2.5 px-4 rounded-xl font-bold border border-[#E8E5DE] bg-white hover:bg-[#FAF8F2] text-[#111111] transition-colors flex items-center justify-center gap-2 text-sm text-center shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#BE8C1D]" />
                  <span>Call</span>
                </a>

                <a
                  href={businessConfig.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-[#E8E5DE] bg-white hover:bg-[#FAF8F2] text-[#BE8C1D] flex items-center justify-center shrink-0 shadow-xs transition-colors"
                  aria-label="Clinic Map Profile Location"
                  title="Clinic Map Profile Location"
                >
                  <MapPin className="w-5 h-5 text-[#BE8C1D]" />
                </a>
              </div>
            </div>

            {/* Quick Contact Info in Mobile Drawer */}
            <div className="p-4 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] text-xs space-y-2 text-[#475569]">
              <strong className="text-sm font-bold text-[#111111] block">BNI - Bashir NeuroSpine Institute</strong>
              <p>18 Jail Rd, Shadman 1, Lahore, Pakistan</p>
              <div className="pt-1 flex items-center justify-between">
                <span>Phone Inquiry:</span>
                <a href={businessConfig.callUrl} className="font-bold text-[#111111] hover:underline">
                  {businessConfig.phone}
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Interactive Quick Appointment Modal */}
      <QuickAppointmentModal 
        isOpen={appointmentModalOpen} 
        onClose={() => setAppointmentModalOpen(false)} 
      />

      {/* Live Search Modal */}
      <LiveSearchModal 
        isOpen={searchModalOpen} 
        onClose={() => setSearchModalOpen(false)} 
      />

    </>
  );
};
