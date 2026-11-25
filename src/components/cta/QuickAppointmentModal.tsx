import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  User,
  Activity
} from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface QuickAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuickAppointmentModal: React.FC<QuickAppointmentModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Knee Joint / Arthritis'
}) => {
  const [patientName, setPatientName] = useState('');
  const [selectedService, setSelectedService] = useState(defaultService);
  const [selectedTime, setSelectedTime] = useState('Evening Clinic (5:00 PM - 9:00 PM)');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const services = [
    'Knee Replacement / Severe Arthritis',
    'Hip Replacement / AVN Care',
    'ACL Reconstruction / Ligament Injury',
    'Arthroscopic Keyhole Surgery',
    'Bone Fracture & Trauma Care',
    'Shoulder Pain & Rotator Cuff',
    'Spine & Sciatic Pain Evaluation',
    'Second Opinion / General Joint Pain'
  ];

  const timeSlots = [
    'Evening Clinic (5:00 PM - 9:00 PM)',
    'Afternoon Consultation',
    'Urgent Same-Day Assessment',
    'Saturday Clinic Slot'
  ];

  const constructWhatsAppMessage = () => {
    let msg = `*Appointment Request - Dr. Mazhar Rafique Clinic*\n`;
    if (patientName.trim()) {
      msg += `*Patient Name:* ${patientName.trim()}\n`;
    }
    msg += `*Condition/Service:* ${selectedService}\n`;
    msg += `*Preferred Timing:* ${selectedTime}\n`;
    if (notes.trim()) {
      msg += `*Symptoms/Notes:* ${notes.trim()}\n`;
    }
    msg += `*Location:* BNI - Bashir NeuroSpine Institute, Lahore\n`;
    msg += `Please confirm the earliest available consultation slot. Thank you.`;
    return msg;
  };

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const url = businessConfig.getWhatsAppUrl(constructWhatsAppMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="appointment-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-[#E8E5DE] overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-6 py-5 bg-gradient-to-r from-[#FAF8F2] via-white to-[#FAF8F2] border-b border-[#E8E5DE] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#BE8C1D]/15 border border-[#BE8C1D]/30 flex items-center justify-center text-[#BE8C1D]">
              <WhatsAppIcon className="w-5 h-5 text-[#BE8C1D]" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#BE8C1D] block">
                Direct WhatsApp Scheduling
              </span>
              <h3 
                id="appointment-modal-title"
                className="text-lg font-bold text-[#111111]"
                style={{ fontFamily: "'Maven Pro', sans-serif" }}
              >
                Book with Dr. Mazhar Rafique
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full border border-[#E8E5DE] bg-white flex items-center justify-center text-[#475569] hover:text-[#111111] hover:bg-gray-100 transition-colors"
            aria-label="Close appointment modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleWhatsAppBooking} className="p-6 overflow-y-auto space-y-5 text-left">
          
          {/* Quick Doctor Info Pill */}
          <div className="p-3 bg-[#FAF8F2] rounded-xl border border-[#E8E5DE] flex items-center justify-between text-xs text-[#475569]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BE8C1D]" />
              <span><strong>BNI Lahore:</strong> 18 Jail Rd, Shadman 1</span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-[10px] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              WhatsApp Active
            </span>
          </div>

          {/* Patient Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
              Patient Full Name (Optional)
            </label>
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-[#475569]" />
              <input 
                type="text"
                placeholder="e.g. Muhammad Ali"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8E5DE] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#BE8C1D] focus:ring-1 focus:ring-[#BE8C1D]"
              />
            </div>
          </div>

          {/* Service / Condition Dropdown */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
              Consultation Reason / Specialty
            </label>
            <div className="relative">
              <Activity className="absolute left-3.5 top-3 w-4 h-4 text-[#BE8C1D]" />
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E8E5DE] bg-white text-sm text-[#111111] focus:outline-none focus:border-[#BE8C1D] focus:ring-1 focus:ring-[#BE8C1D] appearance-none"
              >
                {services.map((srv, idx) => (
                  <option key={idx} value={srv}>{srv}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Timing Preference */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
              Preferred Timing
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {timeSlots.map((slot, idx) => (
                <label 
                  key={idx}
                  className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 cursor-pointer transition-all ${
                    selectedTime === slot 
                      ? 'border-[#BE8C1D] bg-[#FAF8F2] text-[#111111] shadow-2xs font-semibold' 
                      : 'border-[#E8E5DE] text-[#475569] hover:border-gray-300'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="modalTiming" 
                    checked={selectedTime === slot}
                    onChange={() => setSelectedTime(slot)}
                    className="accent-[#BE8C1D]"
                  />
                  <span>{slot}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Short Clinical Notes */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#111111] mb-1.5">
              Brief Symptoms / Duration (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Severe knee stiffness for 6 months, already have X-ray report..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5DE] bg-white text-xs sm:text-sm text-[#111111] focus:outline-none focus:border-[#BE8C1D] focus:ring-1 focus:ring-[#BE8C1D]"
            />
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-[#BE8C1D] hover:bg-[#936A12] transition-colors flex items-center justify-center gap-2.5 shadow-md text-sm cursor-pointer"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Confirm WhatsApp Appointment</span>
            </button>

            <div className="flex items-center gap-2">
              <a 
                href={businessConfig.callUrl}
                className="w-full py-2.5 px-3 rounded-xl font-semibold text-xs border border-[#E8E5DE] bg-[#FAF8F2] hover:bg-white text-[#111111] transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-[#BE8C1D]" />
                <span>Call: {businessConfig.phone}</span>
              </a>
            </div>
          </div>

          <p className="text-[11px] text-[#475569] text-center">
            Clicking will open WhatsApp with your pre-filled inquiry. You can edit the text before sending.
          </p>

        </form>
      </div>
    </div>
  );
};
