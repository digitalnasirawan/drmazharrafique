import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Stethoscope 
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { getRouteByPath, getChildRoutes, routesRegistry } from '../data/routesRegistry';
import { servicesMegaMenuData } from '../data/navigationConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';

export const ServiceCategoryPage: React.FC = () => {
  const location = useLocation();
  const currentRoute = getRouteByPath(location.pathname);
  
  // Find category data from navigation config
  const categoryData = servicesMegaMenuData.find(c => c.categoryPath === currentRoute?.canonicalPath);
  const childTreatments = currentRoute ? getChildRoutes(currentRoute.pageId) : [];

  return (
    <div className="flex flex-col w-full">
      
      {/* Category Header */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>SERVICE CATEGORY</span>
            </div>
            
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              {currentRoute?.pageName || "Orthopaedic Specialty"}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {currentRoute?.shortDescription || categoryData?.description}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-[#475569]">
              <span>Lead Consultant:</span>
              <strong className="text-[#111111]">{businessConfig.doctorName}</strong>
              <span>&bull;</span>
              <span>{businessConfig.clinicName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Category Description & Child Treatments */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Treatments in this category */}
            <div className="lg:col-span-8 space-y-8 text-left">
              
              <div className="space-y-4">
                <h2 
                  className="h2-title text-[#111111]"
                  style={{ fontFamily: "'Maven Pro', sans-serif" }}
                >
                  Clinical Procedures &amp; Interventions
                </h2>
                <p className="text-base text-[#475569] leading-relaxed">
                  Under the clinical care of Dr. Mazhar Rafique, patients receive individualized assessments and surgical planning aligned with modern orthopaedic standards. Explore the specific procedures offered within this specialty below.
                </p>
              </div>

              {/* Child Treatments Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(categoryData?.items || []).map((subItem) => {
                  const subRoute = routesRegistry.find(r => r.canonicalPath === subItem.path);
                  return (
                    <div 
                      key={subItem.id}
                      className="p-5 border border-[#E8E5DE] rounded-xl bg-white hover:border-[#BE8C1D] hover:shadow-xs transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <h3 
                          className="text-base font-bold text-[#111111]"
                          style={{ fontFamily: "'Maven Pro', sans-serif" }}
                        >
                          {subItem.label}
                        </h3>
                        <p className="text-xs text-[#475569] leading-relaxed line-clamp-3">
                          {subRoute?.shortDescription || "Detailed surgical and clinical information regarding indications, operative procedure, and expected rehabilitation milestones."}
                        </p>
                      </div>

                      <div className="pt-4 mt-2 border-t border-[#FAF8F2]">
                        <Link 
                          to={subItem.path}
                          className="text-xs font-semibold text-[#BE8C1D] hover:underline flex items-center gap-1"
                        >
                          <span>Read Treatment Details</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Clinical Care Approach */}
              <div className="p-6 bg-[#FAF8F2] border border-[#E8E5DE] rounded-xl space-y-3">
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Our Clinical Assessment Process
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Every surgical candidate undergoes physical palpation, weight-bearing radiograph evaluation, and honest discussion of conservative non-surgical alternatives before surgical scheduling.
                </p>
              </div>

            </div>

            {/* Right Column: Quick Appointment Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-6 bg-[#FAF8F2] border border-[#E8E5DE] rounded-2xl space-y-4">
                <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                  CONSULTATION DESK
                </span>
                <h3 className="text-lg font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
                  Schedule an Evaluation
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  Book a consultation via WhatsApp for {currentRoute?.pageName} at BNI Lahore.
                </p>

                <div className="space-y-2 pt-1">
                  {/* 1st Main CTA: WhatsApp Appointment */}
                  <a 
                    href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I would like to schedule an evaluation for ${currentRoute?.pageName}.`)}
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
                    View Clinic Location &rarr;
                  </Link>
                </div>
              </div>

              {/* Related Categories Navigation */}
              <div className="p-5 border border-[#E8E5DE] rounded-xl bg-white space-y-3 text-xs">
                <strong className="text-sm font-bold text-[#111111] block">Other Service Categories:</strong>
                <ul className="space-y-2">
                  {servicesMegaMenuData
                    .filter(c => c.categoryPath !== currentRoute?.canonicalPath)
                    .slice(0, 5)
                    .map((cat) => (
                      <li key={cat.id}>
                        <Link 
                          to={cat.categoryPath}
                          className="text-[#475569] hover:text-[#111111] flex items-center justify-between"
                        >
                          <span>{cat.categoryName}</span>
                          <ArrowRight className="w-3 h-3 text-[#BE8C1D]" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global CTA */}
      <ConsultationCTA />

    </div>
  );
};
