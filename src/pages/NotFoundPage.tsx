import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowRight, Phone, AlertCircle } from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 bg-white text-center">
      <div className="site-container max-w-xl space-y-6">
        
        <div className="w-16 h-16 rounded-full bg-[#FAF8F2] border border-[#E8E5DE] text-[#BE8C1D] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-[#BE8C1D] block">
          ERROR 404
        </span>

        <h1 
          className="h1-title text-[#111111]"
          style={{ fontFamily: "'Maven Pro', sans-serif" }}
        >
          Page Not Found
        </h1>

        <p className="text-base text-[#475569] leading-relaxed">
          The requested page could not be located. It may have moved or is currently undergoing clinical content review. Please use the navigation links below to return to the website.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4 text-[#111111]" />
            <span>Return to Homepage</span>
          </Link>

          <Link to="/services/" className="btn-secondary">
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link to="/contact/" className="btn-secondary">
            <span>Contact Clinic</span>
          </Link>
        </div>

        <div className="pt-6 border-t border-[#E8E5DE] text-xs text-[#475569]">
          For urgent clinic appointments with Dr. Mazhar Rafique, call direct: <strong>{businessConfig.phone}</strong>
        </div>

      </div>
    </div>
  );
};
