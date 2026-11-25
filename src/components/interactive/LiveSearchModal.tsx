import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, ChevronRight, Activity, BookOpen, GraduationCap } from 'lucide-react';
import { routesRegistry, type RouteItem } from '../../data/routesRegistry';

interface LiveSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveSearchModal: React.FC<LiveSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim().length > 1 
    ? routesRegistry.filter(r => 
        r.pageName.toLowerCase().includes(query.toLowerCase()) ||
        r.primaryKeyword.toLowerCase().includes(query.toLowerCase()) ||
        r.secondaryKeywords.some(k => k.toLowerCase().includes(query.toLowerCase())) ||
        (r.shortDescription && r.shortDescription.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 8)
    : [];

  const getGroupIcon = (group: string) => {
    switch (group) {
      case 'medical-education':
        return <GraduationCap className="w-4 h-4 text-[#BE8C1D]" />;
      case 'patient-education':
        return <BookOpen className="w-4 h-4 text-[#BE8C1D]" />;
      default:
        return <Activity className="w-4 h-4 text-[#BE8C1D]" />;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 md:p-20 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E8E5DE] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-[#E8E5DE] flex items-center gap-3 bg-[#FAF8F2]">
          <Search className="w-5 h-5 text-[#BE8C1D] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search symptoms, knee replacement, ACL, fracture, OSPE..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#111111] placeholder:text-gray-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-full text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold px-2 py-1 rounded bg-white border border-[#E8E5DE] text-[#475569] hover:text-[#111111]"
          >
            Esc
          </button>
        </div>

        {/* Results List */}
        <div className="p-3 max-h-[60vh] overflow-y-auto">
          {query.trim().length <= 1 ? (
            <div className="p-6 text-center text-xs text-[#475569] space-y-3">
              <span className="font-semibold block text-[#111111]">Popular Searches:</span>
              <div className="flex flex-wrap justify-center gap-2">
                {['Knee Replacement', 'ACL Reconstruction', 'Shoulder Arthroscopy', 'Fracture Care', 'OSPE Preparation'].map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-3 py-1 rounded-full bg-[#FAF8F2] border border-[#E8E5DE] hover:border-[#BE8C1D] text-xs font-medium text-[#111111]"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item) => (
                <Link
                  key={item.pageId}
                  to={item.canonicalPath}
                  onClick={onClose}
                  className="p-3 rounded-xl hover:bg-[#FAF8F2] border border-transparent hover:border-[#E8E5DE] transition-colors flex items-center justify-between group block text-left"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FAF8F2] group-hover:bg-white border border-[#E8E5DE] flex items-center justify-center shrink-0 mt-0.5">
                      {getGroupIcon(item.navigationGroup)}
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-[#111111] group-hover:text-[#936A12] block">
                        {item.pageName}
                      </strong>
                      <span className="text-xs text-[#475569] line-clamp-1">
                        {item.shortDescription || item.seoTitle}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#BE8C1D] group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-xs text-[#475569]">
              No exact match found for &ldquo;{query}&rdquo;. Try searching for general terms like &ldquo;Knee&rdquo;, &ldquo;Hip&rdquo;, &ldquo;Fracture&rdquo;, or &ldquo;Education&rdquo;.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#FAF8F2] border-t border-[#E8E5DE] text-[11px] text-[#475569] flex justify-between items-center">
          <span>Search across all 57 clinical &amp; educational routes</span>
          <span className="text-emerald-700 font-semibold">Dr. Mazhar Rafique Official Web Portal</span>
        </div>
      </div>
    </div>
  );
};
