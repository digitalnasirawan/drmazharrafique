import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  CheckCircle2 
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';
import { servicesMegaMenuData } from '../data/navigationConfig';
import { ConsultationCTA } from '../components/cta/ConsultationCTA';

export const ServicesHubPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Header Banner */}
      <section className="bg-[#FAF8F2] border-b border-[#E8E5DE] py-10 lg:py-14">
        <div className="site-container">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E5DE] text-xs font-semibold text-[#BE8C1D] uppercase tracking-wider">
              <Activity className="w-3.5 h-3.5" />
              <span>CLINICAL DEPARTMENTS</span>
            </div>
            <h1 
              className="h1-title text-[#111111]"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              Orthopaedic Services &amp; Specialties
            </h1>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              Specialized clinical and surgical orthopaedic care delivered by Dr. Mazhar Rafique in Lahore. Browse all eight comprehensive service categories below.
            </p>
          </div>
        </div>
      </section>

      {/* 8 Categories Grid */}
      <section className="section-padding bg-[#FFFFFF] border-b border-[#E8E5DE]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {servicesMegaMenuData.map((category, index) => (
              <div 
                key={category.id}
                className="bg-[#FFFFFF] border border-[#E8E5DE] rounded-xl p-6 sm:p-8 hover:border-[#BE8C1D] hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">
                      Category 0{index + 1}
                    </span>
                    <span className="text-xs font-medium text-[#475569] bg-[#FAF8F2] px-2.5 py-1 rounded border border-[#E8E5DE]">
                      {category.items.length} Treatments
                    </span>
                  </div>

                  <h2 
                    className="text-xl sm:text-2xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Maven Pro', sans-serif" }}
                  >
                    {category.categoryName}
                  </h2>

                  <p className="text-sm text-[#475569] leading-relaxed">
                    {category.description}
                  </p>

                  <div className="pt-2 border-t border-[#FAF8F2]">
                    <span className="text-xs font-bold text-[#111111] uppercase tracking-wider block mb-2">
                      Treatments in this category:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {category.items.map((item) => (
                        <li key={item.id}>
                          <Link 
                            to={item.path} 
                            className="text-[#475569] hover:text-[#111111] hover:underline flex items-center gap-1.5"
                          >
                            <span className="text-[#BE8C1D] font-bold">&bull;</span>
                            <span>{item.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8E5DE]">
                  <Link 
                    to={category.categoryPath}
                    className="btn-secondary w-full text-center text-xs py-2.5"
                  >
                    <span>View Category Overview &rarr;</span>
                  </Link>
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
