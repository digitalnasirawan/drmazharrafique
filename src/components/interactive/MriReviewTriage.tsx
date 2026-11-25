import React, { useState } from 'react';
import { 
  FileText, 
  Phone, 
  CheckCircle2, 
  UploadCloud, 
  ShieldCheck, 
  HelpCircle,
  ArrowRight,
  Activity,
  Layers
} from 'lucide-react';
import { businessConfig } from '../../data/businessConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

interface TriageOption {
  id: string;
  label: string;
  sublabel?: string;
}

export const MriReviewTriage: React.FC = () => {
  const [selectedJoint, setSelectedJoint] = useState<string>('knee');
  const [selectedScan, setSelectedScan] = useState<string>('mri');
  const [primaryGoal, setPrimaryGoal] = useState<string>('second_opinion');
  const [patientNote, setPatientNote] = useState<string>('');

  const joints: TriageOption[] = [
    { id: 'knee', label: 'Knee Joint', sublabel: 'Severe wear, ACL tear, meniscus damage' },
    { id: 'hip', label: 'Hip Joint', sublabel: 'Groin pain, AVN, hip osteoarthritis' },
    { id: 'shoulder', label: 'Shoulder', sublabel: 'Rotator cuff tear, frozen shoulder, instability' },
    { id: 'spine', label: 'Spine / Back', sublabel: 'Herniated disc, sciatica, postural pain' },
    { id: 'trauma', label: 'Bone Fracture', sublabel: 'Recent trauma, delayed healing, casting' }
  ];

  const scanTypes: TriageOption[] = [
    { id: 'mri', label: 'MRI Scan (Magnetic Resonance)', sublabel: 'Soft tissue, ligaments, cartilage, meniscus' },
    { id: 'xray', label: 'Weight-Bearing X-Rays', sublabel: 'Bone alignment, joint space narrowing' },
    { id: 'ct', label: 'CT Scan or Ultrasound', sublabel: '3D bone architecture or dynamic tendon review' },
    { id: 'none', label: 'No Scans Yet', sublabel: 'Require physical clinical exam & imaging prescription' }
  ];

  const goals: TriageOption[] = [
    { id: 'second_opinion', label: 'Seeking 2nd Opinion on Surgery', sublabel: 'Told I need joint replacement or arthroscopy' },
    { id: 'joint_replacement', label: 'Evaluate Joint Replacement', sublabel: 'Longstanding arthritis affecting daily walking' },
    { id: 'sports_injury', label: 'Sports Ligament / Cartilage Injury', sublabel: 'Twisting injury, knee giving way, inability to run' },
    { id: 'persistent_pain', label: 'Persistent Pain & Failed Meds', sublabel: 'Conservative therapies not giving relief' }
  ];

  const getJointLabel = (id: string) => joints.find(j => j.id === id)?.label || id;
  const getScanLabel = (id: string) => scanTypes.find(s => s.id === id)?.label || id;
  const getGoalLabel = (id: string) => goals.find(g => g.id === id)?.label || id;

  const constructMessage = () => {
    let msg = `*Dr. Mazhar Rafique Clinic - MRI / 2nd Opinion Triage*\n\n`;
    msg += `*1. Affected Joint:* ${getJointLabel(selectedJoint)}\n`;
    msg += `*2. Available Imaging:* ${getScanLabel(selectedScan)}\n`;
    msg += `*3. Consultation Goal:* ${getGoalLabel(primaryGoal)}\n`;
    if (patientNote.trim()) {
      msg += `*4. Patient Notes:* ${patientNote.trim()}\n`;
    }
    msg += `\n*Location:* BNI - Bashir NeuroSpine Institute, 18 Jail Rd, Shadman 1, Lahore\n`;
    msg += `I am ready to share my reports/scans for Dr. Mazhar Rafique's review and schedule a consultation slot.`;
    return msg;
  };

  const handleWhatsAppSend = () => {
    const url = businessConfig.getWhatsAppUrl(constructMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-3xl border border-[#E8E5DE] shadow-xl overflow-hidden">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] text-white p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BE8C1D]/20 border border-[#BE8C1D]/40 text-[#BE8C1D] text-xs font-bold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>DIGITAL ORTHOPAEDIC TRIAGE</span>
            </div>
            <h3 
              className="text-2xl sm:text-3xl font-bold text-white"
              style={{ fontFamily: "'Maven Pro', sans-serif" }}
            >
              MRI &amp; X-Ray Second Opinion on WhatsApp
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
              Have you been advised joint replacement or sports surgery? Select your joint and imaging status below to generate an organized triage summary and connect directly with Dr. Mazhar Rafique&apos;s clinic desk.
            </p>
          </div>

          <div className="shrink-0 hidden md:block">
            <div className="p-3.5 rounded-2xl bg-white/10 border border-white/20 text-center backdrop-blur-xs">
              <span className="text-[11px] text-gray-300 block uppercase tracking-wider font-semibold">Clinic Line</span>
              <span className="text-base font-bold text-[#BE8C1D] block mt-0.5">{businessConfig.phone}</span>
              <span className="text-[10px] text-emerald-400 font-medium mt-1 flex items-center justify-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                WhatsApp Active
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        
        {/* Step 1: Select Joint */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-black font-bold text-xs flex items-center justify-center">1</span>
            <label className="text-sm sm:text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              Select Affected Joint or Anatomical Region:
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {joints.map((j) => (
              <button
                key={j.id}
                type="button"
                onClick={() => setSelectedJoint(j.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedJoint === j.id
                    ? 'border-[#BE8C1D] bg-[#FAF8F2] shadow-sm ring-2 ring-[#BE8C1D]'
                    : 'border-[#E8E5DE] bg-white hover:border-[#BE8C1D]/60'
                }`}
              >
                <span className="block font-bold text-sm text-[#111111]">{j.label}</span>
                <span className="block text-[11px] text-[#475569] mt-0.5 line-clamp-1">{j.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Select Scan Type */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-black font-bold text-xs flex items-center justify-center">2</span>
            <label className="text-sm sm:text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What Diagnostic Imaging Do You Currently Have?
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {scanTypes.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedScan(s.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedScan === s.id
                    ? 'border-[#BE8C1D] bg-[#FAF8F2] shadow-sm ring-2 ring-[#BE8C1D]'
                    : 'border-[#E8E5DE] bg-white hover:border-[#BE8C1D]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#111111]">{s.label}</span>
                  {selectedScan === s.id && <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />}
                </div>
                <span className="block text-[11px] text-[#475569] leading-snug">{s.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Primary Consultation Goal */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[#BE8C1D] text-black font-bold text-xs flex items-center justify-center">3</span>
            <label className="text-sm sm:text-base font-bold text-[#111111]" style={{ fontFamily: "'Maven Pro', sans-serif" }}>
              What is Your Primary Clinical Question or Goal?
            </label>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {goals.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setPrimaryGoal(g.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  primaryGoal === g.id
                    ? 'border-[#BE8C1D] bg-[#FAF8F2] shadow-sm ring-2 ring-[#BE8C1D]'
                    : 'border-[#E8E5DE] bg-white hover:border-[#BE8C1D]/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-[#111111]">{g.label}</span>
                  {primaryGoal === g.id && <CheckCircle2 className="w-4 h-4 text-[#BE8C1D]" />}
                </div>
                <span className="block text-[11px] text-[#475569] leading-snug">{g.sublabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Optional Brief Symptoms Note */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-[#475569] uppercase tracking-wider block">
            Optional: Brief Note or Doctor&apos;s Advice You Received:
          </label>
          <input
            type="text"
            value={patientNote}
            onChange={(e) => setPatientNote(e.target.value)}
            placeholder="e.g. Advised knee arthroscopy 2 weeks ago; severe night pain; history of twist while playing football..."
            className="w-full px-4 py-3 rounded-xl border border-[#E8E5DE] bg-[#FAF8F2] focus:bg-white focus:border-[#BE8C1D] text-sm text-[#111111] outline-hidden transition-all"
          />
        </div>

        {/* Real-time Triage Summary & WhatsApp Primary Launch */}
        <div className="p-5 sm:p-6 bg-[#FAF8F2] rounded-2xl border border-[#BE8C1D]/30 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#BE8C1D] uppercase tracking-wider block">
                Generated Triage Summary:
              </span>
              <p className="text-sm font-semibold text-[#111111] mt-0.5">
                {getJointLabel(selectedJoint)} &bull; {getScanLabel(selectedScan)} &bull; {getGoalLabel(primaryGoal)}
              </p>
              <p className="text-xs text-[#475569] mt-1">
                Click below to launch WhatsApp. You can attach your X-ray or MRI photos directly in the WhatsApp chat.
              </p>
            </div>

            {/* DUAL ACTION BUTTONS: WHATSAPP PRIMARY + CALL 2ND */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="py-3.5 px-6 rounded-xl font-bold text-[#111111] bg-[#BE8C1D] hover:bg-[#936A12] transition-all flex items-center justify-center gap-2.5 shadow-md text-sm sm:text-base cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5 text-[#111111]" />
                <span>Send to WhatsApp</span>
              </button>

              <a
                href={businessConfig.callUrl}
                className="py-3.5 px-5 rounded-xl font-bold text-[#111111] bg-white hover:bg-[#FAF8F2] border border-[#BE8C1D] transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer shadow-2xs"
              >
                <Phone className="w-4 h-4 text-[#BE8C1D]" />
                <span>Call Clinic ({businessConfig.phone})</span>
              </a>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E8E5DE] flex flex-wrap items-center justify-between gap-3 text-xs text-[#475569]">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Doctor-patient medical confidentiality respected.</span>
            </span>
            <span>Consultations hosted at <strong>BNI Lahore</strong>, 18 Jail Rd, Shadman 1.</span>
          </div>
        </div>

      </div>

    </div>
  );
};
