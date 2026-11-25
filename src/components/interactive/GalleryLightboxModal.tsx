import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Phone, MapPin } from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

interface GalleryLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const GalleryLightboxModal: React.FC<GalleryLightboxModalProps> = ({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex
}) => {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelectIndex((currentIndex + 1) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length);
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onSelectIndex]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview Lightbox"
    >
      <div 
        className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="p-4 bg-[#111111] text-white flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider">
              {currentItem.category.toUpperCase()}
            </span>
            <span className="text-xs text-gray-400">&bull;</span>
            <span className="text-sm font-semibold text-white truncate max-w-xs sm:max-w-md">
              {currentItem.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Display with Nav Buttons */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px] max-h-[60vh] overflow-hidden">
          <img 
            src={currentItem.image} 
            alt={currentItem.title}
            className="w-full h-full object-contain max-h-[60vh]"
          />

          {/* Prev Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all cursor-pointer border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption & Dual CTA Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E5DE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
              {currentItem.caption}
            </p>
            <span className="text-[11px] text-[#475569] block flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#BE8C1D]" />
              BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={businessConfig.getWhatsAppUrl(`Hello Dr. Mazhar Rafique Clinic, I am inquiring regarding the surgical/clinical service shown in photo: "${currentItem.title}".`)}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 rounded-xl font-bold text-[#111111] bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center gap-2 text-xs shadow-md"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#111111]" />
              <span>Inquire on WhatsApp</span>
            </a>

            <a
              href={businessConfig.callUrl}
              className="py-2.5 px-3 rounded-xl font-semibold text-[#111111] bg-[#FAF8F2] hover:bg-white border border-[#E8E5DE] text-xs flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
